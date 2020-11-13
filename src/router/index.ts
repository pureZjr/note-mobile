import { createRouter, createWebHashHistory } from "vue-router";

import Home from '../views/Home/index.vue'


const routes: any[] = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/login",
        name: "Login",
        component: () =>
            import(/* webpackChunkName: "Login" */ '../views/Login/index.vue'),
    },
    {
        path: "/page1",
        name: "Page1",
        component: () =>
            import(/* webpackChunkName: "Page1" */ '../views/Page1/index.vue'),
    },
    {
        path: "/not-found",
        name: "NotFound",
        component: () =>
            import(/* webpackChunkName: "NotFound" */ '../views/NotFound/index.vue'),
    },
]


const router = createRouter({
    history: createWebHashHistory(process.env.BASE_URL),
    routes,
});


export default router;