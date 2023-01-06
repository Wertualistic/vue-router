import { createWebHistory, createRouter } from "vue-router";
import { App } from "../App.vue";

const routes = [
    {
        path: "/",
        component: App,
        children: [
            {
                path: "/home",
                component: () => import('../pages/home-page.vue')
            },
            {
                path: "/about",
                component: () => import('../pages/about-page.vue')
            },
            {
                path: "/portfolio",
                component: () => import('../pages/portfolio-page.vue')
            }
        ]
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})
export default router;