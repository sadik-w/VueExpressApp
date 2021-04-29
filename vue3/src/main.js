import {api} from './plugins/async'
import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

var app=createApp(App)
app.use(store).use(router).mount('#app')
app.config.globalProperties.API=api

