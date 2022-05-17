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
        <form class="w-50 m-auto">
          <h1 id="titulologin">Login</h1>

          <div class="form-floating">
            <input
              type="email"
              class="form-control rounded"
              id="inputemail"
              placeholder="seu-email@example.com"
            />
            <label for="floatingInput">Email</label>
          </div>
          <div class="form-floating">
            <input
              type="password"
              class="form-control rounded"
              id="inputsenha"
              placeholder="Senha"
            />
            <label for="floatingPassword">Senha</label>
          </div>

          <button id="btnsubmit" type="submit">
            <i class="fa-solid fa-lock-open"></i> <router-link to="/menu" id="rlinkentrar">Entrar</router-link>
          </button>
          <button id="btngoogle" type="submit">
            <i class="fa-brands fa-google"></i> Entrar com Google
          </button>
          <hr />

          <div id="containercriaconta" class="container">
            <small>Não possui uma conta?</small>
            <button href="#" id="btncriarconta">
              <i class="fa-solid fa-circle-plus"></i> Criar conta
            </button>
          </div>

          <p id="fraserodape" class="mt-5 mb-3 text-muted text-center">
            © Maycon R Campos - SENAI DEVinHouse[ConectaNuvem] - Maio de 2022
          </p>
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
#rlinkentrar {
    text-decoration: none;
    color: #e7e7e7;
}
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
@media (max-width: 650px) {
  #btnsubmit {
    width: 60px;
    border: 0;
    padding: 5px;
    border-radius: 5px;
    background-color: #1f4794;
    color: white;
    font-size: 0.9em;
    margin-top: 10px;
    margin-right: 10px;
  }
  #btngoogle {
    width: 133px;
    border: 0;
    padding: 6px;
    border-radius: 5px;
    background-color: #e7e7e7;
    color: black;
    font-size: 0.7em;
    margin-top: 10px;
  }
  #containercriaconta {
    display: flex !important;
  }
  #btncriarconta {
    width: 100%;
    border: 0;
    padding: 5px;
    border-radius: 5px;
    background-color: #e7e7e7;
    color: black;
    font-size: 0.8em;
    margin-top: 10px;
  }
  #fraserodape {
    font-size: 0.7em;
  }
}

@media (max-width: 400px) {
  #btnsubmit {
    width: 80px;
    border: 0;
    padding: 5px;
    border-radius: 5px;
    background-color: #1f4794;
    color: white;
    font-size: 0.6em;
    margin-top: 10px;
    margin-right: 10px;
  }
  #btngoogle {
    width: 120px;
    border: 0;
    padding: 6px;
    border-radius: 5px;
    background-color: #e7e7e7;
    color: black;
    font-size: 0.6em;
    margin-top: 10px;
  }
}
</style>