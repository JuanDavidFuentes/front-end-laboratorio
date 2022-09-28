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
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange">
                                            <h3>Cliente</h3>
                                        </div>
                                    </v-col>

                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0 text-center">
                                        <v-btn v-if="botones==1" color="deep-orange" dark class="my-3"
                                            @click="dialog2 = !dialog2">
                                            Elegir cliente
                                        </v-btn>
                                        <v-row style="margin:0">
                                            <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"></v-col>
                                            <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4">
                                                <div v-if="botones==0"
                                                    class="pa-0 ma-0 font-weight-black text-center my-3" full-width
                                                    hide-details>
                                                    {{nombre}}
                                                </div>
                                            </v-col>
                                            <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4" class="text-right">
                                                <v-tooltip v-if="botones==0" bottom>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-icon dark class="my-3" color="red" rounded v-bind="attrs" v-on="on"
                                                            @click="borrarclientes()">
                                                            mdi-close-circle
                                                        </v-icon>
                                                    </template>
                                                    <span>Eliminar los datos del cliente</span>
                                                </v-tooltip>
                                            </v-col>
                                        </v-row>
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
                                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width
                                            hide-details>
                                            {{documento}}
                                        </div>
                                    </v-col>
                                </v-row>


                                <v-row style="margin: 0" class="mx-5">
                                    <v-col
                                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                        <div class="text-center white--text text-no-wrap deep-orange ">
                                            <h3>Dirección</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                        class="pa-0 ma-0">
                                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width
                                            hide-details>
                                            {{direccion}}
                                        </div>
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
                                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width
                                            hide-details>
                                            {{ciudad.ciudad}}
                                        </div>
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
                                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width
                                            hide-details>
                                            {{ciudad.departamento}}
                                        </div>
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
                                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width
                                            hide-details>
                                            {{telefono}}
                                        </div>
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
                                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width
                                            hide-details>
                                            {{nombrecontacto}}
                                        </div>
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
                                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width
                                            hide-details>
                                            {{cargo}}
                                        </div>
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
                                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width
                                            hide-details>
                                            {{celular}}
                                        </div>
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
                                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width
                                            hide-details>
                                            {{email}}
                                        </div>
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
                                        <v-text-field class="mt-5" type="date" outlined dense> </v-text-field>
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
                                        <v-text-field class="mt-5" type="date" outlined dense> </v-text-field>
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
                                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width
                                            hide-details>
                                            {{recep.nombre}} {{recep.apellidos}}
                                        </div>
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
                                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width
                                            hide-details>
                                            {{recep.rol}}
                                        </div>
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
        <v-row style="margin: 0">
            <v-col cols="1"></v-col>
            <v-col cols="10">
                <template>
                    <v-card>
                        <v-card-title>
                            Buscar cotización
                            <v-spacer></v-spacer>
                            <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                                hide-details></v-text-field>
                        </v-card-title>
                        <v-data-table :headers="headers2" :items="cotizaciones" :search="search">
                            <template v-slot:[`item.fecha`]="{item}">
                                {{fechaSalida(item.fecha_emision)}}
                            </template>
                            <template v-slot:[`item.opciones`]="{item}">
                                <template v-if="item.estado===1">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-icon color="error" rounded v-bind="attrs" v-on="on"
                                                @click="activar(item._id)">
                                                mdi-calendar-remove
                                            </v-icon>
                                        </template>
                                        <span>Desactivar</span>
                                    </v-tooltip>
                                </template>
                                <template v-else>
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-icon color="success" rounded v-bind="attrs" v-on="on"
                                                @click="desactivar(item._id)">
                                                mdi-calendar-plus
                                            </v-icon>
                                        </template>
                                        <span>Activar</span>
                                    </v-tooltip>
                                </template>
                                <template>
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-icon class="ml-3" color="blue" rounded v-bind="attrs" v-on="on">
                                                mdi-pencil
                                            </v-icon>
                                        </template>
                                        <span>Editar</span>
                                    </v-tooltip>
                                </template>
                            </template>
                            <template v-slot:[`item.estado`]="{item}">
                                <span class="green--text" v-if="item.estado===1">Activo</span>
                                <span class="red--text" v-else>Inactivo</span>
                            </template>
                        </v-data-table>
                    </v-card>
                </template>

                <v-dialog v-model="dialog2" max-width="1000px">
                    <v-card>
                        <template>
                            <v-card>
                                <v-card-title>
                                    Seleccione un cliente
                                    <v-spacer></v-spacer>
                                    <v-text-field v-model="search" append-icon="mdi-magnify" label="Search" single-line
                                        hide-details></v-text-field>
                                </v-card-title>
                                <v-data-table :headers="headers" :items="clientes" :search="search">
                                    <template v-slot:[`item.agregar`]="{item}">
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-icon color="green" rounded v-bind="attrs" v-on="on"
                                                    @click="seleccionarclientes(item)">
                                                    mdi-plus-circle
                                                </v-icon>
                                            </template>
                                            <span>Añadir cliente</span>
                                        </v-tooltip>
                                    </template>
                                </v-data-table>
                            </v-card>
                        </template>
                        <div class="text-center mt-3">
                            <h2>¿ Desea crear un nuevo cliente ?</h2>
                        </div>
                        <v-card-actions>
                            <v-row style="margin:0">
                                <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4">
                                    <v-btn color="green" rounded dark @click="aceptar()">
                                        Crear
                                    </v-btn>
                                </v-col>
                                <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4" class="text-right">
                                </v-col>
                                <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4" class="text-right">
                                    <v-btn color="red" @click="dialog2 = false" rounded dark>
                                        Cerrar
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card-actions>
                    </v-card>
                </v-dialog>


                <v-dialog v-model="dialog3" fullscreen hide-overlay transition="dialog-bottom-transition">
                    <v-card>
                        <v-toolbar dark>
                            <v-btn icon dark @click="dialog3 = false">
                                <v-icon>mdi-close</v-icon>
                            </v-btn>
                            <v-toolbar-title>Crear nuevo cliente</v-toolbar-title>
                            <v-spacer></v-spacer>
                            <v-toolbar-items>
                                <v-btn dark text @click="dialog3 = false">
                                    <v-icon> mdi-plus-circle-outline </v-icon>Guardar
                                </v-btn>
                            </v-toolbar-items>
                        </v-toolbar>

                        <div v-if="si===2">
                            <v-row style="margin:0">
                                <v-col cols="12" xs="0" sm="0" md="2" lg="2" xl="2"></v-col>
                                <v-col class="text-center" cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
                                    <h1>Ingrese los datos del contacto del cliente</h1>
                                </v-col>
                                <v-col cols="12" xs="0" sm="0" md="2" lg="2" xl="2"></v-col>
                            </v-row>
                            <v-row>
                                <v-col cols="12" xs="0" sm="0" md="2" lg="2" xl="2"> </v-col>
                                <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8" class="items-center">
                                    <br><br>
                                    <div>
                                        <span class="text-center display-1 black--text font-weight-Normal">
                                            Tipo de persona:
                                        </span>
                                        <span>
                                            <v-text-field v-model="tipoPersona" label="Tipo de persona" type="text">
                                            </v-text-field>
                                        </span>
                                    </div>
                                    <div>
                                        <span class="text-center display-1 black--text font-weight-Normal">
                                            Nombres:
                                        </span>
                                        <span>
                                            <v-text-field v-model="nombre" label="Nombres" type="text">
                                            </v-text-field>
                                        </span>
                                    </div>
                                    <div>
                                        <span class="text-center display-1  black--text font-weight-Normal">
                                            Apellidos:
                                        </span>
                                        <span>
                                            <v-text-field v-model="apellidos" label="Apellidos" type="text">
                                            </v-text-field>
                                        </span>
                                    </div>
                                    <div>
                                        <span class="text-center display-1 black--text font-weight-Normal">
                                            Documento:
                                        </span>
                                        <span>
                                            <v-text-field v-model="documento" label="Documento" type="text">
                                            </v-text-field>
                                        </span>
                                    </div>
                                    <div>
                                        <span class="text-center display-1 black--text font-weight-Normal">
                                            Dirección:
                                        </span>
                                        <span>
                                            <v-text-field v-model="direccion" label="Dirección" type="text">
                                            </v-text-field>
                                        </span>
                                    </div>
                                    <div>
                                        <span class="text-center display-1 black--text font-weight-Normal">
                                            Ciudad:
                                        </span>
                                        <span>
                                            <v-text-field v-model="ciudad" label="Ciudad" type="text">
                                            </v-text-field>
                                        </span>
                                    </div>
                                    <div>
                                        <span class="text-center display-1 black--text font-weight-Normal">
                                            Celular:
                                        </span>
                                        <span>
                                            <v-text-field v-model="celular" label="Telefono" type="text">
                                            </v-text-field>
                                        </span>
                                    </div>
                                    <div>
                                        <span class="text-center display-1 black--text font-weight-Normal">
                                            Correo:
                                        </span>
                                        <span>
                                            <v-text-field v-model="email" label="Correo" type="text">
                                            </v-text-field>
                                        </span>
                                    </div>
                                </v-col>
                            </v-row>
                            <v-card-actions>
                                <v-row style="margin:0">
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4">
                                        <v-btn color="green" @click="crearContacto()" rounded dark>
                                            Crear
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4" class="text-right">
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4" class="text-right">
                                        <v-btn color="red" @click="dialog3 = false" rounded dark>
                                            Cancelar
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-card-actions>
                        </div>

                        <div v-if="si===0">
                            <v-row style="margin:0">
                                <v-col cols="12" xs="0" sm="0" md="2" lg="2" xl="2"></v-col>
                                <v-col class="text-center" cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
                                    <h1>Ingresar los datos del cliente</h1>
                                </v-col>
                                <v-col cols="12" xs="0" sm="0" md="2" lg="2" xl="2"></v-col>
                            </v-row>

                            <v-row>
                                <v-col cols="12" xs="0" sm="0" md="2" lg="2" xl="2"> </v-col>
                                <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8" class="items-center">
                                    <br><br>
                                    <div>
                                        <span class="text-center display-1 black--text font-weight-Normal">
                                            Tipo de persona:
                                        </span>
                                        <span>
                                            <v-text-field v-model="tipoPersona" label="Tipo de persona" type="text">
                                            </v-text-field>
                                        </span>
                                    </div>
                                    <div>
                                        <span class="text-center display-1 black--text font-weight-Normal">
                                            Nombres:
                                        </span>
                                        <span>
                                            <v-text-field v-model="nombre" label="Nombres" type="text">
                                            </v-text-field>
                                        </span>
                                    </div>
                                    <div>
                                        <span class="text-center display-1  black--text font-weight-Normal">
                                            Apellidos:
                                        </span>
                                        <span>
                                            <v-text-field v-model="apellidos" label="Apellidos" type="text">
                                            </v-text-field>
                                        </span>
                                    </div>
                                    <div>
                                        <span class="text-center display-1 black--text font-weight-Normal">
                                            Documento:
                                        </span>
                                        <span>
                                            <v-text-field v-model="documento" label="Documento" type="text">
                                            </v-text-field>
                                        </span>
                                    </div>
                                    <div>
                                        <span class="text-center display-1 black--text font-weight-Normal">
                                            Contacto:
                                        </span>
                                        <span>
                                            <v-text-field v-model="contacto" label="Contacto" type="text">
                                            </v-text-field>
                                        </span>
                                    </div>
                                    <div>
                                        <span class="text-center display-1 black--text font-weight-Normal">
                                            Dirección:
                                        </span>
                                        <span>
                                            <v-text-field v-model="direccion" label="Dirección" type="text">
                                            </v-text-field>
                                        </span>
                                    </div>
                                    <div>
                                        <span class="text-center display-1 black--text font-weight-Normal">
                                            Ciudad:
                                        </span>
                                        <span>
                                            <v-text-field v-model="ciudad" label="Ciudad" type="text">
                                            </v-text-field>
                                        </span>
                                    </div>
                                    <div>
                                        <span class="text-center display-1 black--text font-weight-Normal">
                                            Telefono:
                                        </span>
                                        <span>
                                            <v-text-field v-model="telefono" label="Telefono" type="text">
                                            </v-text-field>
                                        </span>
                                    </div>
                                    <div>
                                        <span class="text-center display-1 black--text font-weight-Normal">
                                            Correo:
                                        </span>
                                        <span>
                                            <v-text-field v-model="email" label="Correo" type="text">
                                            </v-text-field>
                                        </span>
                                    </div>
                                </v-col>
                            </v-row>
                            <v-card-actions>
                                <v-row style="margin:0">
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4">
                                        <v-btn color="green" rounded dark>
                                            Crear
                                        </v-btn>
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4" class="text-right">
                                    </v-col>
                                    <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4" class="text-right">
                                        <v-btn color="red" @click="dialog3 = false" rounded dark>
                                            Cancelar
                                        </v-btn>
                                    </v-col>
                                </v-row>
                            </v-card-actions>
                        </div>

                    </v-card>
                </v-dialog>
            </v-col>
            <v-col cols="1"></v-col>
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
            search: '',
            cotizaciones: [],
            dialog: false,
            dialog2: false,
            dialog3: false,
            notifications: false,
            sound: true,
            widgets: false,
            calidadOferta: [],
            datos: [],
            numerocoti: 0,
            numeroactual: "",
            clientes: [],
            nombrecontacto: "",
            clientesNombres: [],
            si: 1,
            botones: 1,

            tipoPersona: "",
            nombre: "",
            apellidos: "",
            contacto: "",
            documento: "",
            direccion: "",
            ciudad: "",
            telefono: "",
            email: "",
            celular: "",
            cargo: "",

            recep: {},

            headers: [
                {
                    text: 'Nombres',
                    align: 'start',
                    sortable: false,
                    value: "nombre",
                },
                {
                    text: 'Apellidos',
                    align: 'start',
                    sortable: false,
                    value: 'apellidos',
                },
                {
                    text: 'C.C. / NIT',
                    align: 'start',
                    sortable: false,
                    value: 'documento',
                },
                {
                    text: 'Tipo de persona',
                    align: 'start',
                    sortable: false,
                    value: 'email',
                },
                {
                    text: 'Correo',
                    align: 'start',
                    sortable: false,
                    value: 'email',
                },
                {
                    text: 'Añadir',
                    align: 'center',
                    sortable: false,
                    value: 'agregar',
                },
            ],
            headers2: [
                {
                    text: 'Codigo de cotización',
                    align: 'start',
                    sortable: false,
                    value: "numero_cotizacion",
                },
                {
                    text: 'Nombres del cliente',
                    align: 'start',
                    sortable: false,
                    value: 'idCliente.nombre',
                },
                {
                    text: 'Apellidos del cliente',
                    align: 'start',
                    sortable: false,
                    value: 'idCliente.apellidos',
                },
                {
                    text: 'C.C. / NIT',
                    align: 'start',
                    sortable: false,
                    value: 'idCliente.documento',
                },
                {
                    text: 'Fecha',
                    align: 'start',
                    sortable: false,
                    value: 'fecha',
                },
                {
                    text: 'Estado',
                    align: 'start',
                    sortable: false,
                    value: 'estado',
                },
                {
                    text: 'Opciones',
                    align: 'start',
                    sortable: false,
                    value: 'opciones',
                },
            ]
        };
    },
    methods: {
        fechaSalida(r) {
            let d = new Date(r);
            this.span = true
            return d.toLocaleDateString() + " - " + d.toLocaleTimeString();
        },
        Volver() {
            this.$router.push("/");
        },
        seleccionarclientes(cliente) {
            console.log(cliente);
            if (cliente.contacto) {
                this.tipoPersona = cliente.tipoPersona
                this.nombre = cliente.nombre
                this.apellidos = cliente.apellidos
                this.contacto = cliente.contacto
                this.nombrecontacto = cliente.contacto.nombre
                this.documento = cliente.documento
                this.direccion = cliente.direccion
                this.ciudad = cliente.ciudad
                this.telefono = cliente.telefono
                this.celular = cliente.celular
                this.cargo = cliente.cargo
                this.email = cliente.email
                this.dialog2 = false
                this.botones = 0
            } else {
                this.tipoPersona = cliente.tipoPersona
                this.nombre = cliente.nombre
                this.apellidos = cliente.apellidos
                this.contacto = ""
                this.nombrecontacto = ""
                this.documento = cliente.documento
                this.direccion = cliente.direccion
                this.ciudad = cliente.ciudad
                this.telefono = cliente.telefono
                this.celular = cliente.celular
                this.cargo = cliente.cargo
                this.email = cliente.email
                this.dialog2 = false
                this.botones = 0
            }

        },
        borrarclientes() {
            this.tipoPersona = ""
            this.nombre = ""
            this.apellidos = ""
            this.contacto = ""
            this.nombrecontacto = ""
            this.documento = ""
            this.direccion = ""
            this.ciudad = ""
            this.telefono = ""
            this.celular = ""
            this.cargo = ""
            this.email = ""
            this.dialog2 = false
            this.botones = 1
        },
        listar() {
            axios.get(`/cotizacion/listarTodasLasCotizaciones`)
                .then((response) => {
                    this.cotizaciones = response.data.coti;
                    this.numerocoti = this.cotizaciones[0].numero_cotizacion
                    const division = Number(this.numerocoti.split("")[this.numerocoti.length - 8])
                    const sumar = division + 1
                    const cambio = this.numerocoti.replace(division, sumar) // esta incompleto xd
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
            axios.get(`/usuarios/listarClientes`, header)
                .then((response) => {
                    response.data.usuarios.forEach(usuarios => {
                        this.clientes.push(usuarios)
                    })
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        crearContacto() {
            axios.post(`/usuarios/`, {
                tipoPersona:this.tipoPersona,
                nombre:this.nombre,
                apellidos:this.apellidos,
                documento:this.documento,
                direccion:this.direccion,
                ciudad:this.ciudad,
                celular:this.celular,
                email:this.email,
                password:this.documento,
                rol:"CONTACTO"
            })
                .then((response) => {
                    this.$swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: response.data.msg,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    this.si=0
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
        },
        aceptar() {
            this.$swal.fire({
                title: '¿ Desea ingresar los datos del contacto del cliente ?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    this.si = 2
                    this.dialog3 = !this.dialog3
                } else if (result.isDenied) {
                    this.dialog3 = !this.dialog3
                    this.si = 0
                }
            })
        },
        recepcionista() {
            this.recep = this.$store.state.datos
            console.log(this.$store.state.datos);
            // if("RECEPCIONISTA"==""){
            //         this.nombrer="usuarios.nombre"
            //         this.apellidor="usuarios.apellidos"
            //         this.rol="rusuarios.rol"
            // }
        },
    },
    created() {
        this.listar();
        this.calidad();
        this.info();
        this.usuarios();
        this.recepcionista();
    },
};
</script>
