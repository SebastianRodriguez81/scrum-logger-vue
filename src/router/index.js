import { createWebHashHistory, createRouter } from "vue-router"

const routes = [
    {
        path: "/",
        name: "hoy",
        component: () => import('../views/Hoy.vue')
    },
    {
        path: "/ayer",
        name: "ayer",
        component: () => import('../views/Ayer.vue')
    },
    {
        path: "/archivo",
        name: "archivo",
        component: () => import('../views/Archivo.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router