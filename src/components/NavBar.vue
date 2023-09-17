<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
    <a class="navbar-brand" href="#">Key & Gusti</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/index">
            <a class="nav-link" href="#">Inicio</a>
          </router-link>
        </li>

        <li class="nav-item">
          <router-link to="/lista-de-regalos">
            <a class="nav-link" href="#">Lista de regalos</a>
          </router-link>
        </li>
      </ul>
    </div>
  </nav>

</template>

<script>
export default {
  name: "src-components-nav-bar",
  props: [],
  mounted() {},
  data() {
    return {};
  },
  methods: {},
  computed: {},
};
</script>

<style scoped lang="css">
.src-components-nav-bar {
}
</style>
