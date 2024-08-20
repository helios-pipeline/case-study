import{_ as r,e as o,f as l,g as e,N as t,m as a,u as c,c as n,o as d}from"./chunks/framework.CE9GIcbU.js";const h="/case-study/assets/full_storage_highlight.D5Oa0lfn.png",u="/case-study/assets/stream_efficiency.CiESwD7H.png",p="/case-study/assets/lambdakinesislimit.UF9Kqh4d.png",m="/case-study/assets/full_backup_highlight.nwGsteKG.png",f="/case-study/assets/dailycjob.DWwsvGXc.png",g="/case-study/assets/full_full_color.CAnyvm6j.png",L=JSON.parse('{"title":"Improving Core Platform","description":"","frontmatter":{},"headers":[],"relativePath":"improving-core-platform.md","filePath":"improving-core-platform.md"}'),b={name:"improving-core-platform.md"},y=n('<h1 id="improving-core-platform" tabindex="-1">Improving Core Platform <a class="header-anchor" href="#improving-core-platform" aria-label="Permalink to &quot;Improving Core Platform&quot;">​</a></h1><p>Below we detail the problems we encountered and the solutions we implemented to improve upon our core platform.</p><h2 id="quarantine-tables" tabindex="-1">Quarantine Tables <a class="header-anchor" href="#quarantine-tables" aria-label="Permalink to &quot;Quarantine Tables&quot;">​</a></h2><p><img src="'+h+'" alt="Quarantine Arch"></p><p>The initial version of Helios lacked error handling for failed database insertion of event records within the Lambda connector, potentially leading to data loss and difficult to parse error messages. To mitigate these issues and enhance system reliability, we implemented a comprehensive error handling and data quarantine system. Below, we outline the key features of this new system:</p>',5),_={class:"icon-list"},v=e("span",null,[e("strong",null,"Error Identification"),a(": The Lambda now includes logic to identify various types of errors, including schema mismatches and insertion failures.")],-1),w=e("span",null,[e("strong",null,"Error Categorization"),a(": Each error is then categorized by type and summarized with a concise abstract, providing clear insight into the nature of data quality issues.")],-1),T=e("span",null,[e("strong",null,"Data Preservation"),a(": The data that fails to insert into the main table is then stored in a separate quarantine table along with the error summary details. This ensures no data loss and allows users to quickly examine the exact records that failed to insert.")],-1),k=e("span",null,[e("strong",null,"AI Summary"),a(": For users who provide a ChatGPT AI key during deployment, we've integrated an AI-powered feature to enhance the error analysis process. This feature leverages a custom ChatGPT system prompt to summarize and interpret the errors stored in the quarantine table, significantly aiding users in their debugging efforts.")],-1),q=n('<p>[Image of quarantine table - needs css done first]</p><p>These enhancements collectively improve Helios’ error handling, while providing tools for error analysis and resolution.</p><h2 id="lambda-optimization" tabindex="-1">Lambda Optimization <a class="header-anchor" href="#lambda-optimization" aria-label="Permalink to &quot;Lambda Optimization&quot;">​</a></h2><p>To improve Helios&#39; performance and efficiency, we implemented several optimizations to the Lambda connector. These enhancements focus on data processing, concurrency, and resource utilization, aiming to increase throughput and reduce costs while maintaining real-time capabilities.</p><h3 id="batching-and-batch-window" tabindex="-1">Batching and Batch Window <a class="header-anchor" href="#batching-and-batch-window" aria-label="Permalink to &quot;Batching and Batch Window&quot;">​</a></h3><p>Our initial Connector function processed Kinesis records in small batches of 10. We optimized this by increasing the maximum batch size to 100 records and setting a batch window of one second.</p><p><img src="'+u+'" alt="Batch Size"></p><p>This change significantly reduces Lambda invocations, leading to less overhead and improved cost efficiency. Larger batches also enhance overall throughput and make better use of allocated resources. The one-second window ensures a balance between efficiency and near real-time processing, as records are sent when either the batch size is reached or the time window expires.</p><p>These optimizations improve system performance while reducing costs for users, all while maintaining Clickhouse&#39;s real-time update capabilities.</p><h3 id="parallelization" tabindex="-1">Parallelization <a class="header-anchor" href="#parallelization" aria-label="Permalink to &quot;Parallelization&quot;">​</a></h3>',10),C=n('<p><img src="'+p+'" alt="Parallelization"></p><h3 id="caching-dynamodb-requests" tabindex="-1">Caching DynamoDB requests <a class="header-anchor" href="#caching-dynamodb-requests" aria-label="Permalink to &quot;Caching DynamoDB requests&quot;">​</a></h3><p>Recall from earlier that Lambdas have to send a request to the DynamoDB to get the table UUID for the Clickhouse table destination. To reduce unnecessary DynamoDB calls for the Clickhouse table UUID, we moved the DynamoDB client initialization to the global scope of our Lambda function.</p><p>Our caching strategy ensures that subsequent invocations of the same Lambda instance will reuse the existing client and table UUID information. This approach reduces DynamoDB calls from executing for each record in the batch. For example, if the batch size is 100 records, 1 Dynamo request will be sent rather than 100 - since we already have our table UUID information cached. Additionally, further calls are not made if the same Lambda instance is invoked.</p><h2 id="database-backups" tabindex="-1">Database Backups <a class="header-anchor" href="#database-backups" aria-label="Permalink to &quot;Database Backups&quot;">​</a></h2><p><img src="'+m+'" alt="Database Arch"></p><p>In the first iteration of Helios, the ClickHouse database lacked backup capabilities. For instance, if the EC2 went down, our data would not be recoverable. Addressing this vulnerability was a critical improvement for version two.</p><p>As part of our backup strategy, we integrated an Amazon S3 (Simple Storage Service) bucket into our AWS-based architecture. This addition plays a crucial role in enhancing our data resilience and disaster recovery capabilities for our ClickHouse database running on an EC2 instance. The S3 bucket serves as a highly durable and scalable object storage solution, allowing us to implement daily backups of the ClickHouse database efficiently. By leveraging S3&#39;s virtually unlimited storage capacity and 99.999999999% (11 9&#39;s) of durability, we ensure that our critical data is preserved securely over the long term.</p><p>The backup cron job process is automated to run daily, capturing a full snapshot of the ClickHouse database and transferring it to the designated S3 bucket.</p><p><img src="'+f+'" alt="Daily Cron Job"></p><h2 id="export-to-csv" tabindex="-1">Export to CSV <a class="header-anchor" href="#export-to-csv" aria-label="Permalink to &quot;Export to CSV&quot;">​</a></h2><p>The underlying goal for developing Helios is to provide Amazon Kinesis customers with a simple, cost-effective way to analyze their streaming events. While our interactive SQL console serves as the core feature for this analysis, we recognize the need for users to easily extract, run further analysis and share their query results.</p><p>To address this, we implemented a feature allowing users to download the results of any SQL query as a CSV file. This functionality enables information sharing and integration with other tools in users&#39; data analysis workflows.</p><p>Future enhancements are planned to further expand the utility of query results for Helios users. These improvements will aim to provide even more flexibility in how users can leverage their SQL query results. Please refer to the <a href="./future-work">Future Work</a> section below for more details on upcoming features.</p><hr><p>To summarize our core platform improvements, we bolstered the platform with features including quarantine tables, Lambda optimizations, S3 backups, and CSV exports. These enhancements to Helios have improved our system resilience, error handling, and overall performance.</p><p>After the above improvements, our final architecture looks like this:</p><p><img src="'+g+'" alt="Full Arch"></p>',18);function x(z,S,D,P,A,I){const i=o("Icon"),s=o("TippyWrapper");return d(),l("div",null,[y,e("div",_,[e("p",null,[t(i,{name:"ExclamationCircleIcon"}),v]),e("p",null,[t(i,{name:"TagIcon"}),w]),e("p",null,[t(i,{name:"ArchiveBoxIcon"}),T]),e("p",null,[t(i,{name:"SparklesIcon"}),k])]),q,e("p",null,[a("Parallelization in the context of Lambdas means that multiple Lambda instances can be run at the same time. By default, the Lambda parallelization factor is set to 1. This means that only one Lambda instance can be a trigger for one Kinesis "),t(s,{content:"A shard is a unit of capacity within a Kinesis stream that provides a fixed amount of data throughput and serves as a partition for organizing events."},{default:c(()=>[a("shard")]),_:1}),a(". We adjusted this setting to 10, allowing up to ten Lambda instances to process data from a single Kinesis shard simultaneously. This significantly improves our ingestion capacity and scalability, increasing our system's ability to handle high-volume data streams quickly and efficiently.")]),C])}const V=r(b,[["render",x]]);export{L as __pageData,V as default};
