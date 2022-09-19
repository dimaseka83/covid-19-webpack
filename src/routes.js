import VueRouter from 'vue-router'
import Home from './Page/Home.vue'
import DetailGlobals from './Page/DetailGlobals.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: Home
    },
    {
        path: '/detail/:data',
        name: 'detail',
        component: DetailGlobals
    }
];

const router = new VueRouter({
    mode: 'history',
    routes
});

export default router;