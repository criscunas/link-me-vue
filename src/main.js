import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import VueFullPage from 'vue-fullpage.js'
import 'vue-fullpage.js/dist/style.css'

const app = createApp(App)
app.use(VueFullPage)
app.mount('#app')
