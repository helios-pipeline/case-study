<template>
  <div class="cursor-element">
      <div class="cursor-glow"></div>
      <span></span>
  </div>
  <div class="star-animation-container">
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <div class="body">
      <header>
          <div class="logo">Helios</div>
          <nav>
              <ul>
                  <li><a href="/introduction">Case Study</a></li>
                  <li><a href="https://github.com/helios-pipeline/deploy">GitHub</a></li>
              </ul>
          </nav>
      </header>
      <main>
        <section class="hero">
          <h1>Helios</h1>
          <p>
            Helios is an open-source platform designed to simplify the
            visualization and analysis of real-time event streams by exposing data
            for SQL querying
          </p>
          <button>Try Helios</button>
        </section>
        <section class="content-section">
          <img class="box image sqlconsole" src="./sqlconsole.png">
        </img>
          <div class="content">
            <h2>Real-time SQL querying</h2>
            <p>Run SQL queries directly on your ingested data in real-time</p>
          </div>
        </section>
        <section class="content-section kinesis">
          <img class="box image kinesis-img" src="./Group 633044.png">
          <div class="content">
            <h2>Built-in Amazon Kinesis Integration</h2>
            <p>Link your existing Kinesis streams to the Helios infrastructure</p>
          </div>
        </section>
        <section class="content-section cli">
          <img class="box image" src="./Group 633047.png">
          </img>
          <div class="content">
            <h2>Automated Deployment</h2>
            <p>Helios CLI configures Helios deployment with AWS credentials, deploys the entire Helios stack to AWS using a single command, and destroys the stack when needed.</p>
          </div>
        </section>
        <section class="additional-features">
          <h2>And more flavorfully flavored flavors from flavortown...🏘️</h2>
          <div class="features-container">
            <div><img class="box image image-card" src="./quarantinetable.png"></div>
            <div><img class="box image image-card" src="./ai_error.png"></div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>