<template>
  <div id="divmenu" class="d-flex w-100">
    <div
      class="d-flex flex-column flex-shrink-0 p-3"
      style="width: 250px"
      id="div"
    >
      
     
        <img src="../../assets/inventarylogo.png" class="img-fluid" alt="" />
    
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <label class="text-white mt-4 lbls">Geral</label>
        <li class="nav-item">
          <router-link
            to="/menu/geral/inventario"
            class="nav-link"
            aria-current="page"
          >
            <i class="fa-solid fa-chart-column me-3"></i> INVENTÁRIO
          </router-link>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link" @click="deslogar()" aria-current="page">
            <i class="fa-solid fa-arrow-right-from-bracket me-3"></i> SAIR
          </a>
        </li>

        <label class="text-white mt-4 lbls">Colaboradores</label>
        <li>
          <router-link to="/menu/colabs/add" class="nav-link">
            <i class="fa-solid fa-users me-3"></i> CADASTRAR
          </router-link>
        </li>
        <li>
          <router-link to="/menu/colabs/listar" class="nav-link">
            <i class="fa-solid fa-align-justify me-3"></i> LISTAR
          </router-link>
        </li>

        <label class="text-white mt-4 lbls">Produtos</label>
        <li>
          <router-link to="/produtos/cadastra" class="nav-link">
            <i class="fa-solid fa-circle-plus me-3"></i> CADASTRAR
          </router-link>
        </li>
        <li>
          <router-link to="/produtos/emprestimos" class="nav-link">
            <i class="fa-solid fa-cart-minus me-3"></i> EMPRÉSTIMO
          </router-link>
        </li>
      </ul>
    </div>

    <div id="containercontent">
      <!--------- Conteúdo SPA Vue-router------------>
      <router-view v-slot="{ Component }">
        <transition
          name="fade"
          
        >
          <component :is="Component" />
        </transition>
      </router-view>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
export default {
  name: "meNu",
  methods: {
    ...mapMutations(["setLogado", "setColaborador", "setEditaColaborador", "setIndiceColaborador", "setProduto", "setEdita", "setIndiceProduto"]),
    deslogar(){
      this.setLogado(false)
      this.limparVariaveis()
      this.$cookies.remove("logado")
      this.$toast.info("Você saiu do sistema.")
      this.$router.push("/")
    },
    limparVariaveis(){
      // Limpa colaboradores
      this.setColaborador({
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
      });
      this.setEditaColaborador(false);
      this.setIndiceColaborador(false);
      // Limpa produtos
      this.setProduto({
        codigo: "",
        titulo: "",
        categoria: "",
        valor: "",
        foto: {
          nome: "",
          file: "",
        },
        marca: "",
        modelo: "",
        descricao: "",
      });
      this.setEdita(false);
      this.setIndiceProduto(false);
    }
  }
};
</script>

<style scoped>
#containercontent {
  width: 100%;
  overflow: auto;
  bottom: 0;
  
}
#div {
  height: 100% !important;
  background-color: #143168 !important;
  color: antiquewhite !important;
}
#div ul li {
  margin-top: 10px;
  border: 1px solid white;
  border-radius: 8px;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 0.8em;
}
.nav-link {
  color: white;
}
ul li {
  transition: 1s;
}
.nav-link:hover {
  background-color: whitesmoke !important;
  color: #143168 !important;
}
@media (max-width: 750px) {
  img {
    display: none;
  }
  .lbls {
    display: none;
  }
  #divmenu {
    display: flex;
    flex-direction: column;
    
  }

  #div {
    font-size: x-small;
    width: 100% !important;
    display: inline-flex !important;
    flex-direction: row !important;
    
  }
  #div a span {
    display: none;
    width: 0;
  }
  #div ul {
    display: flex !important;
    flex-direction: row !important;
    justify-content: flex-start;
  }
  #div ul li {
    font-size: xx-small;
    display: flex !important;
    flex-direction: row !important;
    justify-content: flex-start;
  }

  #dropdownUser1 {
    display: none !important;
  }
  #dropdownlist {
    width: 300px !important;
  }
  #dropdownlist li {
    display: flex !important;

    font-size: small;
  }

}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

a:hover,
a.router-link-active {
  background-color: #fff;
  color: #143168;
}
</style>