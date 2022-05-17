import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import Toaster from '@meforma/vue-toaster'
import VueCookies from 'vue-cookies'
import { createRouter, createWebHashHistory } from 'vue-router'
import VueGravatar from "vue3-gravatar"

// Import das Stores - Vuex
import colaboradoresStore from './store/colaboradoresStore'
import emprestimoStore from './store/emprestimoStore'
import inventarioStore from './store/inventarioStore'
import itensStore from './store/itensStore'

// Import das Views - Vue-router
import error404 from "./views/default/error404.vue"
import Login from "./views/user/Login.vue"

// Declarando módulos das Stores
const store = createStore({
    modules: {
        colaboradoresStore,
        emprestimoStore,
        inventarioStore,
        itensStore
    }
})

// Definição das rotas

const routes = [
    {path: "/", redirect: "/login"},
    {path: "/login", component: Login},
    { path: "/:pathMatch(.*)", component: error404 }
]

// Declarando rotas no Router

const router = new createRouter({
    routes,
    history: createWebHashHistory()
})

createApp(App)
    .use(store)
    .use(Toaster)
    .use(router)
    .use(VueGravatar)
    .use(VueCookies)
    .mount('#app')
