export default {
    state: {
        usuarios: [],
        logado: false,
        indice: "",
        emailExiste: "",
        
        
    },

    mutations: {
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
        insereUsuario(context, usuario) {
            var existe = false
            context.commit("setEmailExiste", false);
            context.commit("setIndice", false);

            context.state.usuarios.forEach(c => {
                if (c.usuario === usuario.usuario) {
                    console.log("Comparação: ", c.email == usuario.usuario, "Email Digitado: ", usuario.usuario)
                    existe = true
                }
            });
            if (existe == true) {
                console.log("Existe? ", existe)
                console.log(context.state.usuarios)
                return false
            }
            console.log("Existe? ", existe)
            context.commit("addUsuario", usuario)
            return true
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
