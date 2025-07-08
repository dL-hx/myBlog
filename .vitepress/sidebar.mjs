/* 
考虑到后期该配置内容可能会有大量内容，因此建议拆分出去单独管理。

为解决文章写完后需要在sidebar中重新添加链接问题，添加了一个自动引入的函数。

可以方便快捷的自动引入文章侧边栏。

*/
import { setSidebar } from "./gen_sidebar.mjs"

export default {
  '/': [{
    text: '案例',
    collapsed: true,
    items:[
      { text: 'Markdown案例', link: '/markdown-examples' },
      { text: 'Runtime API Examples', link: '/api-examples' }
    ]
  }
  ],

  'docs/fe-css/css-base/': setSidebar('/docs/fe-css/css-base/'),
  'docs/fe-css/css-layout/': setSidebar('/docs/fe-css/css-layout/'),
  'docs/fe-css/css-effect/': setSidebar('/docs/fe-css/css-effect/'),
  'docs/fe-redux/': setSidebar('/docs/fe-redux/'),
  'docs/fe-mobx/': setSidebar('/docs/fe-mobx/'),
  'docs/hooks.formik/': setSidebar('/docs/hooks.formik/'),
  
  'docs/fe-components/': setSidebar('/docs/fe-components/'),
  'docs/fe-date-visit/': setSidebar('/docs/fe-date-visit/'),
  'docs/fe-small-components/react': setSidebar('/docs/fe-small-components/react/'),
  'docs/fe-small-components/vue': setSidebar('/docs/fe-small-components/vue/'),
  
  'docs/fe-perfor-opt/': setSidebar('/docs/fe-perfor-opt/'),
  'docs/fe-ts/': setSidebar('/docs/fe-ts/'),

  
  'docs/be-koa/': setSidebar('/docs/be-koa/'),

  //  '/other/': [
  //   {
  //    text: '案例',
  //    collapsed: true,
  //   //  link: '/other/code-abbr'
  //    items:setSidebar('/other/')
  //   }
  //  ]

  'docs/ops-docker/':  setSidebar('/docs/ops-docker/'),
  // 'docs/ops-k8s/':  setSidebar('/docs/ops-k8s/'),
  'docs/other/':  setSidebar('/docs/other/')


  // '/fe/': [{
  //   text: '案例',
  //   // collapsed: true,
  //   link: 'docs/fe/api-examples'
  // }],
  // '/fe/':  [{
  //   text: '案例',
  //   collapsed: true,
  //   items:setSidebar('/fe/')
  // }]  
}

