<template>
  <div id="cadastro" class="bg-light">
    <nav class="navbar navbar-expand-lg">
      <div class="d-flex flex-row fs-5 w-100">
        <div class="w-50 ms-3">
          <span class="">EMPRÉSTIMOS DE ITENS</span>
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
      <h3 class="text-left mt-4 fw-bold">
        Utilize a barra de pesquisa para buscar
      </h3>

      <div class="row">
        <div class="col-lg-10">
          <input type="text" class="form-control" />
        </div>
        <div class="col-lg-2">
          <button class="btn">
            <i class="fa-solid fa-magnifying-glass"></i> Buscar
          </button>
        </div>
      </div>

      <div id="form" class="bg-white w-100 mt-4 p-4 rounded-2 shadow">
        
        <!----------------------- THEAD TABLE ----------------------------->
          <div class="row text-center">
            <div class="col-lg-3">
              <label class="col-form-label fs-5">Patrimônio</label>
              
            </div>
            <div class="col-lg-3">
              <label class="col-form-label fs-5">Título</label>
             
            </div>
            <div class="col-lg-3">
              <label class="col-form-label fs-5">Categoria</label>
             
            </div>
            <div class="col-lg-3">
              <label class="col-form-label fs-5">Emprestado para</label>
            </div>
          </div>
          <hr>
        
         <!----------------------- TBODY TABLE ----------------------------->

         <div class="row border rounded shadow text-center">
            <div class="col-lg-3">
              <label class="col-form-label fs-5">Código de Patrimônio</label>
              
            </div>
            <div class="col-lg-3">
              <label class="col-form-label fs-5">Título do Item</label>
             
            </div>
            <div class="col-lg-3">
              <label class="col-form-label fs-5">Categoria do Item</label>
             
            </div>
            <div class="col-lg-3">
              <label class="col-form-label fs-5">Categoria do Item</label>
            </div>
          </div>
        
        
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "emprEstimos",
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
#btnlimpar {
  background-color: #f9a825;
  color: white;
  width: 100px;
}
#btnsalvar {
  background-color: #4caf50;
  color: white;
  width: 100px;
}
#gravatar img {
  width: 30px !important;
  border-radius: 50% !important;
}
</style>