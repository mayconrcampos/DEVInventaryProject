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
      logado: (state) => state.colaboradoresStore.logado,
    }),
  },
  methods: {
    ...mapActions(["carregaColaboradoresDB"]),
    ...mapMutations(["setLogado"]),
    verificaLogado(){
      if(this.$cookies.get("logado").logado){
        this.setLogado(this.$cookies.get("logado"))
      }
      
    }
  },
  mounted() {
    this.carregaColaboradoresDB();
    this.verificaLogado()
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

@media (max-width: 650px) {
  #pai {
    display: block;
    overflow-y: scroll;
  }
}
</style>
