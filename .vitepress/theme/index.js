// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import DefaultTheme from 'vitepress/theme'
import './style.css'

/** @type {import('vitepress').Theme} */
export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // 线上环境才上报
    router.onBeforeRouteChange((to) => {
      if (import.meta.env.MODE === 'production') {
        if (typeof _hmt !=='undefined' && !!to) {
          _hmt.push(['_trackPageview', to])          
        }
        
      }
    })
  }
}
