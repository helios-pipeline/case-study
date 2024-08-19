<script>
import '../styles/stars.scss'
import '../styles/cursor.css'

export default {
  name: 'AboutUs',
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
      if (e.target && e.target.matches('header, main')) {
        this.isOverActiveArea = true;
        this.showCursor();
      }
    },
    handleMouseLeave(e) {
      if (e.target && e.target.matches('header, main')) {
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
    <div id="stars"></div>
    <div id="stars2"></div>
    <div id="stars3"></div>
    <div class="body">
      <header>
          <div class="logo">Helios</div>
          <nav>
              <ul>
                <li><a href="/index">Home</a></li>
                <li><a href="/introduction">Case Study</a></li>
                <li><a href="https://github.com/helios-pipeline/deploy">GitHub</a></li>
              </ul>
          </nav>
      </header>
      <main>
      <section class="about-us">
        <h1>Meet the Team</h1>
        <div class="team-members">
          <div class="team-member">
            <img src="/about_us/tony.jpeg">
            <h2>Tony Liao</h2>
            <p>Email: kuanchiliao@gmail.com</p>
            <p><a href="https://www.linkedin.com/in/tonyliao1/" target="_blank">LinkedIn</a> | <a href="https://github.com/Kuanchiliao1" target="_blank">GitHub</a></p>
          </div>
          <div class="team-member">
            <img src="/about_us/james.jpeg">
            <h2>James Drabinsky</h2>
            <p>Email: james.drabinsky@gmail.com</p>
            <p><a href="https://www.linkedin.com/in/jamesdrabinsky/" target="_blank">LinkedIn</a> | <a href="https://github.com/jamesdrabinsky" target="_blank">GitHub</a></p>
          </div>
          <div class="team-member">
            <img src="/about_us/garrett.jpeg">
            <h2>Garrett Cochran</h2>
            <p>Email: garrettjcochran@gmail.com</p>
            <p><a href="https://www.linkedin.com/in/garrett-cochran-80bb0858/" target="_blank">LinkedIn</a> | <a href="https://github.com/gjcochran" target="_blank">GitHub</a></p>
          </div>
          <div class="team-member">
            <img src="/about_us/sean.jpeg">
            <h2>Sean Powell</h2>
            <p>Email: b.sean.powell@gmail.com</p>
            <p><a href="https://www.linkedin.com/in/sean-powell/" target="_blank">LinkedIn</a> | <a href="https://github.com/bspowell" target="_blank">GitHub</a></p>
          </div>
        </div>
      </section>
    </main>
    </div>
  </div>
</template>

<style scoped>
/* General Body */
.body {
    font-family: 'Lato', Arial, sans-serif;
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
}

/* Navigation */
nav ul {
    display: flex;
    list-style-type: none;
    padding: 0;
}

nav ul li {
    margin-left: 1rem;
}

nav ul li a {
    color: whitesmoke;
    text-decoration: none;
    font-size: 1.3rem;
}

nav ul li a:hover {
    color: #c4b5fd;
}


/* Hero Section */
.hero {
    position: relative;
    text-align: center;
    padding: 10rem 0;
}


/* Hero Background */
.hero::before {
    content: "";
    position: absolute;
    top: -90px;
    left: -20%;
    width: 130%;
    height: 1000px;
    background-image: url('home/blur1.png');
    background-position: center;
    background-size: cover;
    z-index: -1;
    pointer-events: none;
    animation: complexPulse 12s ease-in-out infinite;
    transform-origin: center;
}



/* Hero Text */
.hero h1 {
    font-size: clamp(2.5rem, 0.3125rem + 3.75vw, 6rem);
    font-weight: 600;
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

/* About Us Section */
.about-us {
    text-align: center;
    padding: 2rem 0;
    flex-grow: 1;
}

.about-us h1 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
}

.team-members {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
    padding: 1rem;
}

.team-member {
    background-color: #2d3748;
    padding: 1.5rem;
    border-radius: 0.5rem;
    text-align: center;
    width: 200px;
}

.team-member img {
    border-radius: 50%;
    margin-bottom: 1rem;
    width: 150px;
    height: 150px;
}

.team-member h2 {
    margin: 0.5rem 0;
    font-size: 1.5rem;
}

.team-member p {
    margin: 0.25rem 0;
    font-size: 1rem;
}

.team-member a {
    color: #b67bf1;
    text-decoration: none;
}

.team-member a:hover {
    color: #eea011;
    text-decoration: underline;
}

</style>