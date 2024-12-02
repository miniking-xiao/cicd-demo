import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import './style/reset.scss'

// 全局组件--地图
import map from '@map/app-map.vue'

const app = createApp(App)
app.component('AppMap', map)
app.use(createPinia())
app.use(router)

app.mount('#app')
