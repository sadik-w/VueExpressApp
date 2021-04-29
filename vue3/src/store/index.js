import { createStore } from 'vuex'

export default createStore({
  state: {
    num: 0
  },
  mutations: {
    add (state) {
      state.num++;//这就代表上面num加加
    },
  },
  actions: {
  },
  modules: {
  }
})
