<template>
    <v-container style="margin-top: 70px">
        <div v-if="this.$store.state.token">
            <v-row style="margin:0">
                <v-col cols="12" xs="12" sm="12" md="4" lg="10" xl="10">
                    <v-btn class="mt-n10" outlined color="red darken-3" @click="Volver()">
                        Volver
                    </v-btn>
                </v-col>
                <v-col class="text-left" cols="12" xs="12" sm="12" md="4" lg="2" xl="2">
                    <v-btn class="mt-n3" color="accent" dark @click="pagmuestras()">
                        Crear Muestra
                    </v-btn>
                </v-col>

                <v-col cols="12">
                    <template>
                        <v-card>
                            <v-card-title>
                                Muestras
                                <v-spacer></v-spacer>
                                <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar" single-line
                                    hide-details></v-text-field>
                            </v-card-title>
                            <v-data-table :headers="headers" :items="muestras" :search="search">
                                <!-- <template v-slot:[`item.muestras`]="{ item }">
                                <v-btn>Muestras</v-btn>
                            </template> -->
                                <!-- <template v-slot:[`item.ver`]="{ item }">
                                    <v-icon @click="Imprimir(item)">
                                        mdi-file-eye-outline
                                    </v-icon>
                                </template>
                                <template v-slot:[`item.fecha`]="{ item }">
                                    {{ fechaSalida(item.fechaRecoleccion) }}
                                </template> -->
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
                            <v-btn dark text @click="Guardar()"> Guardar </v-btn>
                        </v-toolbar-items>
                    </v-toolbar>
                    <v-list three-line subheader>
                        <v-container fluid>
                            <v-row style="margin: 0">
                                <v-col cols="12" xs="12" sm="12" md="2" lg="2" xl="2" class="text-center">
                                    <div class="accent mt-10" id="muestra"></div>
                                </v-col>

                                <v-col cols="12" xs="12" sm="12" md="10" lg="10" xl="10">
                                    <v-row>
                                        <v-col cols="12">
                                            <div class="text-center black--text">
                                                <h3>RECEPCIÓN DE MUESTRAS</h3>
                                            </div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="12">
                                            <div class="text-center black--text mt-2">
                                                <h3>CENTRO AGROTURISTICO - SAN GIL, SANTANDER</h3>
                                                <h3>LABORATORIO LABFICAT</h3>
                                                <br />
                                            </div>
                                        </v-col>
                                    </v-row>
                                    <v-row>
                                        <v-col cols="4">
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
                                        <v-col cols="4">
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
                            <v-row style=" margin: 0; border: solid 1px; border-color: black !important;"
                                class="mx-5 secondary">
                                <v-col>
                                    <div class="text-center white--text ">
                                        <h3>Datos del solicitante</h3>
                                    </div>
                                </v-col>
                            </v-row>
                            <v-row style="margin: 0" class="mx-5">
                                <v-col style="  border: solid 1px; border-color: black !important; border-top: 0px; "
                                    cols="12" xs="4" sm="4" md="2" lg="2" xl="2" class="secondary">
                                    <div class="text-center white--text">
                                        <h3>Solicitante</h3>
                                    </div>
                                </v-col>
                                <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                    style="border: solid 1px; border-color: black ; border-top: 0px; border-left: 0px;"
                                    class="pa-0 ma-0 text-center">
                                    <h3 class="mt-1">
                                        <v-btn color="secondary" v-if="botones == 1" dark class="ma-2"
                                            @click="dialog4 = true">Elegir
                                            solicitante</v-btn>
                                    </h3>
                                    <v-row style="margin:0">
                                        <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"></v-col>

                                        <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4">
                                            <div v-if="botones == 0"
                                                class="pa-0 ma-0 font-weight-black text-center my-3" full-width
                                                hide-details>
                                                {{ soliNombre }}
                                            </div>
                                        </v-col>
                                        <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4" class="text-right">
                                            <div>
                                                <v-tooltip v-if="botones === 0" bottom>
                                                    <template v-slot:activator="{ on, attrs }">
                                                        <v-icon dark class="my-3" color="secondary" rounded
                                                            v-bind="attrs" v-on="on" @click="borrarclientes()">
                                                            mdi-close-circle
                                                        </v-icon>
                                                    </template>
                                                    <span>Eliminar los datos del cliente</span>
                                                </v-tooltip>
                                            </div>
                                        </v-col>
                                    </v-row>
                                </v-col>
                                <v-col
                                    style="border: solid 1px; border-color: black !important; border-top: 0px; border-left: 0px;"
                                    cols="12" xs="4" sm="4" md="2" lg="2" xl="2" class="secondary">
                                    <div class="text-center white--text ">
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
                                <v-col style="border: solid 1px; border-color: black !important; border-top: 0px; "
                                    cols="12" xs="4" sm="4" md="2" lg="2" xl="2" class="secondary">
                                    <div class="text-center white--text">
                                        <h3>NIT/C.C.</h3>
                                    </div>
                                </v-col>
                                <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                    style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                    class="pa-0 ma-0 text-center">
                                    <h3 class="mt-3">{{ soliDocumento }}</h3>
                                </v-col>
                                <v-col
                                    style="border: solid 1px; border-color: black !important; border-top: 0px; border-left: 0px;"
                                    cols="12" xs="4" sm="4" md="2" lg="2" xl="2" class="secondary">
                                    <div class="text-center white--text">
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
                                <v-col class="secondary"
                                    style=" border: solid 1px; border-color: black !important; border-top: 0px; "
                                    cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                    <div class="text-center white--text">
                                        <h3>Dirección</h3>
                                    </div>
                                </v-col>
                                <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                    style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                    class="pa-0 ma-0 text-center">
                                    <h3 class="mt-3">{{ soliDireccion }}</h3>
                                </v-col>
                                <v-col class="secondary"
                                    style=" border: solid 1px; border-color: black !important; border-top: 0px; border-left: 0px;"
                                    cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                    <div class="text-center white--text">
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
                                <v-col class="secondary"
                                    style=" border: solid 1px; border-color: black !important; border-top: 0px; "
                                    cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                    <div class="text-center white--text">
                                        <h3>Ciudad</h3>
                                    </div>
                                </v-col>
                                <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                    style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                    class="pa-0 ma-0 text-center">
                                    <h3 class="mt-3">{{ soliCiudad }}</h3>
                                </v-col>
                                <v-col class="secondary"
                                    style="; border: solid 1px; border-color: black !important; border-top: 0px; border-left: 0px;"
                                    cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                    <div class="text-center white--text">
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
                                <v-col class="secondary"
                                    style="; border: solid 1px; border-color: black !important; border-top: 0px; "
                                    cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                    <div class="text-center white--text mt-4">
                                        <h3>Cotización</h3>
                                    </div>
                                </v-col>
                                <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                    style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                    class="pa-0 ma-0 text-center">
                                    <h3 class="mt-3">
                                        <v-autocomplete v-model="idCotiSeli" :items="cotizaciones"
                                            :filter="customFilter2" filled rounded dense item-text="numero_cotizacion"
                                            item-value="_id" label="Seleccione cotización" @change="listarItems()">
                                        </v-autocomplete>
                                    </h3>
                                </v-col>
                                <v-col class="secondary"
                                    style="; border: solid 1px; border-color: black !important; border-top: 0px; border-left: 0px;"
                                    cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                                    <div class="text-center white--text mt-4">
                                        <h3>Items</h3>
                                    </div>
                                </v-col>
                                <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                                    style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                    class="pa-0 ma-0 text-center">
                                    <h3 class="mt-3">
                                        <v-select v-model="item" filled rounded dense label="Items"
                                            :items="seleccionarItem" item-text="items"></v-select>
                                    </h3>
                                </v-col>
                            </v-row>

                            <v-row class="mx-5 secondary"
                                style=" margin: 0; border: solid 1px; border-color: black !important; border-top: 0px; border-bottom: 0px;">
                                <v-col cols="12" xs="0" sm="4" md="4" lg="4" xl="4">
                                </v-col>
                                <v-col cols="12" xs="8" sm="4" md="4" lg="4" xl="4">
                                    <div class="text-center white--text">
                                        <h3>Datos de la muestra</h3>
                                    </div>
                                </v-col>
                                <v-col class="text-right" cols="12" xs="0" sm="4" md="4" lg="4" xl="4">
                                    <v-tooltip bottom>
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn color="white" dark @click="dialog5 = true">
                                                <v-icon color="secondary" rounded v-bind="attrs" v-on="on">
                                                    mdi-plus-circle
                                                </v-icon>
                                            </v-btn>
                                        </template>
                                        <span>Añadir ensayo</span>
                                    </v-tooltip>
                                </v-col>
                            </v-row>

                            <v-row style=" margin: 0;" class="mx-5">
                                <v-col cols="12" class="ma-0 pa-0">
                                    <v-simple-table>
                                        <template v-slot:default>
                                            <thead class="secondary">
                                                <tr>
                                                    <th style=" border: solid 1px; border-color: black; "
                                                        class="text-center white--text">
                                                        <h2> Código de </h2>
                                                        <h2> muestra </h2>
                                                    </th>
                                                    <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                                        class="text-center white--text">
                                                        <h2> Municipio de </h2>
                                                        <h2> recolección </h2>
                                                    </th>
                                                    <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                                        class="text-center white--text">
                                                        <h2> Dirección de toma </h2>
                                                        <h2> de muestra </h2>
                                                    </th>
                                                    <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                                        class="text-center white--text">
                                                        <h2> Lugar de toma de </h2>
                                                        <h2> muestra </h2>
                                                    </th>
                                                    <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                                        class="text-center white--text">
                                                        <h2> Muestra </h2>
                                                        <h2> recolectada por </h2>
                                                    </th>
                                                    <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                                        class="text-center white--text">
                                                        <h2> Procedimiento </h2>
                                                        <h2> de </h2>
                                                    </th>
                                                    <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                                        class="text-center white--text">
                                                        <h2> Tipo de muestra</h2>
                                                    </th>
                                                    <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                                        class="text-center white--text">
                                                        <h2> Matriz de la </h2>
                                                        <h2> muestra </h2>
                                                    </th>
                                                    <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                                        class="text-center white--text">
                                                        <h2> Fecha y hora de </h2>
                                                        <h2> recolección </h2>
                                                    </th>

                                                    <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                                        class="text-center white--text">
                                                        <h2> Observaciones </h2>
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-if="mostrasDatos <= 0">
                                                    <td
                                                        style="border: solid 1px; border-color: black; border-top: 0px;">
                                                        {{ numeroactual }}
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

                                                <tr v-if="mostrasDatos > 0">
                                                    <td
                                                        style="border: solid 1px; border-color: black; border-top: 0px;">
                                                        {{ numeroactual }}
                                                    </td>
                                                    <td
                                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
                                                        {{seleccionadoCiudad}}
                                                    </td>
                                                    <td
                                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
                                                        {{direccionM}}
                                                    </td>
                                                    <td
                                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
                                                        {{lugarM}}
                                                    </td>
                                                    <td
                                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
                                                        {{recolectadaPor}}
                                                    </td>
                                                    <td
                                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
                                                        {{procedimiento}}
                                                    </td>
                                                    <td
                                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
                                                        {{tipoM}}
                                                    </td>
                                                    <td
                                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
                                                        {{matrizM}}
                                                    </td>
                                                    <td
                                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
                                                        {{fecha}}
                                                    </td>
                                                    <td
                                                        style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
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

            <v-dialog v-model="dialog4" max-width="1000px">
                <v-card>
                    <template>
                        <v-card>
                            <v-card-title>
                                Seleccione un Solicitante
                                <v-spacer></v-spacer>
                                <v-text-field v-model="search" append-icon="mdi-magnify" label="Buscar cliente"
                                    single-line hide-details></v-text-field>
                            </v-card-title>
                            <v-data-table :headers="headers2" :items="clientes" :search="search">
                                <template v-slot:[`item.agregar`]="{ item }">
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
                    <v-card-actions>
                        <v-row style="margin:0">
                            <v-col cols="12" class="text-center">
                                <v-btn color="secondary" @click="dialog4 = false" rounded dark>
                                    Cerrar
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-card-actions>
                </v-card>
            </v-dialog>

            <v-dialog v-model="dialog5" persistent>
                <v-card style="padding: 0px">
                    <v-card-title class="text-h5"> Datos Muestra</v-card-title>
                    <v-container>
                        <v-row>
                            <v-card-text> </v-card-text>
                            <v-col cols="5" md="6" class="mt-n7">
                                <v-autocomplete v-model="seleccionadoCiudad" required dense filled rounded
                                    :items="Municipio" item-text="ciudad" item-value="_id"
                                    label="Municipio de recolección"></v-autocomplete>
                            </v-col>
                            <v-col cols="5" md="6" class="mt-n7">
                                <v-text-field v-model="direccionM" required dense filled rounded
                                    label="Dirección de toma de muestra*">
                                </v-text-field>
                            </v-col>
                            <v-col cols="5" md="6" class="mt-n7">
                                <v-text-field v-model="lugarM" required dense filled rounded
                                    label="Lugar de toma de muestra*">
                                </v-text-field>
                            </v-col>
                            <v-col cols="5" md="6" class="mt-n7">
                                <v-text-field required dense filled rounded v-model="recolectadaPor"
                                    label="Muestra recolectada por*">
                                </v-text-field>
                            </v-col>
                            <v-col cols="5" md="6" class="mt-n7">
                                <v-text-field required dense filled rounded v-model="procedimiento"
                                    label="Procedimiento de*">
                                </v-text-field>
                            </v-col>
                            <v-col cols="5" md="6" class="mt-n7">
                                <v-autocomplete required dense filled rounded v-model="tipoM" :items="listarTipos"
                                    item-text="tipos" item-value="_id" label="Tipo de muestra">
                                </v-autocomplete>
                            </v-col>
                            <v-col cols="5" md="6" class="mt-n7">
                                <v-text-field required dense filled rounded v-model="matrizM"
                                    label="Matriz de la muestra*">
                                </v-text-field>
                            </v-col>

                            <v-col cols="5" md="6" class="mt-n7">
                                <v-text-field required dense filled rounded v-model="fecha" type="date"
                                    label="Fecha y hora de recolección*">
                                </v-text-field>
                            </v-col>
                            <v-col cols="12" md="12" class="mt-n7">
                                <v-textarea required dense filled rounded style="background-color: white;"
                                      color="secondary" label="Observacion" rows="1">
                                </v-textarea>
                            </v-col>
                        </v-row>
                    </v-container>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn class="mr-15" outlined color="red darken-3" @click="Cerrar()">
                            Cancelar
                        </v-btn>
                        <v-btn color="success" @click="Aceptarrr()"> Aceptar </v-btn>
                    </v-card-actions>
                </v-card>
            </v-dialog>

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
    name: 'PageMuestras',
    data: () => ({
        search: '',
        dialog: false,
        dialog3: false,
        dialog4: false,
        dialog5: false,
        nombreCiudad:"",
        nombreTipoM:"",
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
        muestras: [],
        idCoti: "",
        idSoli: "",
        idCotiSeli: "",
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
        botones: 1,
        get: 0,
        headers: [
            {
                text: 'Código de la muestra',
                align: 'start',
                value: "codMuestra",
            },
            {
                text: 'Numero de cotización',
                align: 'start',
                value: 'cotizacion.numero_cotizacion',
            },
            {
                text: 'Solicitante',
                align: 'start',
                sortable: false,
                value: 'solicitante.nombre',
            },
            {
                text: 'Lugar de recolección',
                align: 'start',
                sortable: false,
                value: 'munRecoleccion.ciudad',
            },
            // {
            //     text: 'Fecha de recolección',
            //     align: 'start',
            //     sortable: false,
            //     value: 'fecha',
            // },
            {
                text: '',
                align: 'start',
                sortable: false,
                value: 'ver',
            },
        ],
        headers2: [
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
                text: 'C.C.',
                align: 'start',
                value: 'idCliente.documento',
            },
            {
                text: 'Tipo persona',
                align: 'start',
                value: 'idCliente.tipoPersona',
            },
            {
                text: 'Correo',
                align: 'start',
                sortable: false,
                value: 'idCliente.email',
            },
            {
                text: 'Añadir',
                align: 'start',
                sortable: false,
                value: 'agregar',
            },

        ],

    }),
    methods: {
        fechaSalida(r) {
            let d = new Date(r);
            return d.toLocaleDateString() + " - " + d.toLocaleTimeString();
        },
        // traerItemm(item) {
        //     this.$store.dispatch("setImprimirM", item);
        //     this.$router.push("/ImprimirMuestra")
        //     console.log(item);

        // },
        customFilter2(item, queryText) {
            const textOne = item.numero_cotizacion
            const searchText = queryText
            return textOne.indexOf(searchText) > -1
        },
        Volver() {
            this.$router.push("/Home");
        },
        // Imprimir(item) {
        //     this.$store.dispatch("setImprimirM", item);
        //     this.$router.push("/ImprimirMuestra")
        //     console.log(item);
        // },
        Imprimir(item) {
            // this.$store.dispatch("setCotiImprimir", datos);
            localStorage.setItem("datos", JSON.stringify(item))
            window.open("http://localhost:8080/#/ImprimirMuestra")
            console.log(item);
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
            axios.get(`/cotizacion/cotisEnProceso`, header)
                .then((response) => {
                    console.log(response);
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
            let header = { headers: { "token": this.$store.state.token } }
            axios.get(`cotizacion/buscarNombre/${this.idSoli}`, header)
                .then(response => {
                    console.log(response);
                    this.cotizaciones = response.data.coti
                    // this.cotizacion2 = response.data.coti[0]
                    // this.idCoti = this.cotizacion2._id
                    // this.listarItems();
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
                solicitante: this.idSoli,
                munRecoleccion: this.seleccionadoCiudad,
                direccionTomaMuestra: this.direccionM,
                lugarTomaMuestra: this.lugarM,
                muestraRecolectadaPor: this.recolectadaPor,
                procedimientoMuestreo: this.procedimiento,
                tipoMuestra: this.tipoM,
                matrizMuestra: this.matrizM,
                fechaRecoleccion: this.fecha,
                cotizacion: this.idCotiSeli,
                item: this.item,

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
                    this.idCotiSeli = ""
                    this.idSoli = ""
                    this.seleccionadoCiudad = ""
                    this.direccionM = ""
                    this.lugarM = ""
                    this.recolectadaPor = ""
                    this.procedimiento = ""
                    this.tipoM = ""
                    this.matrizM = ""
                    this.cotizacion = ""
                    this.item = ""
                    this.fecha = ""
                    this.listarMuestras();
                    this.dialog = false


                })
                .catch((error) => {
                    console.log(error);
                    if (error.response.data.errores.errors[0].msg === "Invalid value") {
                        this.$swal.fire({
                            position: "top-end",
                            icon: "error",
                            title: "No has seleccionado un solicitante!!!",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    } else {
                        this.$swal.fire({
                            position: "top-end",
                            icon: "error",
                            title: error.response.data.errores.errors[0].msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
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
            axios.get(`/cotizacion/listarporIdCoti/${this.idCotiSeli}`, header)
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
        listarMuestras() {
            axios.get(`/DMuestra/listarMuestras`)
                .then((response) => {
                    this.muestras = response.data.muestras
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        seleccionarclientes(info) {
            console.log(info);
            if (info.idCliente.contacto) {
                this.idSoli = info.idCliente._id
                this.soliNombre = info.idCliente.nombre
                this.soliApellido = info.idCliente.apellidos
                this.soliDepartamento = info.idCliente.ciudad.departamento
                this.soliDocumento = info.idCliente.documento
                this.soliNombreContacto = info.idCliente.contacto.nombre
                this.soliDireccion = info.idCliente.direccion
                this.soliTelefono = info.idCliente.celular
                this.soliCiudad = info.idCliente.ciudad.ciudad
                this.soliEmail = info.idCliente.email
                this.dialog4 = false
                this.botones = 0
                this.traerCotizacion()
            } else {
                this.idSoli = info.idCliente._id
                this.soliNombre = info.idCliente.nombre
                this.soliApellido = info.idCliente.apellidos
                this.soliDepartamento = info.idCliente.ciudad.departamento
                this.soliDocumento = info.idCliente.documento
                this.soliDireccion = info.idCliente.direccion
                this.soliTelefono = info.idCliente.celular
                this.soliCiudad = info.idCliente.ciudad.ciudad
                this.soliEmail = info.idCliente.email
                this.dialog4 = false
                this.botones = 0
                this.traerCotizacion()
            }

        },
        Aceptarrr(){
            this.dialog5 = false;
            this.nombreCiudad=this.seleccionadoCiudad
            this.nombreTipoM=this.tipoM
            this.mostrasDatos=1
        },
        Cerrar() {
            this.dialog5 = false;
        },

        // if (datos.contacto) {

        //     this.info()
        // } else {
        //     this.traerCotizacion()
        //     this.info()
        // }
        borrarclientes() {
            this.soliNombre = ""
            this.soliApellido = ""
            this.soliDepartamento = ""
            this.soliDocumento = ""
            this.soliNombreContacto = ""
            this.soliDireccion = ""
            this.soliTelefono = ""
            this.soliCiudad = ""
            this.soliEmail = ""
            this.idCoti = ""
            this.idSoli = ""
            this.idCotiSeli = ""
            this.seleccionarItem = []
            this.cotizaciones = []
            this.dialog4 = false
            this.botones = 1
        },
    },
    created() {
        this.listarMuestras();
        this.usuarios();
        this.listarCiudad();
        this.listarTiposs();
        this.listarCotizacioness();
        this.info();
    },
    // la idea es que al mometo de guardar la muestra saca el id y con otra peticion listarla con los populates para que de esta forma se vea la informacion el la tabla
}
</script>
<style>
#muestra {
    display: inline-block;
    width: 200px;
    height: 200px;
}

@supports (-webkit-mask: url("")) or (mask: url("")) {
    #muestra {
        -webkit-mask: url(https://upload.wikimedia.org/wikipedia/commons/8/83/Sena_Colombia_logo.svg);
        mask: url(https://upload.wikimedia.org/wikipedia/commons/8/83/Sena_Colombia_logo.svg);
        mask-size: cover;
    }
}
</style>