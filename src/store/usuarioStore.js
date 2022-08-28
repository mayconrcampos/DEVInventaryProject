import axios from "axios";


//axios.defaults.headers.common['Access-Control-Request-Method'] = "*";
axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
axios.defaults.headers.common["Access-Control-Allow-Headers"] = "Content-Type";
axios.defaults.headers.common["Content-Type"] = "application/json; application/x-www-form-urlencoded; charset=UTF-8";

export default {
    state: {
        usuarios: [],
        logado: false,
        indice: "",
        emailExiste: "",
        modalCadastroShow: false,
        sucessoCadastro: null,
        sucessoLogin: null,
        msgLogin: null,
    },

    mutations: {
        setMsgLogin(state, msg){
            state.msgLogin = msg
        },
        setSucessoLogin(state, status){
            state.sucessoLogin = status
        },
        setSucessoCadastro(state, status){
            state.sucessoCadastro = status
        },
        setModalCadastroShow(state, status){
            state.modalCadastroShow = status
        },
        setUsuarios(state){
            state.usuarios = []
        },
        addUsuario(state, usuario) {
            state.usuarios.push(usuario)
        },
        setLogado(state, status) {
            state.logado = status
        },
        setEmailExiste(state, status) {
            state.emailExiste = status
        },
        setIndice(state, indice) {
            state.indice = indice
        }
    },
    actions: {
        async insereUsuario(context, usuario) {
            context.commit("setSucessoCadastro", null);

            await axios.post('http://127.0.0.1:5000/user/', 
              usuario
            )
            .then(() => {
              //console.log("RESPONSE RECEIVED: ", res.data);
              context.commit("setModalCadastroShow", false);
              context.commit("setSucessoCadastro", true);
            })
            .catch(() => {
              //console.log("AXIOS ERROR: ", err.response.data);
              context.commit("setModalCadastroShow", false);
              context.commit("setSucessoCadastro", false);
            })
        },
        async autentica(context, login) {
            context.commit("setSucessoLogin", null);
            context.commit("setMsgLogin", null);

            await axios.post('http://127.0.0.1:5000/user/login', 
            login
          )
          .then((response) => {
            console.log("token", response.data.token);
            console.log("token", response.data.usuario);
           
            context.commit("setLogado", {
                            "logado": response.data.token,
                            "usuario": response.data.usuario
                        })
            context.commit("setSucessoLogin", true);
            context.commit("setMsgLogin", `Seja Bem vindo ${response.data.usuario}!`)
          })
          .catch((err) => {
        
            context.commit("setSucessoLogin", false);
            context.commit("setMsgLogin", err.response.data.error)
            console.log(err.response.data.error)
          })
        },
        salvaUsuariosDB(context) {
            var dados = JSON.stringify(context.state.usuarios)
            localStorage.setItem("usuariosDB", dados)
        },
        carregaUsuariosDB(context) {
            context.commit("setUsuarios")
            try {
                var dados = localStorage.getItem("usuariosDB")

                if (dados.length > 0 || dados !== null) {
                    dados = JSON.parse(dados)
                    for (let index = 0; index < dados.length; index++) {
                        context.commit("addUsuario", dados[index])
                    }
                }

            } catch (error) {
                console.log("localStorage Vazia: " + error)
            }
        }
    },
}
