
<template>
  <div class="mt-5">
    <v-app-bar app flex class="primary">
      <div class="accent" id="header"></div>
      <v-app-bar-nav-icon @click="drawer = true" v-if="$store.state.token !== ''" color="deep-orange"></v-app-bar-nav-icon>

      <v-toolbar-title v-if="$store.state.token == ''" class="font-weight-black white--text ml-3"> Lab </v-toolbar-title>
      <v-toolbar-title v-if="$store.state.token !== ''" class="font-weight-black white--text"> Lab </v-toolbar-title>
      <v-toolbar-title class="deep-orange--text font-weight-black"> Ficat</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn @click="salir()" class="deep-orange--text" v-if="$store.state.token !== ''" rounded>
        salir 
        <v-icon>mdi-door-open</v-icon>
      </v-btn>
    </v-app-bar>

    <v-navigation-drawer temporary v-model="drawer" absolute color="deep-orange" width="280">
      <v-list>
        <v-list-item>
          <h1></h1>
        </v-list-item>

        <v-list-item class="d-flex justify-center" to="/perfil" rounded>
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
        <v-list-item to="/Home">
          <v-list-item-icon class="white--text">
            <v-icon color="white">mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text">Home</v-list-item-title>
        </v-list-item>

         
        <div v-if="$store.state.datos.rol == 'ADMIN'">
          <v-list-item v-if="this.configuracion === 0" @click="Configuracion()" absolute color="deep-orange">
            <v-list-item-icon class="white--text">
              <v-icon color="white">mdi-wrench</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="white--text">Configuración
              <v-icon class="ml-13">mdi-chevron-down
              </v-icon>
            </v-list-item-title>
          </v-list-item>
        </div>

        <div v-if="this.configuracion === 1" class="Config">
          <v-list-item @click="Configuracion1()" style="background-color: #ff5722; border: solid 1px; border-color: white; border-left:0px; border-right: 0px; border-top: 1px;">
            <v-list-item-icon class="white--text">
              <v-icon color="white">mdi-wrench</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="white--text">Configuración
              <v-icon class="ml-12">mdi-chevron-up
              </v-icon>
            </v-list-item-title>          
          </v-list-item>

          <v-list-item to="/setup">
            <v-list-item-icon class="white--text ">
              <v-icon color="white">mdi-account</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="white--text">Setup</v-list-item-title>
          </v-list-item>

          <v-list-item to="/AggCiudades">
            <v-list-item-icon class="white--text">
              <v-icon color="white">mdi-city</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="white--text">Ciudades</v-list-item-title>
          </v-list-item>

          <v-list-item to="/EnsayoLab">
            <v-list-item-icon class="white--text">
              <v-icon color="white">mdi-beaker-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="white--text">Ensayo</v-list-item-title>
          </v-list-item>

          <v-list-item to="/log">
            <v-list-item-icon class="white--text ">
              <v-icon color="white">mdi-book</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="white--text">Bitacora</v-list-item-title>
          </v-list-item>

          <v-list-item to="/color">
            <v-list-item-icon class="white--text ">
              <v-icon color="white">mdi-invert-colors</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="white--text">Color</v-list-item-title>
          </v-list-item>

          <v-list-item to="/Calidad" style=" border: solid 1px; border-color: white; border-left:0px; border-right: 0px; border-top: 0px;">
            <v-list-item-icon class="white--text">
              <v-icon color="white">mdi-pencil-box-outline</v-icon>
            </v-list-item-icon>
            <v-list-item-title class="white--text">Calidad</v-list-item-title>
          </v-list-item>

          
        </div>

        <v-list-item to="/agregarusuario">
          <v-list-item-icon class="white--text">
            <v-icon color="white">mdi-account-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text">Agregar Usuario</v-list-item-title>
        </v-list-item>

        <v-list-item to="/Muestras" v-if="$store.state.datos.rol == 'RECEPCIONISTA'|| $store.state.datos.rol == 'ADMIN' || $store.state.datos.rol == 'CIENTIFICO'">
          <v-list-item-icon >
            <v-icon color="white">mdi-beaker-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text">Muestras</v-list-item-title>
        </v-list-item>

        <v-list-item to="/Clientes" v-if="$store.state.datos.rol == 'RECEPCIONISTA'|| $store.state.datos.rol == 'ADMIN'">
          <v-list-item-icon class="white--text">
            <v-icon color="white">mdi-account-multiple-plus</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text">Clientes</v-list-item-title>
        </v-list-item>

        <v-list-item to="/cotizacion">
          <v-list-item-icon class="white--text">
            <v-icon color="white">mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-title class="white--text">Cotizacion</v-list-item-title>
        </v-list-item>

      </v-list>
    </v-navigation-drawer>
  </div>
</template>


<script>
export default {
  name: "InicioHeader",
  data: () => ({
    drawer: false,
    group: null,
    configuracion: 0,
    colores:"",
  }),
  methods: {
    color(){

    },
    salir() {
      this.$router.replace("/")
      this.$store.commit("setToken", "")
      this.$store.commit("setDatos", {})
      this.$store.commit("setColor", "")
      localStorage.setItem("token","")
      // localStorage.setItem("datos",{})
      localStorage.setItem("color",{})
    },
    Configuracion() {
      this.configuracion = 1
    }, 
    Configuracion1() {
      this.configuracion = 0
    }

  }
}  
</script>

<style>
#header {
    display: inline-block;
    width: 50px;
    height: 50px;
}

@supports (-webkit-mask: url("")) or (mask: url("")) {
    #header {
        -webkit-mask: url(https://upload.wikimedia.org/wikipedia/commons/8/83/Sena_Colombia_logo.svg);
        mask: url(https://upload.wikimedia.org/wikipedia/commons/8/83/Sena_Colombia_logo.svg);
        mask-size: cover; 
    }
}
</style>