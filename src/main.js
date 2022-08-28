import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'
import Toaster from '@meforma/vue-toaster'
import VueCookies from 'vue-cookies'
import { createRouter, createWebHashHistory } from 'vue-router'
import VueGravatar from "vue3-gravatar"
import MDialogPlugin from 'vue-m-dialog'
import 'vue-m-dialog/dist/style.css'



// Import das Stores - Vuex
import colaboradoresStore from './store/colaboradoresStore'
import produtosStore from './store/produtosStore'
import formularioCadastroStore from './store/formularioCadastroStore'
import usuarioStore from './store/usuarioStore'

// Import das Views - Vue-router
import error404 from "./views/default/error404.vue"
import Login from "./views/user/Login.vue"
import Menu from "./views/layout/Menu.vue"
import Cadastro from "./views/colaboradores/Cadastro.vue"
import Inventario from "./views/produtos/Inventario.vue"
import Listar from "./views/colaboradores/Listar.vue"
import Cadastra from "./views/produtos/Cadastra.vue"
import Emprestimos from "./views/produtos/Emprestimos.vue"

// Declarando módulos das Stores
const store = createStore({
    modules: {
        colaboradoresStore,
        produtosStore,
        formularioCadastroStore,
        usuarioStore
    }
})

// Definição das rotas

const routes = [
    { path: "/", redirect: "/user/login" },
    { path: "/user/login", component: Login, meta: { title: "Login"} },
    { path: "/:pathMatch(.*)", component: error404, meta: { title: "Error 404"} },

    {
        path: "/menu", meta: { auth: true }, component: Menu, children: [
            { 
                path: "colabs/add", 
                component: Cadastro, 
                meta: { 
                    title: "Cadastra Colaborador"
                }  
            },
            { 
                path: "colabs/listar", 
                component: Listar, 
                meta: { 
                    title: "Listagem de Colaboradores"
                } 
            },
            { 
                path: "geral/inventario", 
                component: Inventario, 
                meta: { 
                    title: "Inventário"
                } 
            },
            { 
                path: "/produtos/cadastra/", 
                component: Cadastra, 
                meta: { 
                    title: "Cadastro de Produtos"
                } 
            },
            { 
                path: "/produtos/emprestimos", 
                component: Emprestimos, 
                meta: { 
                    title: "Empréstimo de Produtos"
                } 
            }

        ]
    }
]

// Declarando rotas no Router

const router = new createRouter({
    routes,
    history: createWebHashHistory()
})

// Setando títulos das págginas

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`
    next()
})



// Regras para proteção de rotas
router.beforeEach((to, from, next) => {
    if (to.meta.auth && !VueCookies.get("logado")) {
        next("/")
    }else if(!to.meta.auth && VueCookies.get("logado")){
        next("/menu/geral/inventario")
    }else{
        next()
    }
    
})

createApp(App)
    .use(store)
    .use(MDialogPlugin)
    .use(Toaster)
    .use(router)
    .use(VueGravatar)
    .use(VueCookies)
    .mount('#app')
