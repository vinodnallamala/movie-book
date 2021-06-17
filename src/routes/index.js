import VueRouter from 'vue-router'
import Vue from 'vue'

import topRatedMovies from '@/components/topRatedMovies.vue';
import upcomingMovies from '@/components/upcomingMovies.vue'

Vue.use(VueRouter)


const routes = [
    { path: '/top-rated', name: 'top', component: topRatedMovies },
    { path: '/upcoming', name: 'upcoming', component: upcomingMovies },
    {
        path: '/',
        redirect: '/top-rated',
        name: 'default'
    }
]
export default new VueRouter({
    mode: 'history',
    hash: false,
    routes // short for `routes: routes`
})
