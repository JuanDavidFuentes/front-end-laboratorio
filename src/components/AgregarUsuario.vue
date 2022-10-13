<template>
    <v-container>
        <v-row class="mt-13 ">
            <v-col cols="7" xs="5" sm="8" md="10" lg="10" xl="10">
                <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver1()">
                    Volver
                </v-btn>
            </v-col>

            <v-col cols="5" xs="7" sm="4" md="2" lg="2" xl="2">
                <v-dialog v-model="dialog">
                    <template v-slot:activator="{ on, attrs }">
                        <v-btn color="primary" dark v-bind="attrs" v-on="on">
                            Nuevo usuario
                        </v-btn>
                    </template>
                    <v-card class="">
                        <v-card-title class="text-h5">
                            Datos Usuario
                        </v-card-title>
                        <v-col cols="12">
                            <v-select v-model="selecionadoTipo" :items="tipoPersona" dense filled rounded
                                label="Tipo Persona"></v-select>

                            <div v-if="selecionadoTipo==='Juridica'">
                                <v-text-field v-model="cargo" label="Cargo" filled rounded dense>
                                </v-text-field>
                            </div>
                            <div v-if="selecionadoTipo==='Juridica'">
                                <v-text-field v-model="telefono" label="Telefono" filled rounded dense>
                                </v-text-field>
                            </div>
                            <v-select v-model="selecionadoRol" :items="rolPersona" dense filled rounded label="Rol">
                            </v-select>
                            <v-text-field v-model="nombre" label="Nombre*" filled rounded dense></v-text-field>
                            <v-text-field v-model="apellidos" label="Apellidos*" filled rounded dense></v-text-field>
                            <v-text-field v-model="documento" label="Documento*" filled rounded dense></v-text-field>
                            <v-text-field v-model="direccion" label="Dirección*" filled rounded dense></v-text-field>
                            <v-autocomplete v-model="seleccionadoCiudad" :items="Municipio" item-text="ciudad"
                                item-value="_id" filled rounded dense label="Ciudad" @click="listarCiudad()">
                            </v-autocomplete>

                            <!-- contacto -->
                            <v-text-field v-model="celular" label="Celular*" filled rounded dense></v-text-field>
                            <v-text-field v-model="email" label="Email*" filled rounded dense></v-text-field>
                            <v-text-field v-model="password" type="password" label="Password*" filled rounded dense>
                            </v-text-field>
                            <!-- foto -->
                        </v-col>

                        <v-card-actions class="mt-n7">
                            <v-spacer></v-spacer>
                            <v-btn class="mr-15" outlined color="red darken-3" @click="Volver()">
                                Cancelar
                            </v-btn>
                            <v-btn color="success" @click="Guardar()">
                                Guardar Datos
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
            </v-col>
        </v-row>

        <!-- <v-row>
            <v-col cols="12">
                <v-simple-table fixed-header height="300px">
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left black--text title"> Tipo Persona</th>
                                <th class="text-left black--text title"> Rol </th>
                                <th class="text-left black--text title"> Nombre</th>
                                <th class="text-left black--text title"> Apellidos </th>
                                <th class="text-left black--text title"> Documento </th>
                                <th class="text-left black--text title"> Dirección </th>
                                <th class="text-left black--text title"> Ciudad </th>

                                <th class="text-left black--text title"> Celular </th>
                                <th class="text-left black--text title"> Estado </th>
                                <th class="text-left black--text title"> Cargo </th>
                                <th class="text-left black--text title"> Telefono </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(p, i) in Usuarios" :key="i">
                                <td>{{p.tipoPersona}}</td>
                                <td>{{p.rol}}</td>
                                <td>{{p.nombre}}</td>
                                <td>{{p.apellidos}}</td>
                                <td>{{p.documento}}</td>
                                <td>{{p.direccion}}</td>
                                <td>{{p.ciudad.ciudad}}</td>
                                <td>{{p.celular}}</td>
                                <td>{{p.email}}</td>
                                <td v-if="p.estado===1">
                                    <button @click="desactivar(p)">
                                        <span class="green--text"> Activo </span></button>
                                </td>
                                <td v-else>
                                    <button>
                                        <span class="red--text" @click="activar(p)"> Inactivo </span></button>
                                </td>
                                <td>{{p.cargo}}</td>
                                <td>{{p.telefono}}</td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-row> -->

        <!-- tabla -->
        <div>
            <v-card>
                <v-card-title>
                    Usuarios
                    <v-spacer></v-spacer>
                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line hide-details>
                    </v-text-field>
                </v-card-title>
                <v-data-table :headers="headers" :items="Usuarios" :search="search">
                    <template v-slot:[`item.estado`]="{item}">
                        <span class="green--text" v-if="item.estado===1">
                            Activo</span>
                        <span class="red--text" v-else>Inactivo</span>
                    </template>

                    <template v-slot:[`item.opciones`]="{item}">
                        <span v-if="item.estado===1">
                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon color="error" rounded v-bind="attrs" v-on="on"
                                        @click="desactivar(item._id)">
                                        mdi-shield-off
                                    </v-icon>
                                </template>
                                <span>Inactivar</span>
                            </v-tooltip>

                            <v-tooltip bottom>
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon color="blue" rounded v-bind="attrs" v-on="on" @click="sacarid(item._id)">
                                        mdi-pencil
                                    </v-icon>
                                </template>
                                <span>Editar</span>
                            </v-tooltip>
                            <!-- editar  editar  editar  editar  editar  editar  editar      -->
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


                            <v-dialog v-model="dialog2" persistent max-width="1000px">
                                <template v-slot:activator="{ on, attrs }">
                                    <v-icon color="blue" rounded v-bind="attrs" v-on="on" @click="sacarid(item._id)">
                                        mdi-pencil
                                    </v-icon>
                                </template>
                                <v-card>
                                    <v-card-title>
                                        <span class="text-h5">Editar Datos Del Usuario</span>
                                    </v-card-title>
                                    <v-card-text>
                                        <v-container>
                                            <v-row>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field label="Nombre" required></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field label="Legal middle name"
                                                        hint="example of helper text only on focus"></v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6" md="4">
                                                    <v-text-field label="Legal last name*"
                                                        hint="example of persistent helper text" persistent-hint
                                                        required></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field label="Email*" required></v-text-field>
                                                </v-col>
                                                <v-col cols="12">
                                                    <v-text-field label="Password*" type="password" required>
                                                    </v-text-field>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-select :items="['0-17', '18-29', '30-54', '54+']" label="Age*"
                                                        required></v-select>
                                                </v-col>
                                                <v-col cols="12" sm="6">
                                                    <v-autocomplete
                                                        :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                                                        label="Interests" multiple></v-autocomplete>
                                                </v-col>
                                            </v-row>
                                        </v-container>
                                        <small>*indicates required field</small>
                                    </v-card-text>
                                    <v-card-actions>
                                        <v-spacer></v-spacer>
                                        <v-btn color="blue darken-1" text @click="dialog2 = false">
                                            Close
                                        </v-btn>
                                        <v-btn color="blue darken-1" text @click="dialog2 = false">
                                            Save
                                        </v-btn>
                                    </v-card-actions>
                                </v-card>
                            </v-dialog>

                        </span>
                    </template>

                </v-data-table>
            </v-card>
        </div>
        <br><br><br>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    name: 'PageUsuarios',
    data: () => ({
        search: '',
        dialog: false,
        dialog2: false,
        Municipio: [],
        Usuarios: [],
        id: "",
        nombre: "",
        apellidos: "",
        documento: "",
        direccion: "",
        ciudad: "",
        celular: "",
        email: "",
        password: "",
        cargo: "",
        telefono: "",
        seleccionadoCiudad: "",
        selecionadoTipo: "",
        selecionadoRol: "",
        tipoPersona: [
            { text: "Natural", value: "Natural" },
            { text: "Juridica", value: "Juridica" }
        ],
        rolPersona: [
            { text: "CLIENTE", value: "CLIENTE" },
            { text: "ADMIN", value: "ADMIN" },
            { text: "TECNICO", value: "TECNICO" },
            { text: "SUPERVISOR", value: "SUPERVISOR" },
            { text: "CIENTIFICO", value: "CIENTIFICO" },
            { text: "RECEPCIONISTA", value: "RECEPCIONISTA" },
        ],
        headers: [
            {
                text: 'Tipo Persona',
                align: 'start',
                value: "tipoPersona",
            },
            {
                text: 'Rol',
                align: 'start',
                value: "rol",
            },
            {
                text: 'Nombres',
                align: 'start',
                value: "nombre",
            },
            {
                text: 'Apellidos',
                align: 'start',
                value: 'apellidos',
            },
            {
                text: 'C.C. / NIT',
                align: 'start',
                sortable: false,
                value: 'documento',
            },
            {
                text: 'Correo',
                align: 'start',
                sortable: false,
                value: 'email',
            },
            {
                text: 'Ciudad',
                align: 'start',
                sortable: false,
                value: "ciudad.ciudad",
            },
            {
                text: 'Dirección',
                align: 'start',
                sortable: false,
                value: "direccion",
            },
            {
                text: 'Celular',
                align: 'start',
                sortable: false,
                value: 'celular',
            },
            {
                text: 'Cargo',
                align: 'start',
                sortable: false,
                value: 'cargo',
            },
            {
                text: 'Telefono',
                align: 'start',
                sortable: false,
                value: 'telefono',
            },
            {
                text: 'Estado',
                align: 'start',
                value: 'estado',
            },
            {
                text: 'Opciones',
                align: 'start',
                value: 'opciones',
            },
        ],
    }),

    methods: {
        changeState(valor) {
            this.selecionadoRol = this.rolPersona[valor - 1];
            this.selecionadoTipo = this.tipoPersona[valor - 1];
            this.seleccionadoCiudad = this.Municipio[valor - 1];
        },

        editar() {
            let header = { headers: { "token": this.$store.state.token } }
            if (this.selecionadoTipo === "Juridica") {
                axios.put(`/datos/${this.id}`, {
                    tipoPersona: this.selecionadoTipo,
                    cargo: this.cargo,
                    telefono: this.telefono,
                    rol: this.selecionadoRol,
                    nombre: this.nombre,
                    apellidos: this.apellidos,
                    documento: this.documento,
                    direccion: this.direccion,
                    ciudad: this.seleccionadoCiudad,
                    celular: this.celular,
                    email: this.email.toUpperCase(),
                    password: this.password,
                }, header)
                    .then((response) => {
                        console.log(this.cargo);
                        console.log(this.telefono);
                        this.$swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: response.data.msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        this.selecionadoTipo = ""
                        this.cargo = ""
                        this.telefono = ""
                        this.selecionadoRol = ""
                        this.nombre = ""
                        this.apellidos = ""
                        this.documento = ""
                        this.direccion = ""
                        this.seleccionadoCiudad = ""
                        this.celular = ""
                        this.email = ""
                        this.password = ""
                    })
                    .catch((error) => {
                        console.log(this.cargo);
                        this.$swal.fire({
                            position: "top-end",
                            icon: "error",
                            title: error.response.data.errores.errors[0].msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    });
            } else {
                let header = { headers: { "token": this.$store.state.token } }
                axios.put(`/datos/${this.id}`, {
                    tipoPersona: this.selecionadoTipo,
                    rol: this.selecionadoRol,
                    nombre: this.nombre,
                    apellidos: this.apellidos,
                    documento: this.documento,
                    direccion: this.direccion,
                    ciudad: this.seleccionadoCiudad,
                    celular: this.celular,
                    email: this.email.toUpperCase(),
                    password: this.password,
                }, header)
                    .then((response) => {
                        this.$swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: response.data.msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        this.selecionadoTipo = ""
                        this.selecionadoRol = ""
                        this.nombre = ""
                        this.apellidos = ""
                        this.documento = ""
                        this.direccion = ""
                        this.seleccionadoCiudad = ""
                        this.celular = ""
                        this.email = ""
                        this.password = ""
                        this.dialog = false
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
            }
        },
        Guardar() {
            let header = { headers: { "token": this.$store.state.token } }
            if (this.selecionadoTipo === "Juridica") {
                axios.post(`/usuarios/`, {
                    tipoPersona: this.selecionadoTipo,
                    cargo: this.cargo,
                    telefono: this.telefono,
                    rol: this.selecionadoRol,
                    nombre: this.nombre,
                    apellidos: this.apellidos,
                    documento: this.documento,
                    direccion: this.direccion,
                    ciudad: this.seleccionadoCiudad,
                    celular: this.celular,
                    email: this.email.toUpperCase(),
                    password: this.password,
                }, header)
                    .then((response) => {
                        this.$swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: response.data.msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        this.selecionadoTipo = ""
                        this.cargo = ""
                        this.telefono = ""
                        this.selecionadoRol = ""
                        this.nombre = ""
                        this.apellidos = ""
                        this.documento = ""
                        this.direccion = ""
                        this.seleccionadoCiudad = ""
                        this.celular = ""
                        this.email = ""
                        this.password = ""
                        this.dialog = false
                    })
                    .catch((error) => {
                        console.log(this.cargo);
                        this.$swal.fire({
                            position: "top-end",
                            icon: "error",
                            title: error.response.data.errores.errors[0].msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    });
            } else {
                let header = { headers: { "token": this.$store.state.token } }
                axios.post(`/usuarios/`, {
                    tipoPersona: this.selecionadoTipo,
                    rol: this.selecionadoRol,
                    nombre: this.nombre,
                    apellidos: this.apellidos,
                    documento: this.documento,
                    direccion: this.direccion,
                    ciudad: this.seleccionadoCiudad,
                    celular: this.celular,
                    email: this.email.toUpperCase(),
                    password: this.password,
                }, header)
                    .then((response) => {
                        this.$swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: response.data.msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        this.selecionadoTipo = ""
                        this.selecionadoRol = ""
                        this.nombre = ""
                        this.apellidos = ""
                        this.documento = ""
                        this.direccion = ""
                        this.seleccionadoCiudad = ""
                        this.celular = ""
                        this.email = ""
                        this.password = ""
                        this.dialog = false

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
            }
        },
        desactivar(id) {
            let header = { headers: { token: this.$store.state.token } };
            axios
                .put(`/usuarios/desactivar/${id}`, {}, header)
                .then((response) => {
                    console.log(response);
                    this.$swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: response.data.msg,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        activar(id) {
            let header = { headers: { token: this.$store.state.token } };
            axios
                .put(`/usuarios/activar/${id}`, {}, header)
                .then((response) => {
                    console.log(response);
                    this.$swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: response.data.msg,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        },



        Volver() {
            this.dialog = false
            this.dialog2 = false
        },
        sacarid(id) {
            console.log(id);
            this.id = id
        },
        usuarios() {
            let header = { headers: { "token": this.$store.state.token } };
            axios.get(`/usuarios`, header)
                .then((response) => {
                    console.log(response);
                    response.data.usuarios.forEach(usuarios => {
                        this.Usuarios.push(usuarios)
                    })
                })
                .catch((error) => {
                    console.log(error);
                });
        },

        listarCiudad() {
            axios.get("/ciudad/CiudadDepartamento")
                .then(response => {
                    console.log(response);
                    response.data.ciudad.forEach(city => {
                        this.Municipio.push(city)
                    })
                })
                .catch(error => {
                    console.log(error);
                })
        },

        customFilter(item, queryText) {
            const textOne = item.ciudad.toUpperCase()
            const searchText = queryText.toUpperCase()

            return textOne.indexOf(searchText) > -1
        },

        ListarDepar() {
            axios.get("/ciudad/CiudadDepartamento")
                .then(response => {
                    console.log(response);
                    this.Ciudad = response.data.ciudad
                    for (let i = 0; i < this.Ciudad.length; i++) {
                        this.depar = this.Ciudad[i].departamento
                        this.Depar.push(this.depar)
                    }
                    console.log(this.Depar);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        Volver1() {
            this.$router.push("/")
        }
    },
    created() {
        this.usuarios(),
            this.listarCiudad()
    },
}
</script>

