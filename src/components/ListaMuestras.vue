<template>
  <v-container-fluid style="margin-top: 100px">
    <v-row style="margin: 0" class="mt-n6">
      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
        <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver()">
          Volver
        </v-btn>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" class="mt-3">
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" class="mt-3">
        <template>
          <v-row justify="center">
            <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="deep-orange" dark v-bind="attrs" v-on="on" class="center">
                  Crear Muestra
                </v-btn>
              </template>
              <v-card>
                <v-toolbar dark>
                  <v-btn icon dark @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                  </v-btn>
                  <v-toolbar-title>Crear Muestra</v-toolbar-title>
                  <v-spacer></v-spacer>
                  <v-toolbar-items>
                    <v-btn dark text @click="dialog = false"> Guardar </v-btn>
                  </v-toolbar-items>
                </v-toolbar>
                <v-list three-line subheader>
                    <v-row style="margin: 0">
                                    <v-col cols="12" xs="12" sm="12" md="2" lg="2" xl="3" class="text-center">
                                        <img height="300" width="300 "
                                            src="https://agenciapublicadeempleo.sena.edu.co/imgLayout/logos/LogoSENA-naranja_vector.png" />
                                    </v-col>

                                    <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="3">
                                        <div class=" text-center black--text font-italic text-decoration-underline ">
                                            <h1>Recepcion de muestras</h1>
                                        </div>
                                        <div class=" text-center black--text mt-2">
                                            <h3></h3>
                                        </div>
                                        <div class=" text-center black--text mt-2">
                                            <h3>NIT: </h3>
                                        </div>
                                        <div class=" text-center black--text mt-2">
                                            <h3>Dirección: </h3>
                                        </div>
                                        <div class=" text-center black--text mt-2">
                                            <h3>Teléfono: </h3>
                                        </div>
                                        <div class=" text-center black--text mt-2">
                                            <h3>Correo electrónico: </h3>
                                        </div>
                                    </v-col>
                                </v-row>
                  <v-subheader></v-subheader>
                </v-list>
                <v-divider></v-divider>
                <v-list three-line subheader>
                </v-list>
              </v-card>
            </v-dialog>
          </v-row>
        </template>
      </v-col>
    </v-row>
    <v-row style="margin: 0" class="mt-n6">
      <v-col v-for="(muestras, i) in infoMuestras" :key="i" cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
          </template>

          <v-card-title>Cafe Badilico</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0"> </v-row>

            <div class="my-4 text-subtitle-1">Italian, Cafe</div>

            <div>
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Tonight's availability</v-card-title>

          <v-card-actions>
            <v-btn color="deep-orange lighten-2" text @click="reserve">
              Ver Muestra
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container-fluid>
</template>
<script>
import axios from "axios";
export default {
  name: "PageListamuestra",
  data() {
    return {
      datos: this.$store.state.muestras,
      loading: false,
      selection: 1,
      dialog: false,
      infoMuestras: [],
    };
  },
  methods: {
    cliente() {
      console.log(this.datos);
    },
    Volver() {
      this.$router.push("/clientes");
    },
    reserve() {
      this.loading = true;
    },
    listar() {
      axios
        .get(`/DMuestra/listarMuestras`)
        .then((response) => {
          this.infoMuestras = response.data.muestras;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.cliente();
    this.listar();
  },
};
</script>
