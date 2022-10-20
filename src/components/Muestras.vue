<template>
    <v-container style="margin-top: 100px">
        <v-row style="margin:0">
            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
            <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver()">
          Volver
            </v-btn>
            </v-col>
            
            <v-col cols="12">
                <template>
                    <v-card>
                        <v-card-title>
                            Clientes
                            <v-spacer></v-spacer>
                            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                                hide-details></v-text-field>
                        </v-card-title>
                        <v-data-table :headers="headers" :items="clientes" :search="search">
                            <template v-slot:[`item.muestras`]="{item}">
                                <v-btn @click="pagmuestras(item)">Muestras</v-btn>
                            </template>
                        </v-data-table>
                    </v-card>
                </template>
            </v-col>
        </v-row>
    </v-container>
</template>
    
<script>
import axios from "axios";
export default {
    name: 'PageMuestras',
    data: () => ({
        search: '',
        clientes: [],
        headers: [
            {
                text: 'Nombres',
                align: 'start',
                sortable: false,
                value: "idCliente.nombre",
            },
            {
                text: 'Apellidos',
                align: 'start',
                sortable: false,
                value: 'idCliente.apellidos',
            },
            {
                text: 'Correo',
                align: 'start',
                sortable: false,
                value: 'idCliente.email',
            },
            {
                text: 'C.C. / NIT',
                align: 'start',
                sortable: false,
                value: 'idCliente.documento',
            },
            {
                text: 'Muestras',
                align: 'start',
                sortable: false,
                value: 'muestras',
            },
        ],

    }),
    methods: {
        Volver() {
            this.$router.push("/");
        },
        usuarios() {
            axios.get(`/cotizacion/listarTodasLasCotizaciones`)
                .then((response) => {
                    console.log(response);
                    this.clientes=response.data.coti
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        pagmuestras(datos){
            console.log(datos);
            this.$store.dispatch("setMuestras", datos);
            this.$router.push("/ListaMuestras")
        },
        
    },
    created() {
        this.usuarios();
    },
}
</script>