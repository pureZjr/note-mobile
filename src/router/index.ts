import { createRouter, createWebHashHistory } from 'vue-router'

const routes: any[] = [
    {
        path: '/',
        name: 'newest-files',
        component: () => import(/* webpackChunkName: "newest-files" */ '../views/NewestFiles/index.vue'),
    },
    {
        path: '/folders/:id',
        name: 'folders',
        component: () => import(/* webpackChunkName: "folders" */ '../views/Folders/index.vue'),
    },
    {
        path: '/userinfo',
        name: 'userinfo',
        component: () => import(/* webpackChunkName: "userinfo" */ '../views/UserInfo/index.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import(/* webpackChunkName: "Login" */ '../views/Login/index.vue'),
    },
    {
        path: '/page1',
        name: 'Page1',
        component: () => import(/* webpackChunkName: "Page1" */ '../views/Page1/index.vue'),
    },
    {
        path: '/not-found',
        name: 'NotFound',
        component: () => import(/* webpackChunkName: "NotFound" */ '../views/NotFound/index.vue'),
    },
]

const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
})

export default router
