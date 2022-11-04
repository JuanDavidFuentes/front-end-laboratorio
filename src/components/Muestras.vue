<template>
    <v-container style="margin-top: 100px">
        <v-row style="margin:0">
            <v-col cols="12" xs="12" sm="12" md="4" lg="10" xl="10">
                <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver()">
                    Volver
                </v-btn>
            </v-col>
            <v-col class="text-left" cols="12" xs="12" sm="12" md="4" lg="2" xl="2">
                <v-btn class="mt-n3" color="deep-orange" dark @click="pagmuestras()">
                    Crear Muestra
                </v-btn>

            </v-col>


            <v-col cols="12">
                <template>
                    <v-card>
                        <v-card-title>
                            Clientes
                            <v-spacer></v-spacer>
                            <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" single-line
                                hide-details></v-text-field>
                        </v-card-title>
                        <v-data-table :headers="headers" :items="clientes" :search="search">
                            <template v-slot:[`item.muestras`]="{ item }">
                                <v-btn @click="pagmuestras(item.idCliente)">Muestras</v-btn>
                            </template>
                        </v-data-table>
                    </v-card>
                </template>
            </v-col>
        </v-row>
        <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
            <!-- <template v-slot:activator="{ on, attrs }">
                <v-btn color="deep-orange" dark v-bind="attrs" v-on="on" class="center">
                  Crear Muestra
                </v-btn> 
              </template> -->
            <v-card>
                <v-toolbar dark>
                    <v-btn icon dark @click="dialog = false">
                        <v-icon>mdi-close</v-icon>
                    </v-btn>
                    <v-toolbar-title>Crear Muestra</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-toolbar-items>
                        <v-btn dark text @click="dialog = false"> Guardar </v-btn>
                    </v-toolbar-items>
                </v-toolbar>
                <v-list three-line subheader>
                    <v-container fluid>
                        <v-row style="margin: 0">
                            <v-col cols="12" xs="12" sm="12" md="2" lg="2" xl="2" class="text-left">
                                <img height="200" width="200"
                                    src="https://agenciapublicadeempleo.sena.edu.co/imgLayout/logos/LogoSENA-naranja_vector.png" />
                            </v-col>
                            <v-col cols="12" xs="12" sm="12" md="10" lg="10" xl="10">
                                <v-row>
                                    <v-col cols="10">
                                        <div class="text-center black--text">
                                            <h3>RECEPCIÓN DE MUESTRAS</h3>
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="10">
                                        <div class="text-center black--text mt-2">
                                            <h3>CENTRO AGROTURISTICO - SAN GIL, SANTANDER</h3>
                                            <h3>LABORATORIO LABFICAT</h3>
                                            <br />
                                        </div>
                                    </v-col>
                                </v-row>
                                <v-row>
                                    <v-col cols="3">
                                        <div class="text-center black--text mt-2">
                                            <h3>CÓDIGO:</h3>
                                            <h3>CAT-ST-MI-002</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="4">
                                        <div class="text-center black--text mt-2">
                                            <h3>APROBACIÓN:</h3>
                                            <h3>2022-04-01</h3>
                                        </div>
                                    </v-col>
                                    <v-col cols="5">
                                        <div class="text-center black--text mt-2">
                                            <h3>VERSIÓN:</h3>
                                            <h3>2</h3>
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-subheader></v-subheader>
                </v-list>
                <v-divider></v-divider>
                <v-list three-line subheader>
                    <v-container fluid>
                        <v-row style=" margin: 0; border: solid 1px; border-color: black; background-color: #ff5722"
                            class="mx-5">
                            <v-col>
                                <div class="text-center white--text text-no-wrap deep-orange">
                                    <h3>Datos del solicitante</h3>
                                </div>
                            </v-col>
                        </v-row>
                        <v-row style="margin: 0" class="mx-5">
                            <v-col
                                style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                <div class="text-center white--text text-no-wrap deep-orange">
                                    <h3>Solicitante</h3>
                                </div>
                            </v-col>
                            <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                class="pa-0 ma-0 text-center">
                                <h3 class="mt-1">
                                    <v-btn color="deep-orange" dark class="ma-2">Elegir solicitante</v-btn>
                                </h3>
                            </v-col>
                            <v-col
                                style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                <div class="text-center white--text text-no-wrap deep-orange">
                                    <h3>Departamento</h3>
                                </div>
                            </v-col>
                            <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                class="pa-0 ma-0 text-center">
                                <h3 class="mt-3">{{ soliDepartamento }}</h3>
                            </v-col>
                        </v-row>
                        <v-row style="margin: 0" class="mx-5">
                            <v-col
                                style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                <div class="text-center white--text text-no-wrap deep-orange">
                                    <h3>NIT/C.C.</h3>
                                </div>
                            </v-col>
                            <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                class="pa-0 ma-0 text-center">
                                <h3 class="mt-3">{{ soliDocumento }}</h3>
                            </v-col>
                            <v-col
                                style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                <div class="text-center white--text text-no-wrap deep-orange">
                                    <h3>Contacto</h3>
                                </div>
                            </v-col>
                            <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                class="pa-0 ma-0 text-center">
                                <h3 class="mt-3">{{ soliNombreContacto }}</h3>
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
                                class="pa-0 ma-0 text-center">
                                <h3 class="mt-3">{{ soliDireccion }}</h3>
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
                                class="pa-0 ma-0 text-center">
                                <h3 class="mt-3">{{ soliTelefono }}</h3>
                            </v-col>
                        </v-row>
                        <v-row style="margin: 0" class="mx-5">
                            <v-col
                                style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                <div class="text-center white--text text-no-wrap deep-orange">
                                    <h3>Ciudad</h3>
                                </div>
                            </v-col>
                            <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                class="pa-0 ma-0 text-center">
                                <h3 class="mt-3">{{ soliCiudad }}</h3>
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
                                class="pa-0 ma-0 text-center">
                                <h3 class="mt-3">{{ soliEmail }}</h3>
                            </v-col>
                        </v-row>
                        <v-row style="margin: 0" class="mx-5">
                            <v-col
                                style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                <div class="text-center white--text text-no-wrap deep-orange mt-4">
                                    <h3>Cotización</h3>
                                </div>
                            </v-col>
                            <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                class="pa-0 ma-0 text-center">
                                <h3 class="mt-3">
                                <v-autocomplete v-model="idCoti" :items="cotizaciones" :filter="customFilter2" filled rounded dense
                                    item-text="numero_cotizacion" item-value="_id" label="Seleccione cotización">
                                </v-autocomplete>
                                </h3>
                            </v-col>
                            <v-col
                                style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                <div class="text-center white--text text-no-wrap deep-orange mt-4">
                                    <h3>Items</h3>
                                </div>
                            </v-col>
                            <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                class="pa-0 ma-0 text-center">
                                <h3 class="mt-3"><v-select v-model="item" filled rounded dense label="Items" :items="seleccionarItem" item-text="items"></v-select></h3>
                            </v-col>
                        </v-row>

                        <v-row class="mx-5"
                            style=" margin: 0; border: solid 1px; border-color: black; background-color: #ff5722; border-top: 0px;">
                            <v-col cols="12" xs="0" sm="4" md="4" lg="4" xl="4">
                            </v-col>
                            <v-col cols="12" xs="8" sm="4" md="4" lg="4" xl="4">
                                <div class="text-center white--text text-no-wrap deep-orange">
                                    <h3>Datos de la muestra</h3>
                                </div>
                            </v-col>
                            <v-col class="text-right" cols="12" xs="4" sm="4" md="4" lg="4" xl="4">
                                <v-tooltip bottom>
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-btn color="white" class="ma-2" dark @click="dialog2 = true">
                                            <v-icon color="deep-orange" rounded v-bind="attrs" v-on="on">
                                                mdi-plus-circle
                                            </v-icon>
                                        </v-btn>
                                    </template>
                                    <span>Añadir ítem</span>
                                </v-tooltip>
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
                                                    <h2> Código de </h2>
                                                    <h2> muestra </h2>
                                                </th>
                                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                    class="text-center white--text">
                                                    <h2> Municipio de </h2>
                                                    <h2> recolección </h2>
                                                </th>
                                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                    class="text-center white--text">
                                                    <h2> Dirección de toma </h2>
                                                    <h2> de muestra </h2>
                                                </th>
                                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                    class="text-center white--text">
                                                    <h2> Lugar de toma de </h2>
                                                    <h2> muestra </h2>
                                                </th>
                                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                    class="text-center white--text">
                                                    <h2> Muestra </h2>
                                                    <h2> recolectada por </h2>
                                                </th>
                                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                    class="text-center white--text">
                                                    <h2> Procedimiento </h2>
                                                    <h2> de </h2>
                                                </th>
                                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                    class="text-center white--text">
                                                    <h2> Tipo de muestra</h2>
                                                    <v-tooltip bottom>
                                                        <template v-slot:activator="{ on, attrs }">
                                                            <v-btn color="white" class="ma-2" dark
                                                                @click="dialog3 = true">
                                                                <v-icon color="deep-orange" rounded v-bind="attrs"
                                                                    v-on="on">
                                                                    mdi-plus-circle
                                                                </v-icon>
                                                            </v-btn>
                                                        </template>
                                                        <span>Añadir tipo de la muestra</span>
                                                    </v-tooltip>
                                                </th>
                                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                    class="text-center white--text">
                                                    <h2> Matriz de la </h2>
                                                    <h2> muestra </h2>
                                                </th>
                                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                    class="text-center white--text">
                                                    <h2> Fecha y hora de </h2>
                                                    <h2> recolección </h2>
                                                </th>
                                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                    class="text-center white--text">
                                                    <h2> Cotización </h2>
                                                </th>
                                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                    class="text-center white--text">
                                                    <h2> Ítem de </h2>
                                                    <h2> la </h2>
                                                </th>
                                                <th style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                                    class="text-center white--text">
                                                    <h2> Observaciones </h2>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr v-if="mostrasDatos <= 0">
                                                <td style="border: solid 1px; border-color: black; border-top: 0px;">

                                                </td>
                                                <td
                                                    style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">

                                                </td>
                                                <td
                                                    style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">

                                                </td>
                                                <td
                                                    style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">

                                                </td>
                                                <td
                                                    style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">

                                                </td>
                                                <td
                                                    style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">

                                                </td>
                                                <td
                                                    style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">

                                                </td>
                                                <td
                                                    style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">

                                                </td>
                                                <td
                                                    style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">

                                                </td>
                                                <td
                                                    style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">

                                                </td>
                                                <td
                                                    style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">

                                                </td>
                                                <td
                                                    style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">

                                                </td>
                                            </tr>
                                            <tr v-for="(datosss, i ) in mostrasDatos" :key="i">
                                                <td
                                                    style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px;">
                                                    <h3>{{ datosss.codMuestra }}</h3>
                                                </td>
                                                <td
                                                    style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                    <h3>{{ datosss.munRecoleccion }}</h3>
                                                </td>
                                                <td
                                                    style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                    <h3>{{ datosss.direccionTomaMuestra }}</h3>
                                                </td>
                                                <td
                                                    style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                    <h3>{{ datosss.lugarTomaMuestra }}</h3>
                                                </td>
                                                <td
                                                    style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                    <h3>{{ datosss.muestraRecolectadaPor }}</h3>
                                                </td>
                                                <td
                                                    style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                    <h3>{{ datosss.procedimientoMuestreo }}</h3>
                                                </td>
                                                <td
                                                    style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                    <h3>{{ datosss.tipoMuestra }}</h3>
                                                </td>
                                                <td
                                                    style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                    <h3>{{ datosss.matrizMuestra }}</h3>
                                                </td>
                                                <td
                                                    style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                    <h3>{{ datosss.fechaRecoleccion }}</h3>
                                                </td>
                                                <td
                                                    style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                    <h3>{{ datosss.cotizacion }}</h3>
                                                </td>
                                                <td
                                                    style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                    <h3>{{ datosss.item }}</h3>
                                                </td>
                                                <td
                                                    style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">
                                                    <v-icon dark class="mr-20" color="red" rounded
                                                        @click="eliminarMuestra(i, datosss)">
                                                        mdi-close-circle
                                                    </v-icon>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </template>
                                </v-simple-table>
                            </v-col>
                        </v-row>
                    </v-container>
                </v-list>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialog3" max-width="500px">
            <v-card>
                <v-card-title class="text-h5">
                    <span>Añadir tipo muestra</span>
                </v-card-title>
                <v-col cols="12">
                    <v-text-field v-model="agregaTipoM" label="Tipo muestra" filled rounded dense></v-text-field>
                </v-col>
                <v-card-actions>
                    <v-btn color="primary" text @click="guardar2()">
                        Agregar
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-dialog v-model="dialog2" max-width="500px">
            <v-card class="">
                <v-card-title class="text-h5">
                    Datos de la muestra
                </v-card-title>
                <v-col cols="12">
                    <v-autocomplete v-model="seleccionadoCiudad" :items="Municipio" item-text="ciudad" item-value="_id"
                        filled rounded dense label="Municipio de recolección"></v-autocomplete>
                    <v-text-field v-model="direccionM" label="Dirección de toma de muestra*" filled rounded dense>
                    </v-text-field>
                    <v-text-field v-model="lugarM" label="Lugar de toma de muestra*" filled rounded dense>
                    </v-text-field>
                    <v-text-field v-model="recolectadaPor" label="Muestra recolectada por*" filled rounded dense>
                    </v-text-field>
                    <v-text-field v-model="procedimiento" label="Procedimiento de*" filled rounded dense>
                    </v-text-field>
                    <v-autocomplete v-model="tipoM" :items="listarTipos" item-text="tipos" item-value="_id" filled
                        rounded dense label="Tipo de muestra" @click="listarTiposs()"></v-autocomplete>
                    <v-text-field v-model="matrizM" label="Matriz de la muestra*" filled rounded dense>
                    </v-text-field>
                    <v-text-field v-model="fecha" type="date" label="Fecha y hora de recolección*" filled rounded dense>
                    </v-text-field>

                    <!-- <v-text-field v-model="observacion" label="Observaciones" filled rounded dense></v-text-field> -->
                </v-col>
                <v-card-actions class="mt-n7">
                    <v-btn color="success" @click="Guardar()">
                        Añadir datos
                    </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>
    
<script>
import axios from "axios";
export default {
    name: 'PageMuestras',
    data: () => ({
        search: '',
        dialog: false,
        dialog2: false,
        dialog3: false,
        dialog4: false,
        soliNombre: '',
        soliApellido: '',
        soliDepartamento: '',
        soliDocumento: '',
        soliNombreContacto: '',
        soliDireccion: '',
        soliTelefono: '',
        soliCiudad: '',
        soliEmail: '',
        clientes: [],
        datos2: [],
        loading: false,
        selection: 1,
        direccionM: "",
        lugarM: "",
        recolectadaPor: "",
        procedimiento: "",
        tipoM: "",
        matrizM: "",
        fecha: "",
        cotizacion: "",
        item: "",
        agregaTipoM: "",
        numeroactual: "",
        numerocoti: 0,
        cotizacion2: [],
        infoItem2: [],
        idCoti: "",
        itemsCoti: [],
        infoMuestraa: [],
        seleccionarItem: [],
        listarTipos: [],
        mostrasDatos: [],
        mostrasDatoss: [],
        seleccionadoCiudad: "",
        infoMuestras: [],
        Municipio: [],
        cotizaciones: [],
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
        customFilter2(item, queryText) {
            const textOne = item.numero_cotizacion
            const searchText = queryText
            return textOne.indexOf(searchText) > -1
        },
        Volver() {
            this.$router.push("/Home");
        },
        usuarios() {
            axios.get(`/cotizacion/listarTodasLasCotizaciones`)
                .then((response) => {
                    console.log(response);
                    this.clientes = response.data.coti
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        listarCotizacioness() {
            let header = { headers: { "token": this.$store.state.token } }
            axios.get(`/cotizacion/listarTodasLasCotizaciones`, header)
                .then((response) => {
                    this.cotizaciones = response.data.coti
                })
                .catch((error) => {
                    console.log(error);
                });

        },

        pagmuestras() {
            // console.log(datos);
            // this.datos = datos
            // if (datos.contacto) {
            //     this.soliNombre = datos.nombre
            //     this.soliApellido = datos.apellidos
            //     this.soliDepartamento = datos.ciudad.departamento
            //     this.soliDocumento = datos.documento
            //     this.soliNombreContacto = datos.contacto.nombre
            //     this.soliDireccion = datos.direccion
            //     this.soliTelefono = datos.celular
            //     this.soliCiudad = datos.ciudad.ciudad
            //     this.soliEmail = datos.email
            //     this.traerCotizacion()
            //     this.info()
            // } else {
            //     this.soliNombre = datos.nombre
            //     this.soliApellido = datos.apellidos
            //     this.soliDepartamento = datos.ciudad.departamento
            //     this.soliDocumento = datos.documento
            //     this.soliDireccion = datos.direccion
            //     this.soliTelefono = datos.celular
            //     this.soliCiudad = datos.ciudad.ciudad
            //     this.soliEmail = datos.email
            //     this.traerCotizacion()
            //     this.info()
            // }
            this.dialog = true
        },
        traerCotizacion() {
            console.log(this.datos);
            let header = { headers: { "token": this.$store.state.token } }
            axios.get(`cotizacion/buscarNombre/${this.datos._id}`, header)
                .then(response => {
                    this.cotizacion2 = response.data.coti[0]
                    this.idCoti = this.cotizacion2._id
                    this.listarItems();
                })
                .catch(error => {
                    console.log(error);
                })
        },
        infoMuestraa1() {
            this.infoMuestraa.push()
        },
        eliminarMuestra(index) {
            this.mostrasDatos.splice(index, 1)
        },
        reserve() {
            this.loading = true;
        },
        listar() {
            axios.get(`/DMuestra/listarMuestras`)
                .then((response) => {
                    this.infoMuestras = response.data.muestras;
                    this.mostrasDatoss = response.data.muestras
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        listarCiudad() {
            axios.get("/ciudad/CiudadDepartamento")
                .then(response => {
                    response.data.ciudad.forEach(city => {
                        this.Municipio.push(city)
                    })

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
        Guardar() {
            let header = { headers: { "token": this.$store.state.token } }
            axios.post(`/DMuestra/insertar`, {
                solicitante: this.datos._id,
                munRecoleccion: this.seleccionadoCiudad,
                direccionTomaMuestra: this.direccionM,
                lugarTomaMuestra: this.lugarM,
                muestraRecolectadaPor: this.recolectadaPor,
                procedimientoMuestreo: this.procedimiento,
                tipoMuestra: this.tipoM,
                matrizMuestra: this.matrizM,
                fechaRecoleccion: this.fecha,
                cotizacion: this.idCoti,
                item: this.item,

            }, header)
                .then((response) => {
                    this.$swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: response.data.msg,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    this.mostrasDatos.push(response.data.coti)
                    this.seleccionadoCiudad = ""
                    this.direccionM = ""
                    this.lugarM = ""
                    this.recolectadaPor = ""
                    this.procedimiento = ""
                    this.tipoM = ""
                    this.matrizM = ""
                    this.cotizacion = ""
                    this.item = ""
                    this.dialog2 = false


                })
                .catch((error) => {
                    console.log(error);
                    this.$swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: error.response.data.errores.errors[0].msg,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                });

        },
        guardar2() {
            axios.post(`/Tipo_muestra/`, {
                tipos: this.agregaTipoM,
            })
                .then((response) => {
                    this.$swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: response.data.msg,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    this.dialog3 = false
                })
                .catch((error) => {
                    console.log(error);
                    this.$swal.fire({
                        position: "top-end",
                        icon: "error",
                        title: error.response.data.errores.errors[0].msg,
                        showConfirmButton: false,
                        timer: 1500,
                    });
                });
        },
        info() {
            axios.get("/cotizacion/traerInfo")
                .then((response) => {
                    this.datos2 = response.data.info
                    this.numerocoti = this.datos2[0].codMuestra
                    let date = new Date();
                    let output = String(date.getFullYear());
                    if (this.numerocoti.toString().length === 1) {
                        this.numeroactual = `000${this.numerocoti + 1}-${output}`
                    } else if (this.numerocoti.toString().length === 2) {
                        this.numeroactual = `00${this.numerocoti + 1}-${output}`
                    } else if (this.numerocoti.toString().length === 3) {
                        this.numeroactual = `0${this.numerocoti + 1}-${output}`
                    } else if (this.numerocoti.toString().length === 4) {
                        this.numeroactual = `${this.numerocoti + 1}-${output}`
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        listarItems() {
            let header = { headers: { "token": this.$store.state.token } }
            axios.get(`/cotizacion/listarporIdCoti/${this.idCoti}`, header)
                .then((response) => {
                    this.seleccionarItem = response.data.items
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        listarTiposs() {
            axios.get(`/Tipo_muestra/`)
                .then((response) => {
                    this.listarTipos = response.data.tipo
                })
                .catch((error) => {
                    console.log(error);
                });

        },
    },
    created() {
        this.usuarios();
        this.listarCiudad();
        this.listarTiposs();
        this.listarCotizacioness();

    },
}
</script>