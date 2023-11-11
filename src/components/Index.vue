<template>
  <section class="src-components-index">

    <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <a class="navbar-brand" href="#">Key & Gusti</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
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

    <div class="image-container">
      <img src="../assets/Portada.jpg" alt="Imagen de encabezado" class="img-fluid">
    </div>

    <br>

    <div class="frase container-fluid text-center">
      <p>"En cuanto al asunto que tú y yo hemos hablado, esté Dios entre nosotros dos para siempre"</p>
    </div>

    <div class="container-fluid p-3">
      <div class="row justify-content-center align-items-center">
        <div class="col-md-4">
          <div class="rounded-circle text-center p-5">
            <div class="countdown-container">
              <div class="countdown" v-if="timeRemaining > 0">
                <div class="mb-4">
                  <h3>Faltan</h3>
                </div>
                <div class="countdown-display">
                  <div class="row">
                    <div class="col-4 text-center">
                      <h5>{{ days }}</h5>
                    </div>
                    <div class="col-4 text-center">
                      <h5>{{ minutes }}</h5>
                    </div>
                    <div class="col-4 text-center">
                      <h5>{{ seconds }}</h5>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-4 text-center">
                      <p>días</p>
                    </div>
                    <div class="col-4 text-center">
                      <p>minutos</p>
                    </div>
                    <div class="col-4 text-center">
                      <p>segundos</p>
                    </div>
                  </div>
                </div>
              </div>
              <div class="countdown" v-else>
                <h3>¡Llegó el día!</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="anillos image-container img-fluid text-center">
      <img src="../assets/anillos.png" alt="">
    </div>

    <div class="nuestra-boda container-fluid text-center">
      <h3>Nuestra boda</h3>
    </div>

    <div class="carousel-container text-center">
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/carru1.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/carru2.jpg" class="d-block w-100" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/carru3.jpg" class="d-block w-100" alt="...">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>

    <div class="ubicacion container-fluid text-center">
      <p>Quinta Querandí</p>
      <p>Azcuénaga 1318, Gral. Rodríguez, Provincia de Buenos Aires</p>
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
      targetDate: new Date("2024-01-20T12:00:00").getTime(),
      timeRemaining: 0

    }
  },
  methods: {
    updateCountdown() {
      const currentDate = new Date().getTime()
      this.timeRemaining = this.targetDate - currentDate
    },
    verUbicacion() {
      window.open('https://maps.app.goo.gl/AqdWCy3hC3GdQT88A', '_blank')
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
.imagen-portada {
  /* max-height: 90vh; */
}

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
  text-align: center;
  font-family: Poppins;
}

.ubicacion {
  background: #637457;

}

.navbar {
  font-family: Poppins;
}

@font-face {
  font-family: 'Poppins';
  src: url('../fonts/poppins-regular-webfont.woff') format('truetype');
}

.rounded-circle {
  background: #C0CAAF;
}

.carousel-container {
  max-width: 500px;
}</style>
