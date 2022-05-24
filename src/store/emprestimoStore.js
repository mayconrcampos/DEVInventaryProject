
export default {
    state: {
        emprestimos: [],
        emprestimo: {
            patrimonio: "",
            titulo: "",
            categoria: "",
            emprestado_para: ""
        }
    },

    mutations: {
        setEmprestimo(state, obj){
            state.emprestimo = obj
        },
        addEmprestimo(state, emprestimo){
            state.emprestimos.push(emprestimo)
        }
    },
    actions: {
    },

}
