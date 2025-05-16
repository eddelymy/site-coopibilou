import './assets/style/main.css'
import flashMessagePlugin from "@/plugins/flashMessagePlugin.js";

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(flashMessagePlugin)

app.mount('#app')
