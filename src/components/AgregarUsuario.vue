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

        <v-row>
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

                                <td v-if="p.estado===1">
                                    <button @click="desactivar(p)">
                                        <span class="green--text"> Activo </span></button>
                                </td>

                                <td v-else>
                                    <button>
                                        <span class="red--text" @click="activar(p)"> Desactivo </span></button>
                                </td>
                                <td>{{p.cargo}}</td>
                                <td>{{p.telefono}}</td>
                                
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-row>

    </v-container>
</template>
<script>
import axios from 'axios';

export default {
    name: 'PageUsuarios',
    data: () => ({
        dialog: false,
        Municipio: [],
        Usuarios: [],
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
    }),

    methods: {
        changeState(valor) {
            this.selecionadoRol = this.rolPersona[valor - 1];
            this.selecionadoTipo = this.tipoPersona[valor - 1];
            this.seleccionadoCiudad = this.Municipio[valor - 1];
        },

        desactivar(id) {
            let header = { headers: { token: this.$store.state.token } };
            axios
                .put(`/usuarios/desactivar/${id._id}`, {}, header)
                .then((response) => {
                    console.log(response);
                    this.usuarios()
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        activar(id) {
            let header = { headers: { token: this.$store.state.token } };
            axios
                .put(`/usuarios/activar/${id._id}`, {}, header)
                .then((response) => {
                    console.log(response);

                    this.usuarios()
                })
                .catch((error) => {
                    console.log(error);
                    console.log("Bien :D");
                });
        },
        Guardar() {
            let header = { headers: { "token": this.$store.state.token } }
            if (this.tipoPersona === "Juridica") {
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
                        console.log(this.cargo);
                        console.log(this.telefono);

                        this.$swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: response.data.msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                     
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
                        this.usuarios()
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

        Volver() {
            this.dialog = false
        },
        usuarios() {
            let header = { headers: { "token": this.$store.state.token } };
            axios.get(`/usuarios`, header)
                .then((response) => {
                    console.log(response);
                    response.data.usuarios.forEach(usuarios => {
                        this.Usuarios.push(usuarios)
                    })
                    console.log(this.Usuarios);
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
                    console.log(this.Municipio);

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
        this.usuarios()
    },
}
</script>

