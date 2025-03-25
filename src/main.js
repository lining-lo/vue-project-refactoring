import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
//全局引入
app.use(ElementPlus)

app.mount('#app')
