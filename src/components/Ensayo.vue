<template>
  <v-container class="mt-15 mb -15">
    <div v-if="this.$store.state.token">
      <v-row>
        <v-col cols="10">
          <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver1()">
            Volver
          </v-btn>
        </v-col>

        <v-col cols="2">
          <v-dialog v-model="dialog" persistent>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="accent" dark v-bind="attrs" v-on="on">
                Nuevo ensayo
              </v-btn>
            </template>

            <v-card style="padding: 0px">
              <v-card-title class="text-h5"> Datos Ensayo</v-card-title>
              <v-container>
                <v-row>
                  <v-card-text> </v-card-text>
                  <v-col cols="5" md="6">
                    <v-text-field class="mt-n7" v-model="metodo" label="Metodo" required dense filled rounded>
                    </v-text-field>
                  </v-col>
                  <v-col cols="5" md="6">
                    <v-text-field class="mt-n7" v-model="tecnica" label="Técnica" required dense filled rounded>
                    </v-text-field>
                  </v-col>
                  <v-col cols="5" md="6">
                    <v-text-field class="mt-n7" v-model="valorMinimo" label="Valor Mínimo" required dense filled rounded>
                    </v-text-field>
                  </v-col>
                  <v-col cols="5" md="6">
                    <v-text-field class="mt-n7" v-model="valorMaximo" label="Valor Máximo" required dense filled rounded>
                    </v-text-field>
                  </v-col>
                  <v-col cols="5" md="6">
                    <v-text-field class="mt-n7" v-model="unidades" label="Unidades" required dense filled rounded>
                    </v-text-field>
                  </v-col>
                  <v-col cols="5" md="6">
                    <v-text-field class="mt-n7" v-model="costo" label="Costo" required dense filled rounded>
                    </v-text-field>
                  </v-col>
                  <v-col cols="5" md="6">
                    <v-text-field class="mt-n7" v-model="descripcion" label="Descripción" required dense filled rounded>
                    </v-text-field>
                  </v-col>

                  <v-col cols="5" md="6">
                    <v-text-field class="mt-n7" v-model="limiteCuantificacion" label="Límite Cuantificación" required
                      dense filled rounded></v-text-field>
                  </v-col>

                  <v-col cols="5" md="6" class="mt-n7">
                    <v-autocomplete v-model="seleccionadoTitular" :items="Usuarios" item-text="nombre" item-value="_id"
                      filled rounded dense label="Titular">
                    </v-autocomplete>
                  </v-col>

                  <v-col cols="5" md="6" class="mt-n7">
                    <v-autocomplete v-model="seleccionadoSuplente" :items="Usuarios" item-text="nombre" item-value="_id"
                      filled rounded dense label="Suplente">
                    </v-autocomplete>
                  </v-col>
                </v-row>
              </v-container>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="mr-15" outlined color="red darken-3" @click="Cerrar()">
                  Cancelar
                </v-btn>
                <v-btn color="success" @click="Guardar()"> Guardar Datos </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
          <v-dialog v-model="dialog2" persistent>
            <v-card style="padding: 0px">
              <v-card-title class="text-h5"> Datos Ensayo</v-card-title>
              <v-container>
                <v-row>
                  <v-card-text> </v-card-text>
                  <v-col cols="5" md="6">
                    <v-text-field class="mt-n7" v-model="metodo" label="Metodo" required dense filled rounded>
                    </v-text-field>
                  </v-col>
                  <v-col cols="5" md="6">
                    <v-text-field class="mt-n7" v-model="tecnica" label="Técnica" required dense filled rounded>
                    </v-text-field>
                  </v-col>
                  <v-col cols="5" md="6">
                    <v-text-field class="mt-n7" v-model="valorMinimo" label="Valor Mínimo" required dense filled rounded>
                    </v-text-field>
                  </v-col>
                  <v-col cols="5" md="6">
                    <v-text-field class="mt-n7" v-model="valorMaximo" label="Valor Máximo" required dense filled rounded>
                    </v-text-field>
                  </v-col>
                  <v-col cols="5" md="6">
                    <v-text-field class="mt-n7" v-model="unidades" label="Unidades" required dense filled rounded>
                    </v-text-field>
                  </v-col>
                  <v-col cols="5" md="6">
                    <v-text-field class="mt-n7" v-model="costo" label="Costo" required dense filled rounded>
                    </v-text-field>
                  </v-col>
                  <v-col cols="5" md="6">
                    <v-text-field class="mt-n7" v-model="descripcion" label="Descripción" required dense filled rounded>
                    </v-text-field>
                  </v-col>

                  <v-col cols="5" md="6">
                    <v-text-field class="mt-n7" v-model="limiteCuantificacion" label="Limite Cuantificación" required
                      dense filled rounded></v-text-field>
                  </v-col>

                  <v-col cols="5" md="6" class="mt-n7">
                    <v-autocomplete v-model="seleccionadoTitular" :items="Usuarios" item-text="nombre" item-value="_id"
                      filled rounded dense label="Titular">
                    </v-autocomplete>
                  </v-col>

                  <v-col cols="5" md="6" class="mt-n7">
                    <v-autocomplete v-model="seleccionadoSuplente" :items="Usuarios" item-text="nombre" item-value="_id"
                      filled rounded dense label="Suplente">
                    </v-autocomplete>
                  </v-col>
                </v-row>
              </v-container>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn class="mr-15" outlined color="red darken-3" @click="Cerrar()">
                  Cancelar
                </v-btn>
                <v-btn color="success" @click="editar()"> Editar Datos </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12" class="mx-2">
          <template>
            <v-card>
              <v-card-title>
                <h3>Ensayos</h3>
                <v-spacer></v-spacer>
                <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar ensayo" single-line hide-details>
                </v-text-field>
              </v-card-title>

              <v-data-table :headers="headers" :items="Ensayos" :search="search">
                <template v-slot:[`item.estado`]="{ item }">
                  <span class="green--text" v-if="item.estado === 1">
                    Activo</span>
                  <span class="red--text" v-else>Inactivo</span>
                </template>

                <template v-slot:[`item.opciones`]="{ item }">
                  <span v-if="item.estado === 1">
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon color="red" rounded v-bind="attrs" v-on="on" @click="desactivar(item._id)">
                          mdi-shield-off
                        </v-icon>
                      </template>
                      <span>Inactivar</span>
                    </v-tooltip>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon color="blue" rounded v-bind="attrs" v-on="on" @click="sacarid(item)">
                          mdi-pencil
                        </v-icon>
                      </template>
                      <span>Editar</span>
                    </v-tooltip>
                  </span>

                  <span v-else>
                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon color="success" rounded v-bind="attrs" v-on="on" @click="activar(item._id)">
                          mdi-shield-check-outline
                        </v-icon>
                      </template>
                      <span>Activar</span>
                    </v-tooltip>

                    <v-tooltip bottom>
                      <template v-slot:activator="{ on, attrs }">
                        <v-icon color="blue" rounded v-bind="attrs" v-on="on" @click="sacarid(item)">
                          mdi-pencil
                        </v-icon>
                      </template>
                      <span>Editar</span>
                    </v-tooltip>
                  </span>
                </template>
              </v-data-table>
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
  name: "EnsayoLab",
  data: () => ({
    dialog: false,
    dialog2: false,
    Usuarios: [],
    Ensayos: [],
    id: "",
    search: "",
    ensayo: "",
    metodo: "",
    tecnica: "",
    valorMaximo: "",
    valorMinimo: "",
    unidades: "",
    costo: "",
    titular: "",
    suplente: "",
    descripcion: "",
    limiteCuantificacion: "",

    st: "",
    ss: "",

    seleccionadoSuplente: "",
    seleccionadoTitular: "",
    headers: [
      { text: "Ensayo", value: "ensayo" },
      { text: "Método", value: "metodo" },
      { text: "Técnica", value: "tecnica" },
      { text: "Valor Máximo", value: "valorMaximo" },
      { text: "Valor Mínimo", value: "valorMinimo" },
      { text: "Unidades", value: "unidades" },
      { text: "Costo", value: "costo" },
      { text: "Titular", value: "responsables.titular.nombre" },
      { text: "Suplente", value: "responsables.suplente.nombre" },
      { text: "Estado", align: "start", value: "estado" },
      { text: "Opciones", align: "start", value: "opciones" },
    ],
  }),
  methods: {
    Volver1() {
      this.$router.push("/Configuracion");
    },
    Cerrar() {
      this.dialog = false;
      this.dialog2 = false;
      this.ensayo = "";
      this.metodo = "";
      this.tecnica = "";
      this.valorMaximo = "";
      this.valorMinimo = "";
      this.unidades = "";
      this.costo = "";
      this.descripcion = "";
      this.limiteCuantificacion = "";
      this.seleccionadoTitular = "";
      this.seleccionadoSuplente = "";
    },

    Guardar() {
      let header = { headers: { token: this.$store.state.token } };
      axios
        .post(
          `/ensayo/`,
          {
            ensayo: this.ensayo,
            metodo: this.metodo,
            tecnica: this.tecnica,
            valorMinimo: this.valorMinimo,
            valorMaximo: this.valorMaximo,
            unidades: this.unidades,
            costo: this.costo,
            descripcion: this.descripcion,
            limiteCuantificacion: this.limiteCuantificacion,
            responsables: {
              titular: this.seleccionadoTitular,
              suplente: this.seleccionadoSuplente,
            },
          },
          header
        )
        .then((response) => {
          this.$swal.fire({
            position: "top-end",
            icon: "success",
            title: "Ensayo creado correctamente",
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(response);
          this.ListarEnsayos()
          this.dialog = false
          this.id = ""
          this.search = ""
          this.ensayo = ""
          this.metodo = ""
          this.tecnica = ""
          this.valorMaximo = ""
          this.valorMinimo = ""
          this.unidades = ""
          this.costo = ""
          this.titular = ""
          this.suplente = ""
          this.descripcion = ""
          this.limiteCuantificacion = ""
          this.seleccionadoSuplente = ""
          this.seleccionadoTitular = ""
        })
        .catch((error) => {
          this.$swal.fire({
            position: "top-end",
            icon: "error",
            title: error.response.data.errores.errors[0].msg,
            showConfirmButton: false,
            timer: 1500,
          });
          console.log(error);
        });
    },

    editar() {
      let header = { headers: { token: this.$store.state.token } };
      axios
        .put(
          `/ensayo/${this.id}`,
          {
            ensayo: this.ensayo,
            metodo: this.metodo,
            tecnica: this.tecnica,
            valorMinimo: this.valorMinimo,
            valorMaximo: this.valorMaximo,
            unidades: this.unidades,
            costo: this.costo,
            descripcion: this.descripcion,
            limiteCuantificacion: this.limiteCuantificacion,
            responsables: {
              titular: this.st,
              suplente: this.ss,
            },
          },
          header
        )
        .then((response) => {
          this.$swal.fire({
            position: "top-end",
            icon: "success",
            title: response.data.msg,
            showConfirmButton: false,
            timer: 1500,
          });
          this.dialog2 = false;
          this.id = ""
          this.search = ""
          this.ensayo = ""
          this.metodo = ""
          this.tecnica = ""
          this.valorMaximo = ""
          this.valorMinimo = ""
          this.unidades = ""
          this.costo = ""
          this.titular = ""
          this.suplente = ""
          this.descripcion = ""
          this.limiteCuantificacion = ""
          this.seleccionadoSuplente = ""
          this.seleccionadoTitular = ""
          this.ListarEnsayos();
        })
        .catch((error) => {
          console.log(error);
          this.$swal.fire({
            position: "top-end",
            icon: "error",
            title: error.response.data.errores.errors[0].msg,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
    Listar() {
      axios
        .get("/usuarios/listarSoloUsuarios")
        .then((response) => {
          console.log(response);
          this.Usuarios = response.data.usuarios;
          console.log(this.Usuarios);
        })
        .catch((error) => {
          console.log(error);
          this.$swal.fire({
            position: "top-end",
            icon: "error",
            title: error.response.data.errores.errors[0].msg,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
    ListarEnsayos() {
      axios
        .get("/ensayo")
        .then((response) => {
          console.log(response);
          this.Ensayos = response.data.ensayo;
        })
        .catch((error) => {
          console.log(error);

          this.$swal.fire({
            position: "top-end",
            icon: "error",
            title: error.response.data.errores.errors[0].msg,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
    sacarid(datos) {
      console.log(datos);
      this.id = datos._id;
      this.dialog2 = true;
      this.ensayo = datos.ensayo;
      this.metodo = datos.metodo;
      this.tecnica = datos.tecnica;
      this.valorMinimo = datos.valorMinimo;
      this.valorMaximo = datos.valorMaximo;
      this.unidades = datos.unidades;
      this.limiteCuantificacion = datos.limiteCuantificacion;
      this.descripcion = datos.descripcion;
      this.costo = datos.costo;
      this.seleccionadoTitular = datos.responsables.titular;
      this.seleccionadoSuplente = datos.responsables.suplente;

      this.st = datos.responsables.titular._id;
      this.ss = datos.responsables.suplente._id;
    },
    desactivar(id) {
      let header = { headers: { token: this.$store.state.token } };
      axios
        .put(`/ensayo/desactivar/${id}`, {}, header)
        .then((response) => {
          console.log(response);
          this.$swal.fire({
            position: "top-end",
            icon: "success",
            title: response.data.msg,
            showConfirmButton: false,
            timer: 1500,
          });
          this.ListarEnsayos();
        })
        .catch((error) => {
          this.$swal.fire({
            position: "top-end",
            icon: "error",
            title: error.response.data.errores.errors[0].msg,
            showConfirmButton: false,
            timer: 1500,
          });
        });
    },
    activar(id) {
      let header = { headers: { token: this.$store.state.token } };
      axios
        .put(`/ensayo/activar/${id}`, {}, header)
        .then((response) => {
          console.log(response);
          this.$swal.fire({
            position: "top-end",
            icon: "success",
            title: response.data.msg,
            showConfirmButton: false,
            timer: 1500,
          });
          this.ListarEnsayos();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.Listar();
    this.ListarEnsayos();
  },
};
</script>