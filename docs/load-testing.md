<script setup>
import BenchmarkTable from './components/BenchmarkTable.vue'
</script>

# **Load Testing**

We conducted basic load testing on our ClickHouse instance to evaluate its performance under simulated high-volume conditions. Our testing methodology assesses both data ingestion capabilities and query performance under load, simulating a continuous data stream typical of web applications.

## **Methodology**

### **Infrastructure Setup**

**EC2 Instance:**

-   Instance Type: c5.4xlarge
-   vCPUs: 16
-   Memory: 32 GB
-   Storage: 500gb gp2

**Lambda Configuration:**

-   Runtime: Python 3.12
-   Memory: 1024 MB
-   Timeout: 15 minutes
-   Concurrency: 10 instances per shard
-   Batch Size: 100
-   Batch Window: 1 second

**Kinesis Configuration:**

-   Streams: 1 stream
-   Shards: 1 shard per stream

### **Data Generation and Ingestion**

We simulated data ingestion at a rate of 900 rows per second for 30 seconds. This rate was chosen to represent a realistic high-volume scenario for a small to medium scale web application. We chose 900 because the max throughput for a Kinesis shard is 1000 requests per second. The Lambda function, triggered by Kinesis, processes these events by decoding them and then inserting them into ClickHouse.

### **Dataset Description**

Our query test dataset consists of 100 million rows and 107 columns of web traffic data, derived from production data. While this is a relatively low volume of data, it allows for quicker test iterations. The queries we use for testing only includes the following columns:

-   UserID: Unique identifier for visitors
-   AdvEngineID: Identifier for advertising engines or campaigns
-   RegionID: Geographical region identifier
-   ResolutionWidth: Screen width of the user's device
-   URL: The webpage URL accessed
-   SearchPhrase: Search terms used to reach the site

Note that we only have to access these 6 columns of a 107 column table for 5 different queries. This highlights the idea that analytical queries tend to only span a few columns or less at a time. The dataset allows for analysis of user behavior, advertising effectiveness, regional performance, and search patterns. We obtained the dataset and selected 5 queries of increasing complexity from an open source benchmark\[link\] for analytical databases

### **Measurement Method**

We implemented a monitoring system that tracks:

-   The number of records written to the Kinesis stream per second.
-   The time difference between event generation, insertion into Kinesis, and availability for querying in ClickHouse.

## **Load Testing Objectives**

Our primary objectives for these tests were:

1. Maintain consistent ingestion rates and measure end-to-end latency from event generation to availability for querying, aiming to stay under 30 seconds for full event availibility.
2. Evaluate query response times under continuous high-volume data insertions.
3. Identify potential bottlenecks in our data processing pipeline.

## **Results**

### **Stream Ingestion and Latency**

Latency Measurements: We conducted multiple tests, each processing 27000 events over 30 seconds. Here are the end-to-end latency results:

-   Test 1: 1.30 seconds
-   Test 2: 1.30 seconds
-   Test 3: 1.29 seconds

These latency measurements represent the total time from the last event generation to full availability for querying in ClickHouse, including:

-   Time for the last batch of events to be processed by Kinesis and Lambda
-   Time for data ingestion into ClickHouse
-   Time for the API to query ClickHouse and return the count of all 27,000 rows.

### **Query Performance \[need to fix formatting\]**

Query performance tests were conducted on our table of 100 million rows while 900 rows per second were continuously inserted. Each query was ran 5 times synchronously and the results are presented in the following table:

| Query                                                              | SQL                                                                                                                                                       | Avg Time (s) | Min Time (s) | Max Time (s) | Median Time (s) | Std Dev (s) |
| ------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ | ------------ | ------------ | --------------- | ----------- |
| How many hits were driven by advertising?                          | `SELECT COUNT(*) FROM hits WHERE AdvEngineID <> 0;`                                                                                                       | 0.15         | 0.13         | 0.18         | 0.15            | 0.02        |
| What's the total ad impact, hit count, and average screen width?   | `SELECT SUM(AdvEngineID), COUNT(*), AVG(ResolutionWidth) FROM hits;`                                                                                      | 0.16         | 0.14         | 0.18         | 0.16            | 0.02        |
| How many unique users visited the site?                            | `SELECT COUNT(DISTINCT UserID) FROM hits;`                                                                                                                | 0.53         | 0.51         | 0.55         | 0.52            | 0.02        |
| Which are the top 10 regions by unique user count?                 | `SELECT RegionID, COUNT(DISTINCT UserID) AS u FROM hits GROUP BY RegionID ORDER BY u DESC LIMIT 10;`                                                      | 0.74         | 0.72         | 0.75         | 0.74            | 0.01        |
| What are the top 10 search phrases leading to Google-related URLs? | `SELECT SearchPhrase, MIN(URL), COUNT(*) AS c FROM hits WHERE URL LIKE '%google%' AND SearchPhrase <> '' GROUP BY SearchPhrase ORDER BY c DESC LIMIT 10;` | 0.99         | 0.95         | 1.04         | 0.98            | 0.03        |

##

## **Limitations and Considerations**

Our current testing setup focuses on the ingestion of a single data stream with a relatively small single table dataset of 100 million rows. While derived from production data, this volume may not fully represent the scale of larger production environments. The ClickBench repo provides more detail on replication of results and limitations of their dataset here\[link\]. The Lambda functions were warmed up prior to testing to better simulate an already running stream. These factors should be considered when interpreting our results and planning future scaling efforts. In the future, we’d like to test higher ingestion rates, concurrent queries, and join queries.

## **Benchmarking**

For comparison of our results against other analytical databases, we utilized an open-source benchmarking suite. \[Todo\]

Here's a comparison of various databases _(all running on AWS c6a.4xlarge, 500gb gp2 EC2 instances)_:

<BenchmarkTable />
