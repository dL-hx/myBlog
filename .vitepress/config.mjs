import { defineConfig } from 'vitepress'

import nav  from './nav.mjs'
import sidebar  from './sidebar.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/myBlog/",
  title: "小李科技的博客-文档站",
  description: "A VitePress Site",
  head: [
    ["link", { rel: "icon", href: "logo.svg" }],
    [
      'script',
      {},
      `<script>
        window._hmt = window._hmt || [];
        (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?f4400c0b2eb0e1b50f3a46a099195c63";
          var s = document.getElementsByTagName("script")[0]; 
          s.parentNode.insertBefore(hm, s);
        })();
        </script>
        `  
    ]
  ],

  
  // https://vitepress.dev/reference/default-theme-config
  themeConfig: {
    logo: '/logo.svg', // 设置logo
    // siteTitle: false, // 隐藏标题
    //中文配置
    langMenuLabel: "多语言", 
    returnToTopLabel: "返回顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    outline:{
      label:'目录',
      level: 'deep', // `'deep'` 与 `[2, 6]` 相同，将显示从 `<h2>` 到 `<h6>` 的所有标题。
    },
    
    //导航栏
    nav: nav ,
    //侧边栏
    sidebar: sidebar,
    
    lastUpdated: {
      text: '更新时间',
      formatOptions: { dateStyle: 'short',  timeStyle: 'short' }
    },
    // sidebar: { "/front-end/react": set_sidebar("front-end/react") },
    
    // 设置搜索框样式
    search: {
      provider: 'local',
      //配置中文提示
      options:{
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            searchBoxPlaceholder: '搜索文档',
            resetButtonTitle: '清除查询条件',
            closeButtonAriaLabel: '关闭搜索',
            noResultsText: '没有找到结果',
            footer: {
              selectText: '选择',
              closeText: '关闭',
              navigateText: '切换'
            }
          }
        }
      }
    },
    
    //文档页脚
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },

    footer: {
      copyright: `Copyright © 2025 - ${new Date().getFullYear()} dL-hx`
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/dL-hx' },
      { 
        icon:  {
          svg: `<svg t="1676025513460" class="icon" viewBox="0 0 1129 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2745" width="200" height="200"><path d="M234.909 9.656a80.468 80.468 0 0 1 68.398 0 167.374 167.374 0 0 1 41.843 30.578l160.937 140.82h115.07l160.936-140.82a168.983 168.983 0 0 1 41.843-30.578A80.468 80.468 0 0 1 930.96 76.445a80.468 80.468 0 0 1-17.703 53.914 449.818 449.818 0 0 1-35.406 32.187 232.553 232.553 0 0 1-22.531 18.508h100.585a170.593 170.593 0 0 1 118.289 53.109 171.397 171.397 0 0 1 53.914 118.288v462.693a325.897 325.897 0 0 1-4.024 70.007 178.64 178.64 0 0 1-80.468 112.656 173.007 173.007 0 0 1-92.539 25.75h-738.7a341.186 341.186 0 0 1-72.421-4.024A177.835 177.835 0 0 1 28.91 939.065a172.202 172.202 0 0 1-27.36-92.539V388.662a360.498 360.498 0 0 1 0-66.789A177.03 177.03 0 0 1 162.487 178.64h105.414c-16.899-12.07-31.383-26.555-46.672-39.43a80.468 80.468 0 0 1-25.75-65.984 80.468 80.468 0 0 1 39.43-63.57M216.4 321.873a80.468 80.468 0 0 0-63.57 57.937 108.632 108.632 0 0 0 0 30.578v380.615a80.468 80.468 0 0 0 55.523 80.469 106.218 106.218 0 0 0 34.601 5.632h654.208a80.468 80.468 0 0 0 76.444-47.476 112.656 112.656 0 0 0 8.047-53.109v-354.06a135.187 135.187 0 0 0 0-38.625 80.468 80.468 0 0 0-52.304-54.719 129.554 129.554 0 0 0-49.89-7.242H254.22a268.764 268.764 0 0 0-37.82 0z m0 0" fill="#20B0E3" p-id="2746"></path><path d="M348.369 447.404a80.468 80.468 0 0 1 55.523 18.507 80.468 80.468 0 0 1 28.164 59.547v80.468a80.468 80.468 0 0 1-16.094 51.5 80.468 80.468 0 0 1-131.968-9.656 104.609 104.609 0 0 1-10.46-54.719v-80.468a80.468 80.468 0 0 1 70.007-67.593z m416.02 0a80.468 80.468 0 0 1 86.102 75.64v80.468a94.148 94.148 0 0 1-12.07 53.11 80.468 80.468 0 0 1-132.773 0 95.757 95.757 0 0 1-12.875-57.133V519.02a80.468 80.468 0 0 1 70.007-70.812z m0 0" fill="#20B0E3" p-id="2747"></path></svg>`
        },
        link: 'https://space.bilibili.com/344263208' 
      },
      
      { 
        icon:  {
          svg: `<svg t="1741495433539" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1904" width="200" height="200"><path d="M0 0h1024v1024H0z" fill="#FF6633" p-id="1905"></path><path d="M698.9824 42.3936c-158.8736-32.5632-289.536 31.2832-324.9152 48.5888-94.72 46.2848-147.712 108.288-174.4896 140.288-25.9584 31.0272-82.7392 105.9328-108.288 215.8592-21.6576 93.1328-10.752 167.7824-6.0416 194.2528 11.4688 64.3072 33.28 186.88 150.4256 275.2 132.5056 99.8912 293.4784 85.5552 342.9888 80.9472 107.264-10.0352 289.4848-57.2928 300.8512-145.7152 5.1712-39.936-24.4224-89.4464-66.2016-102.5024-65.6384-20.5312-108.3392 63.5392-228.6592 80.9472-8.5504 1.2288-126.5664 16.6912-216.6272-48.5888-105.8816-76.6976-98.9696-211.3024-96.256-264.3968 1.536-30.5664 5.5808-93.5424 48.128-161.8944 14.7968-23.7568 60.3136-94.5664 156.4672-134.912 25.2928-10.5984 76.8512-31.5904 144.4352-26.9824 70.0416 4.7616 120.9856 34.5088 144.4352 48.5888 75.8272 45.4144 86.528 90.0608 120.3712 86.3232 35.8912-3.9424 69.9904-59.2896 66.2016-107.9296-7.424-93.7984-155.5968-158.1056-252.8256-178.0736z" fill="#FFFFFF" p-id="1906"></path></svg>`
        },
        link: 'https://blog.csdn.net/qq_35812380' 
      },
    ]
  },
  markdown: {
    //显示行数
    lineNumbers: true,
    //中文配置
    container:{
      tipLabel: "提示",
      warningLabel: "警告",
      noteLabel: "注意",
      dangerLabel: "危险",
      detailsLabel: "详情",
      infoLabel: "信息",
    }
    
  },
  ignoreDeadLinks: true,
})
