<template>
    <v-container fluid class="mt-15">
        <v-row >
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
                                <v-data-table :headers="headers" :items="informes" :search="search"></v-data-table>
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
        ensayosOrdenes:[],
        idOrden:"",
        informes: [],
        headers: [
            {
                text: 'Código Departamento',
                align: 'start',
                value: "",
            },
            {
                text: 'Departamento',
                align: 'start',
                sortable: false,
                value: '',
            },
            {
                text: 'Código Ciudad',
                align: 'start',
                value: '',
            },
            {
                text: 'Ciudad',
                align: 'start',
                sortable: false,
                value: '',
            },
        ],
    }),
    methods: {
        listarInformesRealizados() {
            axios.get(`/Orden_servicio/InformeResultados/${this.idOrden}`)
                .then((response) => {
                    console.log(response.data.orden);
                    this.informes.push(response.data.orden) 
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
                        if(data.ensayo[0].estado==="Realizado"){
                            this.ensayosOrdenes.push({ ensayo: data.ensayo[0], id: data._id })
                            this.idOrden=data._id
                            this.listarInformesRealizados()
                        }
                    })
                    console.log(this.ensayosOrdenes);
                })
                .catch((error) => {
                    console.log(error);
                });
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
  