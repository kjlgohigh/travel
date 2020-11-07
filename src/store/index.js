import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutation'
Vue.use(Vuex)
// 用户关闭了本地存储，会报错
export default new Vuex.Store({
  state,
  mutations
})
