<template>
  <div id="cadastro" class="bg-light">
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="d-flex flex-row fs-5 w-100">
        <div class="w-50 ms-3">
          <span class="">EMPRÉSTIMOS DE ITENS</span>
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

      <div
        id="form"
        class="bg-white w-100 mt-4 p-4 rounded-2 shadow table-responsive"
      >
        <!----------------------- THEAD TABLE ----------------------------->
        <table class="table text-center">
          <thead>
            <tr>
              <th scope="col">Patrimônio</th>
              <th scope="col">Título</th>
              <th scope="col">Categoria</th>
              <th scope="col">Foto</th>
              <th scope="col">Emprestado para:</th>
            </tr>
          </thead>
          <!----------------------- TBODY TABLE ----------------------------->
          <tbody>
            <tr id="linha" v-for="(item, indice) in produtos" :key="indice">
              <th scope="row">{{ item.codigo }}</th>
              <td>{{ item.titulo }}</td>
              <td>{{ item.categoria }}</td>
              <td>
                <img
                  v-if="item.foto.file !== ''"
                  id="img"
                  class="img-fluid mt-2"
                  :src="item.foto.file"
                />
                <img
                  v-else
                  id="img"
                  class="img-fluid mt-2"
                  src="../../assets/defaultimg.png"
                />
              </td>
              <td>
                <label
                  id="gravatar"
                  class="col-form-label fs-5"
                  @click="selecionaItem(indice, item)"
                  >{{ item.emprestado.status == true ? item.emprestado.usuario : 'Emprestar' }}
                  <vue-gravatar :email="item.email" default="404" alt="nobody" />
                  </label
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-------------------- Modal Aviso em construção ---------------------->

    <m-dialog
      v-model="show"
      title="Emprestar Item Para"
      :draggable="ok"
      width="600px"
    >
      <div class="input-group mb-3">
        <label class="input-group-text" for="inputGroupSelect01"
          >Colaboradores</label
        >
        <select
          class="form-select"
          id="inputGroupSelect01"
          v-model="emailColab"
        >
          <option
            v-for="(c, indice) in colaboradores"
            :key="indice"
            :value="c.email"
            selected
          >
            {{ c.email }}
          </option>
        </select>
      </div>

      <template v-slot:footer>
        <button class="m-dialog--confirm-btn" @click="vincular(emailColab)">
          Vincular
        </button>
      </template>
    </m-dialog>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
export default {
  name: "emprEstimos",
  computed: {
    ...mapState({
      logado: (state) => state.usuarioStore.logado,
      produtos: (state) => state.produtosStore.produtos,
      colaboradores: (state) => state.colaboradoresStore.colaboradores,
      produtodastore: (state) => state.produtosStore.produto,

    }),
  },
  data() {
    return {
      show: false,
      ok: true,
      emailColab: "",
      produto: {},
    };
  },
  methods: {
    ...mapMutations(["setProduto", "setEditaProduto", "setIndiceProduto"]),
    ...mapActions(["salvaProdutosDB"]),
    selecionaItem(indice, produto) {
      this.show = true;
      this.setIndiceProduto(indice);
      this.produto = {
        codigo: produto.codigo,
        titulo: produto.titulo,
        categoria: produto.categoria,
        valor: produto.valor,
        foto: {
          nome: produto.foto.nome,
          file: produto.foto.file,
        },
        marca: produto.marca,
        modelo: produto.modelo,
        descricao: produto.descricao,
        emprestado: {
          status: false,
          usuario: "",
        },
      };
      console.log(indice, produto, this.produto);
    },
    vincular(email) {
      console.log(email)
      this.setProduto({
        codigo: this.produto.codigo,
        titulo: this.produto.titulo,
        categoria: this.produto.categoria,
        valor: this.produto.valor,
        foto: {
          nome: this.produto.foto.nome,
          file: this.produto.foto.file,
        },
        marca: this.produto.marca,
        modelo: this.produto.modelo,
        descricao: this.produto.descricao,
        emprestado: {
          status: true,
          usuario: email,
        },
      });
      this.setEditaProduto(this.produtodastore)
      this.salvaProdutosDB()
      this.limpar()
      this.show = false;
    },
    limpar() {
      this.produto = {
        codigo: "",
        titulo: "",
        categoria: "",
        valor: "",
        foto: {
          nome: "",
          file: "",
        },
        marca: "",
        modelo: "",
        descricao: "",
        emprestado: {
          status: false,
          usuario: ""
        }
      };
      this.setProduto({
        codigo: "",
        titulo: "",
        categoria: "",
        valor: "",
        foto: {
          nome: "",
          file: "",
        },
        marca: "",
        modelo: "",
        descricao: "",
        emprestado: {
          status: false,
          usuario: ""
        }
      });
      this.setIndiceProduto(false);

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
  background-color: #143168;
  color: aliceblue;
}
#btnlimpar {
  background-color: #f9a825;
  color: white;
  width: 100px;
}
#btnsalvar {
  background-color: #4caf50;
  color: white;
  width: 100px;
}
#gravatar img {
  width: 30px !important;
  border-radius: 50% !important;
}
#labeltableimg img {
  width: 30px !important;
  border-radius: 50% !important;
}
#linha {
  transition: 0.5s all;
}
#linha:hover {
  background-color: #143168;
  color: whitesmoke;
}

.img-fluid {
  height: 50px !important;
}
</style>