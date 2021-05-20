import { createWebHashHistory, createRouter } from "vue-router"

const routes = [
    {
        path: "/",
        name: "hoy",
        component: () => import('../views/daily/Hoy.vue')
    },
    {
        path: "/ayer",
        name: "ayer",
        component: () => import('../views/daily/Ayer.vue')
    },
    {
        path: "/archivo",
        name: "archivo",
        component: () => import('../views/daily/Archivo.vue')
    },
    {
        path: "/test",
        name: "test",
        component: () => import('../views/Default.vue')
    },
    {
        path: "/prueba",
        name: "prueba",
        component: () => import('../views/Default.vue')
    },
    {
        path: "/prueba2",
        name: "prueba2",
        component: () => import('../views/Default.vue')
    },
    {
        path: "/prueba3",
        name: "prueba3",
        component: () => import('../views/Default.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router