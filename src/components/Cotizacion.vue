<template>
    <v-container style="margin-top: 100px">
        <v-row style="margin: 0" class="mt-n6">
            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver()">
                    Volver
                </v-btn>
            </v-col>

            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                <div class="text-center black--text font-weight-Normal">
                    <h1>Cotizaciones</h1>
                </div>
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" class="mt-3">
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
                                    <v-col cols="12" xs="12" sm="12" md="2" lg="2" xl="3" class="text-center">
                                        <img height="300" width="300 "
                                            src="https://agenciapublicadeempleo.sena.edu.co/imgLayout/logos/LogoSENA-naranja_vector.png" />
                                    </v-col>

                                    <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="3">
                                        <div class=" text-center black--text font-italic text-decoration-underline ">
                                            <h1>Oferta de servicios</h1>
                                        </div>
                                        <div class=" text-center black--text mt-2">
                                            <h3>{{datos[0].descripcion}}</h3>
                                        </div>
                                        <div class=" text-center black--text mt-2">
                                            <h3>NIT: {{datos[0].nit}}</h3>
                                        </div>
                                        <div class=" text-center black--text mt-2">
                                            <h3>Dirección: {{datos[0].direccion}}</h3>
                                        </div>
                                        <div class=" text-center black--text mt-2">
                                            <h3>Teléfono: {{datos[0].telefono}}</h3>
                                        </div>
                                        <div class=" text-center black--text mt-2">
                                            <h3>Correo electrónico: {{datos[0].correo}}</h3>
                                        </div>
                                    </v-col>

                                    <v-col cols="12" xs="12" sm="12" md="2" lg="2" xl="3" class="mt-3">
                                        <div class="text-center black--text headline">
                                            <h4>Cotización No.</h4>
                                        </div>
                                        <div class="text-center red--text font-italic headline">
                                            {{numeroactual}}
                                        </div>

                                        <div class="text-center black--text headline mt-10">
                                            <h4>Fecha de emisión:</h4>
                                        </div>
                                        <v-text-field type="date" outlined dense> </v-text-field>
                                    </v-col>
                                    <v-col cols="12" xs="12" sm="12" md="2" lg="2" xl="3" class="mt-3">
                                        <div class="text-center black--text">
                                            <h3>Código</h3>
                                        </div>
                                        <div class="text-center black--text">
                                            <h3>{{calidadOferta[0].codigo}}</h3>
                                        </div>
                                        <div class="text-center black--text mt-10">
                                            <h3>Aprobación</h3>
                                        </div>
                                        <div class="text-center black--text">
                                            <h3>{{calidadOferta[0].aprobacion}}</h3>
                                        </div>
                                        <div class="text-center black--text mt-10">
                                            <h3>Versión</h3>
                                        </div>
                                        <div class="text-center black--text">
                                            <h3>{{calidadOferta[0].version}}</h3>
                                        </div>
                                    </v-col>
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
                                    <!-- xs="8" sm="8" md="4" lg="4" xl="4" -->
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Cliente</h3>
                                        </div>
                                    </v-col>

                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-btn color="primary" dark class="ma-2" @click="dialog2 = !dialog2">
                                            Open Dialog 2
                                        </v-btn>
                                    </v-col>
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>NIT/ C.C.</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field class="pa-0 ma-0" full-width hide-details filled disabled>
                                        </v-text-field>
                                    </v-col>
                                </v-row>


                                <v-row style="margin: 0" class="mx-5">
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Dirección</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field class="pa-0 ma-0" full-width hide-details filled disabled>
                                        </v-text-field>
                                    </v-col>
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Ciudad</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field class="pa-0 ma-0" full-width hide-details filled disabled>
                                        </v-text-field>
                                    </v-col>
                                </v-row>


                                <v-row style="margin: 0" class="mx-5">
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Departamento</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field class="pa-0 ma-0" full-width hide-details filled disabled>
                                        </v-text-field>
                                    </v-col>
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Teléfono</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field class="pa-0 ma-0" full-width hide-details filled disabled>
                                        </v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row style="margin: 0" class="mx-5">
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Contacto</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field class="pa-0 ma-0" full-width hide-details filled disabled>
                                        </v-text-field>
                                    </v-col>
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Cargo</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field class="pa-0 ma-0" full-width hide-details filled disabled>
                                        </v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row style="margin: 0" class="mx-5">
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Celular</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field class="pa-0 ma-0" full-width hide-details filled disabled>
                                        </v-text-field>
                                    </v-col>
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Correo electrónico</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field class="pa-0 ma-0" full-width hide-details filled disabled>
                                        </v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row style="margin: 0" class="mx-5">
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Validez de la oferta</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field class="pa-0 ma-0" full-width hide-details filled disabled>
                                        </v-text-field>
                                    </v-col>
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Entrega de resultados</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field class="pa-0 ma-0" full-width hide-details filled disabled>
                                        </v-text-field>
                                    </v-col>
                                </v-row>

                                <v-row style="margin: 0" class="mx-5">
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Elaborador por</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <v-text-field class="pa-0 ma-0" full-width hide-details filled disabled>
                                        </v-text-field>
                                    </v-col>
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Cargo</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
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

                                <!-- item 1 -->
                                <v-row class="mx-5"
                                    style=" margin: 0; border: solid 1px; border-color: black; background-color: #ff5722; border-top: 0px;">
                                    <v-col cols="12">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Ítem 1</h3>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row style=" margin: 0;" class="mx-5">
                                    <v-col cols="12" class="ma-0 pa-0">
                                        <v-simple-table>
                                            <template v-slot:default>
                                                <thead style="  background-color: #ff5722; border-top: 0px;">
                                                    <tr>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px;"
                                                            class="text-center white--text">
                                                            <h2> Código de referencia </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Descripción del ensayo </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Unidades </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Técnica analítica </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Método analítico </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Limite de cuantificación </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Costo del ensayo </h2>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px;">
                                                            a
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            b
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            c
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            d
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            e
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            f
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            g
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px;"
                                                            class="text-right white--text">
                                                            <h2> Costo del ítem 1 </h2>
                                                        </td>
                                                        <td style=" border: solid 1px; border-color: black; border-left:0px;"
                                                            class="pa-0 ma-0">
                                                            <v-text-field class="pa-0 ma-0" type="number" full-width
                                                                hide-details>
                                                            </v-text-field>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>
                                    </v-col>
                                </v-row>
                                <!-- item 2 -->
                                <v-row class="mx-5"
                                    style=" margin: 0; border: solid 1px; border-color: black; background-color: #ff5722; border-top: 0px;">
                                    <v-col cols="12">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Ítem 2</h3>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row style=" margin: 0;" class="mx-5">
                                    <v-col cols="12" class="ma-0 pa-0">
                                        <v-simple-table>
                                            <template v-slot:default>
                                                <thead style="  background-color: #ff5722; border-top: 0px;">
                                                    <tr>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px;"
                                                            class="text-center white--text">
                                                            <h2> Código de referencia </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Descripción del ensayo </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Unidades </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Técnica analítica </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Método analítico </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Limite de cuantificación </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Costo del ensayo </h2>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px;">
                                                            a
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            b
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            c
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            d
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            e
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            f
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            g
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px;"
                                                            class="text-right white--text">
                                                            <h2> Costo del ítem 2 </h2>
                                                        </td>
                                                        <td style=" border: solid 1px; border-color: black; border-left:0px;"
                                                            class="pa-0 ma-0">
                                                            <v-text-field class="pa-0 ma-0" type="number" full-width
                                                                hide-details>
                                                            </v-text-field>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </template>
                                        </v-simple-table>
                                    </v-col>
                                </v-row>
                                <!-- item 3 -->
                                <v-row class="mx-5"
                                    style=" margin: 0; border: solid 1px; border-color: black; background-color: #ff5722; border-top: 0px;">
                                    <v-col cols="12">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Ítem 3</h3>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row style=" margin: 0;" class="mx-5">
                                    <v-col cols="12" class="ma-0 pa-0">
                                        <v-simple-table>
                                            <template v-slot:default>
                                                <thead style="  background-color: #ff5722; border-top: 0px;">
                                                    <tr>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px;"
                                                            class="text-center white--text">
                                                            <h2> Código de referencia </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Descripción del ensayo </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Unidades </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Técnica analítica </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Método analítico </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Limite de cuantificación </h2>
                                                        </th>
                                                        <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                            class="text-center white--text">
                                                            <h2> Costo del ensayo </h2>
                                                        </th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px;">
                                                            a
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            b
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            c
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            d
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            e
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            f
                                                        </td>
                                                        <td
                                                            style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                            g
                                                        </td>
                                                    </tr>
                                                    <tr>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                                        </td>
                                                        <td style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px;"
                                                            class="text-right white--text">
                                                            <h2> Costo del ítem 3 </h2>
                                                        </td>
                                                        <td style=" border: solid 1px; border-color: black; border-left:0px;"
                                                            class="pa-0 ma-0">
                                                            <v-text-field class="pa-0 ma-0" type="number" full-width
                                                                hide-details>
                                                            </v-text-field>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-right:0px; border-bottom: 0px; border-top: 0px;">

                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border-bottom: 0px; border-top: 0px;">

                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border-bottom: 0px; border-top: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border-bottom: 0px; border-top: 0px;">

                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border-bottom: 0px; border-top: 0px;">

                                                        </td>
                                                        <td style="background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px;"
                                                            class="text-right white--text">
                                                            <h2> Subtotal </h2>
                                                        </td>
                                                        <td style=" border: solid 1px; border-color: black; border-left:0px; border-top: 0px;"
                                                            class="pa-0 ma-0">
                                                            <v-text-field class="pa-0 ma-0" type="number" full-width
                                                                hide-details>
                                                            </v-text-field>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-right:0px; border-bottom: 0px; border-top: 0px;">

                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border-bottom: 0px; border-top: 0px;">

                                                        </td>
                                                        <td style="background-color: #ff5722; border-bottom: 0px; border-top: 0px;"
                                                            class="text-center white--text">
                                                            <h2>Observaciones de la propuesta técnica y económica</h2>
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border-bottom: 0px; border-top: 0px;">

                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border-bottom: 0px; border-top: 0px;">

                                                        </td>
                                                        <td style="background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px;"
                                                            class="text-right white--text">
                                                            <h2> IVA </h2>
                                                        </td>
                                                        <td style=" border: solid 1px; border-color: black; border-left:0px; border-top: 0px;"
                                                            class="pa-0 ma-0">
                                                            <v-text-field class="pa-0 ma-0" type="number" full-width
                                                                hide-details>
                                                            </v-text-field>
                                                        </td>
                                                    </tr>

                                                    <tr>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-right: 0px; border-top: 0px;">

                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px; border-top: 0px;">

                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px; border-top: 0px;">
                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px; border-top: 0px;">

                                                        </td>
                                                        <td
                                                            style="background-color: #ff5722; border: solid 1px; border-color: black; border-left:0px; border-right: 0px; border-top: 0px;">

                                                        </td>
                                                        <td style="background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px;"
                                                            class="text-right white--text">
                                                            <h2> Total </h2>
                                                        </td>
                                                        <td style=" border: solid 1px; border-color: black; border-left:0px; border-top: 0px;"
                                                            class="pa-0 ma-0">
                                                            <v-text-field class="pa-0 ma-0" type="number" full-width
                                                                hide-details>
                                                            </v-text-field>
                                                        </td>
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
                                        @click="activar(cotizacion._id)">
                                        Activo
                                    </v-btn>
                                    <v-btn color="error" v-if="cotizacion.estado === 0" rounded
                                        @click="desactivar(cotizacion._id)">
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

                <v-dialog v-model="dialog2" max-width="800px">
                    <v-card>
                        <v-card-title>
                            Seleccione el cliente
                        </v-card-title>
                        <v-card-text>
                            <v-select :items="cotizaciones" label="Seleccione un cliente" item-value="text"></v-select>
                        </v-card-text>
                        <v-card-actions>
                            <v-btn color="red" text @click="dialog2 = false" dark>
                                Cerrar
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                </v-dialog>
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
            dialog2: false,
            notifications: false,
            sound: true,
            widgets: false,
            calidadOferta: [],
            datos: [],
            numerocoti: 0,
            numeroactual: ""
        };
    },
    methods: {
        Volver() {
            this.$router.push("/");
        },
        listar() {
            axios.get(`/cotizacion/listarTodasLasCotizaciones`)
                .then((response) => {
                    this.cotizaciones = response.data.coti;
                    this.numerocoti = this.cotizaciones[0].numero_cotizacion
                    const division = Number(this.numerocoti.split("")[this.numerocoti.length - 8])
                    const sumar = division + 1
                    const cambio = this.numerocoti.replace(division, sumar)
                    this.numeroactual = cambio
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
            let header = { headers: { "token": this.$store.state.token } };
            axios.put(`/cotizacion/activar/${id}`, {}, header)
                .then((response) => {
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
            let header = { headers: { "token": this.$store.state.token } };
            axios.put(`/cotizacion/desactivar/${id}`, {}, header)
                .then((response) => {
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
        calidad() {
            axios.get("/calidad/listar")
                .then((response) => {
                    this.calidadOferta = response.data.listado[0].OfertaServicios
                    console.log(this.calidadOferta);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        info() {
            axios.get("/cotizacion/traerInfo")
                .then((response) => {
                    this.datos = response.data.info
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        usuarios() {
            let header = { headers: { "token": this.$store.state.token } };
            axios.get(`/usuarios`,{},header)
                .then((response) => {
                    console.log(response);
                })
                .catch((error) => {
                    console.log(error);
                });
        }
        // buscar(){
        //     this.$router.push("/search")
        //     this.$store.state.titulo=this.titulo
        // }
    },
    created() {
        this.listar();
        this.calidad();
        this.info();
        this.usuarios();
    },
};
</script>
