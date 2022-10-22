
<template>
  <div class="mt-5">
    <v-app-bar app flex  dark>
      <img height="100" width="100 " src="https://agenciapublicadeempleo.sena.edu.co/imgLayout/logos/LogoSENA-naranja_vector.png" >
      <v-app-bar-nav-icon @click="drawer = true" v-if="$store.state.token !== ''"></v-app-bar-nav-icon>
      <img src="" alt="">

      <v-toolbar-title class="font-weight-black"> Lab </v-toolbar-title>
      <v-toolbar-title class="deep-orange--text font-weight-black"> Ficat</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn @click="salir()" class="white blue--text" v-if="$store.state.token !== ''">
        salir
        <v-icon>mdi-door-open</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer temporary v-model="drawer" absolute color="deep-orange">
      <v-list>
        <v-list-item>
          <h1></h1>
        </v-list-item>

        <v-list-item class="d-flex justify-center" to="/perfil">
          <v-avatar color="white" size="62">
            <v-img :src="$store.state.datos.foto">
            </v-img>
          </v-avatar>
        </v-list-item>
        <v-list-item class="d-flex justify-center white--text mt-4 mb-4">
          <h3 align="center" justify="center">{{ $store.state.datos.nombre }}</h3>
        </v-list-item>

        <!-- //Pagina inicio -->

       

        <!-- //grupo holders -->
        
        <v-list-item  v-if="this.configuracion===0" @click="Configuracion()" absolute color="deep-orange">
          <v-list-item-icon class="white--text">
            <v-icon color="white">mdi-settings-box</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text">Configuración</v-list-item-title>
        </v-list-item>

        <div v-if="this.configuracion===1">
          <v-list-item @click="Configuracion1()" >
          <v-list-item-icon class="white--text">
            <v-icon color="white">mdi-settings</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text">Configuración</v-list-item-title>
        </v-list-item>

        <v-list-item to="/setup">
          <v-list-item-icon class="white--text " >
            <v-icon color="white">mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text">Setup</v-list-item-title>
        </v-list-item>
        <v-list-item @click="Configuracion()">
          <v-list-item-icon class="white--text">
            <v-icon color="white">mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text">Ciudades</v-list-item-title>
        </v-list-item>
        <v-list-item @click="Configuracion()">
          <v-list-item-icon class="white--text">
            <v-icon color="white">mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text">Ensayo</v-list-item-title>
        </v-list-item>

        <v-list-item @click="Configuracion()">
          <v-list-item-icon class="white--text">
            <v-icon color="white">mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text">Bitacora</v-list-item-title>
        </v-list-item>

        <v-list-item @click="Configuracion()">
          <v-list-item-icon class="white--text">
            <v-icon color="white">mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text">Calidad</v-list-item-title>
        </v-list-item>
       </div>
          
        


        <v-list-item to="/cotizacion">
          <v-list-item-icon class="white--text">
            <v-icon color="white">mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text">Cotizacion</v-list-item-title>
        </v-list-item>

        <v-list-item to="/DetallesCotizacion">
          <v-list-item-icon class="">
            <v-icon color="white">mdi-heart-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text">Detalles Cotizacion</v-list-item-title>
        </v-list-item>

        <v-list-item to="/Home">
          <v-list-item-icon class="white--text">
            <v-icon color="white">mdi-sword</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text">Home</v-list-item-title>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
  </div>
</template>


<script>
export default {
  name: "InicioHeader",
  data:()=> ({
      drawer: false,
      group: null,
      configuracion:0
  }),
  methods: {
    salir() {
      this.$router.replace("/")
      this.$store.commit("setToken", "")
    },
    Configuracion(){
      this.configuracion=1
    },
    Configuracion1(){
      this.configuracion=0
    }

  }
}  
</script>