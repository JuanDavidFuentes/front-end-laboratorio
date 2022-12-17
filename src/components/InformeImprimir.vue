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
                    <h5>{{ cotiDescripcion }}</h5>
                </div>
                <div class=" text-center black--text mt-2">
                    <h5>NIT: {{ cotiNit }}</h5>
                </div>
                <div class=" text-center black--text mt-2">
                    <h5>Dirección: {{ cotiDireccion }}</h5>
                </div>
                <div class=" text-center black--text mt-2">
                    <h5>Teléfono: {{ cotiTelefono }}</h5>
                </div>
                <div class=" text-center black--text mt-2">
                    <h5>Correo electrónico: {{ cotiCorreo }}</h5>
                </div>
            </v-col>
            <v-col cols="3" class="mt-3">
                <div class="text-center black--text ">
                    <h3>Informe de resultados No.</h3>
                </div>
                <div class="text-center red--text font-italic title mt-3">
                    {{ numeroCoti }}
                </div>
                <v-row>
                    <v-col cols="6">
                        <div class="text-center black--text mt-3">
                            <h4>Fecha y hora de recepción de la muestra:</h4>
                        </div>
                        <div class="text-center black--text title mt-3">
                            <div>{{ fechaEmision.slice(0, 10) }}</div>
                        </div>
                    </v-col>
                    <v-col cols="6">
                        <div class="text-center black--text mt-3">
                            <h5>Fecha y hora de emisión del informe de resultados:</h5>
                        </div>
                        <div class="text-center black--text title mt-3">
                            <div>{{ fechaEmision.slice(0, 10) }}</div>
                        </div>
                    </v-col>
                </v-row>

            </v-col>
            <v-col cols="2" class="mt-5">
                <div class="text-center black--text">
                    <h5>Código</h5>
                </div>
                <div class="text-center black--text">
                    <h5>{{ caliCodigo }}</h5>
                </div>
                <div class="text-center black--text mt-3">
                    <h5>Aprobación</h5>
                </div>
                <div class="text-center black--text">
                    <h5>{{ caliaprobacion }}</h5>
                </div>
                <div class="text-center black--text mt-3">
                    <h5>Versión</h5>
                </div>
                <div class="text-center black--text">
                    <h5>{{ caliVersion }}</h5>
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
                    <v-col cols="2"></v-col>
                    <v-col cols="8">
                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                            {{ nombre }}
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
                    <h3>Departamento</h3>
                </div>
            </v-col>
            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px;" class="pa-0 ma-0">
                <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                    {{ ciudad.departamento }}
                </div>
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
                    {{ documento }}
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
                    {{ nombrecontacto }}
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
                    {{ direccion }}
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
                    {{ telefono }}
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
                    {{ ciudad.ciudad }}
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
                    {{ email }}
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
                            {{ Municipioderecolección }}
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
                    {{ ProcedimientoDeMuestreo }}
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
                            {{ DireccionDeTomaDeMuestra }}
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
                    {{ TipoDeMuestra }}
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
                            {{ LugarDeTomaDeMuestra }}
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
                    {{ MatrizDeLaMuestra }}
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
                            {{ MuestraRecolectadaPor }}
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
                    {{ FechaYHoraDeRecolección }}
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
export default {
    name: "PaginaImprimir",
    data: () => ({
        cotiDescripcion: "",
        cotiNit: "",
        cotiDireccion: "",
        cotiTelefono: "",
        cotiCorreo: "",
        caliCodigo: "",
        caliaprobacion: "",
        caliVersion: "",
        datos: {},
        datos2: [],
        idCotizacion: "",
        fechaEmision: "",
        entregaResultados: "",
        validezOferta: "",
        descuento: "",
        elaboradoN: "",
        elaboradoA: "",
        elaboradoR: "",
        numeroCoti: "",
        idCliente: "",
        idcontacto: "",
        tipoPersona: "",
        nombre: "",
        apellidos: "",
        contacto: "",
        nombrecontacto: "",
        documento: "",
        direccion: "",
        ciudad: "",
        telefono: "",
        celular: "",
        cargo: "",
        email: "",
        cotiObservacion: "",
        observacionesS: "",
        aceptacion: "",
        condicionesC: "",
        condicionesT: "",
        garantiaS: "",
        calidadS: "",
        subtotal: 0,
        total: 0,
        iva: 0,
    }),
    methods: {
        info() {
            this.datos = JSON.parse(localStorage.getItem("datosInforme"))
            console.log(this.datos);
        },
    },
    created() {
        this.info();
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