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
          <input type="text" class="form-control" v-model="campobusca" @keyup="procurando()" />
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
          <tbody v-if="!campobusca">
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
              <td class="">
                <label
                  id="gravatar"
                  :class="item.emprestado.status ? 'col-form-label fs-5 me-5' : 'col-form-label fs-3 me-5'"
                  @click="selecionaItem(indice, item, item.emprestado.status)"
                  >{{ item.emprestado.status == true ? item.emprestado.usuario : 'Emprestar' }}
                  <vue-gravatar v-if="item.emprestado.status" :email="item.emprestado.usuario" default="404" alt="nobody" />
                  </label
                >
              </td>
            </tr>
          </tbody>

          <!----------------- Tbody somente para elementos filtrados --------------------->

          <tbody v-else>
            <tr id="linha" v-for="(item, indice) in filtrados" :key="indice">
              <th scope="row">{{ item.produto.codigo }}</th>
              <td>{{ item.produto.titulo }}</td>
              <td>{{ item.produto.categoria }}</td>
              <td>
                <img
                  v-if="item.produto.foto.file !== ''"
                  id="img"
                  class="img-fluid mt-2"
                  :src="item.produto.foto.file"
                />
                <img
                  v-else
                  id="img"
                  class="img-fluid mt-2"
                  src="../../assets/defaultimg.png"
                />
              </td>
              <td class="">
                <label
                  id="gravatar"
                  :class="item.produto.emprestado.status ? 'col-form-label fs-5 me-5' : 'col-form-label fs-3 me-5'"
                  @click="selecionaItem(item.indice, item.produto, item.produto.emprestado.status)"
                  >{{ item.produto.emprestado.status == true ? item.produto.emprestado.usuario : 'Emprestar' }}
                  <vue-gravatar v-if="item.produto.emprestado.status" :email="item.produto.emprestado.usuario" default="404" alt="nobody" />
                  </label
                >
              </td>
            </tr>
          </tbody>


        </table>
      </div>
    </div>

    <!-------------------- Modal Empréstimo e devolução de itens ---------------------->

    <m-dialog
      v-model="show"
      :title="statusEmprestado ? 'Clique para Devolver Item' : 'Emprestar para colaborador'"
      :draggable="ok"
      width="600px"
    >
      <div v-if="!statusEmprestado" class="input-group mb-3">
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
          {{c.email}}
          </option>
        </select>
      </div>

      <div v-else class="input-group mb-3 text-center">
        <button class="btn btn-secondary w-100" @click="devolverItem()">Devolver item</button>
      </div>

      <template v-slot:footer>
        <button v-if="!statusEmprestado" class="m-dialog--confirm-btn" @click="vincular(emailColab)">
          Vincular
        </button>
        <button v-else class="btn btn-secondary" @click="show = false">Fechar</button>
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
      indice_produto: (state) => state.produtosStore.indice_produto

    }),
  },
  data() {
    return {
      show: false,
      ok: true,
      emailColab: "",
      produto: {},
      statusEmprestado: false,
      procurar: false,
      campobusca: "",
      filtrados: []
    };
  },
  methods: {
    ...mapMutations(["setProduto", "setEditaProduto", "setIndiceProduto"]),
    ...mapActions(["salvaProdutosDB"]),
    selecionaItem(indice, produto, status) {
      this.statusEmprestado = status
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
          status: produto.emprestado.status,
          usuario: produto.emprestado.usuario,
        },
      };
    },
    procurando(){
      this.filtrados = [];
        this.produtos.forEach((el, indice) => {
          if (
            el.codigo.toLowerCase().search(this.campobusca.toLowerCase()) != -1) {
            this.filtrados.push({
              indice: indice,
              produto: el,
            });
          }
        });
    },
    vincular(email) {
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
      this.$toast.success(`Item ${this.produto.titulo} emprestado para ${email}`)
      this.setEditaProduto(this.produtodastore)
      this.salvaProdutosDB()
      this.limpar()
      this.show = false;
    },
    devolverItem(){
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
          status: false,
          usuario: "",
        },
        
      })
      this.$toast.success(`Item ${this.produto.titulo} devolvido.`)
      this.setEditaProduto(this.produtodastore)
      this.salvaProdutosDB()
      this.limpar()
      this.show = false;
    },
    limpar() {
      this.campobusca = ""
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
  padding-bottom: calc(10%);
  height: auto;
}
nav {
  background-color: #143168;
  color: aliceblue;
  box-shadow: 1px 3px 10px black;
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
  cursor: pointer;
}
#linha:hover {
  background-color: #143168;
  color: whitesmoke;
}

.img-fluid {
  height: 50px !important;
}

@media (max-width: 600px) {
  #gravatar {
    font-size: 0.6em !important;
  }
}
</style>