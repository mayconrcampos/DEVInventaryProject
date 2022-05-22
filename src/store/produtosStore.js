
export default {
    state: {
        produtos: [],
    },
    getters: {
        totalProdutos: (state) => {
            return state.produtos.reduce((a, b) => {
                return a + Number(b.valor)
            }, 0)
        }
    },
    mutations: {
        setProdutos(state){
            state.produtos = []
        },
        addProduto(state, produto){
            state.produtos.push(produto)
        }
    },
    actions: {
        salvaProdutosDB(context) {
            var dados = JSON.stringify(context.state.produtos)
            localStorage.setItem("produtosDB", dados)
        },
        carregaProdutosDB(context) {
            context.commit("setProdutos")
            try {
                var dados = localStorage.getItem("produtosDB")

                if (dados.length > 0 || dados !== null) {
                    dados = JSON.parse(dados)
                    for (let index = 0; index < dados.length; index++) {
                        context.commit("addProduto", dados[index])
                    }
                }
                //console.log(context.state.Produtos)

            } catch (error) {
                console.log("localStorage Vazia: " + error)
            }
        }
    },

}