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
    },
    copyToClipboard(text, event) {
      navigator.clipboard.writeText(text).then(() => {
        this.showCopyFeedback(event.target);
      }).catch(err => {
        console.error('Failed to copy: ', err);
      });
    },

    showCopyFeedback(element) {
      const feedback = document.createElement('span');
      feedback.textContent = 'Copied!';
      feedback.style.position = 'absolute';
      feedback.style.backgroundColor = '#4CAF50';
      feedback.style.color = 'white';
      feedback.style.padding = '5px 10px';
      feedback.style.borderRadius = '3px';
      feedback.style.fontSize = '12px';
      feedback.style.transition = 'opacity 0.3s';

      const rect = element.getBoundingClientRect();
      feedback.style.top = `${rect.bottom + 5}px`;
      feedback.style.left = `${rect.left}px`;

      document.body.appendChild(feedback);

      setTimeout(() => {
        feedback.style.opacity = '0';
        setTimeout(() => {
          document.body.removeChild(feedback);
        }, 300);
      }, 2000);
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
        <img class="logo" src="/home/helios_icon_white.png">
        <nav>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/introduction">Case Study</a></li>
            <li><a href="https://github.com/helios-platform"><img src="/home/github-icon.png" /></a></li>
          </ul>
        </nav>
      </header>
      <main>
        <section class="about-us">
          <h1>Meet the Team</h1>
          <div class="team-members">
            <div class="team-member">
              <img src="/about_us/tony.png">
              <h2>Tony Liao</h2>
              <p>
                <img src="/mail.png" alt="Mail" @click="copyToClipboard('kuanchiliao@gmail.com', $event)" style="cursor: pointer;" class="icons">
                <a href="https://www.linkedin.com/in/tonyliao1/" target="_blank">
                  <img src="/linkedin.png" alt="LinkedIn" class="icons">
                </a>
                <a href="https://github.com/Kuanchiliao1" target="_blank">
                  <img src="/github.png" alt="GitHub" class="icons">
                </a>
              </p>
            </div>
            <div class="team-member">
              <img src="/about_us/james.jpeg">
              <h2>James Drabinsky</h2>
              <p>
                <img src="/mail.png" alt="Mail" @click="copyToClipboard('james.drabinsky@gmail.com', $event)" style="cursor: pointer;" class="icons">
                <a href="https://www.linkedin.com/in/jamesdrabinsky/" target="_blank">
                  <img src="/linkedin.png" alt="LinkedIn" class="icons">
                </a>
                <a href="https://github.com/jamesdrabinsky" target="_blank">
                  <img src="/github.png" alt="GitHub" class="icons">
                </a>
              </p>
            </div>
            <div class="team-member">
              <img src="/about_us/garrett.jpeg">
              <h2>Garrett Cochran</h2>
              <p>
                <img src="/mail.png" alt="Mail" @click="copyToClipboard('garrettjcochran@gmail.com', $event)" style="cursor: pointer;" class="icons">
                <a href="https://www.linkedin.com/in/garrett-cochran-80bb0858/" target="_blank">
                  <img src="/linkedin.png" alt="LinkedIn" class="icons">
                </a>
                <a href="https://github.com/gjcochran" target="_blank">
                  <img src="/github.png" alt="GitHub" class="icons">
                </a>
              </p>
            </div>
            <div class="team-member">
              <img src="/about_us/sean.jpeg">
              <h2>Sean Powell</h2>
              <p>
                <img src="/mail.png" alt="Mail" @click="copyToClipboard('b.sean.powell@gmail.com', $event)" style="cursor: pointer;" class="icons">
                <a href="https://www.linkedin.com/in/sean-powell/" target="_blank">
                  <img src="/linkedin.png" alt="LinkedIn" class="icons">
                </a>
                <a href="https://github.com/bspowell" target="_blank">
                  <img src="/github.png" alt="GitHub" class="icons">
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</template>

<style scoped>
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
    width: 70px;
    height: 70px;
}

.about-us {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4rem 0;
}

.about-us h1 {
    margin-bottom: 2rem;
    font-size: 2.5rem;
    font-weight: 900;
}

.team-members {
    display: grid;
    grid-template-columns: repeat(4, minmax(250px, 1fr));
    justify-content: center;
    gap: 4rem;
    padding: 2rem 4rem;
    align-items: center;
    margin: 0 auto;
}

.team-member {
    max-width: 350px;
    width: 100%;
    background-color: #2d3748;
    padding: 1.5rem;
    margin: 0.5rem;
    border-radius: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    height: 100%;
    z-index: 9999;
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
    white-space: nowrap;
}

.team-member p {
    /* margin: auto 0 0.25rem 0; */
    margin-top: auto;
    padding-top: 1rem;
    font-size: 1rem;
    display: flex;
    justify-content: space-around;
}


.team-member a {
    color: #b67bf1;
    text-decoration: none;
}

.team-member p .icons {
    width: 32px;
    height: 32px;
    margin: 0 10px;
    vertical-align: middle;
}

.team-member a:hover {
    color: #eea011;
    text-decoration: underline;
}

@media (max-width: 1300px) {
    .team-members {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 700px) {
    .team-members {
        grid-template-columns: 1fr;
    }
}

</style>
