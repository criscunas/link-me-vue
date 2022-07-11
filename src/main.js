import { createApp } from 'vue'
import App from './App.vue'
import VueFullPage from 'vue-fullpage.js'
import VueCookies from 'vue-cookies';
import {plugin,defaultConfig} from '@formkit/vue'
import router from './assets/router'
import axios from 'axios'
import vSelect from 'vue-select'
import 'vue-select/dist/vue-select.css';
import 'vue-fullpage.js/dist/style.css'
import './assets/tailwind.css'


const app = createApp(App)

const axiosInstance = axios.create({
    baseURL: process.env.VUE_API,
    headers : {
        'Content-Type': 'application/json'
    }
})

app.config.globalProperties.$axios = axiosInstance;

app.component('v-select', vSelect)
app.use(VueCookies)
app.use(router)
app.use(VueFullPage)
app.use(plugin,defaultConfig)
app.mount('#app')
