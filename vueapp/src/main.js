import Vue from 'vue'
import _axios from './plugins/axios'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

Vue.config.productionTip = false
Vue.use(Antd);

Vue.prototype.$http = _axios;
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
