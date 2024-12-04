import './style/reset.scss'
import './assets/main.css'
import './assets/tailwind.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// 全局组件--地图
import map from '@map/app-map.vue'

// 全局组件--数据栏
import BorderBox from '@/components/BorderBox.vue'

const app = createApp(App)
app.component('AppMap', map)
app.component('BorderBox', BorderBox)
app.use(createPinia())
app.use(router)

app.mount('#app')
