import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './components/Index.vue'

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        /* { path: '/', redirect: '/binding' }, */
        {path: '/', redirect: '/index'},
        {path: '/index', component: Index},
    ]
})