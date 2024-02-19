import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/reset.less'
import App from './App.vue'
import router from './router'
import pinia from './store'

createApp(App).use(router).use(pinia).mount('#app')
