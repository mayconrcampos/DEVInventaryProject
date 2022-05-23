
export default {
  state: {
    colaboradores: [],
    edita: false,
    indice_colab: false,
    colaborador: {
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
    }

  },

  mutations: {

    setColaborador(state, colaborador) {
      state.colaborador = colaborador
    },
    setIndiceColaborador(state, indice) {
      state.indice_colab = indice
    },
    setEditaColaborador(state, status) {
      state.edita = status
    },
    setColaboradores(state) {
      state.colaboradores = []
    },
    addColaborador(state, colab) {
      state.colaboradores.push(colab)
    },
    updateColaborador(state, colab){
      state.colaboradores.splice(state.indice_colab, 1, colab)
    },

    delColaborador(state, indice) {
      state.colaboradores.splice(indice, 1)
    }
  },
  actions: {
    insereColaborador(context, colaborador) {
      var existe = false
      context.state.colaboradores.forEach(c => {
        if (c.email === colaborador.email) {
          existe = true
        }
      });
      if (existe == true) {
        return false
      }
      context.commit("addColaborador", colaborador)
      return true
    },
    salvaColaboradoresDB(context) {
      var dados = JSON.stringify(context.state.colaboradores)
      localStorage.setItem("colaboradores", dados)
    },
    carregaColaboradoresDB(context) {
      context.commit("setColaboradores")
      try {
        var dados = localStorage.getItem("colaboradores")

        if (dados.length > 0 || dados !== null) {
          dados = JSON.parse(dados)
          for (let index = 0; index < dados.length; index++) {
            context.commit("addColaborador", dados[index])
          }
        }

      } catch (error) {
        console.log("localStorage Vazia: " + error)
      }
    }
  },

}
