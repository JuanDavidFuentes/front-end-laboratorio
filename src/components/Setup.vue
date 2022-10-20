
<template>
  <v-container class="mt-15 mb-15">
    <v-row>
      <v-col cols="7" xs="5" sm="8" md="10" lg="10" xl="10">
        <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver1()">
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
                  Lista de movimientos
                </v-card-title>
                <v-data-table :headers="headers" :items="infoConsecutivo">
                  <template v-slot:[`item.editar`]="{item}">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon color="blue" rounded v-bind="attrs" v-on="on" @click="editarC(item)">
                          mdi-border-color
                        </v-icon>
                      </template>
                      <span>Editar informacion</span>
                    </v-tooltip>
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
          <span class="text-h5 mb-3">Actualizar datos</span>
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
                <v-text-field label="Direccion*" v-model="direccion" rounded filled dense required></v-text-field>
              </v-col>
              <v-col cols="12" class="mt-n7">
                <v-text-field label="Telefono*" v-model="telefono" rounded filled dense required></v-text-field>
              </v-col>
              <v-col cols="12" class="mt-n7">
                <v-text-field label="Correo*" v-model="correo" rounded filled dense required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>* indica campo requerido</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog2 = false">
            Cerrar
          </v-btn>
          <v-btn color="blue darken-1" text @click="editardatos()">
            Guardar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
    
<script>
import axios from "axios";
export default {
  name: 'PageSetup',
  data: () => ({
    infoConsecutivo: [],
    id:"",
    iva: 0,
    descripcion: "",
    nit: "",
    direccion: "",
    telefono: "",
    correo: "",
    dialog2: false,
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
        text: 'IVA',
        align: 'start',
        sortable: false,
        value: 'iva',
      },
      {
        text: 'Descripción',
        align: 'start',
        sortable: false,
        value: 'descripcion',
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
        value: 'descripcion',
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
          console.log(this.infoConsecutivo);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    editarC(item) {
      this.id=item._id
      this.iva = item.iva
      this.descripcion = item.descripcion
      this.nit = item.nit
      this.direccion = item.direccion
      this.telefono = item.telefono
      this.correo = item.correo
      this.dialog2 = true
    },
    editardatos() {
      console.log(this.id);
      let header = { headers: { "token": this.$store.state.token } };
      axios.put(`/cotizacion/actualizarInfo/${this.id}`, {
        iva:this.iva,
        descripcion:this.descripcion,
        nit:this.nit,
        direccion:this.direccion,
        telefono:this.telefono,
        correo:this.correo
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
          console.log(error);
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
    blanquearDatos() {

    }
  },
  created() {
    this.listar();
  },
}
</script>
  