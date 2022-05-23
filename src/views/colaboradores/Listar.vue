<template>
  <div id="cadastro" class="bg-light">
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="d-flex flex-row fs-5 w-100">
        <div class="w-50 ms-3">
          <span class="">LISTAGEM DE COLABORADORES</span>
        </div>
        <div class="w-50 text-end me-3">
          <span id="gravatar"
            ><vue-gravatar :email="logado.usuario" default="404" alt="nobody" />
            {{ logado.usuario }}</span
          >
        </div>
      </div>
    </nav>
    <div class="container mb-5">
      <h3 class="text-left mt-4 fw-bold">
        Utilize a barra de pesquisa para buscar
      </h3>

      <div class="row">
        <div class="col-lg-10">
          <input type="text" class="form-control" />
        </div>
        <div class="col-lg-2">
          <button class="btn">
            <i class="fa-solid fa-magnifying-glass"></i> Buscar
          </button>
        </div>
      </div>
      <div id="form" class="bg-light w-100 mt-4 p-4 rounded-2 shadow">
        <!----------- Cards dos usuários ---------->
        <div class="album py-3 bg-light">
          <div class="container">
            <div class="row row-cols-1 row-cols-sm-1 row-cols-md-3 g-3">
              
              
              
              <div
                class="col rounded"
                v-for="(col, index) in colaboradores"
                :key="index"
              >
                <div class="card shadow-lg rounded">
                  <vue-gravatar :email="col.email" default="404" alt="nobody" />

                  <div class="card-body">
                    <p class="card-text text-center">
                      <strong>{{ col.nome }}</strong>
                    </p>

                    <div class="card-text text-center">
                      <small class="card-text text-center">{{
                        col.email
                      }}</small>
                    </div>

                    <p class="text-center">{{ col.fone }}</p>
                    <hr />

                    <p class="text-center">
                      <strong>{{ col.cargo }}</strong>
                    </p>
                    <hr />
                    <button
                      class="btn btn-light"
                      @click="preencheCampos(col, index)"
                    >
                      Editar
                    </button>
                  </div>
                </div>
              </div>



            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
export default {
  name: "lisTar",
  data() {
    return {
      show: false,
      nome: "",
    };
  },
  computed: {
    ...mapState({
      logado: (state) => state.usuarioStore.logado,
      colaboradores: (state) => state.colaboradoresStore.colaboradores,

    }),
  },
  methods: {
    ...mapMutations(["setColaborador", "setIndiceColaborador", "setEditaColaborador"]),
    preencheCampos(colaborador, indice){
      console.log("colaborador: ", colaborador, "Indice",indice)
      this.setColaborador(colaborador);
      this.setIndiceColaborador(indice);
      this.setEditaColaborador(true);
      this.$router.push("/menu/colabs/add");
    }
  },
};
</script>

<style scoped>
#cadastro {
  height: 100%;
  overflow-y: scroll;
}
nav {
  background-color: #143168;
  color: aliceblue;
}
.btnstatusnaempresa {
  border-radius: 10px !important;
  background-color: #4caf50;
  padding: 3px;
  font-size: small;
  color: white;
  font-weight: bold;
  width: 80%;
}
.btnstatusemprestado {
  border-radius: 10px !important;
  background-color: #f9a825;
  padding: 3px;
  font-size: small;
  color: white;
  font-weight: bold;
  width: 80%;
}
#img {
  max-height: 100%;
}
#gravatar img {
  width: 30px !important;
  border-radius: 50% !important;
}
.card img {
  margin: auto;
  margin-top: 20px;
  width: 25%;
  border-radius: 50%;
}
</style>