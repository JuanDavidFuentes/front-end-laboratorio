
<template>
  <v-container class="mt-15 mb-15">
    <div v-if="this.$store.state.token">
      <v-row>
        <v-col cols="7" xs="5" sm="8" md="10" lg="10" xl="10">
          <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver1()">
            Volver
          </v-btn>
        </v-col>
      </v-row>
      <v-row style="margin: 0">
        <v-col class="text-center" cols="12">
          <template>
            <v-card>
              <template>
                <v-card>
                  <v-card-title>
                    Lista de movimientos
                    <v-spacer></v-spacer>
                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar usuario" single-line
                      hide-details>
                    </v-text-field>
                  </v-card-title>
                  <v-data-table :headers="headers" :items="infoBitacora" :search="search">
                    <template v-slot:[`item.fechas`]="{ item }">
                      <template>
                        {{ fechaSalida(item.fecha) }}
                      </template>
                    </template>
                  </v-data-table>
                </v-card>
              </template>
            </v-card>
          </template>
        </v-col>
      </v-row>
    </div>
    <div v-if="this.$store.state.token === ''">
      <v-row>
        <v-col cols="12" class="mb-16 box2">
          <v-row>
            <v-col cols="12" class="d-flex justify-center">
              <img height="450"
                src="https://cdn.dribbble.com/users/272763/screenshots/4576659/media/e7b35df88e9ab2a2ec158aaad703a7e9.gif" />
            </v-col>
          </v-row>
          <center style="margin: 5vw;">
            <h1 style="    color: var(--border); font-size: 2em;">Su sesión a caducado porfavor inicie sesión
              nuevamente!</h1>
            <p>
              <v-btn rounded color="green" to="/" dark>Iniciar sesión</v-btn>
            </p>
          </center>
        </v-col>
      </v-row>

    </div>
  </v-container>
</template>
        
<script>
import axios from "axios";
export default {
  name: 'PageBitacora',
  data: () => ({
    infoBitacora: [],
    search: '',
    headers: [
      {
        text: 'Movimientos',
        align: 'start',
        sortable: false,
        value: 'texto',
      },
      {
        text: 'Navegador',
        align: 'start',
        sortable: false,
        value: 'navegador',
      },
      {
        text: 'Ip',
        align: 'start',
        sortable: false,
        value: 'ip',
      },
      {
        text: 'Fecha',
        align: 'start',
        sortable: false,
        value: 'fechas',
      },
    ],

  }),
  methods: {
    Volver1() {
      this.$router.push("/Configuracion");
    },
    listar() {
      axios.get(`/cotizacion/traerBitacora`)
        .then((response) => {
          console.log(response);
          this.infoBitacora = response.data.bitacora.reverse()
          console.log(this.infoBitacora);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    fechaSalida(r) {
      let d = new Date(r);
      return d.toLocaleDateString() + " - " + d.toLocaleTimeString();
    },
  },
  created() {
    this.listar();
  },
}
</script>
      