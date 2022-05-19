<template>
  <div class="container text-center mt-5">
      <h1><i class="fa-solid fa-xmark-large mt-5"></i> ERROR 404 - Página não encontrada</h1>

      <img src="../../assets/notfound.png" alt="">

      <div class="container">
        <button class="btn btn-danger" @click="voltar()">Voltar</button>
      </div>
      
  </div>
</template>

<script>
export default {
    name: "erRor",
    methods: {
      voltar(){
        this.$router.go(-1)
      }
    }
}
</script>

<style>

</style>