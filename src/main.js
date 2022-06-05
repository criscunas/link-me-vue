import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueFullPage from 'vue-fullpage.js'
import 'vue-fullpage.js/dist/style.css'
import {plugin,defaultConfig} from '@formkit/vue'
import router from './assets/router'
import { createPinia } from 'pinia'
import VueCookies from 'vue-cookies'

const app = createApp(App)
app.use(VueCookies, {expire: '7d'})
app.use(createPinia())
app.use(router)
app.use(VueFullPage)
app.use(plugin,defaultConfig)
app.mount('#app')
