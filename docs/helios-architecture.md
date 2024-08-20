# Helios Architecture

To meet the requirements of Amazon Kinesis users looking to explore and analyze their event streams, Helios is built around three key components:

<div class="icon-list">
<p><Icon name="CircleStackIcon" /><span><strong>Storage</strong> - A database optimized for querying streaming data, specifically an Online Analytical Processing (OLAP) database capable of handling high-volume, real-time data ingestion, and delivering fast query performance for analytical workloads.</span></p>
<p><Icon name="LinkIcon" /><span><strong>Connection</strong> - An ingestion mechanism to efficiently transfer events from Kinesis streams into our chosen database.</span></p>
<p><Icon name="WindowIcon" /><span><strong>Interface</strong> - A user-friendly graphical interface allowing users to conduct analyses and visualize results.</span></p>
</div>

![Core Arch](public/case_study/core_full_color.png)

Given that potential Helios users are already leveraging Amazon Kinesis, it made sense to host all of Helios' infrastructure within the AWS ecosystem.

In the following section, we will dive into the specific services we chose, explaining how each component contributes to Helios' functionality and performance.

Our design decisions and their associated tradeoffs will be explored in the “Building Helios: Design Choices” section of the case study, while this section is focused on how we architected Helios.

## Storage

Tying back to our example use case of e-commerce user analytics, we required a database optimized for analytical queries. A typical analytical query might ask, "What is the average order value for customers who used a discount code in the past hour?" Such queries demand specific capabilities from our database.

As defined in "Designing Data-Intensive Applications" (DDIA), analytical queries typically scan millions of records, reading only a few columns per record, and calculate aggregate statistics rather than returning raw data. This definition guided our approach to storage architecture.

Databases typically fall into two categories: **Online Analytical Processing (OLAP)** and **Online Transaction Processing (OLTP)**, each optimized for distinct use cases. **OLAP** systems, primarily used for analytics, are designed to process millions of records per query. In contrast, **OLTP** systems typically process small numbers of records per query using keys and indexes for quick data retrieval. The fundamental difference lies in their access patterns: OLTP prioritizes small-scale transactions, while OLAP focuses on large-scale data analysis.

Ultimately, we chose ClickHouse as our OLAP database to power Helios' analytical capabilities. [Later](./building-helios.md#choosing-a-database) in this case study, we will provide a detailed exploration of our database selection process, including the factors that influenced our decision.

The following diagram illustrates our storage architecture:

### ClickHouse Database Server

![Clickhouse Arch](public/case_study/core_clickhouse_highlight.png)

The main functions of the ClickHouse database are to store event data consumed from Kinesis streams and to make this data available for querying. The database is deployed on an Amazon EC2 instance (i.e. virtual server).

With storage in place, the next phase of our architecture design was to implement an integration between a user’s Amazon Kinesis streams and the ClickHouse instance.

## Connection

![Connection Arch](public/case_study/core_connector_highlight.png)

Efficiently transferring events from Kinesis streams to our ClickHouse database presented a challenge. We needed a solution that could handle high-volume data ingestion, perform necessary decoding, and ensure reliable delivery.

To address this, we developed a custom AWS Lambda function as our stream processor. This approach allows us to:

<div class="icon-list">
<p><Icon name="DocumentMagnifyingGlassIcon" /><span>Decode and parse Kinesis event data</span></p>

<p><Icon name="ExclamationTriangleIcon" /><span> Implement custom error handling</span></p>
<p><Icon name="TableCellsIcon" /><span> Dynamically map data to appropriate ClickHouse tables</span></p>
<p><Icon name="ArrowDownOnSquareIcon" /><span> Perform efficient inserts</span></p>
</div>

By leveraging Lambda, we created a flexible and scalable solution tailored to our specific data processing needs. Let's explore how this custom processor works in detail.

###

### Kinesis to ClickHouse Integration

Helios’ Lambda Processor is an AWS serverless function that serves as a connector between Amazon Kinesis event streams and ClickHouse tables. The Lambda’s main roles are to decode the events from the Kinesis stream and insert them into the ClickHouse database. The full process involves retrieving table information, preparing data for batch insertion, and attempting to insert the data into ClickHouse.

Using an event-based trigger, the function ingests <TippyWrapper content="In Amazon Kinesis, this is formally called a 'record'. However, for consistency and clarity in our discussion, we will continue to refer to it as an 'event' throughout this case study.">event data</TippyWrapper> from AWS Kinesis streams, and decodes the Kinesis event payload into a JSON object.

![Kinesis Integration 1](public/case_study/kinesis_integration1.png)

![Kinesis Integration 2](public/case_study/kinesis_integration2.png)

Once the Lambda decodes the payload from a stream, the data needs to be sent to the associated destination table within Clickhouse. To retrieve the table ID, the Lambda interacts with a key-value database, DynamoDB, which contains a mapping of stream IDs to table IDs.

In the DynamoDB table we associate one AWS Kinesis stream to one Clickhouse table. This not only eliminates potential schema errors when ingesting data from multiple streams, but also prevents human error if users try to connect multiple streams to one table.

While the storage and connection components form the backbone of Helios, the analysis layer serves as the user-facing interface, bridging the gap between raw data and actionable insights.

## Interface

### Application Server

![App Server](public/case_study/core_client_server_highlight.png)

The Helios web application, hosted on an Amazon EC2 instance, serves as the primary interface for users. Implemented with a Flask backend and a React frontend, its core features include:

<div class="icon-list">
<p><Icon name="CommandLineIcon" /><span>An interactive SQL console for querying data from event streams, enabling real-time data analysis</span></p>
<p><Icon name="LinkIcon" /><span>An interface for connecting a data source, such as a Kinesis stream, to the Helios architecture</span></p>
</div>

Now that you have a good understanding of how Helios works, in the next section we will cover why we designed it in this way as well as the trade-offs made throughout the building of Helios. Here is our architecture so far:
![Core Arch](public/case_study/core_full_color.png)
