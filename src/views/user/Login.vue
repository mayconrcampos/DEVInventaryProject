<template>
  <div class="container mt-5">
    <main class="form-signin p-3 rounded">
      <div class="container w-100 m-auto text-center">
        <img
          class="img img-fluid w-50"
          src="../../assets/inventarylogo.png"
          alt="DEVinventary"
        />
      </div>
      <div class="container">
        <form class="w-75 m-auto">
          <h1 id="titulologin">Login</h1>

          <div class="form-floating">
            <input
              type="email"
              class="form-control rounded"
              id="floatingInput"
              placeholder="seu-email@example.com"
            />
            <label for="floatingInput">Email</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control rounded"
              id="floatingPassword"
              placeholder="Senha"
            />
            <label for="floatingPassword">Senha</label>
          </div>

          <button id="btnsubmit" type="submit"><i class="fa-solid fa-lock-open"></i> Entrar</button>
          <button id="btngoogle" type="submit"><i class="fa-brands fa-google"></i> Entrar com Google</button>
          <hr>
          <div class="container">
              <small>Não possui uma conta?</small>
              <button href="#" id="btncriarconta"><i class="fa-solid fa-circle-plus"></i> Criar conta</button>
          </div>
          <p class="mt-5 mb-3 text-muted text-center">© Maycon R Campos - SENAI DEVinHouse[ConectaNuvem] - Maio de 2022</p>
        </form>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: "loGin",
};
</script>

<style>
#btnsubmit {
    width: 200px;
    border: 0;
    padding: 5px;
    border-radius: 5px;
    background-color: #1f4794;
    color: white;
    font-size: 1em;
    margin-top: 10px;
    margin-right: 10px;
}
#btngoogle {
    width: 200px;
    border: 0;
    padding: 5px;
    border-radius: 5px;
    background-color: #e7e7e7;
    color: black;
    font-size: 1em;
    margin-top: 10px;
}
#titulologin {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 2em;
    font-weight: bold;
    margin-top: 40px;
}
#btncriarconta {
    width: 200px;
    border: 0;
    padding: 5px;
    border-radius: 5px;
    background-color: #e7e7e7;
    color: black;
    font-size: 1em;
    margin-top: 10px;
    margin-left: 20px;
    
}
</style>