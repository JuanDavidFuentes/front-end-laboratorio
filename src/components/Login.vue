<template>
  <v-container fluid>

    <v-row class="mt-6" style="height:90vh">

      <v-col cols="6" xs="6" md="6" lg="6" xl="6" class="na-0 pa-0" align="center" style="background-color:#F5F5F5;">
        <v-img height="850px" width="1070px" src="https://i.ibb.co/Lxsh2Lw/Sin-t-tulo-5.png"></v-img>
      </v-col>

      <v-col cols="6" xs="6" md="6" lg="6" xl="6" style="background-color:#F5F5F5;">
        <v-row class="ma-10">
          <v-col cols="12">
            <div class="accent--text display-2 font-weight-bold">
              Inicia sesión
              <br>
              <br>
            </div>

            <div>
              <span class="text-center title black--text font-weight-Normal mr-n4" autocomplete="email" label="Email">
                Correo:
              </span>
              <span>
                <v-text-field color="black" v-model="correo" type="email" filled rounded dense>
                </v-text-field>
              </span>
            </div>

            <div>
              <span class="text-center title black--text font-weight-Normal mr-n10">
                Contraseña:
              </span>
              <span>
                <v-text-field v-model="password" :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
                  :rules="[rules.required, rules.min]" :type="show ? 'text' : 'password'" hint="At least 8 characters"
                  @click:append="show = !show" rounded dense filled></v-text-field>
              </span>
            </div>

            <br>
            <v-btn color="accent" rounded dark @click="login()">Iniciar Sesión</v-btn>
          </v-col>
        </v-row>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>


import axios from "axios";
export default {

  name: "PaginaLogin",
  data: () => ({
    correo: "",
    valido: "",
    show: false,
    password: '',
    infoConsecutivo2: "",
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
          this.$router.push("/Home")
          // localStorage.setItem("datos",JSON.stringify(response.data.usuario))
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
    // consecutivos cambio de año
  //   listar2() {
  //     axios.get(`/cotizacion/traerConsecutivo`)
  //       .then((response) => {
  //         this.infoConsecutivo2 = response.data.consecutivo[0]._id
  //         this.anuevo()
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });
  //   },
  //   anuevo(){
  //     let d = new Date()
  //     let day = d.getDate()
  //     let month = d.getMonth() + 1
  //     if (day === 1 && month === 1) {
  //       console.log("warning");
  //       this.$swal.fire({
  //         position: "top-end",
  //         icon: "warning",
  //         title: "Año nuevo consecutivos nuevos",
  //         showConfirmButton: false,
  //         timer: 2500,
  //       });
  //       axios.put(`/cotizacion/reiniciar/${this.infoConsecutivo2}`, {
  //         numero_cotizacion: 1,
  //         informe_No: 1,
  //         codMuestra: 1,

  //       })
  //         .then((response) => {
  //           console.log(response);
  //         })
  //         .catch((error) => {
  //           console.log(error);
  //         });
  //     }
  //   }
  }
  // created() {
  //   this.listar2();
  // }
};
</script>
