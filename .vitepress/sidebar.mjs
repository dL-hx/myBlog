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
  'docs/fe-css/css-tailwind/': setSidebar('/docs/fe-css/css-tailwind/'),
  'docs/fe-js/ecmascript-features/': setSidebar('/docs/fe-js/ecmascript-features/'),
  'docs/fe-js/js-performance/': setSidebar('/docs/fe-js/js-performance/'),
  'docs/fe-js/typescript/': setSidebar('/docs/fe-js/typescript/'),
  'docs/fe-js/functional-programming/': setSidebar('/docs/fe-js/functional-programming/'),
  'docs/fe-js/async-programming/': setSidebar('/docs/fe-js/async-programming/'),
  'docs/fe-js/modules/': setSidebar('/docs/fe-js/modules/'),
  'docs/fe-js/promise-source/': setSidebar('/docs/fe-js/promise-source/'),
  'docs/fe-redux/': setSidebar('/docs/fe-redux/'),
  'docs/fe-mobx/': setSidebar('/docs/fe-mobx/'),
  'docs/hooks.formik/': setSidebar('/docs/hooks.formik/'),
  
  'docs/fe-components/': setSidebar('/docs/fe-components/'),
  'docs/fe-date-visit/': setSidebar('/docs/fe-date-visit/'),
  'docs/fe-small-components/react': setSidebar('/docs/fe-small-components/react/'),
  'docs/fe-small-components/vue': setSidebar('/docs/fe-small-components/vue/'),
  
  'docs/fe-perfor-opt/': setSidebar('/docs/fe-perfor-opt/'),
  'docs/fe-ts/': setSidebar('/docs/fe-ts/'),
  'docs/fe/test/': setSidebar('/docs/fe/test/'),
  'docs/fe/micro-fe-base/': setSidebar('/docs/fe/micro-fe-base/'),
  'docs/fe/micro-fe-demo/': [
    {
      text: '微前端实战',
      items: [
        { text: '[微前端实战]---01导学', link: '/docs/fe/micro-fe-demo/[微前端实战]---01导学' },
        { text: '[微前端实战]---02架构基础知识', link: '/docs/fe/micro-fe-demo/[微前端实战]---02架构基础知识' },
        { text: '[微前端实战]---021软件设计原则与分层', link: '/docs/fe/micro-fe-demo/[微前端实战]---021软件设计原则与分层' },
        { text: '[微前端实战]---022技术填补与崩溃预防', link: '/docs/fe/micro-fe-demo/[微前端实战]---022技术填补与崩溃预防' },
        { text: '[微前端实战]---023系统重构', link: '/docs/fe/micro-fe-demo/[微前端实战]---023系统重构' },
        { text: '[微前端实战]---03微前端实现方式对比', link: '/docs/fe/micro-fe-demo/[微前端实战]---03微前端实现方式对比' },
        { text: '[微前端实战]---031技术选型-确定技术栈', link: '/docs/fe/micro-fe-demo/[微前端实战]---031技术选型-确定技术栈' },
        { text: '[微前端实战]---032绘制项目架构图', link: '/docs/fe/micro-fe-demo/[微前端实战]---032绘制项目架构图' },
        { text: '[微前端实战]---033vue2 - 新能源子页面', link: '/docs/fe/micro-fe-demo/[微前端实战]---033vue2 - 新能源子页面' },
        { text: '[微前端实战]---034vue3 - 首页,选车页面', link: '/docs/fe/micro-fe-demo/[微前端实战]---034vue3 - 首页,选车页面' },
        { text: '[微前端实战]---035react15-资讯,视频,视频详情', link: '/docs/fe/micro-fe-demo/[微前端实战]---035react15-资讯,视频,视频详情' },
        { text: '[微前端实战]---035react16 - 资讯视频视频详情页面', link: '/docs/fe/micro-fe-demo/[微前端实战]---035react16 - 资讯视频视频详情页面' },
        { text: '[微前端实战]---036 react16 - 新车排行登录', link: '/docs/fe/micro-fe-demo/[微前端实战]---036 react16 - 新车排行登录' },
        { text: '[微前端实战]---037 后端服务', link: '/docs/fe/micro-fe-demo/[微前端实战]---037 后端服务' },
        { text: '[微前端实战]---038 请求数据', link: '/docs/fe/micro-fe-demo/[微前端实战]---038 请求数据' },
        { text: '[微前端实战]---039 子应用接入微前端-vue2，vue3', link: '/docs/fe/micro-fe-demo/[微前端实战]---039 子应用接入微前端-vue2，vue3' },
        { text: '[微前端实战]---040 子应用接入微前端-react15,react17', link: '/docs/fe/micro-fe-demo/[微前端实战]---040 子应用接入微前端-react15,react17' },
        { text: '[微前端实战]---041 框架初建（中央控制器， 子应用注册）', link: '/docs/fe/micro-fe-demo/[微前端实战]---041 框架初建（中央控制器， 子应用注册）' },
        { text: '[微前端实战]---042 框架初建（路由拦截,获取首个子应用）', link: '/docs/fe/micro-fe-demo/[微前端实战]---042 框架初建（路由拦截,获取首个子应用）' },
        { text: '[微前端实战]---043 框架初建（主微应用生命周期）', link: '/docs/fe/micro-fe-demo/[微前端实战]---043 框架初建（主微应用生命周期）' },
      ]
    },
  ],

  
  'docs/be-koa/': setSidebar('/docs/be-koa/'),
  'docs/be/node-demo/': setSidebar('/docs/be/node-demo/'),
  'docs/be/node-tools/': setSidebar('/docs/be/node-tools/'),

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
