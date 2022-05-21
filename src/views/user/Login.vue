<template>
  <div id="divpai" class="container">
    <main class="row text-center d-flex flex-row justify-content-center w-100">
      <div class="col-lg-6 mt-5">
        <img
          class="img img-fluid w-75 mt-5"
          src="../../assets/inventarylogo.png"
          alt="DEVinventary"
        />
      </div>

      <div class="col-lg-6 mt-5 mb-5">
        <Form class="w-75 m-auto" @submit="logar">
          <h1 id="titulologin">Login</h1>

          <div class="form-floating mb-4">
            <Field
              v-model="email"
              :rules="validaEmail"
              name="email"
              type="email"
              class="form-control rounded"
              id="inputemail"
              placeholder="seu-email@example.com"
            />
            <label for="floatingInput">Email</label>
            <ErrorMessage name="email" class="text-danger" />
          </div>

          <div class="form-floating mb-3">
            <Field
              v-model="senha"
              :rules="validaSenha"
              name="senha"
              type="password"
              class="form-control rounded"
              id="inputsenha"
              placeholder="Senha"
            />
            <label for="floatingPassword">Senha</label>
            <ErrorMessage name="senha" class="text-danger" />
          </div>

          <button id="btnsubmit" type="submit">
            <i class="fa-solid fa-lock-open me-2"></i>
            Entrar
          </button>
          <button id="btngoogle" @click="show = true">
            <i class="fa-brands fa-google me-2"></i> Entrar com Google
          </button>
          <hr />

          <div id="containercriaconta" class="d-block">
            <small>Não possui uma conta?</small>
            <router-link to="/user/cadastro" id="btncriarconta">
              <i class="fa-solid fa-circle-plus"></i> Criar conta
            </router-link>
          </div>

          <p id="fraserodape" class="mt-5 mb-3 text-muted text-center">
            © Maycon R Campos - SENAI DEVinHouse[ConectaNuvem] - Maio de 2022
          </p>
        </Form>
      </div>
    </main>

    <m-dialog v-model="show" title="Aviso" :draggable="ok">
      <img
        class="img img-fluid mb-5"
        src="../../assets/inventarylogo.png"
        alt="DEVinventary"
      />
      <p class="text-center">Funcionalidade em fase de implementação.</p>

      <template v-slot:footer>
        <button class="m-dialog--confirm-btn" @click="show = false">Ok</button>
      </template>
    </m-dialog>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import { mapActions, mapState } from "vuex";

export default {
  name: "loGin",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      show: false,
      ok: true,
      email: "",
      senha: "",
    };
  },
  computed: {
    ...mapState({
      logado: (state) => state.colaboradoresStore.logado,
    }),
  },
  methods: {
    ...mapActions(["autentica"]),
    aviso() {
      this.$toast.error("Funcionalidade não disponível.");
    },
    validaEmail(email) {
      if (email) {
        return true;
      }
      return "Campo obrigatório";
    },
    validaSenha(senha) {
      if (senha) {
        return true;
      }
      return "Campo obrigatório";
    },
    logar() {
      console.log("Email ", this.email, "Senha ", this.senha);

      this.autentica({
        email: this.email,
        senha: this.senha,
      })
        .then((resposta) => {
          if (resposta == true) {
            this.$router.push("/menu/geral/inventario");
            this.email = "";
            this.senha = "";
            this.$toast.success("Logado com Sucesso!");
            this.$cookies.set("logado", this.logado)
          } else {
            this.$toast.error("Email ou senha Inválidos!");
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>

<style scoped>
#rlinkentrar {
  text-decoration: none;
  color: #e7e7e7;
}
#btnsubmit {
  width: 100%;
  border: 0;
  padding: 5px;
  border-radius: 5px;
  background-color: #143168;
  color: white;
  font-size: 1em;
  margin-top: 10px;
  margin-right: 10px;
}
#btngoogle {
  width: 100%;
  border: 0;
  padding: 5px;
  border-radius: 5px;
  background-color: #e7e7e7;
  color: black;
  font-size: 1em;
  margin-top: 10px;
}
#titulologin {
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 2em;
  font-weight: bold;
  margin-top: 40px;
}
#btncriarconta:hover {
  background-color: #696969;
  color: #e7e7e7;
}
#btncriarconta {
  width: 200px;
  border: 0;
  padding: 8px;
  border-radius: 5px;
  background-color: #e7e7e7;
  color: black;
  font-size: 1em;
  margin-top: 10px;
  margin-left: 20px;
  text-decoration: none;
}
@media (max-width: 650px) {
  #fraserodape {
    font-size: 0.7em;
  }
}

@media (max-width: 400px) {
  #divpai main div {
    padding: 0;
  }

  #divpai main {
    padding: 0;
  }
  #fraserodape {
    font-size: 0.6em;
  }
}
</style>