<template>
  <v-container-fluid>

    <v-row class="mt-11" style="height:90vh">
      <v-col cols="1" xs="6" md="6" lg="6" xl="6" class="na-0 pa-0" align="center" style="background-color:#F5F5F5;">
        <v-img height="850px" width="1070px" src="https://i.ibb.co/Lxsh2Lw/Sin-t-tulo-5.png"></v-img>
      </v-col>

      <v-col cols="11" xs="6" md="6" lg="6" xl="6" style="background-color:#F5F5F5;">
        <v-row class="ma-3">
          <v-col class="text-right" cols="12">

            <!-- <v-btn class="pa-4 text-center text-no-wrap rounded-l-xl" color="deep-orange" dark @click="registro()">
              Registrate
            </v-btn>

            <v-btn class="pa-4 text-center text-no-wrap rounded-r-xl" color="deep-orange" dark @click="inicio()">
              Inicia sesión
            </v-btn> -->
          </v-col>
        </v-row>
        <v-row class="ma-10">

          <!-- inicio de sesión -->
          <v-col cols="12">
            <div class="deep-orange--text display-2 font-weight-bold">
              Inicia sesión
            </div>
            <br>
            <br>
            <div>
              <span class="text-center title black--text font-weight-Normal" autocomplete="email" label="Email">
                Correo:
              </span>
              <span>
                <v-text-field color="black" v-model="correo" label="Correo" type="email" filled rounded dense>
                </v-text-field>
              </span>
            </div>
            <div>
              <span class="text-center title black--text font-weight-Normal">
                Contraseña:
              </span>
              <span>
                <v-text-field color="black" v-model="password" label="Contraseña" type="password" filled rounded dense>
                </v-text-field>
              </span>
            </div>
            <br>
            <v-btn color="deep-orange" rounded dark @click="login()">Iniciar Sesión</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container-fluid>
</template>

<script>
import axios from "axios";
export default {
  name: "PageLogin",

  data: () => ({
    correo: "",
    password: "",
    valido:""
  }),
  methods: {
    login() {
      this.valido=this.correo.toUpperCase();
      axios.post("usuarios/login", {
            email: this.valido,
            password: this.password
         })
            .then(response => {
               console.log(response.data);
               this.$store.dispatch("setToken", response.data.token);
               this.$store.dispatch("setDatos", response.data.usuario);
               this.$router.push("/")
            })
            .catch(error => {
               if (error.response.data.errors) {
                  this.$swal.fire({
                     position: 'top-end',
                     icon: 'error',
                     title: "a",// error.response.data.errors[0].msg,
                     showConfirmButton: false,
                     timer: 1500
                  })
               }else{
                  this.$swal.fire({
                     position: 'top-end',
                     icon: 'error',
                     title: error.response.data.msg,
                     showConfirmButton: false,
                     timer: 1500
                  })
               }
               console.log(error);
            })
    },
    registro() {
      this.ocultar = 0
    },
    inicio() {
      this.ocultar = 1
    }
  }
};
</script>
<style>
.logo {
  height: 800px;
  width: 500px;
  background-position: center;
}
</style>