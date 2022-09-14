<template>
    <v-container style="margin-top: 100px">
        <v-row style="margin: 0" class="mt-n6">
            <v-col cols="4">
                <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver()">
                    Volver
                </v-btn>
            </v-col>

            <v-col cols="4">
                <div class="text-center black--text font-weight-Normal">
                    <h1>Cotizaciones</h1>
                </div>
            </v-col>

            <v-col cols="4" class="mt-3">
                <v-row justify="center">
                    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn color="deep-orange" dark v-bind="attrs" v-on="on">
                                <v-icon> mdi-plus-circle-outline </v-icon>Crear cotización
                            </v-btn>
                        </template>

                        <v-card>
                            <v-toolbar dark>
                                <v-btn icon dark @click="dialog = false">
                                    <v-icon>mdi-close</v-icon>
                                </v-btn>
                                <v-toolbar-title>Crear Cotización</v-toolbar-title>
                                <v-spacer></v-spacer>
                                <v-toolbar-items>
                                    <v-btn dark text @click="dialog = false">
                                        <v-icon> mdi-plus-circle-outline </v-icon>Guardar
                                    </v-btn>
                                </v-toolbar-items>
                            </v-toolbar>

                            <v-list three-line subheader>
                                <v-row style="margin: 0">
                                    <v-col cols="3" >
                                        <img height="300" width="300 "
                                            src="https://agenciapublicadeempleo.sena.edu.co/imgLayout/logos/LogoSENA-naranja_vector.png" />
                                    </v-col>

                                    <v-col cols="4">
                                        <div class=" text-center black--text font-italic text-decoration-underline ">
                                            <h1>Oferta de servicios</h1>
                                        </div>
                                    </v-col>

                                    <v-col cols="2" class="mt-5">
                                        <div class="text-center black--text headline">
                                            <h4>Cotización No.</h4>
                                        </div>
                                        <div class="text-center red--text font-italic headline">
                                            xxxx-xxxxvx
                                        </div>

                                        <div class="text-center black--text headline mt-10">
                                            <h4>Fecha de emisión:</h4>
                                        </div>
                                        <v-text-field type="date" outlined dense> </v-text-field>
                                    </v-col>
                                    <v-col cols="3"></v-col>
                                </v-row>
                            </v-list>

                            <v-divider></v-divider>

                            <v-container-fluid class="mx-5 mt-n15">
                                <v-row
                                    style=" margin: 0; border: solid 1px; border-color: black; background-color: #ff5722; "
                                    class="mx-5">
                                    <v-col cols="12">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>1. Datos del cliente</h3>
                                        </div>
                                    </v-col>
                                </v-row>

                                <v-row style="margin: 0" class="mx-5">
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                        cols="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Cliente</h3>
                                        </div>
                                    </v-col>

                                    <v-col cols="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field class="pa-0 ma-0" full-width hide-details>
                                        </v-text-field>
                                    </v-col>
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        cols="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>NIT/ C.C.</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field class="pa-0 ma-0" full-width hide-details filled disabled>
                                        </v-text-field>
                                    </v-col>
                                </v-row>


                                <v-row style="margin: 0" class="mx-5">
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                        cols="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Dirección</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field class="pa-0 ma-0" full-width hide-details filled disabled>
                                        </v-text-field>
                                    </v-col>
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        cols="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Ciudad</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field class="pa-0 ma-0" full-width hide-details filled disabled>
                                        </v-text-field>
                                    </v-col>
                                </v-row>


                                <v-row style="margin: 0" class="mx-5">
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                        cols="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Departamento</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field class="pa-0 ma-0" full-width hide-details filled disabled>
                                        </v-text-field>
                                    </v-col>
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        cols="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Teléfono</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field class="pa-0 ma-0" full-width hide-details filled disabled>
                                        </v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row style="margin: 0" class="mx-5">
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                        cols="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Contacto</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field class="pa-0 ma-0" full-width hide-details filled disabled>
                                        </v-text-field>
                                    </v-col>
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        cols="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Cargo</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field class="pa-0 ma-0" full-width hide-details filled disabled>
                                        </v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row style="margin: 0" class="mx-5">
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                        cols="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Celular</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field class="pa-0 ma-0" full-width hide-details filled disabled>
                                        </v-text-field>
                                    </v-col>
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        cols="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Correo electrónico</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field class="pa-0 ma-0" full-width hide-details filled disabled>
                                        </v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row style="margin: 0" class="mx-5">
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                        cols="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Validez de la oferta</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field class="pa-0 ma-0" full-width hide-details filled disabled>
                                        </v-text-field>
                                    </v-col>
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        cols="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Entrega de resultados</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field class="pa-0 ma-0" full-width hide-details filled disabled>
                                        </v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row style="margin: 0" class="mx-5">
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                        cols="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Elaborador por</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field class="pa-0 ma-0" full-width hide-details filled disabled>
                                        </v-text-field>
                                    </v-col>
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        cols="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Cargo</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field class="pa-0 ma-0" full-width hide-details filled disabled>
                                        </v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row class="mx-5"
                                    style=" margin: 0; border: solid 1px; border-color: black; background-color: #ff5722; border-top: 0px;">
                                    <v-col cols="12">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>2. Propuesta técnica y económica</h3>
                                        </div>
                                    </v-col>
                                </v-row>

                                <v-row class="mx-5"
                                    style=" margin: 0; border: solid 1px; border-color: black; background-color: #ff5722; border-top: 0px;">
                                    <v-col cols="12">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Ítem 1</h3>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row style=" margin: 0;" class="mx-5">
                                    <v-col cols="12">
                                        <v-simple-table>
                                        <template v-slot:default>
                                            <thead>
                                                <tr>
                                                    <th class="text-center text-center white--text text-no-wrap deep-orange">
                                                        Código de referencia
                                                    </th>
                                                    <th class="text-center">
                                                        Descripción del ensayo
                                                    </th>
                                                    <th class="text-center">
                                                        Unidades
                                                    </th>
                                                    <th class="text-center">
                                                        Técnica analítica
                                                    </th>
                                                    <th class="text-center">
                                                        Método analítico
                                                    </th>
                                                    <th class="text-center">
                                                        Limite de cuantificación
                                                    </th>
                                                    <th class="text-center">
                                                        Costo del ensayo
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="item in desserts" :key="item.name">
                                                    <td>{{ item.name }}</td>
                                                    <td>{{ item.calories }}</td>
                                                </tr>
                                            </tbody>
                                        </template>
                                    </v-simple-table>
                                    </v-col>
                                </v-row>
                            </v-container-fluid>
                        </v-card>
                    </v-dialog>
                </v-row>
            </v-col>
        </v-row>
        <!-- xs="12" md="12" lg="12" xl="12" -->
        <v-row style="margin: 0">
            <v-col cols="2"></v-col>
            <v-col cols="8">
                <v-simple-table class="mb-15" align-center justify-center>
                    <template v-slot:default>
                        <thead>
                            <tr>
                                <th class="text-left">Codigo de cotización</th>
                                <th class="text-left">Nombre completo del cliente</th>
                                <th class="text-left">Documento</th>
                                <th class="text-left">Fecha</th>
                                <th class="text-left">Otros</th>
                                <th class="text-left">Editar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(cotizacion, i) in cotizaciones" :key="i">
                                <td>{{ cotizacion.numero_cotizacion }}</td>
                                <td>
                                    {{ cotizacion.idCliente.nombre }}
                                    {{ cotizacion.idCliente.apellidos }}
                                </td>
                                <td>{{ cotizacion.idCliente.documento }}</td>
                                <td>{{ cotizacion.fecha_emision.slice(0, 10) }}</td>
                                <td>
                                    <v-btn color="success" class="mr-3" v-if="cotizacion.estado === 1" rounded
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
                                        <v-icon> mdi-border-color </v-icon>
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
import axios from "axios";
export default {
    // https://laboratorio-jjai-2.herokuapp.com/api
    name: "PageCoti",

    data() {
        return {
            cotizaciones: [],
            dialog: false,
            notifications: false,
            sound: true,
            widgets: false,
        };
    },
    methods: {
        Volver() {
            this.$router.push("/");
        },
        listar() {
            axios
                .get(`/cotizacion/listarTodasLasCotizaciones`)
                .then((response) => {
                    this.cotizaciones = response.data.coti;
                    console.log(this.cotizaciones);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        detalles(cotizacion) {
            this.$store.dispatch("", cotizacion);
            this.$router.push("/DetallesCotizacion");
        },
        desactivar(id) {
            let header = { headers: { "x-token": this.$store.state.token } };
            console.log(header);
            axios
                .put(`/cotizacion/activar/${id}`, {}, header)
                .then((response) => {
                    console.log(response);
                    this.$swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: response.data.msg,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    this.usuarios();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        activar(id) {
            let header = { headers: { "x-token": this.$store.state.token } };
            axios
                .put(`/cotizacion/desactivar/${id}`, {}, header)
                .then((response) => {
                    console.log(response);
                    this.$swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: response.data.msg,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    this.listar();
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        // buscar(){
        //     this.$router.push("/search")
        //     this.$store.state.titulo=this.titulo
        // }
    },
    created() {
        this.listar();
    },
};
</script>
