import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../views/Main/index.vue'),
        children: [
            {
                path: '/',
                name: 'home',
                component: () => import('../views/Home/index.vue')
            }
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router