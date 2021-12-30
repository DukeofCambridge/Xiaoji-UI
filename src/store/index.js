import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: window.localStorage.getItem('user') ==null?'':JSON.parse(window.localStorage.getItem('user'||'[]')),
    token: window.localStorage.getItem('token')==null?'':JSON.parse(window.localStorage.getItem('token'||'[]')),
    uri: window.localStorage.getItem('uri') ==null?'':JSON.parse(window.localStorage.getItem('uri'||'[]')),
    wea: window.localStorage.getItem('wea') ==null?'':JSON.parse(window.localStorage.getItem('wea'||'[]')),
  },
  mutations: {
    login (state, data) {
      state.user = data
      window.localStorage.setItem('user', JSON.stringify(data))
    },
    setToken(state, data){
      state.token = data
      window.localStorage.setItem('token', JSON.stringify(data))
    },

    logout (state) {
      // 注意不能用 null 清除，否则将无法判断 user 里具体的内容
      state.user = []
      window.localStorage.removeItem('user')
      // state.token = []
      // window.localStorage.removeItem('token')
    },
    enterScreen(state, data){
      state.uri = data
      window.localStorage.setItem('uri', JSON.stringify(data))
    },
    setWeather(state, data){
      state.wea = data
      window.localStorage.setItem('wea', JSON.stringify(data))
    }
  },
  actions: {
  }
})
