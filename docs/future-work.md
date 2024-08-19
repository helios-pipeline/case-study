# Future Work

## API Endpoints

The introduction of API endpoints in Helios would significantly enhance user capabilities by allowing them to expose query results as accessible HTTP endpoints. Users can define those endpoints to accept parameters, execute preset queries, and return results in a standardized format. This would enable seamless integration of Helios data into other applications and services.

### Use Cases

1. Real-time Dashboards: Endpoints can be integrated with visualization tools like Grafana.
2. Data Integration: Other applications can easily incorporate Helios data into their workflows without having to use our console.

## Supporting Materialized Views

Materialized views allow users to shift the cost of computation from query time to insert time, resulting in faster SELECT queries. Supporting materialized views will help utilize the efficiency and real-time abilities of our ClickHouse database. Explaining ClickHouse’s version of materialized views is best done by ClickHouse themselves:

> “A ClickHouse materialized view is a trigger that runs a query on blocks of data as they are inserted into a table. The result of this query is inserted into a second "target" table …
>
> The principal motivation for materialized views is that the results inserted into the target table represent the results of an aggregation, filtering, or transformation on rows. These results will often be a smaller representation of the original data ….
>
> \[This\] ensures query times are faster than if the same computation was performed on the original data, shifting computation (and thus query latency) from query time to insert time.
>
> Materialized views in ClickHouse are updated in real-time as data flows into the table they are based on, functioning more like continually updating indexes. This is in contrast to other databases where materialized views are typically static snapshots of a query that must be refreshed”

## Additional data sources

Our initial release supports data ingestion solely through Amazon Kinesis. While this decision was strategic, given our limited resources and the synergy with our AWS-hosted infrastructure, we recognize that many companies use other streaming providers.

Future versions of Helios could expand support for additional streaming platforms. To address this, we've outlined an approach to expand our data ingestion capabilities:

- Apache Kafka Integration: As the industry leader, Kafka integration is our top priority. We'll approach this in two stages:
  - Amazon MSK Integration: We'll first support Amazon Managed Service for Apache Kafka, leveraging our existing Lambda function logic.
  - Direct Kafka Support: Following this, we'll re-architect our Lambda Connector function for direct Kafka integration.
- Additional Platforms: After Kafka, we would extend support to other popular streaming platforms, including:
  - Google Pub/Sub
  - Redpanda
  - Confluent _(a popular Kafka managed service)_

This expansion will require a number of changes to our current implementation. Our existing serverless function, which ingests data from Kinesis and inserts it into ClickHouse DB, relies on AWS Lambda Triggers.

By broadening our data source support, Helios will be accessible to a wider range of companies, regardless of their preferred streaming platform.
