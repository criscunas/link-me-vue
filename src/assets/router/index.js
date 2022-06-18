import { createRouter, createWebHistory } from "vue-router";
import DashBoard from '../../../views/DashBoard.vue';
import LandingPages from '../../components/LandingPages.vue';
import UserProfile from '../../../views/UserProfile.vue';

const routes = [
  {
    path:"/",
    name: 'Home',
    component: LandingPages
  }, {
    path: '/dashboard',
    name: 'Dashboard',
    component : DashBoard
  }, {
    path: '/profile',
    name: 'Profile',
    component: UserProfile
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router