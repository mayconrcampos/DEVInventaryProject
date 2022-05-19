<template>
  <div id="cadastro" class="bg-light">
    <nav class="navbar navbar-expand-lg">
      <div class="d-flex flex-row fs-5 w-100">
        <div class="w-50 ms-3">
          <span class="">CADASTRO DE COLABORADORES</span>
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
        <h5 class="fs-4">Dados Pessoais</h5>

        <div class="row">
          <div class="col-lg-6">
            <label class="col-form-label">Nome Completo</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-lg-4">
            <label class="col-form-label">Gênero</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-lg-2">
            <label class="col-form-label">Data Nascimento</label>
            <input type="date" class="form-control" />
          </div>
        </div>

        <div class="row mb-5">
          <div class="col-lg-4">
            <label class="col-form-label">Telefone</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-lg-4">
            <label class="col-form-label">Email</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-lg-4">
            <label class="col-form-label">Cargo</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <h5 class="fs-4">Dados de Endereço</h5>

        <div class="row">
          <div class="col-lg-4">
            <label class="col-form-label">CEP</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-lg-6">
            <label class="col-form-label">Cidade</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-lg-2">
            <label class="col-form-label">UF</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <div class="row">
          <div class="col-lg-10">
            <label class="col-form-label">Logradouro</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-lg-2">
            <label class="col-form-label">Número</label>
            <input type="text" class="form-control" />
          </div>
        </div>

        <div class="row">
          <div class="col-lg-4">
            <label class="col-form-label">Complemento</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-lg-4">
            <label class="col-form-label">Bairro</label>
            <input type="text" class="form-control" />
          </div>
          <div class="col-lg-4">
            <label class="col-form-label">Ponto de Referência</label>
            <input type="text" class="form-control" />
          </div>
        </div>
        <div class="d-flex justify-content-end mt-4">
          <button id="btnlimpar" class="btn me-3">Limpar</button>
          <button id="btnsalvar" class="btn">Salvar</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "caDastro",
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