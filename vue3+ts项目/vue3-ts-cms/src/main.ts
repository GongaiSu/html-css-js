import { createApp } from 'vue'
import 'normalize.css'
import './assets/css/index.less'
import App from './App.vue'
import router from './router'
import store from './store'
import registerIcons from './global/register-icons'

createApp(App).use(registerIcons).use(store).use(router).mount('#app')
