import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import Highcharts from 'highcharts'
import exportingInit from 'highcharts/modules/exporting'
import exportingCSV from 'highcharts/modules/export-data'
import accessibility from 'highcharts/modules/accessibility'

if (typeof Highcharts === 'object') {
  exportingInit(Highcharts)
  exportingCSV(Highcharts)
  accessibility(Highcharts)
}

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
