import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import JsStore from './database'
console.log(JsStore)

const app = createApp(App)

app.use(createPinia())

app.mount('#app')
