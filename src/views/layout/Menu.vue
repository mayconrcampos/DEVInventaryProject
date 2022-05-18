<template>
  <div id="divmenu" class="d-flex w-100">
    <div
      class="d-flex flex-column flex-shrink-0 p-3"
      style="width: 250px"
      id="div"
    >
      <a
        href="/"
        class="
          d-flex
          align-items-center
          mb-3 mb-md-0
          me-md-auto
          text-white text-decoration-none
        "
      >
        <!-----
      <svg class="bi me-2" width="40" height="32">
        <use xlink:href="#bootstrap"></use>
      </svg>-->
        <img src="../../assets/inventarylogo.png" class="img-fluid" alt="" />
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <label class="text-white mt-4 lbls">Geral</label>
        <li class="nav-item">
          <router-link to="/menu/geral/inventario" class="nav-link" aria-current="page">
            <i class="fa-solid fa-chart-column me-3"></i> INVENTÁRIO
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/home" class="nav-link" aria-current="page">
            <i class="fa-solid fa-arrow-right-from-bracket me-3"></i> SAIR
          </router-link>
        </li>

        <label class="text-white mt-4 lbls">Colaboradores</label>
        <li>
          <router-link to="/menu/colabs/add" class="nav-link">
            <i class="fa-solid fa-users me-3"></i> CADASTRAR
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard" class="nav-link">
            <i class="fa-solid fa-align-justify me-3"></i> LISTAR
          </router-link>
        </li>

        <label class="text-white mt-4 lbls">Produtos</label>
        <li>
          <router-link to="" class="nav-link">
            <i class="fa-solid fa-circle-plus me-3"></i> CADASTRAR
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard" class="nav-link">
            <i class="fa-solid fa-cart-minus me-3"></i> EMPRÉSTIMO
          </router-link>
        </li>
      </ul>
    </div>

    <div id="containercontent">
      <!--------- Conteúdo SPA Vue-router------------>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "meNu",
};
</script>

<style scoped>
#containercontent {
  width: 100%;
  display: block;
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
@media (max-width: 600px) {
  img {
      display: none;
  }
  .lbls {
      display: none;
  }
  #divmenu {
      display: flex;
      flex-direction: column;
      overflow-y: scroll;
  }
    
  #div {
    font-size: x-small;
    width: 100% !important;
    display: inline-flex !important;
    flex-direction: row !important;
    overflow-y: scroll;
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
</style>