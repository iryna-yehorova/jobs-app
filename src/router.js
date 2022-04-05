import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter)


import JobsList from "./views/JobsList.vue";
import Vacancy from "./views/Vacancy.vue";

const routes = [
    {
        path: "/",
        name: "main",
        component: JobsList
    },
    {
        path:  '/vacancy/:slug',
        name: "vacancy",
        component: Vacancy,
        props: true
    }
]

const router = new VueRouter({
    mode: 'history',
    routes, 
})

export default router;