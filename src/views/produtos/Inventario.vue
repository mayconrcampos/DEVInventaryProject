<template>
  <div id="cadastro" class="bg-light">
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="d-flex flex-row fs-5 w-100">
        <div class="w-50 ms-3">
          <span class="">INVENTÁRIO</span>
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
      <h3 class="text-left mt-4 fw-bold">Estatísticas do Sistema</h3>

      <div class="bg-white w-100 mt-4 p-4 rounded shadow">
        <div class="card-group">
          <div class="card rounded shadow me-3" style="width: 13rem">
            <div class="card-body">
              <h2
                class="
                  card-title
                  d-flex
                  flex-row
                  justify-content-evenly
                  m-4
                  fs-1
                "
              >
                <i class="fa-solid fa-users"></i> {{ numColaboradores }}
              </h2>
              <h6 class="card-subtitle mb-2 text-muted text-center">
                Colaboradores
              </h6>
            </div>
          </div>

          <div class="card border rounded shadow me-3" style="width: 13rem">
            <div class="card-body">
              <h2
                class="
                  card-title
                  d-flex
                  flex-row
                  justify-content-evenly
                  m-4
                  fs-1
                "
              >
                <i class="fa-solid fa-cabinet-filing"></i> {{ num_itens }}
              </h2>
              <h6 class="card-subtitle mb-2 text-muted text-center">Itens</h6>
            </div>
          </div>

          <div class="card border rounded shadow me-3" style="width: 13rem">
            <div class="card-body">
              <h2
                class="
                  card-title
                  d-flex
                  flex-row
                  justify-content-evenly
                  m-4
                  fs-1
                "
              >
                <i class="fa-solid fa-brazilian-real-sign"></i>
                {{ total }}
              </h2>
              <h6 class="card-subtitle mb-2 text-muted text-center">
                Valor em Produtos
              </h6>
            </div>
          </div>

          <div class="card border rounded shadow me-3" style="width: 13rem">
            <div class="card-body">
              <h2
                class="
                  card-title
                  d-flex
                  flex-row
                  justify-content-evenly
                  m-4
                  fs-1
                "
              >
                <i class="fa-solid fa-boxes-stacked"></i> 70
              </h2>
              <h6 class="card-subtitle mb-2 text-muted text-center">
                Empréstimos
              </h6>
            </div>
          </div>
        </div>

        <h5 class="fs-4 mt-4">Busca de Itens</h5>

        <div class="row">
          <div class="col-lg-10">
            <input
              type="text"
              v-model="campobusca"
              class="form-control"
              
            />
          </div>
          <div class="col-lg-2">
            <button type="submit" class="btn btn-light" @click="procurando()">
              <i class="fa-solid fa-magnifying-glass"></i> Buscar
            </button>
          </div>
        </div>

        <!-------- Cards de todos os produtos do Array --------->
        <div
          v-if="!procurar"
          class="row mh-75 row-cols-1 row-cols-lg-4 g-1 mt-3"
        >
          <!--- Colunas---->

          <div
            class="col rounded shadow"
            v-for="(produto, indice) in produtos"
            :key="indice"
          >
            <div class="card h-100">
              <div id="cardproduto" class="card-body">
                <h5 class="card-title h-50 text-center">
                  <img
                    v-if="produto.foto.file !== ''"
                    id="img"
                    class="img-fluid mt-2"
                    :src="produto.foto.file"
                  />
                  <img
                    v-else
                    id="img"
                    class="img-fluid mt-2"
                    src="../../assets/defaultimg.png"
                  />
                </h5>
                <p class="card-text">
                  <small>{{ produto.titulo }}</small
                  ><br />
                </p>
                <div class="card-text">
                  <span class="text-secondary"
                    ><strong>{{ produto.modelo }}</strong></span
                  >
                  <h5>{{ produto.descricao }}</h5>
                </div>
              </div>
              <div class="card-footer text-center">
                <button class="btn btnstatusnaempresa">Na empresa</button>
                <button class="btn" @click="preencheCampos(produto, indice)">
                  Editar
                </button>
              </div>
            </div>
          </div>
        </div>

        <!------------------- Cards dos itens filtrados ---------------------------->
        <div
          v-else
          class="row mh-75 row-cols-1 row-cols-lg-4 g-1 mt-3"
        >
          <!--- Colunas---->

          <div
            class="col rounded shadow"
            v-for="(p, indice) in filtrados"
            :key="indice"
          >
            <div class="card h-100">
              <div id="cardproduto" class="card-body">
                <h5 class="card-title h-50 text-center">
                  <img
                    v-if="p.produto.foto.file !== ''"
                    id="img"
                    class="img-fluid mt-2"
                    :src="p.produto.foto.file"
                  />
                  <img
                    v-else
                    id="img"
                    class="img-fluid mt-2"
                    src="../../assets/defaultimg.png"
                  />
                </h5>
                <p class="card-text">
                  <small>{{ p.produto.titulo }}</small
                  ><br />
                </p>
                <div class="card-text">
                  <span class="text-secondary"
                    ><strong>{{ p.produto.modelo }}</strong></span
                  >
                  <h5>{{ p.produto.descricao }}</h5>
                </div>
              </div>
              <div class="card-footer text-center">
                <button class="btn btnstatusnaempresa">Na empresa</button>
                <button class="btn" @click="preencheCampos(p.produto, p.indice)">
                  Editar
                </button>
              </div>
            </div>
          </div>
        </div>




        
        


      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations, mapState } from "vuex";
export default {
  name: "invenTario",
  data() {
    return {
      procurar: false,
      campobusca: "",
      filtrados: []
    };
  },
  computed: {
    ...mapGetters({
      total: "totalProdutos",
    }),
    ...mapState({
      logado: (state) => state.usuarioStore.logado,
      produto_: (state) => state.produtosStore.produto,
      numColaboradores: (state) =>
        state.colaboradoresStore.colaboradores.length,
      num_itens: (state) => state.produtosStore.produtos.length,
      produtos: (state) => state.produtosStore.produtos,
      status_edita: (state) => state.produtosStore.edita,
      indice_produto: (state) => state.produtosStore.indice_produto,
    }),
  },
  methods: {
    ...mapMutations(["setProduto", "setEdita", "setIndiceProduto"]),

    preencheCampos(produto, indice) {
      console.log("Produto: ", produto, "Indice",indice)
      this.setProduto(produto);
      this.setIndiceProduto(indice);
      this.setEdita(true);
      this.$router.push("/produtos/cadastra");
    },
    procurando() {
      if (this.campobusca.length > 0) {
        console.log(this.campobusca);
        this.procurar = true;
        this.filtrados = []
        
        this.produtos.forEach((el, indice) => {
          if(el.titulo.toLowerCase() == this.campobusca.toLowerCase()){
            this.filtrados.push({
              "indice": indice,
              "produto": el
            })
          }
        })

        
        console.log(this.filtrados)
      } else {
        this.procurar = false;
      }
    },
  },
};
</script>

<style scoped>
#cadastro {
  height: 100%;
  overflow-y: scroll;
}
nav {
  transition: 1s all;
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
@media (min-width: 1024px) {
  .card-body h2 {
    font-size: 1.9em !important;
  }
  #cardproduto .card-text h5 {
    font-size: 0.9em !important;
  }
}

.card-body h2 {
  transition: 1s all;
}

@media (max-width: 800px) {
  .card-body h2 {
    font-size: 1.4em !important;
  }
}

@media (max-width: 700px) {
  .card-body h2 {
    font-size: 1.2em !important;
  }
}

@media (max-width: 600px) {
  .card-body h2 {
    font-size: 1em !important;
  }
  #gravatar {
    font-size: 0.8em !important;
  }
}
</style>