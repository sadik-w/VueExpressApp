import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    name: 'whl'
  },       //状态管理
  mutations: {},   //修改state
  actions: {},    //异步操作
  getters: {},     //计算属性
  modules: {}     //模块
})
export default store