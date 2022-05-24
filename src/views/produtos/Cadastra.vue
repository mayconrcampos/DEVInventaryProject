<template>
  <div id="cadastro" class="bg-light">
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="d-flex flex-row fs-5 w-100">
        <div class="w-50 ms-3">
          <span class="">CADASTRO DE ITENS</span>
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
      <h3 class="text-left mt-4 fw-bold">Preencha os campos para cadastrar</h3>

      <div id="form" class="bg-white w-100 mt-4 p-4 rounded-2 shadow">
        <h5 class="fs-4">Dados Principais</h5>

        <Form @submit="cadastraProduto">
          <div class="row">
            <div class="col-lg-3">
              <label class="col-form-label">Código de Patrimônio</label>
              <Field
                :rules="validaCodigo"
                v-model="produto.codigo"
                name="codigo"
                type="text"
                class="form-control"
              />
              <ErrorMessage name="codigo" class="text-danger" />
            </div>

            <div class="col-lg-6">
              <label class="col-form-label">Título do Item</label>
              <Field
                :rules="validaTitulo"
                v-model="produto.titulo"
                name="titulo"
                type="text"
                class="form-control"
              />
              <ErrorMessage name="titulo" class="text-danger" />
            </div>
            <div class="col-lg-3">
              <label class="col-form-label">Categoria do Item</label>
              <Field
                :rules="validaCategoria"
                v-model="produto.categoria"
                name="categoria"
                type="text"
                class="form-control"
              />
              <ErrorMessage name="categoria" class="text-danger" />
            </div>
          </div>

          <h5 class="fs-4 mt-5">Dados Complementares</h5>

          <div class="row">
            <div class="col-lg-3">
              <label class="col-form-label">Valor</label>
              <Field
                :rules="validaValor"
                v-model="produto.valor"
                name="valor"
                type="text"
                class="form-control"
              />
              <ErrorMessage name="valor" class="text-danger" />
            </div>
            <div class="col-lg-9">
              <label class="col-form-label">Inserir foto</label>
              <Field
                :rules="validaFoto"
                v-model="produto.foto.file"
                name="arquivo"
                type="file"
                @change="arquivoSelecionado"
                class="form-control"
              />
              <ErrorMessage name="arquivo" class="text-danger" />
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <label class="col-form-label">Marca</label>
              <Field
                :rules="validaMarca"
                v-model="produto.marca"
                name="marca"
                type="text"
                class="form-control"
              />
              <ErrorMessage name="marca" class="text-danger" />
            </div>
            <div class="col-lg-6">
              <label class="col-form-label">Modelo</label>
              <Field
                :rules="validaModelo"
                v-model="produto.modelo"
                name="modelo"
                type="text"
                class="form-control"
              />
              <ErrorMessage name="modelo" class="text-danger" />
            </div>
          </div>

          <div class="row">
            <div class="col-lg-12">
              <label class="col-form-label">Descrição</label>
              <textarea
                class="form-control"
                v-model="produto.descricao"
                name=""
                id=""
                cols="30"
                rows="5"
              ></textarea>
            </div>
          </div>

          <div class="d-flex justify-content-end mt-4">
            <button @click="limpar()" id="btnlimpar" class="btn me-3">
              Limpar
            </button>
            <button id="btnsalvar" class="btn">
              {{ status_edita ? "Editar" : "Salvar" }}
            </button>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapMutations, mapState } from "vuex";
import { Field, Form, ErrorMessage } from "vee-validate";

export default {
  name: "caDastra",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      produto: {
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
      },
    };
  },
  computed: {
    ...mapState({
      logado: (state) => state.usuarioStore.logado,
      status_edita: (state) => state.produtosStore.edita,
      produto_para_editar: (state) => state.produtosStore.produto,
      indice_produto: (state) => state.produtosStore.indice_produto
    }),
  },
  mounted() {
    this.preencheCampos(this.produto_para_editar, this.indice_produto);
  },
  methods: {
    ...mapMutations(["addProduto", "setEdita", "setProduto", "setIndiceProduto", "setEditaProduto"]),
    ...mapActions(["salvaProdutosDB"]),
    cadastraProduto() {
      if (!this.status_edita) {
        this.addProduto({
          id: new Date().getTime(),
          codigo: this.produto.codigo,
          titulo: this.produto.titulo,
          categoria: this.produto.categoria,
          valor: this.produto.valor,
          foto: this.produto.foto,
          marca: this.produto.marca,
          modelo: this.produto.modelo,
          descricao: this.produto.descricao,
          emprestado: {
          status: false,
          usuario: ""
        }
        });
        this.$toast.success("Produto cadastrado com sucesso");
        this.limpar()
        this.salvaProdutosDB();
        this.$router.push("/menu/geral/inventario");
      }else{
        this.setEditaProduto({
          codigo: this.produto.codigo,
          titulo: this.produto.titulo,
          categoria: this.produto.categoria,
          valor: this.produto.valor,
          foto: this.produto.foto,
          marca: this.produto.marca,
          modelo: this.produto.modelo,
          descricao: this.produto.descricao,
          emprestado: {
          status: false,
          usuario: ""
        }
        })
        this.$toast.success("Produto atualizado com sucesso")
        this.limpar()
        this.salvaProdutosDB();
        this.$router.push("/menu/geral/inventario");
      }
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
      this.setEdita(false);
      this.setIndiceProduto(false);

    },
    preencheCampos(obj = null, indice = null) {
      if (obj || indice) {
        this.produto = obj;
      }
    },
    validaCodigo(codigo) {
      if (codigo) {
        return true;
      }
      return "Código obrigatório";
    },
    validaTitulo(titulo) {
      if (titulo) {
        return true;
      }
      return "Título obrigatório";
    },
    validaCategoria(categoria) {
      if (categoria) {
        return true;
      }
      return "Categoria obrigatório";
    },
    validaValor(Valor) {
      if (!isNaN(Valor) && Valor > 0) {
        return true;
      }
      return "Valor obrigatório";
    },
    validaFoto(foto) {
      if (foto) {
        
        let formato = foto.slice(11, 15);

        if (
          formato == "png;" ||
          formato == "jpeg" ||
          formato == "webp" ||
          foto == ""
        ) {
          
          return true;
        }
        return "Somente extensão 'png' 'jpeg' 'webp'";
      } else {
        return true;
      }
    },
    validaMarca(Marca) {
      if (Marca) {
        return true;
      }
      return "Marca obrigatório";
    },
    validaModelo(Modelo) {
      if (Modelo) {
        return true;
      }
      return "Modelo obrigatório";
    },
    arquivoSelecionado(event) {
      var arquivo = event.target.files || event.dataTransfer.files;
      this.produto.foto.nome = arquivo[0].name;
      if (!arquivo.length) {
        this.produto.foto.file = "";
        return;
      }
      this.criaImagem(arquivo[0]);
    },
    criaImagem(arquivo) {
      var reader = new FileReader();
      var vm = this;

      reader.onload = (e) => {
        vm.imagem = e.target.result;
        this.produto.foto.file = vm.imagem;
      };

      reader.readAsDataURL(arquivo);
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
</style>