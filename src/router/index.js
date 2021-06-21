import { createWebHashHistory, createRouter } from "vue-router"

const routes = [
    {
        path: "/",
        name: "welcome",
        component: () => import('../views/Welcome.vue'),
        children: [
            {
                path: "/login",
                name: "login",
                component: () => import('../views/login/Login.vue')
            },
            {
                path: "/register",
                name: "register",
                component: () => import('../views/login/Register.vue')
            }

        ]
    },
    {
        path: "/logger",
        name: "logger",
        component: () => import('../views/Logger.vue'),
        children: [
            {
                path: "daily",
                name: "daily",
                component: () => import('../views/daily/Diario.vue'),
                children: [
                    {
                        path: "hoy",
                        name: "hoy",
                        component: () => import('../views/daily/Hoy.vue')
                    },
                    {
                        path: "chart",
                        name: "chart",
                        component: () => import('../views/daily/Ayer.vue')
                    },
                    {
                        path: "archivo",
                        name: "archivo",
                        component: () => import('../views/daily/Archivo.vue')
                    },
                ]
            },
            {
                path: "about",
                name: "about",
                component: () => import('../views/about/Default.vue')
            },
            {
                path: "usuario",
                name: "usuario",
                component: () => import('../views/user/Usuario.vue')
            },
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router