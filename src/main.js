import './plugins/axios'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import XLSX from 'xlsx'
import axios from 'axios'


createApp(App).use(router).use(XLSX).use(axios).mount('#app')

