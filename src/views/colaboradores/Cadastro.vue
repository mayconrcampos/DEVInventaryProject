<template>
  <div id="cadastro" class="bg-light m-auto w-100">
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="d-flex flex-row fs-5 w-100">
        <div class="w-50 ms-3">
          <span class="">CADASTRO DE COLABORADORES</span>
        </div>

        <div class="w-50 text-end me-3">
          <span id="gravatar"
            ><vue-gravatar :email="logado.usuario" default="404" alt="nobody" />
            {{ logado.usuario }}
          </span>
        </div>
      </div>
    </nav>
    <div class="container mb-5">
      <h3 class="text-left mt-4 fw-bold">Preencha os campos para cadastrar</h3>

      <div id="form" class="bg-white w-100 mt-4 p-4 rounded-2 shadow">
        <h5 class="fs-4">Dados Pessoais</h5>

        <Form @submit="adicionaColaborador">
          <div class="row">
            <div class="col-lg-5">
              <label class="col-form-label">Nome Completo</label>
              <Field
                :rules="validaNome"
                name="nome"
                type="text"
                class="form-control"
                v-model="nome"
                :readonly="status_edita"
              />
              <ErrorMessage name="nome" class="text-danger" />
            </div>

            <div class="col-lg-4">
              <label class="col-form-label">Gênero</label>
              <Field
                :rules="validaGenero"
                name="genero"
                class="form-control"
                v-model="genero"
                as="select"
                :readonly="status_edita"
              >
                <option disabled>Selecione</option>
                <option v-for="gen in generos" :key="gen" :value="gen">
                  {{ gen }}
                </option>
              </Field>
              <ErrorMessage name="genero" class="text-danger" />
            </div>

            <div class="col-lg-3">
              <label class="col-form-label">Data Nascimento</label>
              <Field
                :rules="validaDataNasc"
                name="data_nasc"
                type="date"
                class="form-control"
                v-model="data_nasc"
                :readonly="status_edita"
              />
              <ErrorMessage name="data_nasc" class="text-danger" />
            </div>
          </div>

          <div class="row mb-5">
            <div class="col-lg-4">
              <label class="col-form-label">Telefone</label>
              <Field
                :rules="validaFone"
                name="fone"
                type="text"
                class="form-control"
                v-mask="['(##) ####-####', '(##) #####-####']"
                v-model="fone"
              />
              <ErrorMessage name="fone" class="text-danger" />
            </div>

            <div class="col-lg-4">
              <label class="col-form-label">Email</label>
              <Field
                :rules="validaEmail"
                name="email"
                type="email"
                class="form-control"
                v-model="email"
                :readonly="status_edita"
              />
              <ErrorMessage name="email" class="text-danger" />
            </div>

            <div class="col-lg-4">
              <label class="col-form-label">Cargo</label>
              <Field
                :rules="validaCargo"
                name="cargo"
                type="text"
                class="form-control"
                v-model="cargo"
              />
              <ErrorMessage name="cargo" class="text-danger" />
            </div>
          </div>

          <h5 class="fs-4">Dados de Endereço</h5>

          <div class="row">
            <div class="col-lg-4">
              <label class="col-form-label">CEP</label>
              <Field
                :rules="validaCep"
                name="cep"
                type="text"
                class="form-control"
                v-mask="'#####-###'"
                v-model="cep"
              />
              <ErrorMessage name="cep" class="text-danger" />
            </div>

            <div class="col-lg-6">
              <label class="col-form-label">Cidade</label>
              <Field
                :rules="validaCidade"
                name="cidade"
                type="text"
                class="form-control"
                v-model="cidade"
              />
              <ErrorMessage name="cidade" class="text-danger" />
            </div>

            <div class="col-lg-2">
              <label class="col-form-label">UF</label>
              <Field
                :rules="validaUF"
                name="uf"
                class="form-control"
                v-model="uf"
                as="select"
              >
                <option disabled>Escolha a UF</option>
                <option v-for="(uf, index) in UFs" :key="index" :value="uf">
                  {{ uf }}
                </option>
              </Field>
              <ErrorMessage name="uf" class="text-danger" />
            </div>
          </div>

          <div class="row">
            <div class="col-lg-10">
              <label class="col-form-label">Logradouro</label>
              <Field
                :rules="validaLogradouro"
                name="logradouro"
                type="text"
                class="form-control"
                v-model="logradouro"
              />
              <ErrorMessage name="logradouro" class="text-danger" />
            </div>
            <div class="col-lg-2">
              <label class="col-form-label">Número</label>
              <input
                type="text"
                class="form-control"
                v-mask="'######'"
                v-model="numero"
              />
            </div>
          </div>

          <div class="row">
            <div class="col-lg-4">
              <label class="col-form-label">Complemento</label>
              <input type="text" class="form-control" v-model="complem" />
            </div>
            <div class="col-lg-4">
              <label class="col-form-label">Bairro</label>
              <Field
                :rules="validaBairro"
                name="bairro"
                type="text"
                class="form-control"
                v-model="bairro"
              />
              <ErrorMessage name="bairro" class="text-danger" />
            </div>
            <div class="col-lg-4">
              <label class="col-form-label">Ponto de Referência</label>
              <input type="text" class="form-control" v-model="ponto_ref" />
            </div>
          </div>

          <div class="d-flex justify-content-end mt-4">
            <button type="submit" id="btnsalvar" class="btn me-3">
              {{ status_edita ? "Editar" : "Salvar" }}
            </button>
            <button id="btnlimpar" class="btn me-3" @click.prevent="limpar">
              Limpar
            </button>
            <a v-if="status_edita" id="btnexcluir" class="btn btn-danger" @click="deletar()">
              Excluir Registro
            </a>
          </div>
        </Form>
      </div>
    </div>
  </div>
</template>

<script>
import { mask } from "vue-the-mask";
import { mapActions, mapMutations, mapState } from "vuex";
import { Field, Form, ErrorMessage } from "vee-validate";
import axios from "axios";

export default {
  name: "caDastro",
  directives: {
    mask,
  },
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  mounted() {
    this.preencheCampos(this.colaborador_para_editar, this.indice_colaborador);
  },
  data() {
    return {
      nome: "",
      genero: "",
      data_nasc: "",
      fone: "",
      email: "",
      cargo: "",
      cep: "",
      cidade: "",
      uf: "",
      logradouro: "",
      numero: "",
      complem: "",
      bairro: "",
      ponto_ref: "",
    };
  },
  computed: {
    ...mapState({
      UFs: (state) => state.formularioCadastroStore.UFs,
      colaboradores: (state) => state.colaboradoresStore.colaboradores,
      generos: (state) => state.formularioCadastroStore.generos,
      logado: (state) => state.usuarioStore.logado,
      status_edita: (state) => state.colaboradoresStore.edita,
      colaborador_para_editar: (state) => state.colaboradoresStore.colaborador,
      indice_colaborador: (state) =>
        state.colaboradoresStore.indice_colaborador,
      produtos: (state) => state.produtosStore.produtos
    }),
  },
  methods: {
    ...mapActions(["salvaColaboradoresDB", "insereColaborador"]),
    ...mapMutations([
      "setColaborador",
      "setIndiceColaborador",
      "setEditaColaborador",
      "updateColaborador",
      "delColaborador"
    ]),

    // Adiciona Colaborador
    adicionaColaborador() {
      if (!this.status_edita) {
        this.insereColaborador({
          nome: this.nome,
          genero: this.genero,
          data_nasc: this.data_nasc,
          fone: this.fone,
          email: this.email,
          cargo: this.cargo,
          cep: this.cep,
          cidade: this.cidade,
          uf: this.uf,
          logradouro: this.logradouro,
          numero: this.numero,
          complem: this.complem,
          bairro: this.bairro,
          ponto_ref: this.ponto_ref,
        }).then((resposta) => {
          if (resposta == true) {
            this.salvaColaboradoresDB();
            this.$toast.success("Colaborador cadastrado com sucesso");
            this.$router.push("/menu/colabs/listar");
            this.limpar();
          } else {
            this.$toast.error("Colaborador já está cadastrado no sistema");
          }
        });
      }else{
        this.updateColaborador({
          nome: this.nome,
          genero: this.genero,
          data_nasc: this.data_nasc,
          fone: this.fone,
          email: this.email,
          cargo: this.cargo,
          cep: this.cep,
          cidade: this.cidade,
          uf: this.uf,
          logradouro: this.logradouro,
          numero: this.numero,
          complem: this.complem,
          bairro: this.bairro,
          ponto_ref: this.ponto_ref,
        })
        this.salvaColaboradoresDB();
        this.$toast.success("Colaborador editado com sucesso");
        this.$router.push("/menu/colabs/listar");
        this.limpar();
          
      }
    },
    deletar(){
      var emprestado = false
      this.produtos.forEach((produto) => {
        if(produto.emprestado.usuario == this.colaborador_para_editar.email){
          emprestado = true
        }
      });
      if(emprestado){
        this.$toast.error("Este colaborador possui itens emprestados.")
      }else{
        var i = false
        this.colaboradores.forEach((colab, indice) => {
          if(colab.email == this.colaborador_para_editar.email){
            i = indice 
          }
        })
        this.delColaborador(i)
        this.salvaColaboradoresDB()
        this.$toast.success("Colaborador Excluido com sucesso.")
        this.$router.push("/menu/colabs/listar");
        this.limpar();
      }
    },
    preencheCampos(obj = null, indice = null) {
      if (obj || indice) {
        this.nome = obj.nome;
        this.genero = obj.genero;
        this.data_nasc = obj.data_nasc;
        this.fone = obj.fone;
        this.email = obj.email;
        this.cargo = obj.cargo;
        this.cep = obj.cep;
        this.cidade = obj.cidade;
        this.uf = obj.uf;
        
      }
      setTimeout(() => {
        this.logradouro = obj.logradouro;
        this.numero = obj.numero;
        this.complem = obj.complem;
        this.bairro = obj.bairro;
        this.ponto_ref = obj.ponto_ref;
      }, 500);
    },
    limpar() {
      this.nome = "";
      this.genero = "";
      this.data_nasc = "";
      this.fone = "";
      this.email = "";
      this.cargo = "";
      this.cep = "";
      this.cidade = "";
      this.uf = "";
      this.logradouro = "";
      this.numero = "";
      this.complem = "";
      this.bairro = "";
      this.ponto_ref = "";

      this.setColaborador({
        nome: "",
        genero: "",
        data_nasc: "",
        fone: "",
        email: "",
        cargo: "",
        cep: "",
        cidade: "",
        uf: "",
        logradouro: "",
        numero: "",
        complem: "",
        bairro: "",
        ponto_ref: "",
      });
      this.setEditaColaborador(false);
      this.setIndiceColaborador(false);
    },

    // Validações
    validaNome(nome) {
      if (nome.length > 0 && nome.trim()) {
        return true;
      }
      return "Campo obrigatório";
    },
    validaGenero(genero) {
      if (genero.length > 0 && genero.trim()) {
        return true;
      }
      return "Campo obrigatório";
    },
    validaDataNasc(data) {
      if (data && new Date(data) < new Date()) {
        return true;
      }
      return "Data Inválida";
    },
    validaFone(fone) {
      if (fone.length > 13) {
        return true;
      }
      return "Campo obrigatório";
    },
    validaEmail(email) {
      let usuario = email.substring(0, email.indexOf("@"));
      let dominio = email.substring(email.indexOf("@") + 1, email.length);

      if (
        usuario.length >= 1 &&
        dominio.length >= 3 &&
        usuario.search("@") == -1 &&
        dominio.search("@") == -1 &&
        usuario.search(" ") == -1 &&
        dominio.search(" ") == -1 &&
        dominio.search(".") != -1 &&
        dominio.indexOf(".") >= 1 &&
        dominio.lastIndexOf(".") < dominio.length - 1
      ) {
        return true;
      }
      return "Email inválido";
    },
    validaCargo(cargo) {
      if (cargo && cargo.trim()) {
        return true;
      }
      return "Campo obrigatório";
    },
    validaCep(cep) {
      if (cep.length == 9) {
        cep = cep.replace("-", "");
        this.consultaCep(cep);

        return true;
      }
      return "Campo obrigatório";
    },
    validaCidade(cidade) {
      if (cidade && cidade.trim()) {
        return true;
      }
      return "Campo obrigatório";
    },
    validaUF(uf) {
      if (uf) {
        return true;
      }
      return "Campo obrigatório";
    },
    validaLogradouro(logradouro) {
      if (logradouro.length > 1 && logradouro.trim()) {
        return true;
      }
      return "Campo obrigatório";
    },
    validaBairro(bairro) {
      if (bairro && bairro.trim()) {
        return true;
      }
      return "Campo obrigatório";
    },
    async consultaCep(cep) {
      await axios
        .get(`https://viacep.com.br/ws/${cep}/json/`)
        .then((resposta) => {
          if ("erro" in resposta.data) {
            this.$toast.error("CEP inválido");

            this.cidade = "";
            this.uf = "";
            this.logradouro = "";
            this.bairro = "";
            this.complem = "";
          } else {
            this.cidade = resposta.data.localidade;
            this.uf = resposta.data.uf;
            this.logradouro = resposta.data.logradouro;
            this.bairro = resposta.data.bairro;
            this.complem = resposta.data.complemento;
          }
        });
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