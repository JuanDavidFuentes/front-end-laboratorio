<template>
    <v-container fluid class="mt-15">
        <v-row>
            <v-col cols="7" class="mt-1 ml-6">
                <v-btn class="mt-n3 ml-10" outlined color="red darken-3" @click="Volver1()">
                    Volver
                </v-btn>
            </v-col>

        </v-row>
        <v-row>
            <v-col cols="12">
                <template>
                    <v-card>
                        <template>
                            <v-card>
                                <v-card-title>
                                    Informes
                                    <v-spacer></v-spacer>
                                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar informe"
                                        single-line hide-details>
                                    </v-text-field>
                                </v-card-title>
                                <v-data-table :headers="headers" :items="informes" :search="search">
                                    <template v-slot:[`item.accion`]="{ item }">
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-icon color="green" rounded v-bind="attrs" v-on="on"
                                                    @click="ver(item)">
                                                    mdi-eye-circle
                                                </v-icon>
                                            </template>
                                            <span>Añadir cliente</span>
                                        </v-tooltip>
                                    </template>
                                </v-data-table>
                            </v-card>
                        </template>
                    </v-card>
                </template>
            </v-col>
        </v-row>
    </v-container>
</template>
  
<script>
import axios from "axios";
export default {
    name: "PaginaInformes",
    data: () => ({
        search: '',
        ordenes: [],
        ensayosOrdenes: [],
        idOrden: "",
        informes: [],
        arrayInformes: {},
        headers: [
            {
                text: 'Id Muestra',
                align: 'start',
                value: "idMuestra.codMuestra",
            },
            {
                text: 'Cotización',
                align: 'start',
                sortable: false,
                value: 'idMuestra.cotizacion.numero_cotizacion',
            },
            {
                text: 'Ensayo',
                align: 'start',
                value: 'ensayo.idensayo.ensayo',
            },
            {
                text: 'Total',
                align: 'start',
                sortable: false,
                value: 'idMuestra.cotizacion.total',
            },
            {
                text: 'Ver',
                align: 'start',
                sortable: false,
                value: 'accion',
            },
        ],
    }),
    methods: {
        listarInformesRealizados() {
            axios.get(`/Orden_servicio/InformeResultados/${this.idOrden}`)
                .then((response) => {
                    console.log(response.data.orden);
                    this.informes.push({ ensayo: response.data.orden.ensayo[0], idMuestra: response.data.orden.idMuestra, observaciones: response.data.orden.observaciones })
                    console.log(this.informes);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        listarordens() {
            axios.get(`/Orden_servicio/listartodo`)
                .then((response) => {
                    this.ordenes = response.data.ordenservi.reverse()
                    this.ordenes.forEach(data => {
                        if (data.ensayo[0].estado === "Realizado") {
                            this.ensayosOrdenes.push({ ensayo: data.ensayo[0], id: data._id })
                            this.idOrden = data._id
                            this.listarInformesRealizados()
                        }
                    })
                    console.log(this.ensayosOrdenes);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        ver(datos){
            // this.$store.dispatch("setCotiImprimir", datos);
            localStorage.setItem("datosInforme", JSON.stringify(datos))

            window.open("http://localhost:8080/#/PaginaImprimir")
            console.log(datos);

        },
        Volver1() {
            this.$router.push("/Home")
        },
    },
    created() {
        this.listarordens()
    }
};
</script>
  