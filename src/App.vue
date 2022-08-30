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
    ...mapActions(["carregaColaboradoresDB", "carregaProdutosDB"]),
    ...mapMutations(["setLogado"]),
    verificaLogado() {
      
        try {
          this.setLogado(this.$cookies.get("logado"));
        
        } catch (error) {
          console.log("Cookie Error: ",error)
        }
      
    },
  },
  
  mounted() {
    this.verificaLogado();
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
  
  position: fixed;
  width: 100%;

  height: auto;
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
