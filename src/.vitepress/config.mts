import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Richar Dev",
  description: "技术分享",
  // base: "/",
  assetsDir: "public",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "../svg/logo.svg",
    nav: [
      { text: "首页", link: "/" },
      { text: "文章分享", link: "/markdown-examples" },
    ],
    sidebar: [
      {
        text: "文章分享",
        items: [
          { text: "自我介绍", link: "/markdown-examples" },
          { text: "Vue3 UI库", link: "/api-examples" },
        ],
      },
    ],
    socialLinks: [{ icon: "github", link: "https://github.com/abcRichar" }],
  },
  vue: {
    // @vitejs/plugin-vue 选项
  },
});
