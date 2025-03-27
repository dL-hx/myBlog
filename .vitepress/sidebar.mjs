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
  'docs/fe-mobx/': setSidebar('/docs/fe-mobx/'),

  'docs/fe-components/': setSidebar('/docs/fe-components/'),
  'docs/fe-small-code/': setSidebar('/docs/fe-small-code/')
  ,
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
