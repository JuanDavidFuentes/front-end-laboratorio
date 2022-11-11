<template>
  <v-container class="mt-15 mb-15">
    <v-row>
      <v-col cols="7" xs="5" sm="8" md="10" lg="10" xl="10">
        <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver1()">
          Volver
        </v-btn>
      </v-col>
    </v-row>
    <v-row style="margin-top:3px">

      <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
        <v-card class="primary" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5">Setup</v-card-title>
              <v-card-actions>
                <v-btn class="accent--text ml-2 mt-5" outlined rounded @click="Setup()">
                  <v-icon>mdi-server</v-icon>
                  Ver informacion
                </v-btn>
              </v-card-actions>
            </div>
            <v-avatar class="ml-n7 mr-5 mt-4 mb-3" size="120">
              <img height=90% src="https://i.postimg.cc/mDVXxrd2/png-clipart-material-design-skin-gray-setting-icon-thumbnail.png" alt="John">
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
        <v-card class="primary" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5">Ciudades</v-card-title>
              <v-card-actions>
                <v-btn class="accent--text ml-2 mt-5" outlined rounded @click="AggCiudades()">
                  <v-icon>mdi-city</v-icon>
                  Ver informacion
                </v-btn>
              </v-card-actions>
            </div>
            <v-avatar class="ml-n7 mr-5 mt-4 mb-3" size="120">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQUaEQ2HVBSGk45uNUTgI8xRErCwsTTieMfA&usqp=CAU" alt="John">
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
        <v-card class="primary" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5">Ensayo</v-card-title>
              <v-card-actions>
                <v-btn class="accent--text ml-2 mt-5" outlined rounded @click="ensayo()">
                  <v-icon>mdi-beaker-outline</v-icon>
                  Agregar Ensayos
                </v-btn>
              </v-card-actions>
            </div>
            <v-avatar class="ml-n7 mr-5 mt-4 mb-3" size="120">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUv3qtlvC8AE41rrfyFlkfKn8KfWCOxrW8LA&usqp=CAU" alt="...">
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
        <v-card class="primary" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5">Bitacora</v-card-title>
              <v-card-actions>
                <v-btn class="accent--text ml-2 mt-5" outlined rounded @click="Log()">
                  <v-icon>mdi-book</v-icon>
                  Ver movimientos
                </v-btn>
              </v-card-actions>
            </div>
            <v-avatar class="ml-n7 mr-5 mt-4 mb-3" size="120">
              <img src="https://us.123rf.com/450wm/denysdrozd/denysdrozd2008/denysdrozd200804351/164282913-icono-de-vector-de-libro-de-escritura-s%C3%ADmbolo-de-ilustraci%C3%B3n-de-cuaderno-de-bit%C3%A1cora-signo-de-cuader.jpg?ver=6" alt="John">
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
        <v-card class="primary" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5">Calidad</v-card-title>
              <v-card-actions>
                <v-btn class="accent--text ml-2 mt-5" outlined rounded @click="Calidad()">
                  <v-icon>mdi-pencil-box-outline</v-icon>
                  Editar versiones
                </v-btn>
              </v-card-actions>
            </div>
            <v-avatar class="ml-n7 mr-5 mt-4 mb-3" size="120">
              <img src="" alt="John">
            </v-avatar>
          </div>
        </v-card>
      </v-col>

      <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
        <v-card class="primary" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title class="text-h5">Color</v-card-title>
              <v-card-actions>
                <v-btn class="accent--text ml-2 mt-5" outlined rounded @click="Color1()">
                  <v-icon>mdi-pencil-box-outline</v-icon>
                  Editar versiones
                </v-btn>
              </v-card-actions>
            </div>
            <v-avatar class="ml-n7 mr-5 mt-4 mb-3" size="120">
              <img src="" alt="John">
            </v-avatar>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PageConfiguracion",
  data: () => ({
    show: false,
  }),
  methods: {
    Volver1() {
      this.$router.push("/Home");
    },
    Setup() {
      this.$router.push("/setup");
    },
    AggCiudades() {
      this.$router.push("/AggCiudades");
    },
    Log() {
      this.$router.push("/log");
    },
    ensayo() {
      this.$router.push("/EnsayoLab")
    },
    Calidad() {
      this.$router.push("/Calidad")
    },
    Color1() {
      this.$router.push("/color");
    },
  },
};
</script>
