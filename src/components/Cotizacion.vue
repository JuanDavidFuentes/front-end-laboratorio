<template>
    <v-container style="margin-top: 100px;">
        <v-row style="margin:0" class="mt-n6">
            <v-col cols="4"></v-col>
            <v-col cols="4">
                <div class="text-center black--text font-weight-Normal">
                    <h1>Cotizaciones</h1>
                </div>
            </v-col>
            <v-col cols="4" class="mt-3">
                <v-btn color="deep-orange" rounded dark>
                    <v-icon> mdi-plus-circle-outline </v-icon>Crear cotización
                </v-btn>
            </v-col>
        </v-row>
        <v-row style="margin:0">
            <v-col cols="2"></v-col>
            <v-col cols="8">
                <v-simple-table class="mb-15" align-center justify-center>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left">
                                    Codigo de cotización
                                </th>
                                <th class="text-left">
                                    Nombre completo del cliente
                                </th>
                                <th class="text-left">
                                    Documento
                                </th>
                                <th class="text-left">
                                    Fecha
                                </th>
                                <th class="text-left">
                                    Otros
                                </th>
                                <th class="text-left">
                                    Editar
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(cotizacion,i) in cotizaciones" :key="i">
                                <td>{{ cotizacion.numero_cotizacion }}</td>
                                <td>{{ cotizacion.idCliente.nombre }} {{cotizacion.idCliente.apellidos}}</td>
                                <td>{{ cotizacion.idCliente.documento }}</td>
                                <td>{{ cotizacion.fecha_emision.slice(0, 10) }}</td>
                                <td>
                                    <v-btn color="success" class="mr-3" v-if="cotizacion.estado===1" rounded
                                        @click="desactivar(cotizacion._id)">
                                        Activo
                                    </v-btn>
                                    <v-btn color="error" v-if="cotizacion.estado === 0" rounded
                                        @click="activar(cotizacion._id)">
                                        Desactivado
                                    </v-btn>
                                </td>
                                <td>
                                    <v-btn color="deep-orange" rounded dark>
                                        <v-icon>
                                            mdi-border-color
                                        </v-icon>
                                    </v-btn>
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
            <v-col cols="2"></v-col>
        </v-row>
    </v-container>
</template>









<script>
import axios from 'axios'
export default {
    // https://laboratorio-jjai-2.herokuapp.com/api
    name: 'PageCoti',

    data() {
        return {
            cotizaciones: []
        }
    },
    methods: {
        listar() {
            axios.get(`${this.$store.state.backend}/cotizacion/listarTodasLasCotizaciones`)
                .then(response => {
                    this.cotizaciones = response.data.coti
                    console.log(this.cotizaciones);
                })
                .catch(error => {
                    console.log(error);
                })
        },
        detalles(cotizacion) {
            this.$store.dispatch("", cotizacion);
            this.$router.push("/DetallesCotizacion");
        },
        desactivar(id) {
            let header = { headers: { "x-token": this.$store.state.token } }
            console.log(header);
            axios.put(`${this.$store.state.backend}/cotizacion/activar/${id}`, {}, header)
                .then(response => {
                    console.log(response);
                    this.$swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: response.data.msg,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.usuarios()
                })
                .catch(error => {
                    console.log(error);
                })
        },
        activar(id) {
            let header = { headers: { "x-token": this.$store.state.token } }
            axios.put(`${this.$store.state.backend}/cotizacion/desactivar/${id}`, {}, header)
                .then(response => {
                    console.log(response);
                    this.$swal.fire({
                        position: 'top-end',
                        icon: 'success',
                        title: response.data.msg,
                        showConfirmButton: false,
                        timer: 1500
                    })
                    this.listar()
                })
                .catch(error => {
                    console.log(error);
                })
        }
        // buscar(){
        //     this.$router.push("/search")
        //     this.$store.state.titulo=this.titulo
        // }
    },
    created() {
        this.listar()
    },
}
</script>
