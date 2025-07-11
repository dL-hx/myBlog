// 考虑到后期该配置内容可能会有大量内容，因此建议拆分出去单独管理。

export default [
  { text: "主页", link: "/" },
  {
    text: "前端",
    items: [
      {
        text: "CSS相关",
        items: [
          { text: "CSS基础", link: "/docs/fe-css/css-base/CSS 基础" },
          { text: "CSS布局", link: "/docs/fe-css/css-layout/Flex经典等分布局" },
          { text: "CSS特效", link: "/docs/fe-css/css-effect/文字渐变" },
        ],
      },

      {
        text: "前端小组件",
        items: [
          { text: "React小组件", link: "/docs/fe-small-components/react/React18-列表数据实现用户删除、批量删除" },
          { text: "Vue小组件", link: "/docs/fe-small-components/vue/Vue3---路由优化（刷新时候，在当前路由）" },
        ],
      },

      {
        text: "React数据流",
        items: [
          { text: "Redux", link: "/docs/fe-redux/1. redux 学习进阶---Redux核心" },
          { text: "Mobx", link: "/docs/fe-mobx/mobx" },
          { text: "Hooks.formik", link: "/docs/hooks.formik/0-ReactHook技巧" },
        ],
      },
      {
        text: "前端组件化",
        link: "/docs/fe-components/受控组件与非受控组件的选用标准",
      },
      { text: "Nextjs", link: "/docs/fe/nextjs" },
      { text: "Typescript", link: "/docs/fe-ts/0-如何学习TS" },
      {
        text: "前端测试",
        link: "/docs/fe/test/",
      },
      {
        text: "数据可视化",
        link: "/docs/fe-date-visit/D3js使用",
      },
      {
        text: "性能优化",
        link: "/docs/fe-perfor-opt/webpack-------路径优化alias",
      },
      {
        text: "小程序开发",
        link: "/docs/fe-small-code/小程序开发",
      },
      {
        text: "微前端",
        items: [
          { text: "微前端基础", link: "/docs/fe/micro-fe-base/" },
          { text: "微前端实战", link: "/docs/fe/micro-fe-demo/" },
        ],
      },
    ],
  },
  {
    text: "后端",
    items: [
      {
        text: "Nodejs",
        items: [
          { text: "Nodejs入门", link: "/docs/be/node-demo/" },
          { text: "Nodejs小工具", link: "/docs/be/node-tools/" },
        ],
      },
      {
        text: "数据库",
        items: [
          { text: "Mysql", link: "/docs/be-mysql/" },
          { text: "Mongodb", link: "/docs/be-mongodb/" },
        ],
      },
      { text: "Koa", link: "/docs/be-koa/Koa 入门" },
    ],
  },
  {
    text: "运维",
    items: [
      { text: "Docker", link: "/docs/ops-docker/Docker" },
      { text: "K8s", link: "/docs/ops-k8s/" },
    ],
  },
  { text: "所有项目", link: "/all-pages" },
  {
    text: "其他",
    items: [
      { text: "代码通用缩写表", link: "/docs/other/代码通用缩写表/" },
      { text: "前端Web系统架构设计", link: "/docs/other/前端Web系统架构设计/" },
      {
        text: "如何搭建并部署自己的博客网站",
        link: "/docs/other/如何搭建并部署自己的博客网站/",
      },
      {
        text: "Anaconda常用命令",
        link: "/docs/other/Anaconda常用命令/",
      },
    ],
  },
];
