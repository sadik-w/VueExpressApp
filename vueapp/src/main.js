import Vue from 'vue'
import _axios from './plugins/axios'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$http = _axios;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
