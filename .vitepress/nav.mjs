// 考虑到后期该配置内容可能会有大量内容，因此建议拆分出去单独管理。

export default [
    { text: '主页', link: '/' },
    { text: '前端', 
      items: [
        { text: 'CSS基础', 
          items: [
            { text: 'CSS基础', link: '/fe/css-basee/' },
            { text: 'CSS布局', link: '/fe/css-layout/' },
          ]
        },
        { text: 'React数据流', 
          items: [
            { text: 'Redux', link: '/fe-redux/' },
            { text: 'Mobx', link: '/fe/react-router/' },
            { text: 'Hooks.formik',   link: '/fe/react-router/' }, 
          ]
        },
        { text: '前端组件化', 
          link: '/fe-components/受控组件与非受控组件的选用标准'
        },
        { text: 'Nextjs', link: '/fe/nextjs' },
        { text: 'Typescript', link: '/fe/ts' },
        {
          text: '前端测试',
          link: '/fe/test/'
        },
        {
          text: '数据可视化',
          link: '/fe/date-visit/'
        },
        {
          text: '性能优化',
          link: '/fe/perfor-opt/'
        },
        {
          text: '小程序开发',
          link: '/fe-small-code/小程序开发'
        },
        { text: '微前端', 
          items: [
            { text: '微前端基础', link: '/fe/micro-fe-base/' },
            { text: '微前端实战', link: '/fe/micro-fe-demo/' },
          ]
        },
      ]
     },
     { text: '后端',
      items: [
        { text: 'Nodejs', 
          items: [
            { text: 'Nodejs入门', link: '/be/node-demo/' },
            { text: 'Nodejs小工具', link: '/be/node-tools/' },
          ]
        },
        { text: '数据库',
          items: [
            { text: 'Mysql', link: '/be/mysql/' },
            { text: 'Mongodb', link: '/be/mongodb/' },
          ]
        },
        { text: 'Koa',
          link: '/be/koa/'
        }
      ]
      },
     { text: '运维', link: '/ops/' }, 
     { text: '所有项目', link: '/markdown-examples' },
     {
      text: '其他',
      items: [
        { text: '代码通用缩写表', link: '/other/代码通用缩写表/' },
        { text: '前端Web系统架构设计', link: '/other/前端Web系统架构设计/' },
      ]
     }
  ];