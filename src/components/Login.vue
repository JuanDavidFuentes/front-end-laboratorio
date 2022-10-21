

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
                <v-text-field v-model="password" :append-icon="show3 ? 'mdi-eye' : 'mdi-eye-off'" :rules="[rules.required, rules.min]"
                  :type="show3 ? 'text' : 'password'" name="input-10-2" hint="At least 8 characters"
                  value="wqfasds" class="input-group--focused" @click:append="show3 = !show3" rounded dense filled></v-text-field>
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
    valido: "",
    show1: false,
    show2: true,
    show3: false,
    show4: false,
    password2: 'Password2',
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 8 || 'Min 8 characters',
      emailMatch: () => (`The email and password you entered don't match`),
    },
  }),
  methods: {
    login() {
      this.valido = this.correo.toUpperCase();
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
          if (error.response.data.errores) {
            this.$swal.fire({
              position: 'top-end',
              icon: 'error',
              title: error.response.data.errores.errors[0].msg,
              showConfirmButton: false,
              timer: 1500
            })
          } else {
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