import { hopeTheme } from "vuepress-theme-hope";
import { navbarConfig } from "./navbar";
import { sidebarConfig } from "./sidebar";

export const themeConfig = hopeTheme({
  logo: "/logo.png",
  hostname: "https://javaguide.cn/",
  author: {
    name: "winter",
    url: "https://javaguide.cn/article/",
  },
  repo: "https://github.com/diving-cloud/diving-cloud.github.io",
  docsDir: "docs",
  iconAssets: "//at.alicdn.com/t/c/font_2922463_9ir10garej4.css",
  navbar: navbarConfig,
  sidebar: sidebarConfig,
  pageInfo: [
    "Author",
    "Category",
    "Tag",
    "Date",
    "Original",
    "Word",
    "ReadingTime",
  ],
  blog: {
    intro: "/about-the-author/",
    sidebarDisplay: "mobile",
  },
  displayFooter: true,
  plugins: {
    blog: true,
    copyright: true,
    mdEnhance: {
      codetabs: true,
      container: true,
      tasklist: true,
    },
    feed: {
      json: true,
    },
  },
});
