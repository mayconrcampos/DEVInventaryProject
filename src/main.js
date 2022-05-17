import { createApp } from 'vue'
import App from './App.vue'
import { createStore } from 'vuex'

// Import das Stores
import colaboradoresStore from './store/colaboradoresStore'
import emprestimoStore from './store/emprestimoStore'
import inventarioStore from './store/inventarioStore'
import itensStore from './store/itensStore'

// Declarando módulos das Stores
const store = createStore({
    modules: {
        colaboradoresStore,
        emprestimoStore,
        inventarioStore,
        itensStore
    }
})

createApp(App)
    .use(store)
    .mount('#app')
