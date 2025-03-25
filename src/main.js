import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入路由
import router from './router'

const app = createApp(App)

//element-plus全局引入
app.use(ElementPlus)
app.use(router)

app.mount('#app')
