<template>
  <div id="cadastro" class="bg-light">
    <nav class="navbar navbar-expand-lg">
      <div class="d-flex flex-row fs-5 w-100">
        <div class="w-50 ms-3">
          <span class="">INVENTÁRIO</span>
        </div>
        <div class="w-50 text-end me-3">
          <span class=""><i class="fa-solid fa-user me-1"></i> USUARIO</span>
        </div>
      </div>
    </nav>
    <div class="container mb-5">
      <h3 class="text-left mt-4 fw-bold">Estatísticas do Sistema</h3>

      <div id="form" class="bg-white w-100 mt-4 p-4 rounded-2 shadow">
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

        <div class="row row-cols-1 row-cols-md-3 g-4 mt-3">
          <div class="col">
            <div class="card h-100">
              <img src="" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
          <div class="col">
            <div class="card h-100">
              <img src="" class="card-img-top" alt="..." />
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </p>
              </div>
              <div class="card-footer">
                <small class="text-muted">Last updated 3 mins ago</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "invenTario",
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
</style>