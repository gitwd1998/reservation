import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import "./assets/css/reset.css"//自定义清除标签默认样式
import "./assets/js/iconfont.js"//字体图标
import "./assets/css/public.css"//项目公共样式
import axios from "axios"
Vue.prototype.$http = axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
