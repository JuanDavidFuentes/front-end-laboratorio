<template>
    <v-container fluid class="mt-15">
        <div v-if="this.$store.state.token">
            <v-row>
                <v-col cols="12">
                    <v-btn class="mt-n3 ml-15" outlined color="red darken-3" @click="Volver()">
                        Volver
                    </v-btn>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12">
                    <div class="text-center black--text font-weight-Normal">
                        <h1>Ordenes</h1>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="1"></v-col>
                <v-col class="text-center" cols="10">
                    <template>
                        <v-card>
                            <template>
                                <v-card>
                                    <v-card-title>
                                        Ordenes
                                        <v-spacer></v-spacer>
                                        <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar orden"
                                            single-line hide-details>
                                        </v-text-field>
                                    </v-card-title>
                                    <v-data-table :headers="headers" :items="ensayosOrdenes" :search="search">
                                        <template v-slot:[`item.completar`]="{ item }">
                                            <v-tooltip v-if="item.ensayo.estado === 'En proceso'" bottom>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="green" rounded v-bind="attrs" v-on="on"
                                                        @click="editar(item)">
                                                        mdi-briefcase-check
                                                    </v-icon>
                                                </template>
                                                <span>Termina tu tarea!!!!</span>
                                            </v-tooltip>
                                            <v-tooltip v-if="item.ensayo.estado === 'Realizado'" bottom>
                                                <template v-slot:activator="{ on, attrs }">
                                                    <v-icon color="blue" rounded v-bind="attrs" v-on="on"
                                                        @click="editar(item)">
                                                        mdi-pencil
                                                    </v-icon>
                                                </template>
                                                <span>Editar</span>
                                            </v-tooltip>
                                        </template>
                                        <template v-slot:[`item.estado`]="{ item }">
                                            <span class="orange--text" v-if="item.ensayo.estado === 'En proceso'">En
                                                proceso...</span>
                                            <span class="green--text"
                                                v-if="item.ensayo.estado === 'Realizado'">Realizada!!</span>
                                        </template>
                                    </v-data-table>
                                </v-card>
                            </template>
                        </v-card>
                    </template>
                </v-col>
                <v-col cols="1"></v-col>
            </v-row>
            <template>
                <v-row justify="center">
                    <v-dialog v-model="dialog" persistent max-width="800px">
                        <v-card>
                            <v-card-title>
                                <span class="text-h5">Porfavor complete los campos</span>
                            </v-card-title>
                            <v-card-text>
                                <v-container>
                                    <v-row>
                                        <v-col cols="12">
                                            <v-text-field color="secondary" v-model="resultado" type="number"
                                                label="Resultado*" filled dense></v-text-field>
                                        </v-col>
                                        <v-col cols="12">
                                            <v-text-field color="secondary" v-model="incertidumbre" type="number"
                                                label="Incertidumbre*" filled dense></v-text-field>
                                        </v-col>
                                    </v-row>
                                </v-container>
                            </v-card-text>
                            <v-card-actions>
                                <v-spacer></v-spacer>
                                <v-btn color="blue darken-1" text @click="dialog = false">
                                    Cerrar
                                </v-btn>
                                <v-btn color="blue darken-1" text @click="editar2()">
                                    Guardar
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-dialog>
                </v-row>
            </template>
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
                        <h1 style="    color: var(--border); font-size: 2em;">Su sesión a caducado porfavor inicie
                            sesión nuevamente!</h1>
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
    name: "PageOrden",

    data() {
        return {
            search: '',
            idUsuario: '',
            dialog: false,
            ordenes: [],
            ensayosOrdenes: [],
            incertidumbre: null,
            resultado: null,
            ensayo: {},
            headers: [
                {
                    text: 'Ensayo',
                    align: 'start',
                    value: "ensayo.idensayo.ensayo",
                },
                {
                    text: 'Descripción',
                    align: 'start',
                    sortable: false,
                    value: 'ensayo.idensayo.descripcion',
                },
                {
                    text: 'Método',
                    align: 'start',
                    value: 'ensayo.idensayo.metodo',
                },
                {
                    text: 'Técnica',
                    align: 'start',
                    value: 'ensayo.idensayo.tecnica',
                },
                {
                    text: 'Unidades',
                    align: 'start',
                    sortable: false,
                    value: 'ensayo.idensayo.unidades',
                },
                {
                    text: 'Límite de cuantificación',
                    align: 'start',
                    sortable: false,
                    value: 'ensayo.idensayo.limiteCuantificacion',
                },
                {
                    text: 'Incertidumbre',
                    align: 'start',
                    sortable: false,
                    value: 'ensayo.incertidumbre',
                },
                {
                    text: 'Resultado',
                    align: 'start',
                    sortable: false,
                    value: 'ensayo.resultado',
                },
                {
                    text: 'Estado',
                    align: 'start',
                    sortable: false,
                    value: 'estado',
                },
                {
                    text: 'Tareas',
                    align: 'start',
                    sortable: false,
                    value: 'completar',
                },
            ],
        }
    }, methods: {
        listarordens() {
            this.idUsuario = this.$store.state.datos._id
            console.log(this.idUsuario);
            let header = { headers: { "token": this.$store.state.token } };
            axios.get(`/Orden_servicio/realizado/${this.idUsuario}`, header)
                .then((response) => {
                    console.log(response);
                    this.ordenes = response.data.realizadopor.reverse()
                    this.ordenes.forEach(data => {
                        console.log(data);
                        this.ensayosOrdenes.push({ ensayo: data.ensayo[0], id: data._id })
                    })
                    console.log(this.ensayosOrdenes);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        editar(item) {
            console.log(item);
            this.ensayo = item
            this.dialog = true
            console.log(this.ensayo);
        },
        editar2() {
            let header = { headers: { "token": this.$store.state.token } };
            axios.put(`/Orden_servicio/editar_orden/${this.ensayo.id}`, {
                idensayo: this.ensayo.ensayo.idensayo._id,
                resultado: this.resultado,
                incertidumbre: this.incertidumbre
            }, header)
                .then((response) => {
                    console.log(response);
                    this.$swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: response.data.msg,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    this.listarordens();
                    this.dialog = false
                    this.ordenes = []
                    this.ensayosOrdenes = []
                    this.incertidumbre = null
                    this.resultado = null
                    this.ensayo = {}
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        Volver() {
            this.$router.push("/Home");
        },
    },
    created() {
        this.listarordens();
    }
};
</script>