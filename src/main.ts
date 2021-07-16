import { createApp } from 'vue'
import App from './App.vue'

import VueLazyLoad from 'vue3-lazyload'

const assetsPath = process.env.VUE_APP_ASSETS

createApp(App)
  .use(VueLazyLoad, { loading: `${assetsPath}img/loading.svg` })
  .mount('#app')
