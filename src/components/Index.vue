<template>
  <section class="src-components-index">

    <div class="container-lg">

      <section id="nav">
        <nav v-if="esMobile" class="navbar navbar-mobile navbar-expand-lg navbar-light">
          <div class="navbar-brand-container-mobile mx-auto">
            <div class="circular-container-mobile mx-auto">
              <h5 id="header-title-mobile" class="navbar-brand mx-auto">Gusti y Kei</h5>
            </div>
          </div>
        </nav>
        <nav v-else class="navbar navbar-expand-lg navbar-light fixed-top">
          <div class="navbar-brand-container mx-auto">
            <div class="circular-container mx-auto">
              <h5 id="header-title" class="navbar-brand mx-auto">Gusti y Kei</h5>
            </div>
          </div>
        </nav>
      </section> <!-- hecho -->

      <div class="image-container mt-5">
        <img src="../assets/Portada.jpg" alt="Imagen de encabezado" class="img-fluid" style="margin-top: 20px;">
      </div> <!-- hecho -->

      <section id="frase">
        <div v-if="esMobile" class="frase container-fluid text-center">
          <p style="padding: 20px;">
            "Así que no son ya más dos, sino una sola carne; por tanto, lo que Dios juntó, no lo separe el hombre."
          </p>
          <p style="font-family: Italianno; font-size: xx-large;">Mateo 19:6</p>
        </div>
        <div v-else class="frase container-fluid text-center">
          <p style="padding: 30px;">
            "Así que no son ya más dos, sino una sola carne; por tanto, <br> lo que Dios juntó, no lo separe el hombre."
          </p>
          <p style="font-family: Italianno; font-size: xx-large;">Mateo 19:6</p>
        </div>
      </section> <!-- hecho -->

      <div class="contenedor-fecha">
        <div class="col-md-78">
          <div class="countdown-container">
            <div class="mb-4">
              <img src="../assets/fecha.jpg" alt="" class="img-fluid" width=100%>
            </div>
            <div class="countdown" v-if="timeRemaining > 0">
              <div class="mb-4">
                <h3 style="font-size: 1.3rem; margin-top: 55px;">FALTAN</h3>
              </div>
              <div class="countdown-display">
                <div class="row">
                  <div class="col-3 text-center">
                    <h5>{{ days }}</h5>
                  </div>
                  <div class="col-3 text-center">
                    <h5>{{ hours }}</h5>
                  </div>
                  <div class="col-3 text-center">
                    <h5>{{ minutes }}</h5>
                  </div>
                  <div class="col-3 text-center">
                    <h5>{{ seconds }}</h5>
                  </div>
                </div>
                <div v-if="esMobile" class="row">
                  <div class="col-3 text-center" style="font-size: 12px;">
                    <p>días</p>
                  </div>
                  <div class="col-3 text-center" style="font-size: 12px;">
                    <p>horas</p>
                  </div>
                  <div class="col-3 text-center" style="font-size: 12px;">
                    <p>minutos</p>
                  </div>
                  <div class="col-3 text-center" style="font-size: 12px;">
                    <p>segundos</p>
                  </div>
                </div>
                <div v-else class="row">
                  <div class="col-3 text-center">
                    <p>días</p>
                  </div>
                  <div class="col-3 text-center">
                    <p>horas</p>
                  </div>
                  <div class="col-3 text-center">
                    <p>minutos</p>
                  </div>
                  <div class="col-3 text-center">
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

      <div class="contenedor-verde container-fluid h-auto">
        <img src="../assets/ubicacion.png" alt="" height="100px" style="margin-top: 20px;">
        <div class="container-fluid text-center">
          <p style="font-family: Italianno; font-size: 3rem; margin-bottom: 0; margin-top: 10px;">Quinta Querandí</p>
          <p>Azcuénaga 1318, Gral. Rodríguez, Provincia de Buenos Aires</p>
          <button @click="verUbicacion()" class="btn btn-light btn-lg" style="font-family: Poppins;">VER
            UBICACIÓN</button>
        </div>
        <br>
      </div> <!-- hecho -->

      <div id="carouselExample" class="carousel slide">
        <div v-if="esMobile" class="carousel-inner">
          <div class="carousel-item active">
            <img src="../assets/carru6.jpg" class="d-block w-100 imagen-carrusel" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/carru2.jpg" class="d-block w-100 imagen-carrusel" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/carru9.jpg" class="d-block w-100 imagen-carrusel" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/carru3.jpg" class="d-block w-100 imagen-carrusel" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/carru5.jpg" class="d-block w-100 imagen-carrusel" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/carru4.jpg" class="d-block w-100 imagen-carrusel" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/carru7.jpg" class="d-block w-100 imagen-carrusel" alt="...">
          </div>
          <div class="carousel-item">
            <img src="../assets/carru1.jpg" class="d-block w-100 imagen-carrusel" alt="...">
          </div>
        </div>
        <div v-else class="carousel-inner">
          <div class="carousel-item active">
            <div class="row">
              <div class="col-4">
                <img src="../assets/carru6.jpg" class="d-block w-100 imagen-carrusel" alt="...">
              </div>
              <div class="col-4">
                <img src="../assets/carru2.jpg" class="d-block w-100 imagen-carrusel" alt="...">
              </div>
              <div class="col-4">
                <img src="../assets/carru9.jpg" class="d-block w-100 imagen-carrusel" alt="...">
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-4">
                <img src="../assets/carru5.jpg" class="d-block w-100 imagen-carrusel" alt="...">
              </div>
              <div class="col-4">
                <img src="../assets/carru3.jpg" class="d-block w-100 imagen-carrusel" alt="...">
              </div>
              <div class="col-4">
                <img src="../assets/carru7.jpg" class="d-block w-100 imagen-carrusel" alt="...">
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div class="row">
              <div class="col-4">
                <img src="../assets/carru1.jpg" class="d-block w-100 imagen-carrusel" alt="...">
              </div>
              <div class="col-4">
                <img src="../assets/carru4.jpg" class="d-block w-100 imagen-carrusel" alt="...">
              </div>
              <div class="col-4">
                <img src="../assets/carru6.jpg" class="d-block w-100 imagen-carrusel" alt="...">
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div> <!-- hecho -->

      <div class="contenedor-verde container-fluid h-auto" id="asistencia">
        <img src="../assets/asistencia.png" alt="" style="height: 100px; margin-top: 20px;">
        <div class="container-fluid text-center">
          <p style="font-family: Italianno; font-size: 50px;">Asistencia</p>
          <p>Esperamos que puedas acompañarnos en este día tan especial. <br> <br v-if="esMobile">
            Por favor, confirmar asistencia antes del día 03/01/2024</p>
          <button @click="confirmarAsistencia()" class="btn btn-light btn-lg" style="font-family: Poppins;">CONFIRMAR
            ASISTENCIA </button>
        </div>
        <br>
      </div> <!-- hecho -->

      <div class="row" id="info-gral">
        <div class="image-container" :class="{ 'col-5': !esMobile }">
          <img src="../assets/dresscode-mobile.jpg" alt="Imagen de encabezado" class="img-fluid" v-if="esMobile">
          <img src="../assets/foto-dresscode.jpg" alt="Imagen de encabezado" class="img-fluid" v-else>
        </div>
        <div class="contenedor-manteca container-fluid h-auto" :class="{ 'col-7': !esMobile }">
          <img src="../assets/dresscode.png" alt="" style="height: 100px; margin-top: 10px;">
          <div class="container-fluid text-center">
            <p style="font-family: Italianno; font-size: 50px;">Código de vestimenta</p>
            <p>Elegante y elegante sport,</p>
          </div>
          <img src="../assets/info.png" alt="" style="height: 100px; margin-top: 10px;">
          <div class="container-fluid text-center">
            <p style="font-family: Italianno; font-size: 50px;">Info general</p>
            <div class="container-fluid text-center">
              <ul class="text-start">
                <li>El lugar tiene estacionamiento con capacidad para todos los autos.</li>
                <li>Chequeá esta invitación unos días antes de la fiesta, para encontrar tu ubicación de mesa y algunos
                  detalles más.</li>
                <li>Te pedimos que seas puntual, ya que <b>la ceremonia comenzará 19:30hs.</b></li>
              </ul> <br>
            </div>
            <p>Ante cualquier duda, comunicarse con:</p>
            <div class="container-fluid text-center">
              <ul class="text-start">
                <li>Natalia: <a href="#info-gral" @click="mensajeNatalia()">+5491157644341</a></li>
                <li>Melody: <a href="#info-gral" @click="mensajeMelody()">+5491135176383</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div> <!-- hecho -->

      <div class="contenedor-verde container-fluid h-auto">
        <img src="../assets/regalo.png" alt="" style="height: 100px; margin-top: 10px;">
        <div class="container-fluid text-center">
          <p style="font-family: Italianno; font-size: 3rem;">Regalos</p>
          <p>Si deseás obsequiarnos algo para ayudarnos con nuestra luna de miel y/o casa, podés hacerlo de la siguiente
            manera:</p>
          <div class="container-fluid text-center">
            <ul class="text-start">
              <li><b>Caja de Ahorro:</b> 010001500027447811</li>
              <li><b>CBU:</b> 0930300121500274478114</li>
              <li><b>Nombre del titular:</b> Gustavo Alejandro Liendo Malsam</li>
              <li><b>Alias:</b> GustiMalsam</li>
            </ul>
          </div>
        </div>
        <br>
      </div> <!-- hecho -->

      <div class="contenedor-manteca container-fluid" id="anillos">
        <div class="container-fluid text-center contenedor-anillos">
          <div class=""></div>
        </div>
      </div> <!-- hecho -->

      <br>
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
      targetDate: new Date("2024-01-20T19:00:00").getTime(),
      timeRemaining: 0,
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
    mensajeNatalia() {
      window.open('https://wa.me/5491157644341', '_blank')
    },
    mensajeMelody() {
      window.open('https://wa.me/5491135176383', '_blank')
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
    esMobile() {
      return window.innerWidth < 768
    }
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

.contenedor-verde {
  background: #E4EBD9;
  height: 310px;
  text-align: center;
  align-items: center;
}

.contenedor-manteca {
  background: #FFFFFA;
  height: 310px;
  text-align: center;
  align-items: center;
}

.asistencia {
  background: #E4EBD9;
  height: 350px;
  text-align: center;
  align-items: center;
}

.navbar {
  height: 75px;
  background: #FFFFFA;
}

.navbar-mobile {
  height: 50px;
  background: #FFFFFA;
}

@font-face {
  font-family: 'Poppins';
  src: url('../fonts/poppins-regular-webfont.woff') format('truetype');
}

@font-face {
  font-family: 'Italianno';
  src: url('../fonts/italianno-regular-webfont.woff') format('truetype');
}

.src-components-index {
  background: #FFFFFA;
}

.navbar-brand {
  display: block;
  text-align: center;
  background: #FFFFFA;
}

#header-title {
  font-family: Italianno;
  font-size: 40px;
}

#header-title-mobile {
  font-family: Italianno;
  font-size: 35px;
}

.navbar-brand-container {
  position: relative;
  width: 175px;
  /* Ajusta el tamaño del contenedor según tus preferencias */
  height: 175px;
  /* Ajusta el tamaño del contenedor según tus preferencias */
}

.navbar-brand-container-mobile {
  position: relative;
  width: 120px;
  /* Ajusta el tamaño del contenedor según tus preferencias */
  height: 120px;
  /* Ajusta el tamaño del contenedor según tus preferencias */
}

.navbar-brand-container .circular-container {
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: #FFFFFA;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFA;
}

.navbar-brand-container-mobile .circular-container-mobile {
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #FFFFFA;
  /* Color del fondo del contenedor circular */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFFFFA;
  /* Color del texto */
}

.frase {
  height: 200px;
  background-color: #E4EBD9;
  text-align: center;
  align-items: center;
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

.imagen-carrusel {
  flex-shrink: 0;
  display: inline-block;
  padding: 30px 15px;
}

.contenedor-anillos {
  margin-top: 0px;
  background-image: url('../assets/anillos-dorado.png');
  background-size: 150px;
  /* Ajusta la imagen para cubrir completamente el contenedor */
  background-position: center;
  /* Centra la imagen horizontal y verticalmente */
  background-repeat: no-repeat;
  /* Evita que la imagen se repita */
  height: 200px;
}</style>
