<template>
    <v-container class="ma-10">
            <!-- <template v-slot:activator="{ on, attrs }">
                <v-btn color="deep-orange" dark v-bind="attrs" v-on="on" class="center">
                  Crear Muestra
                </v-btn> 
              </template> -->
            <v-card>
                <v-list three-line subheader>
                    <v-container fluid>
                        <v-row style="margin: 0">
                            <v-col cols="2" class="text-left">
                                <div class="accent mt-10" id="muestra2"></div>
                                <!-- <img height="200" width="200"
                                    src="https://agenciapublicadeempleo.sena.edu.co/imgLayout/logos/LogoSENA-naranja_vector.png" /> -->
                            </v-col>
                            <v-col cols="10">
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
                                cols="2">
                                <div class="text-center white--text text-no-wrap deep-orange">
                                    <h3>Solicitante</h3>
                                </div>
                            </v-col>
                            <v-col cols="4"
                                style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                class="pa-0 ma-0 text-center">

                                <h3 class="mt-1">{{soliNombre}}</h3>
                            </v-col>
                            <v-col
                                style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                cols="2">
                                <div class="text-center white--text text-no-wrap deep-orange">
                                    <h3>Departamento</h3>
                                </div>
                            </v-col>
                            <v-col cols="4"
                                style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                class="pa-0 ma-0 text-center">
                                <h3 class="mt-3">{{soliDepartamento}}</h3>
                            </v-col>
                        </v-row>
                        <v-row style="margin: 0" class="mx-5">
                            <v-col
                                style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                cols="2">
                                <div class="text-center white--text text-no-wrap deep-orange">
                                    <h3>NIT/C.C.</h3>
                                </div>
                            </v-col>
                            <v-col cols="4"
                                style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                class="pa-0 ma-0 text-center">
                                <h3 class="mt-3">{{soliDocumento}}</h3>
                            </v-col>
                            <v-col
                                style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                cols="2">
                                <div class="text-center white--text text-no-wrap deep-orange">
                                    <h3>Contacto</h3>
                                </div>
                            </v-col>
                            <v-col cols="4"
                                style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                class="pa-0 ma-0 text-center">
                                <h3 class="mt-3">{{soliNombreContacto}}</h3>
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
                                class="pa-0 ma-0 text-center">
                                <h3 class="mt-3">{{soliDireccion}}</h3>
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
                                class="pa-0 ma-0 text-center">
                                <h3 class="mt-3">{{soliTelefono}}</h3>
                            </v-col>
                        </v-row>
                        <v-row style="margin: 0" class="mx-5">
                            <v-col
                                style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                cols="2">
                                <div class="text-center white--text text-no-wrap deep-orange">
                                    <h3>Ciudad</h3>
                                </div>
                            </v-col>
                            <v-col cols="4"
                                style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                class="pa-0 ma-0 text-center">
                                <h3 class="mt-3">{{soliCiudad}}</h3>
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
                                class="pa-0 ma-0 text-center">
                                <h3 class="mt-3">{{soliEmail}}</h3>
                            </v-col>
                        </v-row>
                        <v-row style="margin: 0" class="mx-5">
                            <v-col
                                style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                cols="2">
                                <div class="text-center white--text text-no-wrap deep-orange mt-4">
                                    <h3>Cotización</h3>
                                </div>
                            </v-col>
                            <v-col cols="4"
                                style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                class="pa-0 ma-0 text-center">
                                <h3 class="mt-3">
                                    {{soliCoti}}
                                </h3>
                            </v-col>
                            <v-col
                                style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                cols="2">
                                <div class="text-center white--text text-no-wrap deep-orange mt-4">
                                    <h3>Items</h3>
                                </div>
                            </v-col>
                            <v-col cols="4"
                                style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px;"
                                class="pa-0 ma-0 text-center">
                                <h3 class="mt-3">
                                    {{soliItem}}
                                </h3>
                            </v-col>
                        </v-row>

                        <v-row class="mx-5"
                            style=" margin: 0; border: solid 1px; border-color: black; background-color: #ff5722; border-top: 0px;">
                            <v-col cols="4">
                            </v-col>
                            <v-col cols="4">
                                <div class="text-center white--text text-no-wrap deep-orange">
                                    <h3>Datos de la muestra</h3>
                                </div>
                            </v-col>
                        </v-row>
                        <v-row style="margin: 0" class="mx-5">
                            <v-col class="text-center white--text" style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; "
                                cols="1"><h3> Código de </h3>
                                         <h3> muestra </h3></v-col>
                            <v-col class="text-center white--text" style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px"
                                cols="1"><h3> Municipio de </h3>
                                                    <h3> recolección </h3></v-col>
                            <v-col class="text-center white--text" style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px"
                                cols="2"><h3> Dirección de toma </h3>
                                                    <h3> de muestra </h3></v-col>
                            <v-col class="text-center white--text" style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px"
                                cols="1"><h3> Lugar de toma de </h3>
                                                    <h3> muestra </h3></v-col>
                            <v-col class="text-center white--text" style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px"
                                cols="1"> <h3> Muestra </h3>
                                                    <h3> recolectada por </h3></v-col>
                            <v-col class="text-center white--text" style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px"
                                cols="2"><h3> Procedimiento </h3>
                                                    <h3> de muestreo</h3></v-col>
                            <v-col class="text-center white--text" style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px"
                                cols="1"><h3> Tipo de muestra</h3></v-col>
                            <v-col class="text-center white--text" style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px"
                                cols="1"><h3> Matriz de la </h3>
                                                    <h3> muestra </h3></v-col>
                            <v-col class="text-center white--text" style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px"
                                cols="1"><h3> Fecha y hora de </h3>
                                                    <h3> recolección </h3></v-col>
                            <v-col class="text-center white--text" style=" background-color: #ff5722; border: solid 1px; border-color: black; border-top: 0px; border-left: 0px"
                                cols="1"><h3> Observaciones </h3></v-col>                    
                        </v-row>
                        <v-row style="margin: 0" class="mx-5">
                            <v-col class="text-center" style="border: solid 1px; border-color: black; border-top: 0px"
                            cols="1"><h3>{{soliCodM}}</h3></v-col>
                            <v-col class="text-center" style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px"
                            cols="1"><h3>{{soliMunR}}</h3></v-col>
                            <v-col class="text-center" style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px"
                            cols="2"><h3>{{soliDirM}}</h3></v-col>
                            <v-col class="text-center" style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px"
                            cols="1"><h3>{{soliLugarM}}</h3></v-col>
                            <v-col class="text-center" style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px"
                            cols="1"><h3>{{soliRecolectadaPor}}</h3></v-col>
                            <v-col class="text-center" style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px"
                            cols="2"><h3>{{soliProcedimiento}}</h3></v-col>
                            <v-col class="text-center" style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px"
                            cols="1"><h3>{{soliTipoM}}</h3></v-col>
                            <v-col class="text-center" style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px"
                            cols="1"><h3>{{soliMatrizM}}</h3></v-col>
                            <v-col class="text-center" style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px"
                            cols="1"><h3>{{soliFechaHora.slice(0, 10)}}</h3></v-col>
                            <v-col class="text-center" style="border: solid 1px; border-color: black; border-top: 0px; border-left: 0px"
                            cols="1"></v-col>
                        </v-row>

                    </v-container>
                </v-list>
            </v-card>
    </v-container>
</template>
    
<script>
import axios from "axios";
export default {
    name: 'PageMuestras',
    data: () => ({
        search: '',
        soliNombre: '',
        soliApellido: '',
        soliDepartamento: '',
        soliDocumento: '',
        soliNombreContacto: '',
        soliDireccion: '',
        soliTelefono: '',
        soliCiudad: '',
        soliEmail: '',
        soliCoti: '',
        soliItem: '',
        soliCodM: '',
        soliMunR: '', 
        soliDirM: '',
        soliLugarM:'',
        soliRecolectadaPor:'',
        soliProcedimiento: '',
        soliTipoM:'',
        soliMatrizM:'',
        soliFechaHora: '',
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
        datos: {},
    }),
    methods: {
        fechaSalida(r) {
            let d = new Date(r);
            return d.toLocaleDateString() + " - " + d.toLocaleTimeString();
        },
        itemInf(){
            this.datos=this.$store.state.imprimirM
            console.log(this.datos);
            if (this.datos.cotizacion.idContacto) {
                this.soliNombre = this.datos.cotizacion.idCliente.nombre
                this.soliDepartamento = this.datos.munRecoleccion.departamento
                this.soliDocumento = this.datos.cotizacion.idCliente.documento
                this.soliNombreContacto = this.datos.cotizacion.idCliente.contacto.nombre
                this.soliDireccion = this.datos.cotizacion.idCliente.direccion
                this.soliCiudad = this.datos.cotizacion.idCliente.ciudad.ciudad
                this.soliEmail = this.datos.cotizacion.idCliente.email
                this.soliTelefono= this.datos.cotizacion.idCliente.celular
                this.soliCoti = this.datos.cotizacion.numero_cotizacion
                this.soliItem = this.datos.item
                this.soliCodM = this.datos.codMuestra
                this.soliMunR = this.datos.munRecoleccion.ciudad
                this.soliDirM = this.datos.direccionTomaMuestra
                this.soliLugarM = this.datos.lugarTomaMuestra
                this.soliRecolectadaPor = this.datos.muestraRecolectadaPor
                this.soliProcedimiento = this.datos.procedimientoMuestreo
                this.soliTipoM = this.datos.tipoMuestra.tipos
                this.soliMatrizM = this.datos.matrizMuestra
                this.soliFechaHora = this.datos.fechaRecoleccion
            } else {
                this.soliNombre = this.datos.cotizacion.idCliente.nombre
                this.soliDepartamento = this.datos.munRecoleccion.departamento
                this.soliDocumento = this.datos.cotizacion.idCliente.documento
                this.soliDireccion = this.datos.cotizacion.idCliente.direccion
                this.soliCiudad = this.datos.cotizacion.idCliente.ciudad.ciudad
                this.soliEmail = this.datos.cotizacion.idCliente.email
                this.soliTelefono= this.datos.cotizacion.idCliente.celular
                this.soliCoti = this.datos.cotizacion.numero_cotizacion
                this.soliItem = this.datos.item
                this.soliCodM = this.datos.codMuestra
                this.soliMunR = this.datos.munRecoleccion.ciudad
                this.soliDirM = this.datos.direccionTomaMuestra
                this.soliLugarM = this.datos.lugarTomaMuestra
                this.soliRecolectadaPor = this.datos.muestraRecolectadaPor
                this.soliProcedimiento = this.datos.procedimientoMuestreo
                this.soliTipoM = this.datos.tipoMuestra.tipos
                this.soliMatrizM = this.datos.matrizMuestra
                this.soliFechaHora = this.datos.fechaRecoleccion
            }
        },
        customFilter2(item, queryText) {
            const textOne = item.numero_cotizacion
            const searchText = queryText
            return textOne.indexOf(searchText) > -1
        },
        Volver() {
            this.$router.push("/Home");
        },
        Imprimir() {
            this.$router.push("/ImprimirMuestra");
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
            if (this.datos.contacto) {
                this.soliNombre = this.datos.nombre
                this.soliApellido = this.datos.apellidos
                this.soliDepartamento = this.datos.ciudad.departamento
                this.soliDocumento = this.datos.documento
                this.soliNombreContacto = this.datos.contacto.nombre
                this.soliDireccion = this.datos.direccion
                this.soliTelefono = this.datos.celular
                this.soliCiudad = this.datos.ciudad.ciudad
                this.soliEmail = this.datos.email
            } else {
                this.soliNombre = this.datos.nombre
                this.soliApellido = this.datos.apellidos
                this.soliDepartamento = this.datos.ciudad.departamento
                this.soliDocumento = this.datos.documento
                this.soliDireccion = this.datos.direccion
                this.soliTelefono = this.datos.celular
                this.soliCiudad = this.datos.ciudad.ciudad
                this.soliEmail = this.datos.email
            }
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
        // if (datos.contacto) {

        //     this.info()
        // } else {
        //     this.traerCotizacion()
        //     this.info()
        // }

    },
    created() {
        // this.listarMuestras();
        // this.usuarios();
        // this.listarCiudad();
        // this.listarTiposs();
        // this.listarCotizacioness();
        this.itemInf();

    },
    // la idea es que al mometo de guardar la muestra saca el id y con otra peticion listarla con los populates para que de esta forma se vea la informacion el la tabla
}
</script>
<style>
#muestra2 {
    display: inline-block;
    width: 200px;
    height: 200px;
}

@supports (-webkit-mask: url("")) or (mask: url("")) {
    #muestra2 {
        -webkit-mask: url(https://upload.wikimedia.org/wikipedia/commons/8/83/Sena_Colombia_logo.svg);
        mask: url(https://upload.wikimedia.org/wikipedia/commons/8/83/Sena_Colombia_logo.svg);
        mask-size: cover; 
    }
}
</style>