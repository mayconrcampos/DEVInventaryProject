<template>
  <div id="cadastro" class="bg-light">
    <nav class="navbar navbar-expand-lg">
      <div class="d-flex flex-row fs-5 w-100">
        <div class="w-50 ms-3">
          <span class="">LISTAGEM DE COLABORADORES</span>
        </div>
        <div class="w-50 text-end me-3">
          <span class=""><i class="fa-solid fa-user me-1"></i> USUARIO</span>
        </div>
      </div>
    </nav>
    <div class="container mb-5">
      <h3 class="text-left mt-4 fw-bold">Estatísticas do Sistema</h3>

      <div class="bg-white w-100 mt-4 p-4 rounded shadow">
        <div class="card-group">
          <div class="card border rounded shadow me-3" style="width: 13rem">
            <div class="card-body">
              <h2
                class="
                  card-title
                  d-flex
                  flex-row
                  justify-content-evenly
                  m-4
                  fs-1
                "
              >
                <i class="fa-solid fa-users"></i> 30
              </h2>
              <h6 class="card-subtitle mb-2 text-muted text-center">
                Colaboradores
              </h6>
            </div>
          </div>

          <div class="card border rounded shadow me-3" style="width: 13rem">
            <div class="card-body">
              <h2
                class="
                  card-title
                  d-flex
                  flex-row
                  justify-content-evenly
                  m-4
                  fs-1
                "
              >
                <i class="fa-solid fa-cabinet-filing"></i> 59
              </h2>
              <h6 class="card-subtitle mb-2 text-muted text-center">Itens</h6>
            </div>
          </div>

          <div class="card border rounded shadow me-3" style="width: 13rem">
            <div class="card-body">
              <h2
                class="
                  card-title
                  d-flex
                  flex-row
                  justify-content-evenly
                  m-4
                  fs-1
                "
              >
                <i class="fa-solid fa-brazilian-real-sign"></i> 25.9k
              </h2>
              <h6 class="card-subtitle mb-2 text-muted text-center">
                Valor em Produtos
              </h6>
            </div>
          </div>

          <div class="card border rounded shadow me-3" style="width: 13rem">
            <div class="card-body">
              <h2
                class="
                  card-title
                  d-flex
                  flex-row
                  justify-content-evenly
                  m-4
                  fs-1
                "
              >
                <i class="fa-solid fa-boxes-stacked"></i> 70
              </h2>
              <h6 class="card-subtitle mb-2 text-muted text-center">
                Empréstimos
              </h6>
            </div>
          </div>
        </div>

        <h5 class="fs-4 mt-4">Busca de Itens</h5>

        <div class="row">
          <div class="col-lg-10">
            <input type="text" class="form-control" />
          </div>
          <div class="col-lg-2">
            <button type="submit" class="btn btn-light">
              <i class="fa-solid fa-magnifying-glass"></i> Buscar
            </button>
          </div>
        </div>

        
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "lisTar",
};
</script>

<style scoped>
#cadastro {
  height: 100%;
  overflow-y: scroll;
}
nav {
  background-color: #143168;
  color: aliceblue;
}
.btnstatusnaempresa {
  border-radius: 10px !important;
  background-color: #4caf50;
  padding: 3px;
  font-size: small;
  color: white;
  font-weight: bold;
  width: 80%;
}
.btnstatusemprestado {
  border-radius: 10px !important;
  background-color: #f9a825;
  padding: 3px;
  font-size: small;
  color: white;
  font-weight: bold;
  width: 80%;
}
#img {
  max-height: 100%;
}
</style>