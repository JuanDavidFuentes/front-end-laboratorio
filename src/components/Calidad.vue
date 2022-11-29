
<template>
    <v-container class="mt-15 mb-15">
        <v-row>
            <v-col cols="7" xs="5" sm="8" md="10" lg="10" xl="10">
                <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver1()">
                    Volver
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-col cols="12" class="text-center">
                <v-select v-model="valor" :items="TipoCalidad" dense filled rounded label="Seleccione la calidad">
                </v-select>
                <template v-if="valor === 1">
                    <v-card>
                        <template>
                            <v-card>
                                <v-card-title>
                                    Calidad informe de resultados
                                </v-card-title>
                                <v-data-table :headers="headers" :items="calidad">
                                    <template v-slot:[`item.editar`]="{ item }">
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-icon color="blue" rounded v-bind="attrs" v-on="on"
                                                    @click="editarC(item._id, item.InformeResultado[0])">
                                                    mdi-border-color
                                                </v-icon>
                                            </template>
                                            <span>Editar informacion</span>
                                        </v-tooltip>
                                    </template>
                                </v-data-table>
                            </v-card>
                        </template>
                    </v-card>
                </template>
                <template v-if="valor === 2">
                    <v-card>
                        <template>
                            <v-card>
                                <v-card-title>
                                    Calidad instructivo toma de muestras
                                </v-card-title>
                                <v-data-table :headers="headers2" :items="calidad">
                                    <template v-slot:[`item.editar`]="{ item }">
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-icon color="blue" rounded v-bind="attrs" v-on="on"
                                                    @click="editarC(item._id, item.InstructivoTomaMuestras[0])">
                                                    mdi-border-color
                                                </v-icon>
                                            </template>
                                            <span>Editar informacion</span>
                                        </v-tooltip>
                                    </template>
                                </v-data-table>
                            </v-card>
                        </template>
                    </v-card>
                </template>
                <template v-if="valor === 3">
                    <v-card>
                        <template>
                            <v-card>
                                <v-card-title>
                                    Calidad listado de muestras
                                </v-card-title>
                                <v-data-table :headers="headers3" :items="calidad">
                                    <template v-slot:[`item.editar`]="{ item }">
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-icon color="blue" rounded v-bind="attrs" v-on="on"
                                                    @click="editarC(item._id, item.ListadoMuestras[0])">
                                                    mdi-border-color
                                                </v-icon>
                                            </template>
                                            <span>Editar informacion</span>
                                        </v-tooltip>
                                    </template>
                                </v-data-table>
                            </v-card>
                        </template>
                    </v-card>
                </template>
                <template v-if="valor === 4">
                    <v-card>
                        <template>
                            <v-card>
                                <v-card-title>
                                    Calidad oferta de servicios
                                </v-card-title>
                                <v-data-table :headers="headers4" :items="calidad">
                                    <template v-slot:[`item.editar`]="{ item }">
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-icon color="blue" rounded v-bind="attrs" v-on="on"
                                                    @click="editarC(item._id, item.OfertaServicios[0])">
                                                    mdi-border-color
                                                </v-icon>
                                            </template>
                                            <span>Editar informacion</span>
                                        </v-tooltip>
                                    </template>
                                </v-data-table>
                            </v-card>
                        </template>
                    </v-card>
                </template>
                <template v-if="valor === 5">
                    <v-card>
                        <template>
                            <v-card>
                                <v-card-title>
                                    Calidad orden de servicios
                                </v-card-title>
                                <v-data-table :headers="headers5" :items="calidad">
                                    <template v-slot:[`item.editar`]="{ item }">
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-icon color="blue" rounded v-bind="attrs" v-on="on"
                                                    @click="editarC(item._id, item.OrdenServicio[0])">
                                                    mdi-border-color
                                                </v-icon>
                                            </template>
                                            <span>Editar informacion</span>
                                        </v-tooltip>
                                    </template>
                                </v-data-table>
                            </v-card>
                        </template>
                    </v-card>
                </template>
                <template v-if="valor === 6">
                    <v-card>
                        <template>
                            <v-card>
                                <v-card-title>
                                    Calidad recepcion de muestras
                                </v-card-title>
                                <v-data-table :headers="headers6" :items="calidad">
                                    <template v-slot:[`item.editar`]="{ item }">
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-icon color="blue" rounded v-bind="attrs" v-on="on"
                                                    @click="editarC(item._id, item.RecepcionMuestras[0])">
                                                    mdi-border-color
                                                </v-icon>
                                            </template>
                                            <span>Editar informacion</span>
                                        </v-tooltip>
                                    </template>
                                </v-data-table>
                            </v-card>
                        </template>
                    </v-card>
                </template>
                <template v-if="valor === 7">
                    <v-card>
                        <template>
                            <v-card>
                                <v-card-title>
                                    Calidad seguimiento
                                </v-card-title>
                                <v-data-table :headers="headers7" :items="calidad">
                                    <template v-slot:[`item.editar`]="{ item }">
                                        <v-tooltip bottom>
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-icon color="blue" rounded v-bind="attrs" v-on="on"
                                                    @click="editarC(item._id, item.Seguimiento[0])">
                                                    mdi-border-color
                                                </v-icon>
                                            </template>
                                            <span>Editar informacion</span>
                                        </v-tooltip>
                                    </template>
                                </v-data-table>
                            </v-card>
                        </template>
                    </v-card>
                </template>
            </v-col>
        </v-row>
        <v-dialog v-model="dialog2" persistent>
            <v-card style="padding: 0px">
                <v-card-title v-if="valor === 1" class="text-h5 mb-5"> Calidad informe de resultados </v-card-title>
                <v-card-title v-if="valor === 2" class="text-h5 mb-5"> Calidad instructivo toma de muestras
                </v-card-title>
                <v-card-title v-if="valor === 3" class="text-h5 mb-5"> Calidad listado de muestras </v-card-title>
                <v-card-title v-if="valor === 4" class="text-h5 mb-5"> Calidad oferta de servicios </v-card-title>
                <v-card-title v-if="valor === 5" class="text-h5 mb-5"> Calidad orden de servicios </v-card-title>
                <v-card-title v-if="valor === 6" class="text-h5 mb-5"> Calidad recepcion de muestras </v-card-title>
                <v-card-title v-if="valor === 7" class="text-h5 mb-5"> Calidad seguimiento </v-card-title>

                <v-container v-if="valor === 1">
                    <v-row>
                        <v-col cols="5" md="6">
                            <v-text-field class="mt-n7" v-model="codigo" label="Codigo" required dense filled rounded>
                            </v-text-field>
                        </v-col>

                        <v-col cols="5" md="6">
                            <v-text-field class="mt-n7" v-model="aprobacion" label="Aprobación" required dense filled
                                rounded></v-text-field>
                        </v-col>

                        <v-col cols="5" md="6">
                            <v-text-field class="mt-n7" v-model="version" label="Versión" required dense filled rounded>
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-container>

                <v-container v-if="valor === 2">
                    <v-row>
                        <v-col cols="5" md="6">
                            <v-text-field class="mt-n7" v-model="codigo" label="Codigo" required dense filled rounded>
                            </v-text-field>
                        </v-col>

                        <v-col cols="5" md="6">
                            <v-text-field class="mt-n7" v-model="aprobacion" label="Aprobación" required dense filled
                                rounded></v-text-field>
                        </v-col>

                        <v-col cols="5" md="6">
                            <v-text-field class="mt-n7" v-model="version" label="Versión" required dense filled rounded>
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-container>
                <v-container v-if="valor === 3">
                    <v-row>
                        <v-col cols="5" md="6">
                            <v-text-field class="mt-n7" v-model="codigo" label="Codigo" required dense filled rounded>
                            </v-text-field>
                        </v-col>

                        <v-col cols="5" md="6">
                            <v-text-field class="mt-n7" v-model="aprobacion" label="Aprobación" required dense filled
                                rounded></v-text-field>
                        </v-col>

                        <v-col cols="5" md="6">
                            <v-text-field class="mt-n7" v-model="version" label="Versión" required dense filled rounded>
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-container>

                <v-container v-if="valor === 4">
                    <v-row>
                        <v-col cols="5" md="6">
                            <v-text-field class="mt-n7" v-model="codigo" label="Codigo" required dense filled rounded>
                            </v-text-field>
                        </v-col>

                        <v-col cols="5" md="6">
                            <v-text-field class="mt-n7" v-model="aprobacion" label="Aprobación" required dense filled
                                rounded></v-text-field>
                        </v-col>

                        <v-col cols="5" md="6">
                            <v-text-field class="mt-n7" v-model="version" label="Versión" required dense filled rounded>
                            </v-text-field>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea class="mt-n7" rounded v-model="observacionesdelservicio" filled auto-grow label="Observaciones del servicio" row-height="20"></v-textarea>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea class="mt-n7" rounded v-model="aceptaciondelservicio" filled auto-grow label="Aceptación del servicio" row-height="20"></v-textarea>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea class="mt-n7" rounded v-model="condicionescomerciales" filled auto-grow label="Condiciones comerciales" row-height="20"></v-textarea>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea class="mt-n7" rounded v-model="condicionestecnicas" filled auto-grow label="Condiciones tecnicas" row-height="20"></v-textarea>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea class="mt-n7" rounded v-model="garantiadelservicio" filled auto-grow label="Garantia del servicio" row-height="20"></v-textarea>
                        </v-col>
                        <v-col cols="12">
                            <v-textarea class="mt-n7" rounded v-model="calidaddelservicio" filled auto-grow label="Calidad del servicio" row-height="20"></v-textarea>
                        </v-col>
                    </v-row>
                </v-container>

                <v-container v-if="valor === 5">
                    <v-row>
                        <v-col cols="5" md="6">
                            <v-text-field class="mt-n7" v-model="codigo" label="Codigo" required dense filled rounded>
                            </v-text-field>
                        </v-col>

                        <v-col cols="5" md="6">
                            <v-text-field class="mt-n7" v-model="aprobacion" label="Aprobación" required dense filled
                                rounded></v-text-field>
                        </v-col>

                        <v-col cols="5" md="6">
                            <v-text-field class="mt-n7" v-model="version" label="Versión" required dense filled rounded>
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-container>

                <v-container v-if="valor === 6">
                    <v-row>
                        <v-col cols="5" md="6">
                            <v-text-field class="mt-n7" v-model="codigo" label="Codigo" required dense filled rounded>
                            </v-text-field>
                        </v-col>

                        <v-col cols="5" md="6">
                            <v-text-field class="mt-n7" v-model="aprobacion" label="Aprobación" required dense filled
                                rounded></v-text-field>
                        </v-col>

                        <v-col cols="5" md="6">
                            <v-text-field class="mt-n7" v-model="version" label="Versión" required dense filled rounded>
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-container>

                <v-container v-if="valor === 7">
                    <v-row>
                        <v-col cols="5" md="6">
                            <v-text-field class="mt-n7" v-model="codigo" label="Codigo" required dense filled rounded>
                            </v-text-field>
                        </v-col>

                        <v-col cols="5" md="6">
                            <v-text-field class="mt-n7" v-model="aprobacion" label="Aprobación" required dense filled
                                rounded></v-text-field>
                        </v-col>

                        <v-col cols="5" md="6">
                            <v-text-field class="mt-n7" v-model="version" label="Versión" required dense filled rounded>
                            </v-text-field>
                        </v-col>
                    </v-row>
                </v-container>



                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn class="mr-15" outlined color="red darken-3" @click="Cerrar()">
                        Cancelar
                    </v-btn>
                    <v-btn color="success" @click="editar2()"> Editar Datos </v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
    </v-container>
</template>
<script>
import axios from "axios";
export default {
    name: 'PageCalidad',
    data: () => ({
        search: '',
        calidad: [],
        id: "",
        codigo: "",
        aprobacion: "",
        version: "",
        valor: 1,
        aceptaciondelservicio: "",
        condicionescomerciales: "",
        condicionestecnicas: "",
        garantiadelservicio: "",
        calidaddelservicio: "",
        observacionesdelservicio:"",
        dialog2: false,
        TipoCalidad: [
            { text: "Informe de resultados", value: 1 },
            { text: "Instructivo toma de muestras", value: 2 },
            { text: "Listado de muestras", value: 3 },
            { text: "Oferta de servicios", value: 4 },
            { text: "Orden de servicios", value: 5 },
            { text: "Recepcion de muestras", value: 6 },
            { text: "Seguimiento", value: 7 },
        ],
        headers: [
            {
                text: 'Aprobación',
                sortable: false,
                align: 'start',
                value: "InformeResultado[0].aprobacion",
            },
            {
                text: 'Codigo',
                align: 'start',
                sortable: false,
                value: 'InformeResultado[0].codigo',
            },
            {
                text: 'Versión',
                align: 'start',
                sortable: false,
                value: 'InformeResultado[0].version',
            },
            {
                text: 'Editar',
                align: 'start',
                sortable: false,
                value: 'editar',
            },
        ],
        headers2: [
            {
                text: 'Aprobación',
                sortable: false,
                align: 'start',
                value: "InstructivoTomaMuestras[0].aprobacion",
            },
            {
                text: 'Codigo',
                align: 'start',
                sortable: false,
                value: 'InstructivoTomaMuestras[0].codigo',
            },
            {
                text: 'Versión',
                align: 'start',
                sortable: false,
                value: 'InstructivoTomaMuestras[0].version',
            },
            {
                text: 'Editar',
                align: 'start',
                sortable: false,
                value: 'editar',
            },
        ],
        headers3: [
            {
                text: 'Aprobación',
                sortable: false,
                align: 'start',
                value: "ListadoMuestras[0].aprobacion",
            },
            {
                text: 'Codigo',
                align: 'start',
                sortable: false,
                value: 'ListadoMuestras[0].codigo',
            },
            {
                text: 'Versión',
                align: 'start',
                sortable: false,
                value: 'ListadoMuestras[0].version',
            },
            {
                text: 'Editar',
                align: 'start',
                sortable: false,
                value: 'editar',
            },
        ],
        headers4: [
            {
                text: 'Aprobación',
                sortable: false,
                align: 'start',
                value: "OfertaServicios[0].aprobacion",
            },
            {
                text: 'Codigo',
                align: 'start',
                sortable: false,
                value: 'OfertaServicios[0].codigo',
            },
            {
                text: 'Versión',
                align: 'start',
                sortable: false,
                value: 'OfertaServicios[0].version',
            },
            {
                text: 'Editar',
                align: 'start',
                sortable: false,
                value: 'editar',
            },
        ],
        headers5: [
            {
                text: 'Aprobación',
                sortable: false,
                align: 'start',
                value: "OrdenServicio[0].aprobacion",
            },
            {
                text: 'Codigo',
                align: 'start',
                sortable: false,
                value: 'OrdenServicio[0].codigo',
            },
            {
                text: 'Versión',
                align: 'start',
                sortable: false,
                value: 'OrdenServicio[0].version',
            },
            {
                text: 'Editar',
                align: 'start',
                sortable: false,
                value: 'editar',
            },
        ],
        headers6: [
            {
                text: 'Aprobación',
                sortable: false,
                align: 'start',
                value: "RecepcionMuestras[0].aprobacion",
            },
            {
                text: 'Codigo',
                align: 'start',
                sortable: false,
                value: 'RecepcionMuestras[0].codigo',
            },
            {
                text: 'Versión',
                align: 'start',
                sortable: false,
                value: 'RecepcionMuestras[0].version',
            },
            {
                text: 'Editar',
                align: 'start',
                sortable: false,
                value: 'editar',
            },
        ],
        headers7: [
            {
                text: 'Aprobación',
                sortable: false,
                align: 'start',
                value: "Seguimiento[0].aprobacion",
            },
            {
                text: 'Codigo',
                align: 'start',
                sortable: false,
                value: 'Seguimiento[0].codigo',
            },
            {
                text: 'Versión',
                align: 'start',
                sortable: false,
                value: 'Seguimiento[0].version',
            },
            {
                text: 'Editar',
                align: 'start',
                sortable: false,
                value: 'editar',
            },
        ],
    }),
    methods: {
        listar() {
            axios.get(`/calidad/listar`)
                .then((response) => {
                    console.log(response);
                    this.calidad = response.data.listado
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        editarC(itemid, itemdatos) {
            this.id = itemid
            this.dialog2 = true
            if (this.valor === 1) {
                this.codigo = itemdatos.codigo
                this.aprobacion = itemdatos.aprobacion
                this.version = itemdatos.version
            }
            if (this.valor === 2) {
                this.codigo = itemdatos.codigo
                this.aprobacion = itemdatos.aprobacion
                this.version = itemdatos.version
            }
            if (this.valor === 3) {
                this.codigo = itemdatos.codigo
                this.aprobacion = itemdatos.aprobacion
                this.version = itemdatos.version
            }
            if (this.valor === 4) {
                this.codigo = itemdatos.codigo
                this.aprobacion = itemdatos.aprobacion
                this.version = itemdatos.version
                this.observacionesdelservicio=itemdatos.observacionesdelservicio
                this.aceptaciondelservicio = itemdatos.anexodecotizaciones.aceptaciondelservicio
                this.condicionescomerciales = itemdatos.anexodecotizaciones.condicionescomerciales
                this.condicionestecnicas = itemdatos.anexodecotizaciones.condicionestecnicas
                this.garantiadelservicio = itemdatos.anexodecotizaciones.garantiadelservicio
                this.calidaddelservicio = itemdatos.anexodecotizaciones.calidaddelservicio
            }
            if (this.valor === 5) {
                this.codigo = itemdatos.codigo
                this.aprobacion = itemdatos.aprobacion
                this.version = itemdatos.version
            }
            if (this.valor === 6) {
                this.codigo = itemdatos.codigo
                this.aprobacion = itemdatos.aprobacion
                this.version = itemdatos.version
            }
            if (this.valor === 7) {
                this.codigo = itemdatos.codigo
                this.aprobacion = itemdatos.aprobacion
                this.version = itemdatos.version
            }
            if (this.valor === "" || this.valor === null || this.valor == 0 || this.valor == undefined) {
                this.$swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Error inicia sesión nuevamente",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        },
        editar2() {
            if (this.valor === 1) {
                console.log(this.valor);
                console.log(this.id);
                let header = { headers: { "token": this.$store.state.token } };
                axios.put(`/calidad/calidadPut/${this.id}`, {
                    InformeResultado: [
                        {
                            codigo: this.codigo,
                            aprobacion: this.aprobacion,
                            version: this.version
                        }
                    ]
                }, header)
                    .then((response) => {
                        this.$swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: response.data.msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        this.codigo = ""
                        this.aprobacion = ""
                        this.version = ""
                        this.dialog2 = false
                        this.listar();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
            if (this.valor === 2) {
                console.log(this.valor);
                let header = { headers: { "token": this.$store.state.token } };
                axios.put(`/calidad/calidadPut/${this.id}`, {
                    InstructivoTomaMuestras: [
                        {
                            codigo: this.codigo,
                            aprobacion: this.aprobacion,
                            version: this.version
                        }
                    ]
                }, header)
                    .then((response) => {
                        this.$swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: response.data.msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        this.codigo = ""
                        this.aprobacion = ""
                        this.version = ""
                        this.dialog2 = false
                        this.listar();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
            if (this.valor === 3) {
                console.log(this.valor);
                let header = { headers: { "token": this.$store.state.token } };
                axios.put(`/calidad/calidadPut/${this.id}`, {
                    ListadoMuestras: [
                        {
                            codigo: this.codigo,
                            aprobacion: this.aprobacion,
                            version: this.version
                        }
                    ]
                }, header)
                    .then((response) => {
                        this.$swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: response.data.msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        this.codigo = ""
                        this.aprobacion = ""
                        this.version = ""
                        this.dialog2 = false
                        this.listar();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
            if (this.valor === 4) {
                console.log(this.valor);
                let header = { headers: { "token": this.$store.state.token } };
                axios.put(`/calidad/calidadPut/${this.id}`, {
                    OfertaServicios: [
                        {
                            codigo: this.codigo,
                            aprobacion: this.aprobacion,
                            version: this.version,
                            observacionesdelservicio:this.observacionesdelservicio,
                            anexodecotizaciones: {
                                aceptaciondelservicio: this.aceptaciondelservicio,
                                condicionescomerciales: this.condicionescomerciales,
                                condicionestecnicas: this.condicionestecnicas,
                                garantiadelservicio: this.garantiadelservicio,
                                calidaddelservicio: this.calidaddelservicio,
                            }
                        }
                    ]
                }, header)
                    .then((response) => {
                        this.$swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: response.data.msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        this.codigo = ""
                        this.aprobacion = ""
                        this.version = ""
                        this.aceptaciondelservicio = ""
                        this.condicionescomerciales = ""
                        this.condicionestecnicas = ""
                        this.garantiadelservicio = ""
                        this.calidaddelservicio = ""
                        this.dialog2 = false
                        this.listar();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
            if (this.valor === 5) {
                console.log(this.valor);
                let header = { headers: { "token": this.$store.state.token } };
                axios.put(`/calidad/calidadPut/${this.id}`, {
                    OrdenServicio: [
                        {
                            codigo: this.codigo,
                            aprobacion: this.aprobacion,
                            version: this.version,
                        }
                    ]
                }, header)
                    .then((response) => {
                        this.$swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: response.data.msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        this.codigo = ""
                        this.aprobacion = ""
                        this.version = ""
                        this.dialog2 = false
                        this.listar();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
            if (this.valor === 6) {
                console.log(this.valor);
                let header = { headers: { "token": this.$store.state.token } };
                axios.put(`/calidad/calidadPut/${this.id}`, {
                    RecepcionMuestras: [
                        {
                            codigo: this.codigo,
                            aprobacion: this.aprobacion,
                            version: this.version,
                        }
                    ]
                }, header)
                    .then((response) => {
                        this.$swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: response.data.msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        this.codigo = ""
                        this.aprobacion = ""
                        this.version = ""
                        this.dialog2 = false
                        this.listar();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
            if (this.valor === 7) {
                console.log(this.valor);
                let header = { headers: { "token": this.$store.state.token } };
                axios.put(`/calidad/calidadPut/${this.id}`, {
                    Seguimiento: [
                        {
                            codigo: this.codigo,
                            aprobacion: this.aprobacion,
                            version: this.version,
                        }
                    ]
                }, header)
                    .then((response) => {
                        this.$swal.fire({
                            position: "top-end",
                            icon: "success",
                            title: response.data.msg,
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        this.codigo = ""
                        this.aprobacion = ""
                        this.version = ""
                        this.dialog2 = false
                        this.listar();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
            if (this.valor === "" || this.valor === null || this.valor == 0 || this.valor == undefined) {
                this.$swal.fire({
                    position: "top-end",
                    icon: "error",
                    title: "Error inicia sesión nuevamente",
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        },
        Cerrar() {
            this.id = ""
            this.dialog2 = false
        },
        Volver1() {
            this.$router.push("/Configuracion");
        },
    },
    created() {
        this.listar();
    }
}
</script>