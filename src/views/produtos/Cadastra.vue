<template>
  <div id="cadastro" class="bg-light">
    <nav class="navbar navbar-expand-lg sticky-top">
      <div class="d-flex flex-row fs-5 w-100">
        <div class="w-50 ms-3">
          <span class="">CADASTRO DE ITENS</span>
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
      <h3 class="text-left mt-4 fw-bold">Preencha os campos para cadastrar</h3>

      <div id="form" class="bg-white w-100 mt-4 p-4 rounded-2 shadow">
        <h5 class="fs-4">Dados Principais</h5>

        <form action="">
          <div class="row">
            <div class="col-lg-3">
              <label class="col-form-label">Código de Patrimônio</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-lg-6">
              <label class="col-form-label">Título do Item</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-lg-3">
              <label class="col-form-label">Categoria do Item</label>
              <input type="text" class="form-control" />
            </div>
          </div>

          <h5 class="fs-4 mt-5">Dados Complementares</h5>

          <div class="row">
            <div class="col-lg-3">
              <label class="col-form-label">Valor</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-lg-9">
              <label class="col-form-label">Inserir foto</label>
              <input type="file" class="form-control" />
            </div>
          </div>

          <div class="row">
            <div class="col-lg-6">
              <label class="col-form-label">Marca</label>
              <input type="text" class="form-control" />
            </div>
            <div class="col-lg-6">
              <label class="col-form-label">Modelo</label>
              <input type="text" class="form-control" />
            </div>
            
          </div>

          <div class="row">
            <div class="col-lg-12">
              <label class="col-form-label">Descrição</label>
              <textarea class="form-control" name="" id="" cols="30" rows="5"></textarea>
            </div>
            
          </div>

          
          <div class="d-flex justify-content-end mt-4">
            <button id="btnlimpar" class="btn me-3">Limpar</button>
            <button id="btnsalvar" class="btn">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "caDastra",
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