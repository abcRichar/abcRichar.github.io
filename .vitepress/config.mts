import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Richar",
  description: "技术分享",
  base: "/",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "../svg/苹果水果.svg",
    nav: [
      { text: "首页", link: "/" },
      { text: "技术标点", link: "/markdown-examples" },
    ],

    sidebar: [
      {
        text: "技术标点",
        items: [
          { text: "自我介绍", link: "/markdown-examples" },
          { text: "Vue3 UI库", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/vuejs/vitepress" }],
  },
});
