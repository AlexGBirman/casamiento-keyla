<template>
  <section class="src-components-index">

    <div class="image-container">
      <img src="../assets/pareja-feliz.jpg" alt="Imagen de encabezado" class="img-fluid h-100">
    </div>

    <div class="countdown-container">
      <div class="countdown" v-if="timeRemaining > 0">
        <h3>Faltan</h3>
        <div class="countdown-display">
          <div class="row">
            <div class="col-4">
              <h5>{{ days }}</h5>
            </div>
            <div class="col-4">
              <h5>{{ minutes }}</h5>
            </div>
            <div class="col-4">
              <h5>{{ seconds }}</h5>
            </div>
          </div>
          <div class="row">
            <div class="col-4">
              <p>días</p>
            </div>
            <div class="col-4">
              <p>minutos</p>
            </div>
            <div class="col-4">
              <p>segundos</p>
            </div>
          </div>
        </div>
      </div>
      <div class="countdown" v-else>
        <h3>¡Llegó el día!</h3>
      </div>
    </div>

    <div class="ubicacion container-fluid text-center">
      <p>Zsar Eventos</p>
      <p>Av. Juan Bautista Justo 5902, C1416DLN CABA</p>
      <button @click="verUbicacion()">Ver ubicación</button>
    </div>

  </section>
</template>

<script lang="js">

export default {
  name: 'src-components-index',
  props: [],
  mounted() {
    setInterval(this.updateCountdown, 1000)
    this.updateCountdown()
  },
  data() {
    return {
      targetDate: new Date("2024-01-01T12:00:00").getTime(),
      timeRemaining: 0

    }
  },
  methods: {
    updateCountdown() {
      const currentDate = new Date().getTime()
      this.timeRemaining = this.targetDate - currentDate
    },
    verUbicacion() {
      window.open('https://maps.app.goo.gl/fYg4Ud32JZZASKwx9', '_blank')
    }
  },
  computed: {
    days() {
      return Math.floor(this.timeRemaining / (1000 * 60 * 60 * 24));
    },
    hours() {
      return Math.floor((this.timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    },
    minutes() {
      return Math.floor((this.timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    },
    seconds() {
      return Math.floor((this.timeRemaining % (1000 * 60)) / 1000);
    },
  }

}



</script>

<style scoped lang="css">
.container-fluid {}

.header {
  background-color: #f5f5f5;
  padding: 20px;
  text-align: center;
  position: -webkit-sticky;
  /* Sticky para navegadores webkit */
  position: sticky;
  /* Sticky para otros navegadores */
  z-index: 999;
  /* Asegura que el encabezado esté por encima del contenido */
  transition: top 0.3s;
  /* Transición suave para ocultar el encabezado */
}

.header.hidden {
  top: -100px;
  /* Puedes ajustar esto para ocultar completamente el encabezado */
}

.navbar-brand {
  margin-left: 20px;
}

.countdown-container {
  text-align: center
}

.ubicacion {
  background: #637457;

}

p {
  font-family: Poppins;
}

@font-face {
  font-family: 'Poppins';
  src: url('../fonts/Poppins-Regular.ttf') format('truetype');
}
</style>
