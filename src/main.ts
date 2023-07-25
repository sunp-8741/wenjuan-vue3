import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'
import router from '@/router'
import { PiniaUndo } from 'pinia-undo'
import { createPinia } from 'pinia'
const pinia = createPinia()
pinia.use(PiniaUndo)
createApp(App).use(Antd).use(router).use(pinia).mount('#app')
