
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

      <v-col cols="2"></v-col>
      <v-col cols="8">
        <template>
          <v-card>
            <template>
              <v-card>
                <v-card-title>
                  Ciudades
                  <v-spacer></v-spacer>
                  <div>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon color="green" rounded v-bind="attrs" v-on="on" @click="dialog2 = true">
                          mdi-plus-circle
                        </v-icon>
                        Añadir ciudad
                      </template>
                      <span>Añadir Ciudad</span>
                    </v-tooltip>
                  </div>
                  <v-spacer></v-spacer>
                  <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar ciudad" single-line
                    hide-details>
                  </v-text-field>
                </v-card-title>
                <v-data-table :headers="headers" :items="ciudades" :search="search"></v-data-table>
              </v-card>
            </template>
          </v-card>
        </template>
      </v-col>
      <v-col cols="2"></v-col>
    </v-row>
    <v-dialog v-model="dialog2" persistent max-width="1000px">
      <v-card>
        <v-card-title>
          <span class="text-h5 mb-5">Crear ciudad</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12" class="mt-n7">
                <v-text-field label="Nombre del departamento*" v-model="departamento" rounded filled dense required></v-text-field>
              </v-col>
              <v-col cols="12" class="mt-n7">
                <v-text-field label="Codigo del departamento*" v-model="codigodep" rounded filled dense type="number" required>
                </v-text-field>
              </v-col>
              <v-col cols="12" class="mt-n7">
                <v-text-field label="Nombre de la ciudad*" v-model="ciudad" rounded filled dense required></v-text-field>
              </v-col>
              <v-col cols="12" class="mt-n7">
                <v-text-field label="Codigo de la ciudad*" v-model="codCiudad" type="number" rounded filled dense required></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>* indica campo requerido</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialog2 = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" text @click="crearciudad()">
            Save
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>
    
<script>
import axios from 'axios';
export default {
  name: 'AggCiudad',
  data: () => ({
    ciudades: [],
    departamento: "",
    codigodep: "",
    ciudad: "",
    codCiudad: "",
    search: '',
    dialog2: false,
    headers: [
      {
        text: 'Codigo Departamento',
        align: 'start',
        value: "coddepartamento",
      },
      {
        text: 'Departamento',
        align: 'start',
        sortable: false,
        value: 'departamento',
      },
      {
        text: 'Codigo Ciudad',
        align: 'start',
        value: 'codciudad',
      },
      {
        text: 'Ciudad',
        align: 'start',
        sortable: false,
        value: 'ciudad',
      },
    ],
  }),
  methods: {
    Volver1() {
      this.$router.push("/Configuracion");
    },
    listar() {
      axios.get(`/ciudad/CiudadDepartamento`)
        .then((response) => {
          console.log(response);
          this.ciudades = response.data.ciudad
          console.log(this.ciudades);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    crearciudad() {
      let header = { headers: { "token": this.$store.state.token } };
      axios.post(`/ciudad/`, {
        coddepartamento: this.codigodep,
        departamento: this.departamento.toUpperCase(),
        ciudad: this.ciudad.toUpperCase(),
        codciudad: this.codCiudad
      }, header)
        .then((response) => {
          console.log(response);
          this.$swal.fire({
            position: "top-end",
            icon: "success",
            title: "Ciudad creada exitosamente",
            showConfirmButton: false,
            timer: 1500,
          });
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
          }else{
            this.$swal.fire({
              position: "top-end",
              icon: "error",
              title: error.response.data.errores.errors[0].msg,
              showConfirmButton: false,
              timer: 1500,
            });
          }
            
          });
    }
  },
  created() {
    this.listar();
  }
}


</script>
  