import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueFullPage from 'vue-fullpage.js'
import 'vue-fullpage.js/dist/style.css'
import {plugin,defaultConfig} from '@formkit/vue'
import router from './assets/router'
import axios from 'axios'
import store from './store'

const app = createApp(App)

const axiosInstance = axios.create({
    baseURL: 'http://localhost:3050',
    headers : {
        'Content-Type': 'application/json'
    }
})

app.config.globalProperties.$axios = axiosInstance;

app.use(store)
app.use(router)
app.use(VueFullPage)
app.use(plugin,defaultConfig)
app.mount('#app')
