import Vue from 'vue'
import VueRouter from 'vue-router'

import Index from './components/Index.vue'
import ListaDeRegalos from './components/ListaDeRegalos.vue'
import Portada from './components/portada.vue'

/* import Binding from './components/Binding.vue' */

Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes: [
        /* { path: '/', redirect: '/binding' }, */
        {path: '/', redirect: '/portada'},
        {path: '/index', component: Index},
        {path: '/lista-de-regalos', component: ListaDeRegalos},
        {path: '/portada', component: Portada},
    ]
})