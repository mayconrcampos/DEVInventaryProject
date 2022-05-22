<template>
  <div id="pai">
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapState({
      logado: (state) => state.usuarioStore.logado,
    }),
  },
  methods: {
    ...mapActions(["carregaColaboradoresDB", "carregaUsuariosDB", "carregaProdutosDB"]),
    ...mapMutations(["setLogado"]),
    verificaLogado() {
      
        try {
          this.setLogado(this.$cookies.get("logado"));
          console.log(this.logado);
        
        } catch (error) {
          console.log("Deu ruim no cookie: ",error)
        }
      
    },
  },
  
  mounted() {
    this.carregaColaboradoresDB();
    this.verificaLogado();
    this.carregaUsuariosDB();
    this.carregaProdutosDB()
  },
};
</script>

<style scoped>
body {
  padding: 0;
  left: 0;
  bottom: 0;
}
#pai {
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(210, 210, 210, 1) 100%
  );
  display: flex;
  flex-direction: row;
  border: 1px solid black;
  position: fixed;
  width: 100%;

  min-height: max-content;
  bottom: 0;
  top: 0;
}

@media (max-width: 750px) {
  #pai {
    display: block;
    overflow-y: scroll;
  }
}
</style>
