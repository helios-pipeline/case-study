import{_ as r}from"./chunks/cli_dropshadow.CnHJm-0V.js";import{_ as l,e as s,f as c,g as e,N as a,m as n,u as d,c as i,o as m}from"./chunks/framework.CE9GIcbU.js";const p="/case-study/assets/eventbroker.CGzUiw4n.png",h="/case-study/assets/blackbox.DaaLKg1o.png",u="/case-study/assets/tinybird_arch.C3J8I2tT.png",g="/case-study/assets/kinesis_to_helios.DXI1DJxu.png",f="/case-study/assets/webapp.D7dG4eWK.png",v="/case-study/assets/comparetableshadow.tJZU6OEw.png",ae=JSON.parse('{"title":"Introduction","description":"","frontmatter":{},"headers":[],"relativePath":"introduction.md","filePath":"introduction.md"}'),y={name:"introduction.md"},b=i('<h1 id="introduction" tabindex="-1">Introduction <a class="header-anchor" href="#introduction" aria-label="Permalink to &quot;Introduction&quot;">​</a></h1><p>Helios is an open-source platform designed to simplify the visualization and analysis of real-time event streams by exposing data for SQL querying. Our automated deployment process and intuitive interface allow teams to query and gain insights from their existing event streams.</p><p>In this case study, we will describe why we built Helios, the architecture and specific trade-offs made, technical challenges we encountered and improvements we made along the way.</p><h2 id="problem-domain" tabindex="-1">Problem Domain <a class="header-anchor" href="#problem-domain" aria-label="Permalink to &quot;Problem Domain&quot;">​</a></h2><p>In today&#39;s data-driven landscape, teams increasingly rely on real-time event streams to gain insights and drive decision-making. However, the sheer volume and velocity of these streams often present significant challenges for extracting meaningful information, including viewing raw event data, performing ad-hoc analysis, and debugging events in real-time. These difficulties are particularly pronounced when using popular event streaming platforms like Amazon Kinesis, which offer limited native tools for data exploration and analysis. To fully appreciate the context in which Helios operates and the problems it aims to solve, it&#39;s essential to first understand some fundamental concepts related to events and event streaming.</p><h3 id="fundamental-background" tabindex="-1">Fundamental Background <a class="header-anchor" href="#fundamental-background" aria-label="Permalink to &quot;Fundamental Background&quot;">​</a></h3><h4 id="events" tabindex="-1">Events <a class="header-anchor" href="#events" aria-label="Permalink to &quot;Events&quot;">​</a></h4><p>An <strong>event</strong> is a state change in a system or application. This could be as simple as a user clicking a button or as complex as a critical system update.</p><blockquote><p>“[An event is] a small, self-contained, immutable object containing the details of something that happened at some point in time … [it] might be an action that a user took, such as viewing a page or making a purchase. It might also originate from a machine, such as a periodic measurement from a temperature sensor, or a CPU utilization metric.” - DDIA</p></blockquote><h4 id="event-streaming" tabindex="-1">Event streaming <a class="header-anchor" href="#event-streaming" aria-label="Permalink to &quot;Event streaming&quot;">​</a></h4><p><img src="'+p+'" alt="Event Streaming"></p><p><strong>Event streaming</strong> is the continuous transmission and processing of events from various sources in real-time or near real-time. <strong>Real-time</strong> has different meanings depending on the context. For instance, in high-frequency trading, real-time might mean microseconds, whereas in social media analytics, it could mean within a few minutes. In this case study, we define real-time as end-to-end latency within 5 seconds from event consumption by Helios from a streaming platform to event data being available for querying. This definition is based on our load testing, which will be detailed later in this case study.</p><p>In event streaming architecture, events are generated by <strong>producers</strong>, for example a web application which produces user click events, and can be processed by multiple <strong>consumers</strong>. A consumer is an entity that receives and processes messages or events from one or more streams. <strong>Brokers</strong> are the intermediary that receives, stores and distributes events (e.g. queues).</p><h5 id="event-streaming-platforms" tabindex="-1">Event Streaming Platforms <a class="header-anchor" href="#event-streaming-platforms" aria-label="Permalink to &quot;Event Streaming Platforms&quot;">​</a></h5><p><strong>Event streaming platforms</strong> act like a broker in that they receive events from producers and can have multiple consumers. Popular event streaming platforms include Apache Kafka, Google Pub/Sub, and Amazon Kinesis.</p><p>The defining characteristics of event streaming are its real-time nature - where data is processed as it arrives rather than being stored for later analysis, its continuity - with data being constantly added to the stream, and its unboundedness - meaning the total size of the data is unknown and potentially infinite.</p><h5 id="event-streaming-use-cases" tabindex="-1">Event streaming use cases <a class="header-anchor" href="#event-streaming-use-cases" aria-label="Permalink to &quot;Event streaming use cases&quot;">​</a></h5><p>Event streaming serves a variety of functions, including:</p>',18),_={class:"icon-list"},w=i('<h3 id="event-streaming-platform-limitations" tabindex="-1">Event Streaming Platform Limitations <a class="header-anchor" href="#event-streaming-platform-limitations" aria-label="Permalink to &quot;Event Streaming Platform Limitations&quot;">​</a></h3><p>While event streaming platforms excel at ingesting and processing high-volume, real-time data, they present a significant challenge for data analysis and exploration: data accessibility. Event streaming platforms are optimized for throughput and real-time processing, not for ad-hoc querying or historical analysis. This makes it difficult for analysts to explore past data or perform complex analyses on the fly.</p><p><img src="'+h+'" alt="Black Box"></p><p>This limitation can significantly impact a team&#39;s ability to derive timely insights from their streaming data. To illustrate this challenge more concretely, let&#39;s consider a common use case in the e-commerce industry.</p><h4 id="example-user-analytics-in-e-commerce" tabindex="-1">Example: User Analytics in E-commerce <a class="header-anchor" href="#example-user-analytics-in-e-commerce" aria-label="Permalink to &quot;Example: User Analytics in E-commerce&quot;">​</a></h4><p>Imagine an e-commerce platform using Amazon Kinesis to stream user behavior data. The platform captures events such as page views, product interactions, and purchases in real-time. The analytics team might want to leverage this data to:</p>',6),T={class:"icon-list"},x=e("span",null,"Analyze user journeys across sessions",-1),k=e("span",null,"Compute real-time conversion rates",-1),I=e("span",null,"Detect anomalies in user behavior",-1),q=e("p",null,'However, they face a significant hurdle: data accessibility. While Kinesis efficiently handles the ingestion of these events, it does not provide an easy way for analysts to query this data using familiar tools like SQL. This means that even seemingly simple questions like "What are the top 5 products viewed in the last hour?" become challenging to answer quickly.',-1),A=e("p",null,"The team finds themselves constrained by the limitations of the platform, unable to easily explore the wealth of data at their fingertips. This scenario underscores the need for additional tools that can bridge the gap between the data ingestion capabilities of streaming platforms and the analytical needs of data teams.",-1),P=e("p",null,"Given these challenges with event streams, various platforms exist to improve event visibility and accessibility. Helios is one such tool, focused on enabling real-time exploration and analysis of Amazon Kinesis event streams.",-1),S=e("h3",{id:"third-party-managed-services",tabindex:"-1"},[n("Third-Party Managed Services "),e("a",{class:"header-anchor",href:"#third-party-managed-services","aria-label":'Permalink to "Third-Party Managed Services"'},"​")],-1),C=i('<p>For example, Tinybird is a data platform that allows users to explore real-time event streams using SQL and publish API endpoints of the query results to be consumed by user-facing analytics systems. Some of their most well-known customers include Canva and Vercel.</p><p>There are similar services including StarTree, which operates in the same space as Tinybird and serves customers including Stripe.</p><p><img src="'+u+'" alt="Tinybird"></p><p>Managed services offer quick setup and powerful features, but come with specific trade-offs.</p><p>The main trade-offs of using managed services like Tinybird are vendor lock-in, cost and data ownership. Vendor lock-in can make it difficult and expensive to switch to another provider or bring operations in-house. In terms of cost, while managed services often have higher upfront pricing, they can potentially reduce operational expenses by eliminating the need for in-house infrastructure management and specialized personnel. The total cost of ownership depends on factors such as scaling needs and existing resources. Regarding data ownership, using a managed service means entrusting data storage and management to a third party. This can raise concerns about data control, access, portability, and compliance, although many services offer security measures and options for increased data control.</p><p>For teams willing to navigate these trade-offs, managed services can often be a great option, providing scalability and specialized capabilities without the complexity of maintaining a custom infrastructure. If going the managed route, each service comes with its own set of considerations in terms of deployment complexity, underlying database, and integration capabilities.</p><h3 id="diy-infrastructure" tabindex="-1">DIY Infrastructure <a class="header-anchor" href="#diy-infrastructure" aria-label="Permalink to &quot;DIY Infrastructure&quot;">​</a></h3><p>Alternatively, teams opting for a do-it-yourself (DIY) solution would need to develop and maintain their own infrastructure and tooling, mirroring the capabilities offered by managed services such as Tinybird.</p><p>The DIY route offers maximum flexibility and control over your data and infrastructure. It allows for deep customization to meet specific needs and can potentially be more cost-effective at large scales. However, it requires in-house expertise in areas such as data engineering and infrastructure management. The initial setup time and ongoing maintenance efforts are also considerably higher compared to managed services.</p><h2 id="how-does-helios-compare" tabindex="-1">How does Helios compare? <a class="header-anchor" href="#how-does-helios-compare" aria-label="Permalink to &quot;How does Helios compare?&quot;">​</a></h2><p>Helios provides an alternative option in the landscape of event stream analytics solutions, <strong>particularly for users of Amazon Kinesis</strong>. Our platform aims to address some of the challenges associated with both third-party managed services and DIY approaches.</p><p>Helios strives to offer a practical solution for teams looking to analyze their Kinesis data without the full complexity of a DIY setup or the potential costs of third-party managed services.</p><p>Helios simplifies the process of exploring and analyzing Amazon Kinesis event data by offering a Kinesis integration, an intuitive SQL-based analysis interface, and automated AWS infrastructure deployment for the Helios application.</p><p>At its core, Helios is comprised of:</p>',14),H={class:"icon-list"},E=e("span",null,"Helios Amazon Kinesis Integration: Links existing Kinesis streams to the Helios infrastructure.",-1),z=e("p",null,[e("img",{src:g,alt:"Kinesis Connection"})],-1),D={class:"icon-list"},K=e("span",null,"Helios web application: offers an interface for connecting existing streams to the Helios backend infrastructure and an integrated SQL console querying and analyzing Kinesis event streams.",-1),L=e("p",null,[e("img",{src:f,alt:"Web app"})],-1),W={class:"icon-list"},V=e("span",null,"Helios CLI: configures Helios deployment with AWS credentials; deploys the entire Helios stack to AWS using a single command; and destroys the stack when needed. We will go into more detail within the Automating Deployment section.",-1),B=e("p",null,[e("img",{src:r,alt:"CLI"})],-1),N=e("p",null,"As with any tool, the suitability of Helios depends on each team's specific requirements, existing infrastructure, and resources. We encourage potential users to evaluate how our offering aligns with their particular needs and constraints.",-1),Y=e("h3",{id:"comparison-table",tabindex:"-1"},[n("Comparison Table "),e("a",{class:"header-anchor",href:"#comparison-table","aria-label":'Permalink to "Comparison Table"'},"​")],-1),U=e("p",null,"To summarize, teams have numerous options for viewing and analyzing events within Kinesis streams. There is no one-size-fits-all solution. The choices can be broadly categorized into three main options: DIY, paid 3rd-party services, and open-source solutions (including Helios).",-1),F=e("p",null,"Each option offers distinct advantages and limitations, making it crucial for teams to carefully evaluate their specific requirements before selecting the most suitable approach.",-1),Q=e("p",null,[e("img",{src:v,alt:"Comparison Table"})],-1),R=e("p",null,"Having explored the problem space and current solutions, we will now dive into Helios' internal workings. The upcoming section will break down our architecture, examining how each component functions in detail.",-1);function G(J,M,O,$,j,X){const t=s("Icon"),o=s("TippyWrapper");return m(),c("div",null,[b,e("div",_,[e("p",null,[a(t,{name:"ChartBarIcon"}),n(" User analytics - allowing organizations to gain immediate insights from data as it's generated")]),e("p",null,[a(t,{name:"DocumentTextIcon"}),n(" Log aggregation and monitoring - facilitating rapid identification of system issues and performance bottlenecks")]),e("p",null,[a(t,{name:"ShieldCheckIcon"}),n(" Security - powers fraud detection systems, enabling swift responses to suspicious activities")]),e("p",null,[a(t,{name:"CreditCardIcon"}),n(" Transaction processing - financial institutions leverage event streaming for processing transactions in real-time, ensuring up-to-the-second accuracy in account balances and trade executions")])]),w,e("div",T,[e("p",null,[a(t,{name:"ChartBarIcon"}),x]),e("p",null,[a(t,{name:"CalculatorIcon"}),k]),e("p",null,[a(t,{name:"ExclamationTriangleIcon"}),I])]),q,A,P,S,e("p",null,[n("There are a number of "),a(o,{content:"Managed service providers include: Tinybird, ClickHouse Cloud, StarTree, DoubleCloud, Altinity, & Imply"},{default:d(()=>[n("data analytics managed services")]),_:1}),n(" that help teams access their streaming data for analysis.")]),C,e("div",H,[e("p",null,[a(t,{name:"LinkIcon"}),E])]),z,e("div",D,[e("p",null,[a(t,{name:"WindowIcon"}),K])]),L,e("div",W,[e("p",null,[a(t,{name:"CommandLineIcon"}),V])]),B,N,Y,U,F,Q,R])}const te=l(y,[["render",G]]);export{ae as __pageData,te as default};
