<template>
  <v-container-fluid style="margin-top: 100px">
    <v-row style="margin: 0" class="mt-n6">
      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
        <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver()">
          Volver
        </v-btn>
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" class="mt-3">
      </v-col>
      <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4" class="mt-3">
        <template>
          <v-row justify="center">
            <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="deep-orange" dark v-bind="attrs" v-on="on" class="center">
                  Crear Muestra
                </v-btn>
              </template>
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
                  <v-container-fluid>
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
                  </v-container-fluid>
                  <v-subheader></v-subheader>
                </v-list>
                <v-divider></v-divider>
                <v-list three-line subheader>
                  <v-container-fluid class="mx-5 mt-n15">
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
                        <h3 class="mt-3">{{datos.nombre}} {{datos.apellidos}}</h3>
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
                        <h3 class="mt-3">{{datos.ciudad.departamento}}</h3>
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
                        <h3 class="mt-3">{{datos.documento}}</h3>
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
                        <h3 class="mt-3">{{datos.contacto.nombre}} {{datos.contacto.apellidos}}</h3>
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
                        <h3 class="mt-3">{{datos.direccion}}</h3>
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
                        <h3 class="mt-3">{{datos.telefono}}</h3>
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
                        <h3 class="mt-3">{{datos.ciudad.ciudad}}</h3>
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
                        <h3 class="mt-3">{{datos.email}}</h3>
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
                      <v-dialog v-model="dialog2" max-width="500px">
                        <v-card class="">
                        <v-card-title class="text-h5">
                            Datos Muestra
                        </v-card-title>
                        <v-col cols="12">                        
                            <v-autocomplete v-model="seleccionadoCiudad" :items="Municipio" item-text="ciudad"
                                item-value="_id" filled rounded dense label="Municipio de recolección" @click="listarCiudad()">
                            </v-autocomplete>    
                            <v-text-field v-model="direccionM" label="Dirección de toma de muestra*" filled rounded dense></v-text-field>
                            <v-text-field v-model="lugarM" label="Lugar de toma de muestra*" filled rounded dense></v-text-field>
                            <v-text-field v-model="recolectadaPor" label="Muestra recolectada por*" filled rounded dense></v-text-field>
                            <v-text-field v-model="procedimiento" label="Procedimiento de*" filled rounded dense></v-text-field>
                            <v-text-field v-model="tipoM" label="Tipo de muestra*" filled rounded dense></v-text-field>
                            <v-text-field v-model="matrizM" label="Matriz de la muestra*" filled rounded dense></v-text-field>
                            <v-text-field v-model="fecha" label="Fecha y hora de recolección*" filled rounded dense></v-text-field>
                            <v-text-field v-model="cotizacion" label="Cotización*" filled rounded dense></v-text-field>
                            <v-text-field v-model="item" label="ítem de la*" filled rounded dense></v-text-field>
                            <v-text-field v-model="observacion" label="Observaciones" filled rounded dense></v-text-field>
                            </v-col>
                        <v-card-actions class="mt-n7">
                            <v-btn color="success" @click="Guardar()">
                                Añadir datos
                            </v-btn>
                        </v-card-actions>
                    </v-card>
                      </v-dialog>

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
                                  <h2> Tipo de </h2>
                                  <h2> muestra </h2>
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
                              <tr>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px;">

                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                </td>
                                <td
                                  style="border: solid 1px; border-color: black; border-top: 0px; border-bottom: 0px; border-left:0px;">

                                </td>
                              </tr>
                            </tbody>
                          </template>

                        </v-simple-table>
                      </v-col>
                    </v-row>
                    <v-row style=" margin: 0; border: solid 1px; border-color: black; background-color: #ff5722"
                      class="mx-5">
                      <v-col cols="6">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Observaciones prestablecidas</h3>
                        </div>
                      </v-col>
                      <v-col cols="6">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Condiciones del servicio</h3>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row style="margin: 0" class="mx-5">
                      <v-col style="border: solid 1px; border-color: black; border-top: 0px;" cols="1">
                        <div class="text-center ">
                          <body-1>1</body-1>
                        </div>
                      </v-col>
                      <v-col style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        cols="5">
                        <div class="text-center ">
                          <body-1>1</body-1>
                        </div>
                      </v-col>
                      <v-col style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        cols="6">
                        <div class="text-left ">
                          <body-1>El solicitante al afirmar la presente acta de recepción de muestras acepta lo
                            siguiente:</body-1>
                          <br>
                          <body-1>1. Que a las muestras se le realicen todos los ensayos de acuerdo al ítem de la
                            cotización indicado en el presente formato y los mismos sean reportados en el respectivo
                            informe de los resultados.</body-1>
                          <br>
                          <body-1>2.</body-1>
                        </div>
                      </v-col>
                    </v-row>
                    <v-row style="margin: 0" class="mx-5">
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Quien entrega las muestras</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0 text-center">
                      </v-col>
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h4>Fecha y hora de recepción de muestras</h4>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0">
                      </v-col>
                    </v-row>
                    <v-row style="margin: 0" class="mx-5">
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>C.C.</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0 text-center">
                      </v-col>
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Quien recibe las muestras</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0">
                      </v-col>
                    </v-row>
                    <v-row style="margin: 0" class="mx-5">
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Firma</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0 text-center">
                      </v-col>
                      <v-col
                        style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                        <div class="text-center white--text text-no-wrap deep-orange">
                          <h3>Firma</h3>
                        </div>
                      </v-col>
                      <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                        style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                        class="pa-0 ma-0">
                      </v-col>
                    </v-row>
                  </v-container-fluid>
                </v-list>
              </v-card>
            </v-dialog>
          </v-row>
        </template>
      </v-col>
    </v-row>
    <v-row style="margin: 0" class="mt-n6">
      <v-col v-for="(muestras, i) in infoMuestras" :key="i" cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
        <v-card :loading="loading" class="mx-auto my-12" max-width="374">
          <template slot="progress">
            <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
          </template>

          <v-card-title>Cafe Badilico</v-card-title>

          <v-card-text>
            <v-row align="center" class="mx-0"> </v-row>

            <div class="my-4 text-subtitle-1">Italian, Cafe</div>

            <div>
              Small plates, salads & sandwiches - an intimate setting with 12
              indoor seats plus patio seating.
            </div>
          </v-card-text>

          <v-divider class="mx-4"></v-divider>

          <v-card-title>Tonight's availability</v-card-title>

          <v-card-actions>
            <v-btn color="deep-orange lighten-2" text @click="reserve">
              Ver Muestra
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container-fluid>
</template>
<script>
import axios from "axios";
export default {
  name: "PageListamuestra",
  data() {
    return {
      datos: this.$store.state.muestras,
      contacto: "",
      loading: false,
      selection: 1,
      dialog: false,
      dialog2: false,
      infoMuestras: [],
      Municipio: [],
      direccionM:"",
      lugarM:"",
      recolectadaPor:"",
      procedimiento:"",
      tipoM:"",
      matrizM:"",
      fecha:"",
      cotizacion:"",
      item:"",

      seleccionadoCiudad: "",

    };
  },
  methods: {
    cliente() {
      console.log(this.datos);
    },
    Volver() {
      this.$router.push("/clientes");
    },
    reserve() {
      this.loading = true;
    },
    listar() {
      axios
        .get(`/DMuestra/listarMuestras`)
        .then((response) => {
          this.infoMuestras = response.data.muestras;
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    listarCiudad() {
        axios.get("/ciudad/CiudadDepartamento")
            .then(response => {
                console.log(response);
                response.data.ciudad.forEach(city => {
                    this.Municipio.push(city)
                })
                console.log(this.Municipio);

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
                axios.post(`/DMuestra/`, {
                    solicitante: this.seleccionadoCiudad,
                    munRecoleccion: this.seleccionadoCiudad,
                    direccionTomaMuestra: this.direccionM,
                    lugarTomaMuestra: this.lugarM,
                    muestraRecolectadaPor: this.recolectadaPor,
                    procedimientoMuestreo: this.procedimiento,
                    tipoMuestra: this.tipoM,
                    matrizMuestra: this.matrizM,
                    fechaRecoleccion: this.fecha,
                    cotizacion: this.cotizacion,
                    item: this.item,                                  
                })
                    .then((response) => {
                        this.$swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: response.data.msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                     
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
  },
  created() {
    this.cliente();
    this.listar();
  },
};
</script>
