<script>
import '../styles/stars.scss'
import '../styles/cursor.css'

export default {
  name: 'HeliosLanding',
  data() {
    return {
      mouseX: 0,
      mouseY: 0,
      cursorX: 0,
      cursorY: 0,
      isOverActiveArea: false,
      hideTimeout: null
    }
  },
  mounted() {
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseenter', this.handleMouseEnter, true);
    document.addEventListener('mouseleave', this.handleMouseLeave, true);
    this.animateCursor();
  },
  beforeUnmount() {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseenter', this.handleMouseEnter, true);
    document.removeEventListener('mouseleave', this.handleMouseLeave, true);
    cancelAnimationFrame(this.animationFrame);
    clearTimeout(this.hideTimeout);
  },
  methods: {
    handleMouseMove(e) {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;
      if (this.isOverActiveArea) {
        this.showCursor();
      }
    },
    handleMouseEnter(e) {
      if (e && e.target && typeof e.target.matches === 'function' && e.target.matches('header, main')) {
        this.isOverActiveArea = true;
        this.showCursor();
      }
    },
    handleMouseLeave(e) {
      if (e && e.target && typeof e.target.matches === 'function' && e.target.matches('header, main')) {
        this.isOverActiveArea = false;
        this.hideCursor();
      }
    },
    animateCursor() {
      const easing = 0.15;
      this.cursorX += (this.mouseX - this.cursorX) * easing;
      this.cursorY += (this.mouseY - this.cursorY) * easing;
      const cursorElement = document.querySelector(".cursor-element");
      if (cursorElement) {
        cursorElement.style.transform = `translate(${this.cursorX}px, ${this.cursorY}px)`;
      }
      this.animationFrame = requestAnimationFrame(this.animateCursor);
    },
    showCursor() {
      const cursorGlow = document.querySelector(".cursor-glow");
      cursorGlow?.classList.add("active");
      clearTimeout(this.hideTimeout);
      this.hideTimeout = setTimeout(() => {
        if (this.isOverActiveArea) {
          cursorGlow?.classList.remove("active");
        }
      }, 2000);
    },
    hideCursor() {
      const cursorGlow = document.querySelector(".cursor-glow");
      cursorGlow?.classList.remove("active");
      clearTimeout(this.hideTimeout);
    }
  }
}
</script>

<template>
  <div class="cursor-element">
      <div class="cursor-glow"></div>
      <span></span>
  </div>
  <div class="star-animation-container">
    <div class="bar"></div>
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <div class="body">
      <header>
        <!-- <div class="logo">Helios</div> -->
        <img class="logo" src="/home/helios_icon_white.png">
        <nav>
          <ul>
            <li><a href="/case-study/about-us">Team</a></li>
            <li><a href="/case-study/introduction">Case Study</a></li>
            <li><a href="https://github.com/helios-pipeline/deploy"><img src="/home/github-icon.png" /></a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section class="hero">
          <h1>Helios</h1>
          <p>
            An open-source, real-time query platform for visualizing and analyzing event streams.
          </p>
          <button><a href="/introduction">View Case Study</a></button>
        </section>
        <section class="content-section">
          <img class="box image sqlconsole" src="/home/sqlconsole.png">
        </img>
          <div class="content">
            <h2>Real-time SQL querying</h2>
            <p>Run SQL queries directly on your ingested data in real-time.</p>
          </div>
        </section>
        <section class="content-section kinesis">
          <img class="box image kinesis-img" src="/home/kinesis.png">
          <div class="content">
            <h2>Built-in Amazon Kinesis Integration</h2>
            <p>Link your existing Kinesis streams to the Helios infrastructure.</p>
          </div>
        </section>
        <section class="content-section cli">
          <div class="video-container">
            <video class="video" width="500" height="500" autoplay loop muted>
              <source src="/home/helios-cli.mp4" type="video/mp4">
            </video>
          </div>
          <div class="content">
            <h2>Automated Deployment</h2>
            <p>Helios CLI configures Helios deployment with AWS credentials, deploys the entire Helios stack to AWS using a single command, and destroys the stack when needed.</p>
          </div>
        </section>
        <section class="additional-features">
          <div class="features-container">
            <div><img class="box image image-card" src="/home/quarantinetable.png"></div>
            <div><img class="box image image-card" src="/home/ai_error.png"></div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
/* General Body */
.body {
    font-family: 'Manrope', Arial, sans-serif;
    background-color: #1a202c;
    color: #ffffff;
    margin: 0;
    padding: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    overflow-x: hidden;
}

/* Header */
header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
    max-width: 1500px;
    margin: 0 auto;
    width: 100%;
    position: relative;
    z-index: 1;
}

.logo {
    font-size: 1.5rem;
    font-weight: bold;
    /* position: absolute; */
    width: 70px;
    height: 70px;
}

/* Navigation */
nav ul {
    display: flex;
    list-style-type: none;
    padding: 0;
    align-items: center;
}

nav ul li {
    margin-left: 1rem;
}

nav ul li a {
    color: whitesmoke;
    text-decoration: none;
    font-size: 1.3rem;
    padding-inline: 0.75rem;
}

nav ul li a:hover {
    color: #c4b5fd;
}

nav ul li:last-child a {
  padding-right: 0;
  display: flex;
}

nav ul li:last-child a img {
  width: 2rem;
  height: 2rem;
}

.bar {
    height: 6px;
    width: 100%;
    position: absolute;
    background: rgb(174,236,123);
    background: linear-gradient(75deg, rgba(174,236,123,0.7679446778711485) 0%, rgba(51,158,205,1) 50%, rgba(175,38,203,0.8547794117647058) 100%);
}

/* Main Content */
main {
    flex-grow: 1;
    padding: 0 3rem 3rem 3rem;
    max-width: 1500px;
    margin: 0 auto;
    width: 100%;
    position: relative;
    z-index: 1;
}

/* Hero Section */
.hero {
    position: relative;
    text-align: center;
    padding: 10rem 0;
}

/* Complex Pulse Animation */
@keyframes complexPulse {
    0% {
        opacity: 0.7;
        transform: scale(1) rotate(0deg) skew(0deg, 0deg);
    }
    25% {
        opacity: 0.8;
        transform: scale(1.02) rotate(0.5deg) skew(0.5deg, 0.5deg);
    }
    50% {
        opacity: 0.9;
        transform: scale(1.05) rotate(1deg) skew(1deg, 1deg);
    }
    75% {
        opacity: 0.8;
        transform: scale(1.02) rotate(0.5deg) skew(0.5deg, 0.5deg);
    }
    100% {
        opacity: 0.7;
        transform: scale(1) rotate(0deg) skew(0deg, 0deg);
    }
}

/* Hero Background */
.hero::before {
    content: "";
    position: absolute;
    top: -90px;
    left: -20%;
    width: 130%;
    height: 1000px;
    background-image: url('/home/blur1.png');
    background-position: center;
    background-size: cover;
    z-index: -1;
    pointer-events: none;
    animation: complexPulse 12s ease-in-out infinite;
    transform-origin: center;
}

/* Kinesis Section */
.kinesis .content {
    position: relative;
}

.kinesis .content::before {
    content: "";
    position: absolute;
    top: -90px;
    left: 0;
    width: 100%;
    height: 300px;
    background-image: url('/home/blur2.png');
    background-position: center;
    background-size: cover;
    z-index: -1;
}

.kinesis-img {
    max-width: 27%;
}

/* CLI Section */
section.content-section.cli {
    margin-bottom: 10rem;
}

.cli .content {
    position: relative;
}

.cli .content::before {
    content: "";
    position: absolute;
    top: -140px;
    left: 60px;
    width: 100%;
    height: 500px;
    background-image: url('/home/blur3.png');
    background-position: center;
    background-size: cover;
    z-index: -1;
}

.cli .video {
  border-radius: 10px;
}

.video-container {
  position: relative;
  transform: translateX(5%) scale(0.9);
}

.video-container::after {
  content: '';
  height: 100%;
  width: 100%;
  background-color: #4fb5d754;
  position: absolute;
  top: 13%;
  left: -10%;
  z-index: -10;
  border-radius: 10px;
  background: linear-gradient(75deg, rgb(51 145 205 / 38%) 0%, rgb(38 197 203 / 0%) 100%);
}
/* Main Background Trail */
main::after {
    content: "";
    position: absolute;
    top: 800px;
    left: 15px;
    width: 98%;
    aspect-ratio: 1/1;
    background-image: url('/home/trail.png');
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: -1;
}

/* Hero Text */
.hero h1 {
    font-size: clamp(3rem, 4.5vw, 5rem);
    font-weight: 700;
    margin-bottom: 1rem;
    opacity: var(--sds-size-stroke-border);
    padding: 2.5rem;
    background: #365EAB;
    background: linear-gradient(to top, #365EAB 0%, #F7B655 64%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.hero p {
    font-size: 1.25rem;
    margin-bottom: 2rem;
}

/* Button */
button {
    background-color: #7c3aed;
    color: white;
    border: none;
    padding: 0.5rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    border-radius: 0.25rem;
    cursor: pointer;
}

button:hover {
    background-color: #1d132e;
}

/* Content Section */
.content-section {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 6rem;
    gap: 2rem;
}

.content-section.cli {
    gap: 4rem;
}

.content-section .content,
.content-section .image {
    width: 100%;
}

.content-section h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

/* Additional Features Section */
.additional-features h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.additional-features {
  margin-inline: 20%;
  margin-bottom: 10rem;
}

.features-container {
    display: flex;
    flex-direction: column;
    gap: 3rem;
}

.feature {
    background-color: #2d3748;
    padding: 1.5rem;
    border-radius: 0.5rem;
    margin-bottom: 1rem;
}

.feature h3 {
    font-size: 1.25rem;
    margin-bottom: 0.5rem;
}

/* Footer */
footer {
    background-color: #2d3748;
    padding: 2.5rem 0;
    text-align: center;
    position: relative;
    z-index: 1;
}

/* Desktop */
@media (min-width: 1024px) {
    .content-section {
        flex-direction: row;
        gap: 7rem;
    }
    .content-section:nth-child(odd) {
        flex-direction: row-reverse;
    }
    .content-section .content,
    .content-section .image {
        width: 50%;
    }
    .features-container {
        flex-direction: row;
        justify-content: space-between;
        gap: 17%;
    }
    .feature {
        width: 48%;
    }
    .additional-features {
        padding-inline: 11rem;
        margin-inline: 0;
    }
    .image.sqlconsole {
        max-width: 45%;
    }
}
</style>
