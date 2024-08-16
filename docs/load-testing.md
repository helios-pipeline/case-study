<script setup>
import BenchmarkTable from './components/BenchmarkTable.vue'
</script>

# Load Testing

## How Much Load Can Our Single Node Handle?

Load testing can play a vital role in understanding the limits an architecture can handle. By simulating real-world usage scenarios, load testing helps identify performance bottlenecks, system limitations, and areas for optimization before they become critical issues in production environments.

We conducted basic load testing on Helios to evaluate its performance under high-volume conditions. Our testing methodology assesses both data ingestion capabilities and query performance under load, simulating a continuous data stream typical of web applications. Our end-to-end tests are designed to closely mirror the performance a Helios user would experience in the web app.

## Methodology

### Infrastructure Setup

EC2 Instance:

- Instance Type: c5.4xlarge
- vCPUs: 16
- Memory: 32 GB
- Storage: 500gb gp2

Lambda Configuration:

- Runtime: Python 3.12
- Memory: 1024 MB
- Timeout: 15 minutes
- Concurrency: 10 instances per shard
- Batch Size: 100
- Batch Window: 1 second

Kinesis Configuration:

- Streams: 1 stream
- Shards: 1 shard per stream

### Data Generation and Ingestion

To illustrate the real-world applicability of our load testing, let's revisit our e-commerce platform example from the introduction. In that scenario, an analytics team needed to quickly analyze user behavior data streamed through Amazon Kinesis.

We simulated data ingestion at a rate of 900 events per second for 30 seconds. This rate was chosen to represent a realistic high-volume scenario for a small to medium scale web application. We chose 900 because the max throughput for a Kinesis shard is 1000 requests per second. The Lambda function, triggered by Kinesis, processes these events by decoding them and then inserting them into ClickHouse.

This ingestion rate of 900 events per second closely mimics the high-volume data flow an e-commerce platform might experience during peak shopping hours, capturing events like page views, product interactions, and purchases.

### Dataset Description

Our query test dataset consists of 100 million rows and 107 columns of web traffic data, derived from production data. While this is a relatively low volume of data, it allows for quicker test iterations. While our test dataset is generic web traffic data, it shares many similarities with the e-commerce scenario we discussed earlier. For instance, the UserID column could represent unique shoppers, the URL could indicate product pages viewed, and the SearchPhrase could reflect product searches.

The queries we use for testing only include the following columns:

- UserID: Unique identifier for visitors
- AdvEngineID: Identifier for advertising engines or campaigns
- RegionID: Geographical region identifier
- ResolutionWidth: Screen width of the user's device
- URL: The webpage URL accessed
- SearchPhrase: Search terms used to reach the site
- (101 other columns are present but unused)

Note that we only have to access these 6 columns of a 107 column table for 5 different queries. This highlights the idea that analytical queries tend to only span a few columns or less at a time. These columns allow us to answer questions similar to those our hypothetical e-commerce analytics team might ask. For example, using UserID, URL, and SearchPhrase, we could analyze user journeys across product pages and search behaviors.

The dataset allows for analysis of user behavior, advertising effectiveness, regional performance, and search patterns. We obtained the dataset and selected 5 queries of increasing complexity from ClickBench\[link\], an open source benchmarking tool designed for testing the performance of databases using analytical queries.

### Measurement Method

We implemented a monitoring system that tracks:

- The number of records written to the Kinesis stream per second.
- The time difference between event generation, insertion into Kinesis, and availability for querying in ClickHouse.

## Load Testing Objectives

Our primary objectives for these tests were:

1. Maintain consistent ingestion rates and measure end-to-end latency from event generation to availability for querying, aiming to stay under 30 seconds for full event availability.
2. Evaluate end-to-end query response times under continuous high-volume data insertions _(particularly relevant to our e-commerce example as it simulates the ability to compute real-time metrics like conversion rates while the system continues to ingest new user events.)_
3. Identify potential bottlenecks in our data processing pipeline.

## Results

### Stream Ingestion and Latency

Latency Measurements: We conducted multiple tests, each processing 27,000 events over 30 seconds. Here are the end-to-end latency results:

- Test 1: 1.30 seconds
- Test 2: 1.30 seconds
- Test 3: 1.29 seconds

These latency measurements represent the end-to-end time from the last event generation to full availability for querying in ClickHouse, including:

- Kinesis stream ingestion of final events and Lambda processing time
- Data insertion into Clickhouse
- Time for the application server to query ClickHouse and return the count of all 27,000 rows and return the result

### Query Performance

Query performance tests were conducted on our table of 100 million rows while 900 rows per second were continuously inserted. Note that this is an end-to-end time, which includes request flight times to and from API, not just the query execution times. Each query was ran 5 times synchronously and the results are presented in the following table:

| Query                                                              | SQL                                                                                                                                                       | Avg Time (s) | Min Time (s) | Max Time (s) | Median Time (s) | Std Dev (s) |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------ | ------------ | --------------- | ----------- |
| How many hits were driven by advertising?                          | `SELECT COUNT(*) FROM hits WHERE AdvEngineID <> 0;`                                                                                                       | 0.15         | 0.13         | 0.18         | 0.15            | 0.02        |
| What's the total ad impact, hit count, and average screen width?   | `SELECT SUM(AdvEngineID), COUNT(*), AVG(ResolutionWidth) FROM hits;`                                                                                      | 0.16         | 0.14         | 0.18         | 0.16            | 0.02        |
| How many unique users visited the site?                            | `SELECT COUNT(DISTINCT UserID) FROM hits;`                                                                                                                | 0.53         | 0.51         | 0.55         | 0.52            | 0.02        |
| Which are the top 10 regions by unique user count?                 | `SELECT RegionID, COUNT(DISTINCT UserID) AS u FROM hits GROUP BY RegionID ORDER BY u DESC LIMIT 10;`                                                      | 0.74         | 0.72         | 0.75         | 0.74            | 0.01        |
| What are the top 10 search phrases leading to Google-related URLs? | `SELECT SearchPhrase, MIN(URL), COUNT(*) AS c FROM hits WHERE URL LIKE '%google%' AND SearchPhrase <> '' GROUP BY SearchPhrase ORDER BY c DESC LIMIT 10;` | 0.99         | 0.95         | 1.04         | 0.98            | 0.03        |

### Limitations and Interpretation of Results

Our current testing setup focuses on the ingestion of a single data stream with a relatively small single table dataset of 100 million rows. While derived from production data, this volume may not fully represent the scale of larger production environments. The ClickBench repo provides more detail on how to replicate the results as well as limitations of their dataset here\[link\]. Additionally, the Lambda functions were warmed up prior to testing to better simulate an already running stream. These factors should be considered when interpreting our results and planning future scaling efforts. In the future, we’d like to test higher ingestion rates, concurrent queries, and join queries.

Our end-to-end results demonstrate Helios' performance under real-world conditions. Data ingestion tests showed consistent low latency, with end-to-end processing times averaging around 1.30 seconds for 27,000 events over 30 seconds. This includes Kinesis ingestion, Lambda processing, ClickHouse insertion, and API flight times. Query performance tests on a c5.4xlarge instance (16 vCPUs, 32 GB RAM) showed efficient handling of various analytical tasks. Four queries, including operations like \`COUNT\`, \`SUM\`, \`AVG\`, and \`GROUP BY\` on distinct columns, completed in 0.15 to 0.74 seconds. The most complex query, combining \`LIKE\`, \`GROUP BY\`, and \`ORDER BY\` operations, averaged 0.99 seconds.

Notably, only the fifth query presented memory issues on a t2.large instance (2 vCPUs, 8 GB RAM). We hypothesize that the memory-intensive nature of grouping and sorting a large result set from the broad \`LIKE '%google%'\` condition exceeded the available RAM. Upgrading to the c5.4xlarge instance resolved this issue, highlighting the importance of proper resource allocation for complex analytical queries. These results demonstrate Helios' capability to handle high-volume data ingestion and complex queries efficiently, with the flexibility to scale resources for more demanding operations.

## Benchmarking

For comparison of our results against other analytical databases, we utilized the same open-source benchmarking suite. ClickHouse conducted open-source benchmarking tests comparing their database to several others. The evaluation used a dataset of 100 million rows and executed queries typical of ad-hoc analytics and real-time dashboards to assess each database's performance boundaries. As you can see, ClickHouse excelled in most of the queries used compared to other databases. For a comprehensive view of the benchmark results, you can refer to the full report at the [provided link](https://github.com/ClickHouse/ClickBench/?tab=readme-ov-file).

<BenchmarkTable />
