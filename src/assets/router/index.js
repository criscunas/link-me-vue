import { createRouter, createWebHistory } from "vue-router";
import DashBoard from '../../../views/DashBoard.vue'
import LandingPages from '../../components/LandingPages.vue'

const routes = [
  {
    path:"/",
    name: 'Home',
    component: LandingPages
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component : DashBoard
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router