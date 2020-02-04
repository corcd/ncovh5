import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import api from './api'
import Vant from 'vant'
import 'vant/lib/index.css'
import NProgress from 'nprogress' // 进度条
import 'nprogress/nprogress.css' // 进度条样式

import '@/assets/styles/global.scss'

Vue.use(Vant)

Vue.config.productionTip = false
Vue.prototype.$api = api

NProgress.configure({
  showSpinner: false
}) // 禁用进度条进度环

router.beforeEach((to, from, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  window.scroll(0, 0)
  NProgress.done()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
