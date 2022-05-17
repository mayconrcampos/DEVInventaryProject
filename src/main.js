import { createApp } from 'vue'
import App from './App.vue'
import store from './store/colaboradoresStore'
import { createStore } from 'vuex'



const store = createStore({
    modules: {

    }
})

createApp(App).use(store).mount('#app')
