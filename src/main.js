import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import 'echarts/theme/macarons.js'
import store from './store'

import './assets/css/global.css'
import './assets/css/bootstrap.css'
import './assets/css/bootstrap-reboot.css'
import './assets/css/bootstrap-grid.css'
// 设置反向代理，前端请求默认发送到 http://localhost:8085/api
let axios = require('axios')
axios.defaults.baseURL = 'http://localhost:8080/'
// 前端请求带上cookie信息
// axios.defaults.withCredentials = true
// 全局注册，之后可在其他组件中通过 this.$axios 发送数据
Vue.prototype.$axios = axios
Vue.config.productionTip = false

/*路由守卫   根据登录获得token*/
// router.beforeEach((to,from,next) =>{
//   const isLogin = !!localStorage.token ;
//   if(to.path ==="/login" || to.path ==="/register"){
//     next();
//   }else{
//     isLogin ? next() :next("/login")
//   }
// })

// http response 拦截器
// axios.interceptors.response.use(
//   response => {
//     return response
//   },
//   error => {
//     if (error) {
//       store.commit('logout')
//       router.replace('/login')
//     }
//     // 返回接口返回的错误信息
//     return Promise.reject(error)
//   })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
