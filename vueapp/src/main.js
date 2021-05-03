import Vue from 'vue'
import { api } from './plugins/async'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './registerServiceWorker'
import store from './store'

Vue.use(ElementUI);
Vue.config.productionTip = false
Vue.use(Antd);

Vue.prototype.$http = api;
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
