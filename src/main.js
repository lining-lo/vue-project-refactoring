import { createApp } from 'vue'
import App from './App.vue'
//引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
//引入路由
import router from './router'
//引入icon图标
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)

//注册icon图标
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}

//element-plus全局引入
app.use(ElementPlus)
app.use(router)

app.mount('#app')
