<template>
    <v-container fluid class="mt-10">
        <v-row>
            <v-col cols="2" class="text-center">
                <div class="accent mt-10" id="coti2"></div>
            </v-col>
            <v-col cols="6">
                <div class=" text-center black--text font-italic text-decoration-underline ">
                    <h1>Oferta de servicios</h1>
                </div>
                <div class=" text-center black--text mt-2">
                    <h3>{{ cotiDescripcion }}</h3>
                </div>
                <div class=" text-center black--text mt-2">
                    <h3>NIT: {{ cotiNit }}</h3>
                </div>
                <div class=" text-center black--text mt-2">
                    <h3>Dirección: {{ cotiDireccion }}</h3>
                </div>
                <div class=" text-center black--text mt-2">
                    <h3>Teléfono: {{ cotiTelefono }}</h3>
                </div>
                <div class=" text-center black--text mt-2">
                    <h3>Correo electrónico: {{ cotiCorreo }}</h3>
                </div>
            </v-col>

            <v-col cols="2" class="mt-3">
                <div class="text-center black--text headline">
                    <h4>Cotización No.</h4>
                </div>
                <div class="text-center red--text font-italic headline">
                    {{ numeroCoti }}
                </div>
                <div class="text-center black--text headline mt-10">
                    <h4>Fecha de emisión:</h4>
                </div>
                <div class=" text-center black--text mt-2">
                    <h3>{{ fechaEmision.slice(0, 10) }}</h3>
                </div>
            </v-col>
            <v-col cols="2" class="mt-3">
                <div class="text-center black--text">
                    <h3>Código</h3>
                </div>
                <div class="text-center black--text">
                    <h3>{{ caliCodigo }}</h3>
                </div>
                <div class="text-center black--text mt-10">
                    <h3>Aprobación</h3>
                </div>
                <div class="text-center black--text">
                    <h3>{{ caliaprobacion }}</h3>
                </div>
                <div class="text-center black--text mt-10">
                    <h3>Versión</h3>
                </div>
                <div class="text-center black--text">
                    <h3>{{ caliVersion }}</h3>
                </div>
            </v-col>
        </v-row>

        <v-row style=" margin: 0; border: solid 1px; border-color: black;" class="secondary mx-5">
            <v-col cols="12">
                <div class="text-center white--text">
                    <h3>1. Datos del cliente</h3>
                </div>
            </v-col>
        </v-row>

        <v-row style="margin: 0" class="mx-5">
            <v-col class="secondary" style="border: solid 1px; border-color: black; border-top: 0px; " cols="2">
                <div class="text-center white--text ">
                    <h3>Cliente</h3>
                </div>
            </v-col>

            <v-col cols="4" style="border: solid 1px; border-color: black;" class="pa-0 ma-0 text-center">
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
            <v-col class="secondary" style="border: solid 1px; border-color: black;" cols="2">
                <div class="text-center white--text ">
                    <h3>NIT/ C.C.</h3>
                </div>
            </v-col>
            <v-col cols="4" style="border: solid 1px; border-color: black;" class="pa-0 ma-0">
                <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                    {{ documento }}
                </div>
            </v-col>
        </v-row>

        <v-row style="margin: 0" class="mx-5">
            <v-col class="secondary" style="border: solid 1px; border-color: black; border-top: 0px; " cols="2">
                <div class="text-center white--text ">
                    <h3>Dirección</h3>
                </div>
            </v-col>
            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px;" class="pa-0 ma-0">
                <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                    {{ direccion }}
                </div>
            </v-col>
            <v-col class="secondary" style=" border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
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
        </v-row>

        <v-row style="margin: 0" class="mx-5">
            <v-col class="secondary" style=" border: solid 1px; border-color: black; border-top: 0px; " cols="2">
                <div class="text-center white--text">
                    <h3>Departamento</h3>
                </div>
            </v-col>
            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px;" class="pa-0 ma-0">
                <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                    {{ ciudad.departamento }}
                </div>
            </v-col>
            <v-col class="secondary" style="border: solid 1px; border-color: black; border-top: 0px;" cols="2">
                <div class="text-center white--text">
                    <h3>Teléfono</h3>
                </div>
            </v-col>
            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px;" class="pa-0 ma-0">
                <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                    {{ telefono }}
                </div>
            </v-col>
        </v-row>

        <v-row style="margin: 0" class="mx-5">
            <v-col class="secondary" style=" border: solid 1px; border-color: black; border-top: 0px; " cols="2">
                <div class="text-center white--text">
                    <h3>Contacto</h3>
                </div>
            </v-col>
            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px;" class="pa-0 ma-0">
                <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                    {{ nombrecontacto }}
                </div>
            </v-col>
            <v-col class="secondary" style=" border: solid 1px; border-color: black; border-top: 0px;" cols="2">
                <div class="text-center white--text">
                    <h3>Cargo</h3>
                </div>
            </v-col>
            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px;" class="pa-0 ma-0">
                <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                    {{ cargo }}
                </div>
            </v-col>
        </v-row>

        <v-row style="margin: 0" class="mx-5">
            <v-col class="secondary" style=" border: solid 1px; border-color: black; border-top: 0px; " cols="2">
                <div class="text-center white--text">
                    <h3>Celular</h3>
                </div>
            </v-col>
            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px;" class="pa-0 ma-0">
                <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                    {{ celular }}
                </div>
            </v-col>
            <v-col class="secondary" style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                cols="2">
                <div class="text-center white--text">
                    <h3>Correo electrónico</h3>
                </div>
            </v-col>
            <v-col cols="4" xs="8" sm="8" md="4" lg="4" xl="4"
                style="border: solid 1px; border-color: black; border-top: 0px;" class="pa-0 ma-0">
                <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                    {{ email }}
                </div>
            </v-col>
        </v-row>

        <v-row style="margin: 0" class="mx-5">
            <v-col class="secondary" style="border: solid 1px; border-color: black; border-top: 0px; " cols="2" xs="4">
                <div class="text-center white--text">
                    <h3>Validez de la oferta</h3>
                </div>
            </v-col>
            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px;" class="pa-0 ma-0">
                <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                    {{ validezOferta.slice(0, 10) }}
                </div>
            </v-col>
            <v-col class="secondary" style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                cols="2">
                <div class="text-center white--text">
                    <h3>Entrega de resultados</h3>
                </div>
            </v-col>
            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px; " class="pa-0 ma-0">
                <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                    {{ entregaResultados.slice(0, 10) }}
                </div>
            </v-col>
        </v-row>

        <v-row style="margin: 0" class="mx-5">
            <v-col class="secondary" style=" border: solid 1px; border-color: black; border-top: 0px; " cols="2">
                <div class="text-center white--text">
                    <h3>Elaborador por</h3>
                </div>
            </v-col>
            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px;" class="pa-0 ma-0">
                <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                    {{ elaboradoN }} {{ elaboradoA }}
                </div>
            </v-col>
            <v-col class="secondary" style="border: solid 1px; border-color: black; border-top: 0px; " cols="2">
                <div class="text-center white--text ">
                    <h3>Cargo</h3>
                </div>
            </v-col>
            <v-col cols="4" style="border: solid 1px; border-color: black; border-top: 0px;" class="pa-0 ma-0">
                <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                    {{ elaboradoR }}
                </div>
            </v-col>
        </v-row>

        <v-row class="secondary mx-5" style=" margin: 0; border: solid 1px; border-color: black; border-top: 0px;">
            <v-col cols="4">
            </v-col>
            <v-col cols="4">
                <div class="text-center white--text">
                    <h3>2. Propuesta técnica y económica</h3>
                </div>
            </v-col>
            <v-col class="text-right" cols="4">
            </v-col>
        </v-row>

        <!-- item 1 -->
        <v-row class="secondary mx-5" style=" margin: 0; border: solid 1px; border-color: black; border-top: 0px;">
            <v-col cols="4">
            </v-col>
            <v-col cols="4">
                <div class="text-center white--text">
                    <h3>Ítem 1</h3>
                </div>
            </v-col>
            <v-col class="text-right">
            </v-col>
        </v-row>

        <v-row style=" margin: 0;" class="mx-5">
            <v-col cols="12" class="ma-0 pa-0">
                <v-simple-table>
                    <template v-slot:default>
                        <thead class="secondary">
                            <tr>
                                <th style=" border: solid 1px; border-color: black; " class="text-center white--text">
                                    <h2> Código de referencia </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                    class="text-center white--text">
                                    <h2> Descripción del ensayo </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                    class="text-center white--text">
                                    <h2> Unidades </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                    class="text-center white--text">
                                    <h2> Técnica analítica </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                    class="text-center white--text">
                                    <h2> Método analítico </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                    class="text-center white--text">
                                    <h2> Limite de cuantificación </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                    class="text-center white--text">
                                    <h2> Costo del ensayo </h2>
                                </th>
                            </tr>
                        </thead>

                        <tbody>
                            <tr class="text-center" v-for="(ensayo, i) in ensayosSeleccionados" :key="i">
                                <td style="border: solid 1px; border-color: black; border-top: 0px;">
                                    {{ ensayo.ensayo.ensayo }}
                                </td>
                                <td style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
                                    {{ ensayo.ensayo.descripcion }}
                                </td>
                                <td style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
                                    {{ ensayo.ensayo.unidades }}
                                </td>
                                <td style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
                                    {{ ensayo.ensayo.tecnica }}
                                </td>
                                <td style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
                                    {{ ensayo.ensayo.metodo }}
                                </td>
                                <td style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
                                    {{ ensayo.ensayo.limiteCuantificacion }}
                                </td>
                                <td style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
                                    ${{ Intl.NumberFormat("de-DE").format(ensayo.costoEnsayo) }}
                                </td>
                            </tr>
                            <tr>
                                <td class="secondary"
                                    style="border: solid 1px; border-color: black; border-right: 0px;">
                                </td>
                                <td class="secondary"
                                    style="border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                </td>
                                <td class="secondary"
                                    style="border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                </td>
                                <td class="secondary"
                                    style="border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                </td>
                                <td class="secondary"
                                    style="border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                </td>
                                <td style="border: solid 1px; border-color: black; border-left:0px;"
                                    class="secondary text-right white--text">
                                    <h2> Costo del ítem 1 </h2>
                                </td>
                                <td style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                    class="pa-0 ma-0">
                                    ${{ Intl.NumberFormat("de-DE").format(costo) }}
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-row>
        <!-- item 2 -->
        <v-row class="secondary mx-5" style=" margin: 0; border: solid 1px; border-color: black;">
            <v-col cols="4">
            </v-col>
            <v-col cols="4">
                <div class="text-center white--text">
                    <h3>Ítem 2</h3>
                </div>
            </v-col>
            <v-col class="text-right" cols="4">
            </v-col>
        </v-row>

        <v-row style=" margin: 0;" class="mx-5">
            <v-col cols="12" class="ma-0 pa-0">
                <v-simple-table>
                    <template v-slot:default>
                        <thead class="secondary" style="">
                            <tr>
                                <th style=" border: solid 1px; border-color: black;" class="text-center white--text">
                                    <h2> Código de referencia </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                    class="text-center white--text">
                                    <h2> Descripción del ensayo </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                    class="text-center white--text">
                                    <h2> Unidades </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                    class="text-center white--text">
                                    <h2> Técnica analítica </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                    class="text-center white--text">
                                    <h2> Método analítico </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                    class="text-center white--text">
                                    <h2> Limite de cuantificación </h2>
                                </th>
                                <th style=" border: solid 1px; border-color: black; border-left:0px;"
                                    class="text-center white--text">
                                    <h2> Costo del ensayo </h2>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="text-center" v-for="(ensayo, i) in ensayosSeleccionados2" :key="i">
                                <td style="border: solid 1px; border-color: black; border-top: 0px;">
                                    {{ ensayo.ensayo.ensayo }}
                                </td>
                                <td style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
                                    {{ ensayo.ensayo.descripcion }}
                                </td>
                                <td style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
                                    {{ ensayo.ensayo.unidades }}
                                </td>
                                <td style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
                                    {{ ensayo.ensayo.tecnica }}
                                </td>
                                <td style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
                                    {{ ensayo.ensayo.metodo }}
                                </td>
                                <td style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
                                    {{ ensayo.ensayo.limiteCuantificacion }}
                                </td>
                                <td style="border: solid 1px; border-color: black; border-top: 0px; border-left:0px;">
                                    ${{ Intl.NumberFormat("de-DE").format(ensayo.costoEnsayo) }}
                                </td>
                            </tr>
                            <tr>
                                <td class="secondary"
                                    style="border: solid 1px; border-color: black; border-right: 0px;">
                                </td>
                                <td class="secondary"
                                    style="border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                </td>
                                <td class="secondary"
                                    style="border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                </td>
                                <td class="secondary"
                                    style="border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                </td>
                                <td class="secondary"
                                    style="border: solid 1px; border-color: black; border-left:0px; border-right: 0px;">
                                </td>
                                <td style="border: solid 1px; border-color: black; border-left:0px;"
                                    class="secondary text-right white--text">
                                    <h2> Costo del ítem 2 </h2>
                                </td>
                                <td style=" border: solid 1px; border-color: black; border-top: 0px; border-left:0px;"
                                    class="pa-0 ma-0">
                                    ${{ Intl.NumberFormat("de-DE").format(costo2) }}
                                </td>
                            </tr>
                        </tbody>
                    </template>
                </v-simple-table>
            </v-col>
        </v-row>

        <!-- item 3 -->
        <v-row class="secondary mx-5" style=" margin: 0; border: solid 1px; border-color: black; border-top: 0px;">
            <v-col cols="4">
            </v-col>
            <v-col cols="4">
                <div class="text-center white--text ">
                    <h3>Ítem 3</h3>
                </div>
            </v-col>
            <v-col class="text-right" cols="4">
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from "axios";
export default {

    name: "PaginaCimprimir",
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
        ensayosSeleccionados: [],
        ensayosSeleccionados2: [],
        ensayosSeleccionados3: [],
    }),
    methods: {
        info() {
            this.datos = JSON.parse(localStorage.getItem("datos"))
            console.log(this.datos);
            if (this.datos.idCliente.contacto) {
                console.log("contacto");
                this.idCotizacion = this.datos._id
                this.fechaEmision = this.datos.fecha_emision.slice(0, 10)
                this.entregaResultados = this.datos.entrega_resultados.slice(0, 10)
                this.validezOferta = this.datos.validez_oferta.slice(0, 10)
                this.elaboradoN = this.datos.elabordo_por.nombre
                this.elaboradoA = this.datos.elabordo_por.apellidos
                this.elaboradoR = this.datos.elabordo_por.rol
                this.numeroCoti = this.datos.numero_cotizacion
                this.idCliente = this.datos.idCliente._id
                this.idcontacto = this.datos.idCliente.contacto._id
                this.tipoPersona = this.datos.idCliente.tipoPersona
                this.nombre = this.datos.idCliente.nombre
                this.apellidos = this.datos.idCliente.apellidos
                this.contacto = this.datos.idCliente.contacto
                this.nombrecontacto = this.datos.idCliente.contacto.nombre
                this.documento = this.datos.idCliente.documento
                this.direccion = this.datos.idCliente.direccion
                this.ciudad = this.datos.idCliente.ciudad
                this.telefono = this.datos.idCliente.telefono
                this.celular = this.datos.idCliente.celular
                this.cargo = this.datos.idCliente.cargo
                this.email = this.datos.idCliente.email
                this.descuento = this.datos.descuento
                if (this.datos.items.item1.itemsEnsayo) {
                    this.costo = this.datos.items.item1.costo
                    this.datos.items.item1.itemsEnsayo.forEach(ensayo => {
                        this.ensayosSeleccionados.push(ensayo)
                    });
                }
                if (this.datos.items.item2.itemsEnsayo) {
                    this.costo2 = this.datos.items.item2.costo
                    this.datos.items.item2.itemsEnsayo.forEach(ensayo => {
                        this.ensayosSeleccionados2.push(ensayo)
                    })
                }
                if (this.datos.items.item3.itemsEnsayo) {
                    this.costo3 = this.datos.items.item3.costo
                    this.datos.items.item3.itemsEnsayo.forEach(ensayo => {
                        this.ensayosSeleccionados3.push(ensayo)
                    })
                }
            } else {
                console.log("sin");
                this.idCotizacion = this.datos._id
                this.fechaEmision = this.datos.fecha_emision.slice(0, 10)
                this.entregaResultados = this.datos.entrega_resultados.slice(0, 10)
                this.validezOferta = this.datos.validez_oferta.slice(0, 10)
                this.validezOferta = this.datos.validez_oferta
                this.numeroCoti = this.datos.numero_cotizacion
                this.idCliente = this.datos.idCliente._id
                this.tipoPersona = this.datos.idCliente.tipoPersona
                this.elaborado = this.datos.elabordo_por.nombre
                this.nombre = this.datos.idCliente.nombre
                this.apellidos = this.datos.idCliente.apellidos
                this.contacto = ""
                this.nombrecontacto = ""
                this.documento = this.datos.idCliente.documento
                this.direccion = this.datos.idCliente.direccion
                this.ciudad = this.datos.idCliente.ciudad
                this.telefono = this.datos.idCliente.telefono
                this.celular = this.datos.idCliente.celular
                this.cargo = this.datos.idCliente.cargo
                this.email = this.datos.idCliente.email
                this.descuento = this.datos.descuento
                if (this.datos.items.item1.itemsEnsayo) {
                    this.costo = this.datos.items.item1.costo
                    this.datos.items.item1.itemsEnsayo.forEach(ensayo => {
                        this.ensayosSeleccionados.push(ensayo)
                    });
                }
                if (this.datos.items.item2.itemsEnsayo) {
                    this.costo2 = this.datos.items.item2.costo
                    this.datos.items.item2.itemsEnsayo.forEach(ensayo => {
                        this.ensayosSeleccionados2.push(ensayo)
                    })
                }
                if (this.datos.items.item3.itemsEnsayo) {
                    this.costo3 = this.datos.items.item3.costo
                    this.datos.items.item3.itemsEnsayo.forEach(ensayo => {
                        this.ensayosSeleccionados3.push(ensayo)
                    })
                }
            }
        },
        calidad() {
            axios.get("/calidad/listar")
                .then((response) => {
                    this.calidadOferta = response.data.listado[0].OfertaServicios
                    this.caliCodigo = this.calidadOferta[0].codigo
                    this.caliaprobacion = this.calidadOferta[0].aprobacion
                    this.caliVersion = this.calidadOferta[0].version
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        info2() {
            axios.get("/cotizacion/traerInfo")
                .then((response) => {
                    this.datos2 = response.data.info
                    this.cotiDescripcion = this.datos2[0].descripcion
                    this.cotiNit = this.datos2[0].nit
                    this.cotiDireccion = this.datos2[0].direccion
                    this.cotiTelefono = this.datos2[0].telefono
                    this.cotiCorreo = this.datos2[0].correo
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
    created() {
        this.info();
        this.calidad();
        this.info2();
    },
    destroyed() {
        alert("Si funciona")
        localStorage.setItem("datos", JSON.stringify({}))
    }
}
</script>

<style>
#coti2 {
    display: inline-block;
    width: 200px;
    height: 200px;
}

@supports (-webkit-mask: url("")) or (mask: url("")) {
    #coti2 {
        -webkit-mask: url(https://upload.wikimedia.org/wikipedia/commons/8/83/Sena_Colombia_logo.svg);
        mask: url(https://upload.wikimedia.org/wikipedia/commons/8/83/Sena_Colombia_logo.svg);
        mask-size: cover;
    }
}
</style>