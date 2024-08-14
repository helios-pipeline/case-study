import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Helios Case Study",
  description: "case study - Helios data stream analysis platform",
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],

    sidebar: [
      { text: "Introduction", link: "/introduction" },
      {
        text: "Helios Architecture",
        link: "/helios-architecture",
      },
      { text: "Building Helios: Design Choices", link: "/building-helios" },
      { text: "Improving Core Platform", link: "/improving-core-platform" },
      { text: "Scaling", link: "/scaling" },
      { text: "Load Testing", link: "/load-testing" },
      { text: "Automating Deployment", link: "/automating-deployment" },
      { text: "Future Work", link: "/future-work" },
      { text: "References", link: "/references" },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
    ],
  },
  vite: {
    ssr: {
      noExternal: ["prismjs"],
    },
  },
});
