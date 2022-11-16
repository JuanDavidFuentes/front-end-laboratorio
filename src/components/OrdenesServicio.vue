<template>
    <v-container fluid class="mt-15">
        <v-row>
            <v-col cols="12" xs="0" sm="0" md="4" lg="4" xl="4"></v-col>
            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                <div class="text-center black--text font-weight-Normal">
                    <h1>Ordenes</h1>
                </div>
            </v-col>
            <v-col cols="12" xs="0" sm="0" md="4" lg="4" xl="4"></v-col>
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
                                </v-data-table>
                            </v-card>
                        </template>
                    </v-card>
                </template>
            </v-col>
            <v-col cols="1"></v-col>
        </v-row>
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
            ordenes: [],
            ensayosOrdenes: [],
            headers: [
                {
                    text: 'Ensayo',
                    align: 'start',
                    value: "ensayo",
                },
                {
                    text: 'Descripción',
                    align: 'start',
                    sortable: false,
                    value: 'ensayo.idensayo.descripcion',
                },
                {
                    text: 'Metodo',
                    align: 'start',
                    value: 'ensayo.idensayo.metodo',
                },
                {
                    text: 'Tecnica',
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
                    text: 'Limite de cuantificación',
                    align: 'start',
                    sortable: false,
                    value: 'ensayo.idensayo.limiteCuantificacion',
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
                    this.ordenes = response.data.realizadopor
                    this.ordenes.forEach(data => {
                        this.ensayosOrdenes.push({ ensayo: data.ensayo[0], id: data._id })
                    })
                    console.log(this.ensayosOrdenes);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
    },
    created() {
        this.listarordens();
    }
};
</script>