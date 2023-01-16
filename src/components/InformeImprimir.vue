<template>
    <v-container fluid>
        <v-row>
            <v-col cols="2" class="text-center mt-3">
                <div class="accent" id="coti2"></div>
            </v-col>
            <v-col cols="5">
                <div class=" text-center black--text font-italic text-decoration-underline ">
                    <h2>Informe de resultados</h2>
                </div>
                <div class="text-center black--text mt-5">

                </div>
                <div class=" text-center black--text mt-2">
                    <h5>{{ infoDescripcion }}</h5>
                </div>
                <div class=" text-center black--text mt-2">
                    <h5>NIT: {{ infoNit }}</h5>
                </div>
                <div class=" text-center black--text mt-2">
                    <h5>Dirección: {{ infoDireccion }}</h5>
                </div>
                <div class=" text-center black--text mt-2">
                    <h5>Teléfono: {{ infoTelefono }}</h5>
                </div>
                <div class=" text-center black--text mt-2">
                    <h5>Correo electrónico: {{ infoCorreo }}</h5>
                </div>
            </v-col>
            <v-col cols="3" class="mt-3">
                <div class="text-center black--text ">
                    <h3>Informe de resultados No.</h3>
                </div>
                <div class="text-center red--text font-italic title mt-3">
                    {{ infoNumero }}
                </div>
                <v-row>
                    <v-col cols="6">
                        <div class="text-center black--text mt-3">
                            <h4>Fecha y hora de recepción de la muestra:</h4>
                        </div>
                        <div class="text-center black--text title mt-3">
                            <div></div>
                        </div>
                    </v-col>
                    <v-col cols="6">
                        <div class="text-center black--text mt-3">
                            <h5>Fecha y hora de emisión del informe de resultados:</h5>
                        </div>
                        <div class="text-center black--text title mt-3">
                            <div></div>
                        </div>
                    </v-col>
                </v-row>

            </v-col>
            <v-col cols="2" class="mt-5">
                <div class="text-center black--text">
                    <h5>Código</h5>
                </div>
                <div class="text-center black--text">
                    <h5>{{ infoCodigo }}</h5>
                </div>
                <div class="text-center black--text mt-3">
                    <h5>Aprobación</h5>
                </div>
                <div class="text-center black--text">
                    <h5>{{ infoAprobacion  }}</h5>
                </div>
                <div class="text-center black--text mt-3">
                    <h5>Versión</h5>
                </div>
                <div class="text-center black--text">
                    <h5>{{  infoVersion }}</h5>
                </div>
            </v-col>
        </v-row>

        <v-row style=" margin: 0; border: solid 1px; border-color: black !important;" class="secondary mx-5">
            <v-col cols="12">
                <div class="text-center white--text">
                    <h3>Datos del solicitante</h3>
                </div>
            </v-col>
        </v-row>

        <v-row style="margin: 0" class="mx-5">
            <v-col class="secondary"
                style="border: solid 1px; border-color: black !important; border-top: 0px; border-right: 0px; "
                cols="2">
                <div class="text-center white--text ">
                    <h3>Solicitante</h3>
                </div>
            </v-col>

            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px;"
                class="pa-0 ma-0 text-center">
                <v-row style="margin:0">
                    <v-col cols="12">
                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                            {{ datosSoliN }} {{ datosSoliA }}
                        </div>
                    </v-col>
                </v-row>
            </v-col>
            <v-col class="secondary"
                style=" border: solid 1px;border-left: 0px; border-color: black !important; border-top: 0px; border-right: 0px; "
                cols="2">
                <div class="text-center white--text">
                    <h3>Departamento</h3>
                </div>
            </v-col>
            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px;" class="pa-0 ma-0">
                <v-row style="margin:0">
                    <v-col cols="12">
                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                            {{ datosDepartamento }}
                        </div>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>

        <v-row style="margin: 0" class="mx-5">
            <v-col class="secondary"
                style="border: solid 1px; border-color: black !important; border-top: 0px;  border-right: 0px;"
                cols="2">
                <div class="text-center white--text ">
                    <h3>NIT/ C.C.</h3>
                </div>
            </v-col>
            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px;" class="pa-0 ma-0">
                <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                    {{ datosDocumento }}
                </div>
            </v-col>

            <v-col class="secondary"
                style="border: solid 1px;border-left: 0px; border-color: black !important; border-top: 0px; border-right: 0px; "
                cols="2">
                <div class="text-center white--text">
                    <h3>Contacto</h3>
                </div>
            </v-col>
            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px;" class="pa-0 ma-0">
                <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                    {{ datosContacto }}
                </div>
            </v-col>

            <v-col class="secondary"
                style="border: solid 1px; border-color: black !important; border-top: 0px; border-right: 0px;" cols="2">
                <div class="text-center white--text ">
                    <h3>Dirección</h3>
                </div>
            </v-col>
            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px;" class="pa-0 ma-0">
                <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                    {{ datosDireccion }}
                </div>
            </v-col>

            <v-col class="secondary"
                style="border: solid 1px; border-color: black !important; border-top: 0px; border-left: 0px; border-right: 0px;"
                cols="2">
                <div class="text-center white--text">
                    <h3>Teléfono</h3>
                </div>
            </v-col>
            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px;" class="pa-0 ma-0">
                <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                   {{ datosTelefono }}
                </div>
            </v-col>
            <v-col class="secondary"
                style=" border: solid 1px; border-color: black !important; border-top: 0px;  border-right: 0px;"
                cols="2">
                <div class="text-center white--text">
                    <h3>Ciudad</h3>
                </div>
            </v-col>
            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px;" class="pa-0 ma-0">
                <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                    {{ datosCiudad }}
                </div>
            </v-col>

            <v-col class="secondary"
                style="border: solid 1px; border-color: black !important; border-top: 0px; border-left: 0px; border-right: 0px;"
                cols="2">
                <div class="text-center white--text">
                    <h3>Correo electrónico</h3>
                </div>
            </v-col>
            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px;" class="pa-0 ma-0">
                <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                    {{ datosCorreo }}
                </div>
            </v-col>
        </v-row>

        <v-row style=" margin: 0; border: solid 1px;border-top: 0px; border-color: black !important;"
            class="secondary mx-5">
            <v-col cols="12">
                <div class="text-center white--text">
                    <h3>Datos de la muestra</h3>
                </div>
            </v-col>
        </v-row>
        <v-row style="margin: 0" class="mx-5">
            <v-col class="secondary"
                style="border: solid 1px; border-color: black !important; border-top: 0px; border-right: 0px; "
                cols="2">
                <div class="text-center white--text ">
                    <h3>Municipio de recolección</h3>
                </div>
            </v-col>

            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px;"
                class="pa-0 ma-0 text-center">
                <v-row style="margin:0">
                    <v-col cols="2"></v-col>
                    <v-col cols="8">
                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                            {{ muestraMunicipio }}
                        </div>
                    </v-col>
                    <v-col cols="2">
                    </v-col>
                </v-row>
            </v-col>

            <v-col class="secondary"
                style=" border: solid 1px;border-left: 0px; border-color: black !important; border-top: 0px; border-right: 0px; "
                cols="2">
                <div class="text-center white--text">
                    <h3>Procedimiento de muestreo</h3>
                </div>
            </v-col>
            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px;" class="pa-0 ma-0">
                <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                    {{ muestraProcedimiento }}
                </div>
            </v-col>
        </v-row>

        <v-row style="margin: 0" class="mx-5">
            <v-col class="secondary"
                style="border: solid 1px; border-color: black !important; border-top: 0px; border-right: 0px; "
                cols="2">
                <div class="text-center white--text ">
                    <h3>Dirección de toma de muestra</h3>
                </div>
            </v-col>

            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px;"
                class="pa-0 ma-0 text-center">
                <v-row style="margin:0">
                    <v-col cols="2"></v-col>
                    <v-col cols="8">
                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                            {{ muestraDireccion }}
                        </div>
                    </v-col>
                    <v-col cols="2">
                    </v-col>
                </v-row>
            </v-col>

            <v-col class="secondary"
                style=" border: solid 1px;border-left: 0px; border-color: black !important; border-top: 0px; border-right: 0px; "
                cols="2">
                <div class="text-center white--text">
                    <h3>Tipo de muestra </h3>
                </div>
            </v-col>
            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px;" class="pa-0 ma-0">
                <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                    {{ muestraTipo }}
                </div>
            </v-col>
        </v-row>

        <v-row style="margin: 0" class="mx-5">
            <v-col class="secondary"
                style="border: solid 1px; border-color: black !important; border-top: 0px; border-right: 0px; "
                cols="2">
                <div class="text-center white--text ">
                    <h3>Lugar de toma de muestra</h3>
                </div>
            </v-col>

            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px;"
                class="pa-0 ma-0 text-center">
                <v-row style="margin:0">
                    <v-col cols="2"></v-col>
                    <v-col cols="8">
                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                           {{ muestraLugar }}
                        </div>
                    </v-col>
                    <v-col cols="2">
                    </v-col>
                </v-row>
            </v-col>

            <v-col class="secondary"
                style=" border: solid 1px;border-left: 0px; border-color: black !important; border-top: 0px; border-right: 0px; "
                cols="2">
                <div class="text-center white--text">
                    <h3>Matriz de la muestra</h3>
                </div>
            </v-col>
            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px;" class="pa-0 ma-0">
                <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                    {{ muestraMatriz }}
                </div>
            </v-col>
        </v-row>

        <v-row style="margin: 0" class="mx-5">
            <v-col class="secondary"
                style="border: solid 1px; border-color: black !important; border-top: 0px; border-right: 0px; "
                cols="2">
                <div class="text-center white--text ">
                    <h3>Muestra recolectada por </h3>
                </div>
            </v-col>

            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px;"
                class="pa-0 ma-0 text-center">
                <v-row style="margin:0">
                    <v-col cols="2"></v-col>
                    <v-col cols="8">
                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                            {{ muestraRecolectada }}
                        </div>
                    </v-col>
                    <v-col cols="2">
                    </v-col>
                </v-row>
            </v-col>

            <v-col class="secondary"
                style=" border: solid 1px;border-left: 0px; border-color: black !important; border-top: 0px; border-right: 0px; "
                cols="2">
                <div class="text-center white--text">
                    <h3>Fecha y hora de recolección</h3>
                </div>
            </v-col>
            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px;" class="pa-0 ma-0">
                <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                    {{ muestraFecha.slice(0, 10) }}
                </div>
            </v-col>
        </v-row>

        <v-row
            style=" margin: 0; border: solid 1px;border-top: 0px; border-bottom: 0px; border-color: black !important;"
            class="secondary mx-5">
            <v-col cols="12">
                <div class="text-center white--text">
                    <h3>Análisis de la muestra</h3>
                </div>
            </v-col>
        </v-row>

        <v-row style=" margin: 0;" class="mx-5">
            <v-col cols="12" class="ma-0 pa-0">
                <v-simple-table>
                    <template v-slot:default>
                        <thead class="secondary">
                            <tr>
                                <th style=" border: solid 1px; border-color: black; " class="text-center white--text">
                                    <h2> Fecha de <br> análisis </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                    class="text-center white--text">
                                    <h2> Ensayo </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                    class="text-center white--text">
                                    <h2> Método </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                    class="text-center white--text">
                                    <h2> Técnica </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                    class="text-center white--text">
                                    <h2> Resultado </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                    class="text-center white--text">
                                    <h2> Incertidumbre <br> expandida</h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                    class="text-center white--text">
                                    <h2> Valor Máximo <br> NTC 1311:2009</h2>
                                </th>

                                <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                    class="text-center white--text">
                                    <h2> Valor Mínimo <br> NTC 1311:2009</h2>
                                </th>

                                <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                    class="text-center white--text">
                                    <h2> Unidades </h2>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-center" v-for="(ensayo, i) in ensayosSeleccionados" :key="i">
                                <td style="border: solid 1px; border-color: black; border-top: 0px;">
                                    <!-- {{ ensayo.ensayo.ensayo }} -->
                                </td>
                                <td style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
                                    <!-- {{ ensayo.ensayo.descripcion }} -->
                                </td>
                                <td style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
                                    <!-- {{ ensayo.ensayo.unidades }} -->
                                </td>
                                <td style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
                                    <!-- {{ ensayo.ensayo.tecnica }} -->
                                </td>
                                <td style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
                                    <!-- {{ ensayo.ensayo.metodo }} -->
                                </td>
                                <td style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
                                    <!-- {{ ensayo.ensayo.limiteCuantificacion }} -->
                                </td>
                                <td style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
                                    <!-- ${{ Intl.NumberFormat("de-DE").format(ensayo.costoEnsayo) }} -->
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-row>
        <v-row
            style=" margin: 0; border: solid 1px;border-top: 0px; border-bottom: 0px; border-color: black !important;"
            class="secondary mx-5">
            <v-col cols="12">
                <div class="text-center white--text">
                    <h3>Observaciones</h3>
                </div>
            </v-col>
        </v-row>

        <v-row style=" margin: 0; border: solid 1px; border-color: black !important;" class="mx-5">
            <v-col cols="12" style="margin-top: 10px;">
                <div class="text-center white--text">

                </div>
            </v-col>
        </v-row>


        <v-row
            style=" margin: 0; border: solid 1px;border-top: 0px; border-bottom: 0px; border-color: black !important;"
            class="secondary mx-5">
            <v-col cols="12">
                <div class="text-center white--text">
                    <h3>Descripción de los ensayos</h3>
                </div>
            </v-col>
        </v-row>

        <v-row style=" margin: 0; border: solid 1px;border-top:0px; border-color: black !important;" class="mx-5">
            <v-col cols="12">
                <div class="text-center white--text">
                </div>
            </v-col>
        </v-row>

        <v-row style=" margin: 0; border: solid 1px;border-top:0px; border-color: black !important;" class="mx-5">
            <v-col cols="12">
                <div class="text-center white--text">
                </div>
            </v-col>
        </v-row>
        <v-row style=" margin: 0; border: solid 1px;border-top:0px; border-color: black !important;" class="mx-5">
            <v-col cols="12">
                <div class="text-center white--text">
                </div>
            </v-col>
        </v-row>
        <v-row style=" margin: 0; border: solid 1px;border-top:0px; border-color: black !important;" class="mx-5">
            <v-col cols="12">
                <div class="text-center white--text">
                </div>
            </v-col>
        </v-row>
        <v-row style=" margin: 0; border: solid 1px;border-top:0px; border-color: black !important;" class="mx-5">
            <v-col cols="12">
                <div class="text-center white--text">
                </div>
            </v-col>
        </v-row>
        <v-row style=" margin: 0; border: solid 1px;border-top:0px; border-color: black !important;" class="mx-5">
            <v-col cols="12">
                <div class="text-center white--text">
                </div>
            </v-col>
        </v-row>
        <v-row style=" margin: 0; border: solid 1px;border-top:0px; border-color: black !important;" class="mx-5">
            <v-col cols="12">
                <div class="text-center white--text">
                </div>
            </v-col>
        </v-row>
        <v-row style=" margin: 0; border: solid 1px;border-top:0px; border-color: black !important;" class="mx-5">
            <v-col cols="12">
                <div class="text-center white--text">
                </div>
            </v-col>
        </v-row>
        <v-row style=" margin: 0; border: solid 1px;border-top:0px; border-color: black !important;" class="mx-5">
            <v-col cols="12">
                <div class="text-center white--text">
                </div>
            </v-col>
        </v-row>

        <v-row style="margin: 0" class="mx-5">
            <v-col class="secondary"
                style="border: solid 1px; border-color: black !important; border-top: 0px; border-right: 0px; "
                cols="6">
                <div class="text-center white--text ">
                    <h3>Revisó</h3>
                </div>
            </v-col>

            <v-col class="secondary" style=" border: solid 1px; border-color: black !important; border-top: 0px;"
                cols="6">
                <div class="text-center white--text">
                    <h3>Aprobó</h3>
                </div>
            </v-col>
        </v-row>

        <v-row style="margin: 0" class="mx-5">
            <v-col style="border: solid 1px; border-color: black !important; border-top: 0px; border-right: 0px;"
                cols="6">
                <div style="margin-top: 250px; ">

                </div>
            </v-col>

            <v-col style=" border: solid 1px; border-color: black !important; border-top: 0px; " cols="6">
                <div style="margin-top: 250px; ">

                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from "axios";
export default {
    name: "PaginaImprimir",
    data: () => ({
        datos:[],
        infoDatos:[],
        calidadInforme: [],
        infoDescripcion:"",
        infoNit:"",
        infoDireccion:"",
        infoTelefono:"",
        infoCorreo: "",
        infoNumero: "",
        infoFHRDM: "",
        infoFHEIR:"",
        infoCodigo: "",
        infoAprobacion:"",
        infoVersion:"",
        datosSoliN:"",
        datosSoliA:"",
        datosDepartamento:"",
        datosDocumento:"",
        datosContacto:"",
        datosDireccion:"",
        datosTelefono:"",
        datosCiudad: "",
        datosCorreo: "",
        muestraMunicipio: "",
        muestraProcedimiento: "",
        muestraDireccion: "",
        muestraTipo: "",
        muestraLugar: "",
        muestraMatriz: "",
        muestraRecolectada: "",
        muestraFecha: "",
        analisisMuestra:[],
        almacenajeAnalisis:{},
        analisisFecha: "",
        analisisEnsayo: "",
        analisisMetodo: "",
        analisisTecnica: "",
        analisisResultado: "",
        analisisIncertidumbre: "",
        analisisValorM:"",
        analisisValorMinimo: "",
        analisisUnidades: "",
        infoObservaciones:"",
        infoDescripcionEnsayos:"", 
    }),
    methods: {
        info() {
            this.datos = JSON.parse(localStorage.getItem("datosInforme"))
            console.log(this.datos);
            this.infoFHRDM=""//falta
            this.infoFHEIR=""//falta
            this.datosSoliN=this.datos.idMuestra.solicitante.nombre
            this.datosSoliA=this.datos.idMuestra.solicitante.apellidos
            this.datosDepartamento=this.datos.idMuestra.solicitante.ciudad.departamento
            this.datosDocumento=this.datos.idMuestra.solicitante.apellidos
            if(this.datos.idMuestra.solicitante.contacto){
                this.datosContacto=this.datos.idMuestra.solicitante.contacto.nombre
            }else{
                this.datosContacto=""
            }
            this.datosDireccion=this.datos.idMuestra.solicitante.direccion
            this.datosTelefono=this.datos.idMuestra.solicitante.celular
            this.datosCiudad=this.datos.idMuestra.solicitante.ciudad.ciudad
            this.datosCorreo=this.datos.idMuestra.solicitante.email
            this.muestraMunicipio=this.datos.idMuestra.munRecoleccion.ciudad
            this.muestraProcedimiento=this.datos.idMuestra.procedimientoMuestreo
            this.muestraDireccion=this.datos.idMuestra.direccionTomaMuestra
            this.muestraTipo=this.datos.idMuestra.tipoMuestra.tipos
            this.muestraLugar=this.datos.idMuestra.lugarTomaMuestra
            this.muestraMatriz=this.datos.idMuestra.matrizMuestra
            this.muestraRecolectada=this.datos.idMuestra.muestraRecolectadaPor
            this.muestraFecha=this.datos.idMuestra.fechaRecoleccion

            
            this.analisisFecha=""// no se
            this.analisisEnsayo=""
            this.analisisMetodo=""
            this.analisisTecnica=""
            this.analisisResultado=""
            this.analisisIncertidumbre=""
            this.analisisValorM=""
            this.analisisValorMinimo=""
            this.analisisUnidades=""
            this.infoObservaciones=""
            this.infoDescripcionEnsayos=""
        },
        infoGeneral() {
            axios.get("/cotizacion/traerInfo")
                .then((response) => {
                    this.infoDatos = response.data.info
                    this.infoDescripcion=this.infoDatos[0].descripcion
                    this.infoNit=this.infoDatos[0].nit
                    this.infoDireccion=this.infoDatos[0].direccion
                    this.infoTelefono=this.infoDatos[0].telefono
                    this.infoCorreo=this.infoDatos[0].correo
                    this.infoNumero=1
                    // this.numerocoti = this.datos[0].numero_cotizacion
                    // let date = new Date();
                    // let output = String(date.getFullYear());
                    // if (this.numerocoti.toString().length === 1) {
                    //     this.numeroactual = `000${this.numerocoti}-${output}V${1}`
                    // } else if (this.numerocoti.toString().length === 2) {
                    //     this.numeroactual = `00${this.numerocoti}-${output}V${1}`
                    // } else if (this.numerocoti.toString().length === 3) {
                    //     this.numeroactual = `0${this.numerocoti}-${output}V${1}`
                    // } else if (this.numerocoti.toString().length === 4) {
                    //     this.numeroactual = `${this.numerocoti}-${output}V${1}`
                    // }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        calidad() {
            axios.get("/calidad/listar")
                .then((response) => {
                    console.log(response);
                    this.calidadInforme = response.data.listado[0].InformeResultado
                    this.infoCodigo= this.calidadInforme[0].codigo
                    this.infoAprobacion= this.calidadInforme[0].aprobacion
                    this.infoVersion= this.calidadInforme[0].version
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    created() {
        this.info();
        this.infoGeneral();
        this.calidad();
    }
}
</script>

<style>
#coti2 {
    display: inline-block;
    width: 180px;
    height: 180px;
}

@supports (-webkit-mask: url("")) or (mask: url("")) {
    #coti2 {
        -webkit-mask: url(https://upload.wikimedia.org/wikipedia/commons/8/83/Sena_Colombia_logo.svg);
        mask: url(https://upload.wikimedia.org/wikipedia/commons/8/83/Sena_Colombia_logo.svg);
        mask-size: cover;
    }
}

#text-dark {
    color: black !important;
}
</style>