import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import {init, connection as database} from './scripts'

// Initialize database
init();

const app = createApp(App)

// Database accessible globally
app.config.globalProperties.$database = database

app.use(createPinia())

app.mount('#app')
