<template>
    <v-container fluid class="mt-10">
        <v-row>
            <v-col cols="12" xs="12" sm="12" md="2" lg="2" xl="3" class="text-center">
                <img height="300" width="300 "
                    src="https://agenciapublicadeempleo.sena.edu.co/imgLayout/logos/LogoSENA-naranja_vector.png" />
            </v-col>
            <v-col cols="12" xs="12" sm="12" md="6" lg="6" xl="3">
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

            <v-col cols="12" xs="12" sm="12" md="2" lg="2" xl="3" class="mt-3">
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
            <v-col cols="12" xs="12" sm="12" md="2" lg="2" xl="3" class="mt-3">
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

        <v-row style=" margin: 0; border: solid 1px; border-color: black; background-color: #ff5722; " class="mx-5">
            <v-col cols="12">
                <div class="text-center white--text text-no-wrap deep-orange">
                    <h3>1. Datos del cliente</h3>
                </div>
            </v-col>
        </v-row>

        <v-row style="margin: 0" class="mx-5">
            <v-col style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                cols="12" xs="4" sm="4" md="2" lg="2" xl="2">
                <div class="text-center white--text text-no-wrap deep-orange">
                    <h3>Cliente</h3>
                </div>
            </v-col>

            <v-col cols="12" xs="8" sm="8" md="4" lg="4" xl="4"
                style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                class="pa-0 ma-0 text-center">
                <v-row style="margin:0">
                    <v-col cols="12" xs="0" sm="0" md="2" lg="2" xl="2"></v-col>
                    <v-col cols="12" xs="12" sm="12" md="8" lg="8" xl="8">
                        <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width
                            hide-details>
                            {{ nombre }}
                        </div>
                    </v-col>
                    <v-col cols="12" xs="0" sm="0" md="2" lg="2" xl="2">
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
                style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;" class="pa-0 ma-0">
                <div class="pa-0 ma-0 font-weight-black text-center my-3" full-width hide-details>
                    {{ documento }}
                </div>
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
        elaborado: "",
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
            this.datos = this.$store.state.cotiImprimir
            if (this.datos.idCliente.contacto) {
                console.log("contacto");
                this.idCotizacion = this.datos._id
                this.fechaEmision = this.datos.fecha_emision.slice(0, 10)
                this.entregaResultados = this.datos.entrega_resultados.slice(0, 10)
                this.validezOferta = this.datos.validez_oferta.slice(0, 10)
                this.elaborado = this.datos.elabordo_por.nombre
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
    }
}
</script>