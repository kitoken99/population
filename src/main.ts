import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import HighchartsVue from 'highcharts-vue'

const app = createApp(App)
app.use(HighchartsVue)

app.use(createPinia())
app.use(router)

app.mount('#app')
