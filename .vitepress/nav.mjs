// 考虑到后期该配置内容可能会有大量内容，因此建议拆分出去单独管理。

export default [
    { text: '主页', link: '/' },
    { text: '前端', 
      items: [
        { text: 'CSS基础', 
          items: [
            { text: 'CSS基础', link: '/docs/fe/css-basee/' },
            { text: 'CSS布局', link: '/docs/fe/css-layout/' },
          ]
        },
        { text: 'React数据流', 
          items: [
            { text: 'Redux', link: '/docs/fe-redux/' },
            { text: 'Mobx', link: '/docs/fe-mobx/mobx' },
            { text: 'Hooks.formik',   link: '/docs/fe/react-router/' }, 
          ]
        },
        { text: '前端组件化', 
          link: '/docs/fe-components/受控组件与非受控组件的选用标准'
        },
        { text: 'Nextjs', link: '/docs/fe/nextjs' },
        { text: 'Typescript', link: '/docs/fe/ts' },
        {
          text: '前端测试',
          link: '/docs/fe/test/'
        },
        {
          text: '数据可视化',
          link: '/docs/fe/date-visit/'
        },
        {
          text: '性能优化',
          link: '/docs/fe/perfor-opt/'
        },
        {
          text: '小程序开发',
          link: '/docs/fe-small-code/小程序开发'
        },
        { text: '微前端', 
          items: [
            { text: '微前端基础', link: '/docs/fe/micro-fe-base/' },
            { text: '微前端实战', link: '/docs/fe/micro-fe-demo/' },
          ]
        },
      ]
     },
     { text: '后端',
      items: [
        { text: 'Nodejs', 
          items: [
            { text: 'Nodejs入门', link: '/docs/be/node-demo/' },
            { text: 'Nodejs小工具', link: '/docs/be/node-tools/' },
          ]
        },
        { text: '数据库',
          items: [
            { text: 'Mysql', link: '/docs/be/mysql/' },
            { text: 'Mongodb', link: '/docs/be/mongodb/' },
          ]
        },
        { text: 'Koa',
          link: '/docs/be/koa/'
        }
      ]
      },
     { text: '运维', link: '/docs/ops/' }, 
     { text: '所有项目', link: '/docs/markdown-examples' },
     {
      text: '其他',
      items: [
        { text: '代码通用缩写表', link: '/docs/other/代码通用缩写表/' },
        { text: '前端Web系统架构设计', link: '/docs/other/前端Web系统架构设计/' },
        { text: '如何搭建并部署自己的博客网站', link: '/docs/other/如何搭建并部署自己的博客网站/' },
      ]
     }
  ];