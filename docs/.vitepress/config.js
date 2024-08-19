import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Helios Case Study",
  description: "case study - Helios data stream analysis platform",
  cleanUrls: true,
  base: '/',
  head: [['link', { rel: 'icon', href: '/helios_favicon.ico' }]],
  appearance: false,
  themeConfig: {
    nav: [{ text: "Home", link: "/" }],
    sidebar: {
      "/": [
        { text: "Introduction", link: "/introduction" },
        { text: "Helios Architecture", link: "/helios-architecture" },
        { text: "Building Helios: Design Choices", link: "/building-helios" },
        { text: "Automating Deployment", link: "/automating-deployment" },
        { text: "Improving Core Platform", link: "/improving-core-platform" },
        { text: "Scaling", link: "/scaling" },
        { text: "Load Testing", link: "/load-testing" },
        { text: "Future Work", link: "/future-work" },
        { text: "References", link: "/references" },
      ],
    },
    outline: {
      level: [2, 3],
    },
    socialLinks: [
      { icon: "github", link: "https://github.com/helios-pipeline/deploy" },
    ],
  },
  vite: {
    ssr: {
      noExternal: ["prismjs"],
    },
  },
});
