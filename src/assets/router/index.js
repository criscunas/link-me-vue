import { createRouter, createWebHistory } from "vue-router";
import DashboardPage from "../../../src/pages/DashboardPage.vue"
import ProfilePage from "../../../src/pages/ProfilePage.vue";
import Landing from "../../../views/Landing.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Landing,
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: DashboardPage,
    },
    {
        path: "/:username",
        name: "Profile",
        component: ProfilePage,
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
