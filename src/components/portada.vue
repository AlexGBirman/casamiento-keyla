<template>
  <section class="src-components-portada">
    <h1>src-components-portada Component</h1>

    <router-link to="/index" class="container-fluid text-center centrar-contenedor">
      <a href="#">
        <img src="../assets/flores inicio.png" alt="Imagen de encabezado" class="col-4 imagen-rotada">
        <hr>
        <h1>Hola</h1>
        <h1>Hola</h1>
        <h1>Hola</h1>
        <img src="../assets/flores inicio.png" alt="Imagen de encabezado" class="col-4">
      </a>
    </router-link>
  </section>
</template>

<script lang="js">

export default {
  name: 'src-components-portada',
  props: [],
  mounted() {

  },
  data() {
    return {

    }
  },
  methods: {

  },
  computed: {

  }
}


</script>

<style scoped lang="css">
.src-components-portada {}

.centrar-contenedor {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
}

.imagen-rotada {
  transform: rotate(180deg);
}
</style>
