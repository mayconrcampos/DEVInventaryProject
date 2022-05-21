
export default {
  state: {
    colaboradores: [],
    logado: false,
    indice: "",
    emailExiste: ""
  },

  mutations: {
    addColaborador(state, colab) {
      state.colaboradores.push(colab)
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
    insereColaborador(context, colaborador) {
      var existe = false
      context.state.colaboradores.forEach(c => {
        if (c.email === colaborador.email) {
          console.log("Comparação: ", c.email == colaborador.email)
          existe = true
        }
      });
      if (existe == true) {
        console.log("Existe? ", existe)
        return false
      }
      console.log("Existe? ", existe)
      context.commit("addColaborador", colaborador)
      return true
    },
    autentica(context, login) {
      context.commit("setEmailExiste", false)
      context.commit("setIndice", false)

      context.state.colaboradores.forEach((user, index) => {
        if (user.email == login.email) {
          context.commit("setEmailExiste", true)
          context.commit("setIndice", index)

        }
      });
      if (context.state.emailExiste == true) {
        if(context.state.colaboradores[context.state.indice].senha == login.senha){
          context.commit("setLogado", {
            "logado": true,
            "usuario": login.email
          })
          return true
        }else{
          return false
        }
      }else{
        return false
      }
    },
    salvaColaboradoresDB(context) {
      var dados = JSON.stringify(context.state.colaboradores)
      localStorage.setItem("colaboradores", dados)
    },
    carregaColaboradoresDB(context) {
      try {
        var dados = localStorage.getItem("colaboradores")

        if (dados.length > 0 || dados !== null) {
          dados = JSON.parse(dados)
          for (let index = 0; index < dados.length; index++) {
            context.commit("addColaborador", dados[index])
          }
        }
        console.log(context.state.colaboradores)

      } catch (error) {
        console.log("localStorage Vazia: " + error)
      }
    }
  },

}
