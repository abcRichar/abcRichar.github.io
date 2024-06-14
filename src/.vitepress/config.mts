import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Richar Dev",
  description: "技术分享",
  // base: "/",
  srcDir: "pages",
  assetsDir: "public",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "../svg/logo.svg",
    nav: [
      { text: "首页", link: "/" },
      { text: "前端", link: "/frontEnd/index.md" },
      { text: "后端", link: "/afterEnd/index.md" },
      { text: "工具", link: "/devTools/index.md" },
    ],
    sidebar: {
      "/frontEnd/index.md": [
        {
          text: "前端",
          items: [{ text: "Vue笔记", link: "/frontEnd/index.md" }],
        },
      ],
      "/afterEnd/index.md": [
        {
          text: "后端",
          items: [{ text: "Java笔记", link: "/frontEnd/index.md" }],
        },
      ],
      "/devTools/index.md": [
        {
          text: "工具",
          items: [{ text: "Git笔记", link: "/devTools/index.md" }],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/abcRichar" }],
  },
  vue: {
    // @vitejs/plugin-vue 选项
  },
});
