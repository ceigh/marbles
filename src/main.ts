import { createApp } from 'vue'
import App from './App.vue'

import VueLazyLoad from 'vue3-lazyload'
import { dragscrollNext } from 'vue-dragscroll'

const assetsPath = process.env.VUE_APP_ASSETS

createApp(App)
  .use(VueLazyLoad, { loading: `${assetsPath}img/loading.svg` })
  .directive('dragscroll', dragscrollNext)
  .mount('#app')
