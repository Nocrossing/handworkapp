import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import fastClick from 'fastclick'
import VueLazyload from 'vue-lazyload'

import toast from "components/common/toast"

Vue.config.productionTip = false

//添加事件总线对象
Vue.prototype.$bus = new Vue()

//安装toast插件
Vue.use(toast)

//解决移动端300ms延迟
fastClick.attach(document.body)

//图片懒加载的插件
Vue.use(VueLazyload, {
  loading: require('./assets/img/details/placeholder.jpg')
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
