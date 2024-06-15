---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Codeing开发学习笔记"
  text: "目标：成为全能开发"
  tagline:
  image:
    src: https://avatars.githubusercontent.com/u/96232441?v=4
    alt: VitePress
  actions:
    - theme: brand
      text: 开始阅读
      link: /frontEnd/
    - theme: alt
      text: GitHub
      link: https://github.com/abcRichar

features:
  - icon: 📝
    title: 学习笔记
    details: 记录学习过程，分享学习心得
  - icon: <svg xmlns="http://www.w3.org/2000/svg" width="30" viewBox="0 0 256 220.8"><path fill="#41B883" d="M204.8 0H256L128 220.8 0 0h97.92L128 51.2 157.44 0h47.36Z"/><path fill="#41B883" d="m0 0 128 220.8L256 0h-51.2L128 132.48 50.56 0H0Z"/><path fill="#35495E" d="M50.56 0 128 133.12 204.8 0h-47.36L128 51.2 97.92 0H50.56Z"/></svg>
    title: 深入学习
    details: 提升前端开发能力，拓展JS基础技术
  - icon: 🛠️
    title: 个人计划
    details: 学习Java后端，成为全栈开发！
---

<test />
<script setup>
import { onMounted } from 'vue'
import test from '../.vitepress/components/test.vue'
onMounted(() => {
  const urlParams = new URLSearchParams(window.location.search)
})
</script>

<style>
:root {
  --vp-home-hero-name-color: transparent;
  --vp-home-hero-name-background: -webkit-linear-gradient(120deg, #bd34fe 30%, #41d1ff);

  --vp-home-hero-image-background-image: linear-gradient(-45deg, #bd34fe 50%, #47caff 50%);
  --vp-home-hero-image-filter: blur(44px);
}

@media (min-width: 640px) {
  :root {
    --vp-home-hero-image-filter: blur(56px);
  }
}

@media (min-width: 960px) {
  :root {
    --vp-home-hero-image-filter: blur(68px);
  }
}
</style>
