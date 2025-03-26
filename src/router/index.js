import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        component: () => import('../views/Main/index.vue'),
        redirect:'/home',
        children: [
            {
                path: '/home',
                name: 'home',
                component: () => import('../views/Home/index.vue')
            },
            {
                path: '/user',
                name: 'user',
                component: () => import('../views/User/index.vue')
            },
            {
                path: '/mall',
                name: 'mall',
                component: () => import('../views/Mall/index.vue')
            },
            {
                path: '/page1',
                name: 'page1',
                component: () => import('../views/Page1/index.vue')
            },
            {
                path: '/page2',
                name: 'page2',
                component: () => import('../views/Page2/index.vue')
            }
        ]
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router