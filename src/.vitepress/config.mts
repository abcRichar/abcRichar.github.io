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
      { text: "前端", link: "/frontEnd/" },
      { text: "后端", link: "/afterEnd/" },
      { text: "工具", link: "/devTools/" },
    ],
    sidebar: {
      "/frontEnd/": [
        {
          text: "前端",
          items: [{ text: "Vue笔记", link: "/frontEnd/vue-1.md" }],
        },
      ],
      "/afterEnd/": [
        {
          text: "后端",
          items: [{ text: "Java基础", link: "/afterEnd/java-1.md" }],
        },
      ],
      "/devTools/": [
        {
          text: "工具",
          items: [{ text: "Git提交规范", link: "/devTools/git-1.md" }],
        },
      ],
    },

    socialLinks: [{ icon: "github", link: "https://github.com/abcRichar" }],
  },
  vue: {
    // @vitejs/plugin-vue 选项
  },
});
