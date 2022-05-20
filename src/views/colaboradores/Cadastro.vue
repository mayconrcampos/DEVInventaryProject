<template>
  <div id="cadastro" class="bg-light m-auto w-100">
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="d-flex flex-row fs-5 w-100">
        <div class="w-50 ms-3">
          <span class="">CADASTRO DE COLABORADORES</span>
        </div>

        <div class="w-50 text-end me-3">
          <span id="gravatar"
            ><vue-gravatar
              email="maycon.campos@gmail.com"
              default="404"
              alt="nobody"
            />
            maycon.campos@gmail.com</span
          >
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
                v-mask="'(##) #####-####'"
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
          <hr />
          <div class="row">
            <div class="col-lg">
              <label class="col-form-label">Senha</label>
              <Field
                :rules="validaSenha1"
                name="senha1"
                type="password"
                class="form-control"
                v-model="senha1"
              />
              <ErrorMessage name="senha1" class="text-danger" />
            </div>
            <div class="col-lg">
              <label class="col-form-label">Repita a Senha</label>
              <Field
                :rules="validaSenha2"
                name="senha2"
                type="password"
                class="form-control"
                v-model="senha2"
              />
              <ErrorMessage name="senha2" class="text-danger" />
            </div>
          </div>
          <div class="d-flex justify-content-end mt-4">
            <button type="submit" id="btnsalvar" class="btn me-3">
              Salvar
            </button>
            <button id="btnlimpar" class="btn" @click.prevent="limpar">
              Limpar
            </button>
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
      senha1: "",
      senha2: "",
    };
  },
  computed: {
    ...mapState({
      UFs: (state) => state.formularioCadastroStore.UFs,
      colaboradores: (state) => state.colaboradoresStore.colaboradores,
      generos: (state) => state.formularioCadastroStore.generos,
    }),
  },
  methods: {
    ...mapMutations(["addColaborador"]),
    ...mapActions(["salvaColaboradoresDB", "insereColaborador"]),

    // Adiciona Colaborador
    adicionaColaborador() {
    
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
          senha: this.senha1,
        }).then((resposta) => {
          if (resposta == true) {
            this.salvaColaboradoresDB();
            this.$toast.success("Colaborador cadastrado com sucesso");
            this.limpar();
            this.$router.push("/");
          }else{
            this.$toast.error("Usuário já está cadastrado no sistema");
          }
        })
      
      
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
      if (fone.length > 14) {
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
    validaSenha1(senha1) {
      if (senha1.length > 4) {
        return true;
      }
      return "Somente senha acima de 8 caracteres";
    },
    validaSenha2(senha2) {
      if (this.senha1 == senha2) {
        return true;
      }
      return "Senhas não conferem";
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