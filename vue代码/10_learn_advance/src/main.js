import { createApp } from 'vue'
// import App from './01_自定义指令/App.vue'
// import App from './02_内置组件补充/App.vue'
import App from './03_过度动画/App.vue'
import directiveIndex from './directives'
const app = createApp(App)
directiveIndex(app)

app.mount('#app')
