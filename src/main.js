import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueFullPage from 'vue-fullpage.js'
import 'vue-fullpage.js/dist/style.css'
import {plugin,defaultConfig} from '@formkit/vue'
import router from './assets/router'

const app = createApp(App)
app.use(router).use(VueFullPage).use(plugin,defaultConfig)
app.mount('#app')
