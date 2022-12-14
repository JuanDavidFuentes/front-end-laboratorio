
<template>
  <v-container fluid class="mt-15 mb-15">
    <div v-if="this.$store.state.token">
      <v-row>
        <v-col cols="7" xs="5" sm="8" md="10" lg="10" xl="10">
          <v-btn class="mt-n3 ml-15" outlined color="red darken-3" @click="Volver1()">
            Volver
          </v-btn>
        </v-col>
      </v-row>
      <v-row style="margin: 0">
        <v-col cols="12">
          <template>
            <v-card>
              <template>
                <v-card>
                  <v-card-title>
                    Información
                  </v-card-title>
                  <v-data-table :headers="headers" :items="infoConsecutivo">
                    <template v-slot:[`item.editar`]="{ item }">
                      <template>
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on, attrs }">
                            <v-icon color="blue" rounded v-bind="attrs" v-on="on" @click="editarC(item)">
                              mdi-border-color
                            </v-icon>
                          </template>
                          <span>Editar información</span>
                        </v-tooltip>
                      </template>
                      <template>
                        <v-tooltip bottom>
                          <template v-slot:activator="{ on, attrs }">
                            <v-icon color="green" @click="anuevo2()" rounded v-bind="attrs" v-on="on">
                              mdi-reload
                            </v-icon>
                          </template>
                          <span>Editar consecutivos</span>
                        </v-tooltip>
                      </template>
                    </template>
                  </v-data-table>
                </v-card>
              </template>
            </v-card>
          </template>
        </v-col>
      </v-row>

      <v-dialog v-model="dialog2" persistent max-width="1000px">
        <v-card>
          <v-card-title>
            <v-row class="mb-3">
              <v-col class="text-center">
                <span class="text-h4">Actualizar datos</span>
              </v-col>
            </v-row>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" class="mt-n7">
                  <v-text-field label="IVA*" v-model="iva" type="number" rounded filled dense required></v-text-field>
                </v-col>
                <v-col cols="12" class="mt-n7">
                  <v-text-field label="Descripción*" v-model="descripcion" rounded filled dense required>
                  </v-text-field>
                </v-col>
                <v-col cols="12" class="mt-n7">
                  <v-text-field label="Nit*" v-model="nit" rounded filled dense required></v-text-field>
                </v-col>
                <v-col cols="12" class="mt-n7">
                  <v-text-field label="Dirección*" v-model="direccion" rounded filled dense required></v-text-field>
                </v-col>
                <v-col cols="12" class="mt-n7">
                  <v-text-field label="Télefono*" v-model="telefono" rounded filled dense required></v-text-field>
                </v-col>
                <v-col cols="12" class="mt-n7">
                  <v-text-field label="Correo*" v-model="correo" rounded filled dense required></v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <p class="green--text">"*" indica campo requerido</p>
          </v-card-text>
          <v-card-actions>
            <v-btn color="red" rounded @click="dialog2 = false" dark>
              Cerrar
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="green" rounded dark @click="editardatos()">
              Guardar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>

      <v-dialog v-model="dialog3" persistent max-width="1000px">
        <v-card>
          <v-card-title>
            <span class="text-h5 mb-3">Editar consecutivos</span>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" class="mt-n7">
                  <v-text-field label="Número de cotización*" v-model="coti" type="number" rounded filled dense
                    required></v-text-field>
                </v-col>
                <v-col cols="12" class="mt-n7">
                  <v-text-field label="Número de muestras*" v-model="muestra" type="number" rounded filled dense
                    required>
                  </v-text-field>
                </v-col>
              </v-row>
            </v-container>
            <small class="green--text">"*" indica campo requerido</small>
          </v-card-text>
          <v-card-actions>
            <v-btn color="red" rounded dark @click="dialog3 = false">
              Cerrar
            </v-btn>
            <v-spacer></v-spacer>
            <v-btn color="green" rounded dark @click="limpiar()">
              Guardar
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
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
  name: 'PageSetup',
  data: () => ({
    infoConsecutivo: [],
    coti: 0,
    muestra: 0,
    id: "",
    infoConsecutivo2: "",
    iva: 0,
    descripcion: "",
    nit: "",
    direccion: "",
    telefono: "",
    correo: "",
    dialog2: false,
    dialog3: false,
    headers: [
      {
        text: 'Consecutivo cotización',
        align: 'start',
        sortable: false,
        value: "numero_cotizacion",
      },
      {
        text: 'Consecutivo muestra',
        align: 'start',
        sortable: false,
        value: 'codMuestra',
      },
      {
        text: 'Consecutivo de ensayos',
        align: 'start',
        sortable: false,
        value: 'informe_No',
      },
      {
        text: 'IVA',
        align: 'start',
        sortable: false,
        value: 'iva',
      },
      {
        text: 'NIT',
        align: 'start',
        sortable: false,
        value: 'nit',
      },
      {
        text: 'Dirección',
        align: 'start',
        sortable: false,
        value: 'direccion',
      },
      {
        text: 'Telefono',
        align: 'start',
        sortable: false,
        value: 'telefono',
      },
      {
        text: 'Correo',
        align: 'start',
        sortable: false,
        value: 'correo',
      },
      {
        text: 'Editar',
        align: 'start',
        sortable: false,
        value: 'editar',
      },
    ],

  }),
  methods: {
    Volver1() {
      this.$router.push("/Configuracion");
    },
    listar() {
      axios.get(`/cotizacion/traerConsecutivo`)
        .then((response) => {
          this.infoConsecutivo = response.data.consecutivo
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editarC(item) {
      this.id = item._id
      this.iva = item.iva
      this.descripcion = item.descripcion
      this.nit = item.nit
      this.direccion = item.direccion
      this.telefono = item.telefono
      this.correo = item.correo
      this.dialog2 = true
    },
    editardatos() {
      let header = { headers: { "token": this.$store.state.token } };
      axios.put(`/cotizacion/actualizarInfo/${this.id}`, {
        iva: this.iva,
        descripcion: this.descripcion,
        nit: this.nit,
        direccion: this.direccion,
        telefono: this.telefono,
        correo: this.correo
      }, header)
        .then((response) => {
          console.log(response);
          this.$swal.fire({
            position: "top-end",
            icon: "success",
            title: "Datos editados",
            showConfirmButton: false,
            timer: 1500,
          });
          this.listar()
          this.dialog2 = false
        })
        .catch((error) => {
          if (error.response.data.msg === "No hay token en la peticion") {
            this.$swal.fire({
              position: "top-end",
              icon: "error",
              title: "No has iniciado sesión",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            this.$swal.fire({
              position: "top-end",
              icon: "error",
              title: error.response.data.errores.errors[0].msg,
              showConfirmButton: false,
              timer: 1500,
            });
          }

        });
    },
    editar2(item) {
      this.id = item._id
      this.coti = item.numero_cotizacion
      this.muestra = item.codMuestra
      this.dialog3 = true
    },
    limpiar() {
      let header = { headers: { "token": this.$store.state.token } };
      axios.put(`/cotizacion/actualizarInfo/${this.id}`, {
        numero_cotizacion: this.coti,
        codMuestra: this.muestra
      }, header)
        .then((response) => {
          console.log(response);
          this.$swal.fire({
            position: "top-end",
            icon: "success",
            title: "Datos editados",
            showConfirmButton: false,
            timer: 1500,
          });
          this.listar()
          this.dialog3 = false
        })
        .catch((error) => {
          if (error.response.data.msg === "No hay token en la peticion") {
            this.$swal.fire({
              position: "top-end",
              icon: "error",
              title: "No has iniciado sesión",
              showConfirmButton: false,
              timer: 1500,
            });
          } else {
            this.$swal.fire({
              position: "top-end",
              icon: "error",
              title: error.response.data.errores.errors[0].msg,
              showConfirmButton: false,
              timer: 1500,
            });
          }

        });
    },
    listar2() {
      axios.get(`/cotizacion/traerConsecutivo`)
        .then((response) => {
          this.infoConsecutivo2 = response.data.consecutivo[0]._id
          this.anuevo()
        })
        .catch((error) => {
          console.log(error);
        });
    },
    anuevo() {
      let d = new Date()
      let day = d.getDate()
      let month = d.getMonth() + 1
      if (day === 1 && month === 1) {
        this.$swal.fire({
          position: "top-end",
          icon: "warning",
          title: "Año nuevo consecutivos nuevos",
          showConfirmButton: false,
          timer: 2500,
        });
        axios.put(`/cotizacion/reiniciar/${this.infoConsecutivo2}`, {
          numero_cotizacion: 1,
          informe_No: 1,
          codMuestra: 1,

        })
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    },
    anuevo2() {
      axios.put(`/cotizacion/reiniciar/${this.infoConsecutivo2}`, {
        numero_cotizacion: 1,
        informe_No: 1,
        codMuestra: 1
      })
        .then((response) => {
          console.log(response);
          this.$swal.fire({
            position: "top-end",
            icon: "success",
            title: "Consecutivos reiniciados",
            showConfirmButton: false,
            timer: 2500,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    }
  },


  created() {
    this.listar();
    this.listar2();
  },
}
</script>
  