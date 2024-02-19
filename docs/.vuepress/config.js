const { description } = require("../../package")

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  base: "/han_gi_chu_im/",
  locales: {
    "/": {
      lang: "zh-TW",
    },
  },
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "《專案文件舘》",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: "彙集專案相關文件",

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    // nav: [
    //   { text: '首頁', link: '/' },
    //   { text: '作業系統', link: '/D01_OS/' },
    //   { text: '終端機', link: '/D02_Terminal/' },
    //   { text: '開發環境', link: '/D03_DevEnvironments/' },
    //   { text: '開發工具', link: '/D04_DevTools/' },
    // ],
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Config",
        link: "/config/",
      },
      {
        text: "VuePress",
        link: "https://v1.vuepress.vuejs.org",
      },
    ],
    sidebar: [
      {
        title: "作業指引",
        collapsable: false,
        children: [
          {
            title: "使用者需求",
            path: "/d100_URS/",
          },
          {
            title: "系統需求",
            path: "/d200_SRS/",
          },
          {
            title: "系統設計",
            path: "/d300_SDD/",
          },
          {
            title: "開發與測試",
            path: "/d400_DEV/",
          },
          {
            title: "系統維運",
            path: "/d500_OP/",
          },
          {
            title: "參考資料",
            path: "/d900_REF/",
          },
          {
            title: "作業指引",
            path: "/guide/",
          },
        ],
      },
      {
        title: "電腦硬體",
        collapsable: true,
        children: [
          {
            title: "伺服器（SRV-2020）",
            path: "/_my_dev_env/srv-2020/",
            collapsable: true,
            sidebarDepth: 2,
          },
          {
            title: "開發機（MBP-2018）",
            path: "/_my_dev_env/MBP-2018/",
            collapsable: true,
            sidebarDepth: 2,
          },
        ],
      },
      {
        title: "開發環境",
        collapsable: true,
        children: [
          {
            title: "Python",
            collapsable: true,
            children: [
              {
                title: "Python",
                path: "/_my_dev_env/python/",
              },
              {
                title: "pyenv",
                path: "/_my_dev_env/python/pyenv.md",
              },
              {
                title: "poetry",
                path: "/_my_dev_env/python/poetry.md",
              },
              {
                title: "Django",
                path: "/_my_dev_env/django/",
              },
            ],
          },
          {
            title: "Node.js",
            path: "/_my_dev_env/nodejs/",
          },
          {
            title: "Lua",
            path: "/_my_dev_env/lua/",
          },
          {
            title: "Docker",
            path: "/_my_dev_env/docker/",
          },
        ],
      },
      {
        title: "常用工具",
        collapsable: true,
        children: [
          {
            title: "SSH",
            path: "/_my_dev_env/terminal/ssh",
          },
          {
            title: "Yabai",
            path: "/_my_dev_env/yabai/",
          },
          {
            title: "Git",
            path: "/_my_dev_env/git/",
          },
          {
            title: "Alacritty",
            path: "/_my_dev_env/terminal/alacritty",
          },
          {
            title: "Tmux",
            path: "/_my_dev_env/terminal/tmux",
          },
          {
            title: "Neovim",
            path: "/_my_dev_env/nvim/",
          },
          {
            title: "VuePress",
            path: "/_my_dev_env/vuepress/",
          },
          {
            title: "PostgreSQL",
            path: "/_my_dev_env/postgres/",
          },
          {
            title: "VS Code",
            path: "/_my_dev_env/VSCode/",
          },
          // {
          //   title: 'VirtualBox',
          //   path: '/_my_dev_env/VirtualBox/',
          // },
          {
            title: "Vim",
            path: "/_my_dev_env/vim/",
          },
        ],
      },
      {
        title: "參考資料",
        collapsable: true,
        children: [
          {
            title: "快速參考",
            path: "/_my_dev_env/QuickRef/",
          },
          {
            title: "Manjaro KDE 開發環境",
            collapsable: true,
            children: [
              {
                title: "Manjaro KDE 摘要",
                path: "/_ManjaroKDE/",
                collapsable: true,
                sidebarDepth: 2,
              },
              {
                title: "作業系統安裝",
                path: "/_ManjaroKDE/D01_OS/",
                collapsable: true,
                sidebarDepth: 2,
              },
              {
                title: "終端機作業",
                path: "/_ManjaroKDE/D02_Terminal/",
                collapsable: true,
                sidebarDepth: 2,
              },
              {
                title: "開發環境建置",
                path: "/_ManjaroKDE/D03_DevEnvironments/",
                collapsable: true,
                sidebarDepth: 2,
              },
              {
                title: "開發作業工具",
                path: "/_ManjaroKDE/D04_DevTools/",
                collapsable: true,
                sidebarDepth: 2,
              },
            ],
          },
          {
            title: "其它⋯⋯",
            path: "/_my_dev_env/misc/",
          },
        ],
      },
    ],
  },
  markdown: {
    lineNumbers: true,
    extendMarkdown: (md) => {
      // md.use(require('markdown-it-prism'))
      // 使用 markdown-it-mermaid 插件
      md.use(require("markdown-it-mermaid").default)
      // 控制圖片縮放
      md.use(require("markdown-it-imsize"))
    },
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-palette",
    {
      preset: "sass", // 使用 Sass 預設顏色方案
    },
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
  ],
}
