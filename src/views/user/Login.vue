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

      <!--------- Login formulário ------------>
      <div class="col-lg-6 mt-5 mb-5">
        <Form class="w-75 m-auto" @submit="logar">
          <h1 id="titulologin">Login</h1>

          <div class="form-floating mb-4">
            <Field
              v-model="login.email"
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
              v-model="login.senha"
              :rules="validaSenhaLogin"
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
          <button class="btngoogle" @click="entrarComGoogle()">
            <i class="fa-brands fa-google me-2"></i> Entrar com Google
          </button>
          <button class="btngoogle" @click="showModalEsqueceuaSenha = true">
            <i class="fa-solid fa-lock-keyhole me-2"></i> Esqueceu a senha?
          </button>
        </Form>
        <hr />

        <div id="containercriaconta" class="d-block">
          <small>Não possui uma conta?</small>
          <button @click="showModal()" id="btncriarconta">
            <i class="fa-solid fa-circle-plus"></i> Criar conta
          </button>
        </div>

        <p id="fraserodape" class="mt-5 mb-3 text-muted text-center">
          © Maycon R Campos - SENAI DEVinHouse[ConectaNuvem] - Maio de 2022
        </p>
      </div>
    </main>

    <!-------------------- Modal Aviso em construção Esqueceu a senha ---------------------->

    <m-dialog v-model="showModalEsqueceuaSenha" title="Esqueceu a Senha?" :draggable="ok">
      <img
        class="img img-fluid mb-5"
        src="../../assets/inventarylogo.png"
        alt="DEVinventary"
      />
      <p class="text-center">Funcionalidade em fase de implementação.</p>

      <template v-slot:footer>
        <button class="m-dialog--confirm-btn" @click="showModalEsqueceuaSenha = false">Ok</button>
      </template>
    </m-dialog>

    <!-------------------- Modal Aviso em construção - Entrar com Google ---------------------->

    <m-dialog v-model="show" title="Entrar com Google" :draggable="ok">
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

    <!----------- Modal Cadastro de Usuários admins-------------->
    <m-dialog
      v-model="modalCadastroShow"
      title="Cadastro de Usuário"
      :draggable="ok"
    >
      <div class="container">
        <img
          class="img img-fluid mb-5"
          src="../../assets/inventarylogo.png"
          alt="DEVinventary"
        />
        <hr />
      </div>
      <Form @submit="cadastraUsuario">
        <div class="w-100">
          <label class="form-label">Usuário</label>
          <Field
            :rules="validaUsuario"
            v-model="cadastra.usuario"
            name="cadastrausuario"
            type="email"
            class="form-control rounded"
            id="inputusuario"
            placeholder="Digite seu Email"
          />
          <ErrorMessage name="cadastrausuario" class="text-danger" />
        </div>
        <div class="w-100 mt-3">
          <label class="form-label">Senha</label>
          <Field
            :rules="validaSenha1"
            v-model="cadastra.senha1"
            name="senha1"
            type="password"
            class="form-control rounded"
            id="inputusenha1"
            placeholder="Senha"
          />
          <ErrorMessage name="senha1" class="text-danger" />
        </div>
        <div class="w-100 mt-3">
          <label class="form-label">Repita a Senha</label>
          <Field
            :rules="validaSenha2"
            v-model="cadastra.senha2"
            name="senha2"
            type="password"
            class="form-control rounded"
            id="inputsenha2"
            placeholder="Repita a Senha"
          />
          <ErrorMessage name="senha2" class="text-danger" />
        </div>
        <div class="w-100 mt-3">
          <button class="m-dialog--confirm-btn" type="submit">Cadastrar</button>
        </div>
      </Form>

      <template v-slot:footer> </template>
    </m-dialog>
  </div>
</template>

<script>
import { Field, Form, ErrorMessage } from "vee-validate";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "loGin",
  components: {
    Field,
    Form,
    ErrorMessage,
  },
  data() {
    return {
      //modalCadastroShow: false,
      show: false,
      ok: true,
      cadastra: {
        usuario: "",
        senha1: "",
        senha2: "",
      },
      login: {
        email: "",
        senha: "",
      },
      showModalEsqueceuaSenha: false
    };
  },
  computed: {
    ...mapState({
      logado: (state) => state.usuarioStore.logado,
      modalCadastroShow: (state) => state.usuarioStore.modalCadastroShow,
      sucessoCadastro: (state) => state.usuarioStore.sucessoCadastro,
      sucessoLogin: (state) => state.usuarioStore.sucessoLogin,
      msgLogin: (state) => state.usuarioStore.msgLogin,
    }),
  },
  methods: {
    ...mapActions(["autentica", "insereUsuario"]),
    ...mapMutations(["setModalCadastroShow", "setSucessoCadastro", "setSucessoLogin", "setSucessoLogin"]),
    showModal(){
      this.setModalCadastroShow(true);
    }, 
    limpar() {
      this.cadastra = {};
      this.login = {};
    },
    aviso() {
      this.$toast.error("Funcionalidade não disponível.");
    },
    entrarComGoogle(){
      window.open('https://accounts.google.com/o/oauth2/auth?response_type=code&client_id=1029507675940-hg5pguijafeujq7d7214sannmueoqi65.apps.googleusercontent.com&redirect_uri=http%3A%2F%2Flocalhost%3A5000%2Fuser%2Fcallback&scope=https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.email+https%3A%2F%2Fwww.googleapis.com%2Fauth%2Fuserinfo.profile+openid&state=KZS70f6pknmZGRusBSXnRKJp2tW7dz&access_type=offline', 'location=yes,height=600,width=520,scrollbars=yes,status=yes')
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
    validaUsuario(email) {
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
    validaSenhaLogin(senha) {
      if (senha.length > 8) {
        return true;
      }
      return "A senha é obrigatória e deve possuir acima de 8 caracteres";
    },

    validaSenha1(senha1) {
      if (senha1.length >= 8) {
        return true;
      }
      return "Somente senha acima de 8 caracteres";
    },
    validaSenha2(senha2) {
      if (this.cadastra.senha1 == senha2) {
        return true;
      }
      return "Senhas não conferem";
    },
    cadastraUsuario() {
      this.insereUsuario({
        email: this.cadastra.usuario,
        password: this.cadastra.senha1,
      }).then(() => {
        if(this.sucessoCadastro){
          this.$toast.success("Usuário cadastrado com sucesso");
          this.limpar();
          this.$router.push("/");
        }else{
          this.$toast.error("Usuário já existe.");
          this.limpar();
        }
      })
    },
    logar() {
      this.autentica({
        email: this.login.email,
        password: this.login.senha,
      })
        .then(() => {
          if (this.sucessoLogin == true) {
            this.$router.push("/menu/geral/inventario");
            this.email = "";
            this.senha = "";
            this.$toast.success(this.msgLogin);
            this.$cookies.set("logado", this.logado);
          } else {
            this.$toast.error(this.msgLogin);
          }
        })
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
.btngoogle {
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