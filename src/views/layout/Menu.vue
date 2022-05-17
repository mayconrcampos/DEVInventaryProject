<template>
  <div class="d-flex w-100">
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
        <span class="fs-4">Sidebar</span>
      </a>
      <hr />
      <ul class="nav nav-pills flex-column mb-auto">
        <li class="nav-item">
          <router-link to="/home" class="nav-link" aria-current="page">
            <svg class="bi me-2" width="16" height="16">
              <use xlink:href="#home"></use>
            </svg>
            <i class="fa-solid fa-house"></i> Inventário
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard" class="nav-link">
            <svg class="bi me-2" width="16" height="16">
              <use xlink:href="#speedometer2"></use>
            </svg>
            <i class="fa-solid fa-align-justify"></i> Cadastro Colaboradores
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard" class="nav-link">
            <svg class="bi me-2" width="16" height="16">
              <use xlink:href="#speedometer2"></use>
            </svg>
            <i class="fa-solid fa-align-justify"></i> Listagem Colaboradores
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard" class="nav-link">
            <svg class="bi me-2" width="16" height="16">
              <use xlink:href="#speedometer2"></use>
            </svg>
            <i class="fa-solid fa-align-justify"></i> Cadastro Itens
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard" class="nav-link">
            <svg class="bi me-2" width="16" height="16">
              <use xlink:href="#speedometer2"></use>
            </svg>
            <i class="fa-solid fa-align-justify"></i> Empréstimo Itens
          </router-link>
        </li>
        <li>
          <div>
            <a class="nav-link ms-3" @click="deslogar()" href="#">Logout</a>
          </div>
        </li>
      </ul>
      <hr />

      <div class="dropdown">
        <a
          href="#"
          class="d-flex align-items-center text-decoration-none dropdown-toggle"
          id="dropdownUser1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <strong><i class="fa-solid fa-users"></i> Usuarios</strong>
        </a>
        <ul
          class="dropdown-menu text-small shadow"
          aria-labelledby="dropdownUser1"
          id="dropdownlist"
        >
          <li>
            <router-link class="dropdown-item" to="/register"
              >Register</router-link
            >
          </li>
          <li>
            <router-link class="dropdown-item" to="/login">Login</router-link>
          </li>
          <li><hr class="dropdown-divider" /></li>
          <!---<li><a class="dropdown-item" @click="deslogar()" href="#">Sign out</a></li>---->
        </ul>
      </div>
    </div>

    <div id="containercontent">
        <nav class="navbar navbar-expand-lg ">
        <div class="container-md">
          <span class="navbar-brand">Navbar</span>
        </div>
      </nav>
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
}
#div {
  height: 100% !important;
  background-color: #1f4794 !important;
}
ul li {
  transition: 1s;
}
ul li:hover {
  background: rgb(111, 113, 121);
  background: radial-gradient(
    circle,
    rgba(111, 113, 121, 1) 51%,
    rgba(30, 30, 30, 1) 96%
  );
}
@media (max-width: 600px) {
  #div {
    font-size: small;
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
    font-size: x-small;
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