<template>
  <section class="src-components-index container-lg">

    <nav class="navbar navbar-expand-lg navbar-light fixed-top">
      <div class="navbar-brand-container mx-auto">
        <div class="circular-container mx-auto">
          <h5 id="header-title" class="navbar-brand mx-auto">Gusti y Kei</h5>
        </div>
      </div>
    </nav> <!-- hecho -->

    <div class="image-container mt-5">
      <img src="../assets/Portada.jpg" alt="Imagen de encabezado" class="img-fluid" style="margin-top: 20px;">
    </div> <!-- hecho -->

    <div class="frase container-fluid text-center">
      <p style="padding: 30px;">
        "Así que no son ya más dos, sino una sola carne; por tanto, <br> lo que Dios juntó, no lo separe el hombre."
      </p>
      <p style="font-family: Italianno; font-size: xx-large;">Salmos 9:10</p>
    </div> <!-- hecho -->

    <div class="contenedor-fecha">
      <div class="col-md-78">
        <div class="countdown-container">
          <div class="countdown" v-if="timeRemaining > 0">
            <div class="mb-4">
              <img src="../assets/fecha.jpg" alt="" class="img-fluid" width=80%>
            </div>
            <div class="mb-4">
              <h3 style="font-size: 1.3rem; margin-top: 55px;">FALTAN</h3>
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
    </div> <!-- hecho -->

    <div class="ubicacion container-fluid text-center">
      <img src="../assets/" alt="">
      <p style="font-family: Italianno; font-size: 50px;">Quinta Querandí</p>
      <p>Azcuénaga 1318, Gral. Rodríguez, Provincia de Buenos Aires</p>
      <button @click="verUbicacion()" class="btn btn-light btn-lg" style="font-family: Poppins;">VER UBICACIÓN</button>
    </div>

    <div class="container">
      <div id="carouselExampleIndicators" class="carousel slide">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active"
            aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
            aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
            aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3"
            aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4"
            aria-label="Slide 5"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5"
            aria-label="Slide 6"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6"
            aria-label="Slide 7"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/carru1.jpg" class="d-block w-100 imagen-carrusel" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/carru2.jpg" class="d-block w-100 imagen-carrusel" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/carru3.jpg" class="d-block w-100 imagen-carrusel" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/carru4.jpg" class="d-block w-100 imagen-carrusel" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/carru5.jpg" class="d-block w-100 imagen-carrusel" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/carru6.jpg" class="d-block w-100 imagen-carrusel" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/carru7.jpg" class="d-block w-100 imagen-carrusel" alt="...">
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

    <div class="asistencia container-fluid text-center">
      <img src="../assets/asistencia.png" alt="" style="height: 100px;">
      <p style="font-family: Italianno; font-size: 50px;">Asistencia</p>
      <p>Esperamos que puedas acompañarnos en este día tan especial. <br>
        Por favor, confirmar asistencia antes del día 03/01/2024</p>
      <button @click="confirmarAsistencia()" class="btn btn-light btn-lg" style="font-family: Poppins;">CONFIRMAR
        ASISTENCIA</button>
    </div>

    <!-- <div id="carrusel-container" :style="{ transform: 'translateX(' + translateValue + '%)' }">
      <img v-for="(imagen, index) in imagenes" :key="index" :src="imagen" :alt="'Imagen ' + (index + 1)" class="imagen-carrusel">
    </div> -->

    <div class="container mt-5 mb-5">
      <div class="row">
        <div class="col-md-6">
          <div class="card mi-card">
            <img src="../assets/percha.png" alt="" id="icon" class="card-img-top mx-auto">
            <div class="card-body text-center">
              <h5 class="card-title">Dress code</h5>
              <p class="card-text">Elegante y elegante sport</p>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="card mi-card">
            <img src="../assets/checkmark.png" alt="" id="icon" class="card-img-top mx-auto">
            <div class="card-body text-center">
              <h5 class="card-title">Info general</h5>
              <ul>
                <li>El lugar tiene estacionamiento con capacidad para todos los autos</li>
                <li>Chequeá tu invitación unos días antes de la fiesta para encontrar tu ubicación de mesa y algunos
                  detalles más</li>
                <li>Te pedimos que seas puntual ya que la ceremonia comenzará 19:30hs</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

  </section>
</template>

<script lang="js">

export default {
  name: 'src-components-index',
  props: [],
  mounted() {
    setInterval(this.updateCountdown, 1000)
    setInterval(this.mostrarSiguiente, 3000)
    this.updateCountdown()
    for (let i = 1; i <= 7; i++) {
      this.imagenes.push(`../assets/carru${i}.jpg`);
      console.log(this.imagenes)
    }
  },
  data() {
    return {
      targetDate: new Date("2024-01-20T19:00:00").getTime(),
      timeRemaining: 0,
      imagenes: [],
      currentIndex: 0,
    }
  },
  methods: {
    updateCountdown() {
      const currentDate = new Date().getTime()
      this.timeRemaining = this.targetDate - currentDate
    },
    verUbicacion() {
      window.open('https://maps.app.goo.gl/AqdWCy3hC3GdQT88A', '_blank')
    },
    confirmarAsistencia() {
      window.open('https://forms.gle/2WEuM3orjG7DQ1K18', '_blank')
    },
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
    translateValue() {
      return -this.currentIndex * 33.33;
    },
  }

}



</script>

<style scoped lang="css">
.countdown-container {
  text-align: center;
  font-family: Poppins;
  background-color: #FFFFFA;
  color: black;
  width: 100%;
  padding-top: 25px;
  padding-bottom: 25px;
}

.ubicacion {
  background: #E4EBD9;
  height: 300px;
  text-align: center;
  align-items: center;
}

.asistencia {
  background: #E4EBD9;
  height: 300px;
  text-align: center;
  align-items: center;
}

.navbar {
  height: 75px;
  background: #FEFBFB;
}

@font-face {
  font-family: 'Poppins';
  src: url('../fonts/poppins-regular-webfont.woff') format('truetype');
}

@font-face {
  font-family: 'Italianno';
  src: url('../fonts/italianno-regular-webfont.woff') format('truetype');
}

.rounded-circle {
  background: #E4EBD9;
}

/* #carrusel-container {
  display: flex;
  transition: transform 0.5s ease-in-out;
} */

.imagen-carrusel {
  width: 33.33%;
  flex-shrink: 0;
}

.src-components-index {
  background: #FEFBFB;
}

#icon {
  width: 100px;
}

.mi-card {
  border-radius: 15px;
  /* Ajusta el radio del borde según tus preferencias */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Ajusta la sombra según tus preferencias */
}

.navbar-brand {
  display: block;
  text-align: center;
  background: #FEFBFB;
}

#header-title {
  font-family: Italianno;
  font-size: 40px;
}

.navbar-brand-container {
  position: relative;
  width: 175px;
  /* Ajusta el tamaño del contenedor según tus preferencias */
  height: 175px;
  /* Ajusta el tamaño del contenedor según tus preferencias */
  overflow: hidden;
}

.navbar-brand-container .circular-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #FEFBFB;
  /* Color del fondo del contenedor circular */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FEFBFB;
  /* Color del texto */
}

.frase {
  height: 200px;
  background-color: #E4EBD9;
  text-align: center;
  align-items: center;
}

.texto-frase {
  height: 200px;
  /* Ajusta la altura del contenedor según tus preferencias */
  align-items: center;
  justify-content: center;
  display: flex;
}

.contenedor-fecha {
  background-image: url('../assets/fondo-countdown.jpg');
  padding: 20px;
  height: 600px;
  color: #fff;
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.contenedor2 img {
  max-width: 100%;
}

.centrar-contenedor {
  width: 80%
}
</style>
