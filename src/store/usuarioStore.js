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
    },

    mutations: {
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
        autentica(context, login) {
            context.commit("setEmailExiste", false)
            context.commit("setIndice", false)

            context.state.usuarios.forEach((user, index) => {
                if (user.usuario == login.usuario) {
                    context.commit("setEmailExiste", true)
                    context.commit("setIndice", index)

                }
            });
            if (context.state.emailExiste == true) {
                if (context.state.usuarios[context.state.indice].senha == login.senha) {
                    context.commit("setLogado", {
                        "logado": true,
                        "usuario": login.usuario
                    })
                    return true
                } else {
                    return false
                }
            } else {
                return false
            }
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
