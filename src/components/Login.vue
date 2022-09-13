<template>
  <v-container-fluid>
    
    <v-row class="mt-11" style="height:90vh">
      <v-col cols="6" class="na-0 pa-0" align="center" style="background-color:#F5F5F5;">
        <v-img height="850px" width="1070px"
          src="https://i.ibb.co/Lxsh2Lw/Sin-t-tulo-5.png"></v-img>
      </v-col>

      <v-col cols="6" style="background-color:#F5F5F5;">
        <v-row class="ma-3">
          <v-col class="text-right" cols="12">

            <v-btn class="pa-4 text-center text-no-wrap rounded-l-xl" color="deep-orange" dark @click="registro()">
              Registrate
            </v-btn>

            <v-btn class="pa-4 text-center text-no-wrap rounded-r-xl" color="deep-orange" dark @click="inicio()">
              Inicia sesión
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="ma-10">

          <!-- inicio de sesión -->
          <v-col v-if="ocultar===1" cols="12">
            <div class="deep-orange--text display-2 font-weight-bold">
              Inicia sesión
            </div>
            <br>
            <br>
            <div>
              <span class="text-center title black--text font-weight-Normal">
                Correo:
              </span>
              <span>
                <v-text-field color="black" v-model="correo" label="Correo" type="text" filled rounded dense ></v-text-field>
              </span>
            </div>
            <div>
              <span class="text-center title black--text font-weight-Normal">
                Contraseña:
              </span>
              <span>
                <v-text-field color="black" v-model="password" label="Contraseña" type="text" filled rounded dense ></v-text-field>
              </span>
            </div>
            <br>
            <v-btn color="deep-orange" rounded dark>Iniciar Sesión</v-btn>
          </v-col>
          
          <!-- Registro de usuario -->
          <v-col v-if="ocultar===0" cols="12">
            <div class="deep-orange--text display-2 font-weight-bold">
              Registrate
            </div>
            <br>
            <br>
            <div>
              <span class="text-center title black--text font-weight-Normal">
                Correo:
              </span>
              <span>
                <v-text-field color="black" v-model="correo" label="Correo" type="text" filled rounded dense ></v-text-field>
              </span>
            </div>
            <div>
              <span class="text-center title black--text font-weight-Normal">
                Contraseña:
              </span>
              <span>
                <v-text-field color="black" v-model="password" label="Contraseña" type="text" filled rounded dense ></v-text-field>
              </span>
            </div>
            <br>
            <v-btn color="deep-orange" rounded dark>registrarse</v-btn>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container-fluid>
</template>

<script>
export default {
  name: "PageLogin",

  data: () => ({
    correo:"",
    password:"",
    ocultar:1
  }),
  methods: {
    login(){

    },
    registro(){
      this.ocultar=0
    },
    inicio(){
      this.ocultar=1
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