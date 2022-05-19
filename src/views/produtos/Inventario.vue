<template>
  <div id="cadastro" class="bg-light">
    <nav class="navbar navbar-expand-lg">
      <div class="d-flex flex-row fs-5 w-100">
        <div class="w-50 ms-3">
          <span class="">INVENTÁRIO</span>
        </div>
        <div class="w-50 text-end me-3">
          <span id="gravatar"
            ><vue-gravatar
              email="maycon.campos@gmail.com"
              default="404"
              alt="nobody"
            />
            maycon.campos@gmail.com</span
          >
        </div>
      </div>
    </nav>
    <div class="container mb-5">
      <h3 class="text-left mt-4 fw-bold">Estatísticas do Sistema</h3>

      <div  class="bg-white w-100 mt-4 p-4 rounded shadow">

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

        <!-------- Cards de produtos --------->

        <div class="row mh-75 row-cols-1 row-cols-md-3 g-4 mt-3">
          <!--- Colunas---->
          

          <div class="col rounded shadow">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title h-50 text-center">
                  <img
                    id="img"
                    class="img-fluid mt-2"
                    src="https://m.media-amazon.com/images/I/71+KVFmyssS._AC_SL1500_.jpg"
                  />
                </h5>
                <p class="card-text">
                  <small>Notebook Samsung Book I5 8GB 512GB SSD 15.6</small><br />
                </p>
                <div class="card-text">
                  <span class="text-secondary"
                    ><strong>Samsung</strong></span
                  >
                  <h5>Notebook</h5>
                </div>
              </div>
              <div class="card-footer text-center">
                <button class="btn btnstatusnaempresa">Na empresa</button>
              </div>
            </div>
          </div>

          

          

          <div class="col rounded shadow">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title h-50 text-center">
                  <img
                    id="img"
                    class="img-fluid mt-2"
                    src="https://http2.mlstatic.com/D_NQ_NP_2X_743539-MLA43295550332_082020-F.webp"
                  />
                </h5>
                <p class="card-text">
                  <small>Multilaser MO251 - Mouse Sem Fio</small><br />
                </p>
                <div class="card-text">
                  <span class="text-secondary"
                    ><strong>Multilaser</strong></span
                  >
                  <h5>Mouse</h5>
                </div>
              </div>
              <div class="card-footer text-center">
                <button class="btn btnstatusnaempresa">Na empresa</button>
              </div>
            </div>
          </div>

          <div class="col rounded shadow">
            <div class="card h-100">
              <div class="card-body">
                <h5 class="card-title h-50 text-center">
                  <img
                    id="img"
                    class="img-fluid mt-2"
                    src="https://http2.mlstatic.com/D_NQ_NP_2X_826537-MLA43977268687_112020-F.webp"
                  />
                </h5>
                <p class="card-text">
                  <small>Teclado sem fio Logitech K270 QWERTY</small><br />
                </p>
                <div class="card-text">
                  <span class="text-secondary"
                    ><strong>Logitech</strong></span
                  >
                  <h5>Teclado</h5>
                </div>
              </div>
              <div class="card-footer text-center">
                <button class="btn btnstatusemprestado">Nome Colaborador</button>
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
#gravatar img {
  width: 30px !important;
  border-radius: 50% !important;
}
</style>