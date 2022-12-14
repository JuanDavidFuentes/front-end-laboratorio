<template>
    <v-container>
        <div v-if="this.$store.state.token">
            <v-row style="margin: 0px;">
                <v-col cols="7" class="mt-15">
                    <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver1()">
                        Volver
                    </v-btn>
                </v-col>

            </v-row>
            <v-row>
                <v-col cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
                    <v-select v-model="selecionadoColor" :items="Colores" label="Seleccione un color"></v-select>
                </v-col>
            </v-row>

            <v-row>
                <v-col v-if="selecionadoColor === ''" cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
                    <div class="text-center black--text font-weight-Normal">
                        <h1>Por favor selecciona una opción</h1>
                    </div>
                </v-col>

                <v-col v-if="selecionadoColor === 'Color Logo'" cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
                    <div class="text-center black--text font-weight-Normal">
                        <h1>Color del logo "SENA"</h1>
                    </div>
                </v-col>

                <v-col v-if="selecionadoColor === 'Color Logo'" cols="12" xs="12" sm="12" md="12" lg="12" xl="12"
                    class="text-center  flex-column align-center justify-center">
                    <div id="mascara" v-bind:style='{ background: `${color}` }'>
                    </div>
                </v-col>

                <v-col v-if="selecionadoColor === 'Color Interfaz'" cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
                    <div class="text-center black--text font-weight-Normal">
                        <h1>Color del interfaz</h1>
                    </div>
                </v-col>

                <v-col v-if="selecionadoColor === 'Color Formatos'" cols="12" xs="12" sm="12" md="12" lg="12" xl="12">
                    <div class="text-center black--text font-weight-Normal">
                        <h1>Color de los formatos</h1>
                    </div>
                </v-col>
            </v-row>
        
            <v-row justify="center">
                <v-col cols="auto" xs="auto" sm="auto" md="auto" lg="auto" xl="auto" class="center">
                    <v-color-picker  v-model="color" show-swatches swatches-max-height="300px"></v-color-picker>
                </v-col>
            </v-row>
            
            <v-row>
                <v-col cols="12 mb-16 text-center">
                    <div v-if="selecionadoColor === 'Color Logo'">
                        <v-btn dark v-bind:style='{ background: `${color}` }' @click="GuardarL()">
                            Guardar Color del Logo
                        </v-btn>
                    </div>

                    <div v-if="selecionadoColor === 'Color Interfaz'">
                        <v-btn dark v-bind:style='{ background: `${color}` }' @click="GuardarI()">
                            Guardar Color del Interfaz
                        </v-btn>
                    </div>

                    <div v-if="selecionadoColor === 'Color Formatos'">
                        <v-btn dark v-bind:style='{ background: `${color}` }' @click="GuardarF()">
                            Guardar Color de los Formatos
                        </v-btn>
                    </div>
                </v-col>
            </v-row>

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
    name: "PageColores",
    data: () => ({
        type: 'hex',
        hex: '#FF00FF',
        colores: {},
        idcolor: "",
        Colores: ["Color Logo", "Color Interfaz", "Color Formatos"],//,"Color Temporal"
        isEditing: false,
        selecionadoColor: ""
    }),
    methods: {
        traercolor() {
            this.colores = JSON.parse(localStorage.getItem("color"))
            this.idcolor = this.colores[0]._id
        },
        Volver1() {
            this.$router.push("/Configuracion")
        },
        GuardarL() {
            this.$swal.fire({
                title: '¿ Desea actualizar el color ?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    axios.put(`/colores/${this.idcolor}`, {
                        logo: this.color
                    })
                        .then((response) => {
                            this.$swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: response.data.msg,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            this.$router.replace("/")
                            this.$store.commit("setToken", "")
                            this.$store.commit("setDatos", {})
                            localStorage.setItem("token", "")
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            })
        },
        GuardarI() {
            this.$swal.fire({
                title: '¿ Desea actualizar el color ?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    axios.put(`/colores/${this.idcolor}`, {
                        interfaz: this.color
                    })
                        .then((response) => {
                            this.$swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: response.data.msg,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            this.$router.replace("/")
                            this.$store.commit("setToken", "")
                            this.$store.commit("setDatos", {})
                            localStorage.setItem("token", "")
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            })
        },
        GuardarF() {
            this.$swal.fire({
                title: '¿ Desea actualizar el color ?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    axios.put(`/colores/${this.idcolor}`, {
                        formato: this.color
                    })
                        .then((response) => {
                            this.$swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: response.data.msg,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            this.$router.replace("/")
                            this.$store.commit("setToken", "")
                            this.$store.commit("setDatos", {})
                            localStorage.setItem("token", "")
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            })
        },
        GuardarT() {
            this.$swal.fire({
                title: '¿ Desea actualizar el color ?',
                showDenyButton: true,
                showCancelButton: true,
                confirmButtonText: 'Si',
                denyButtonText: `No`,
            }).then((result) => {
                /* Read more about isConfirmed, isDenied below */
                if (result.isConfirmed) {
                    axios.put(`/colores/${this.idcolor}`, {
                        temporal: this.color
                    })
                        .then((response) => {
                            this.$swal.fire({
                                position: "top-end",
                                icon: "success",
                                title: response.data.msg,
                                showConfirmButton: false,
                                timer: 1500,
                            });
                            this.$router.replace("/")
                            this.$store.commit("setToken", "")
                            this.$store.commit("setDatos", {})
                            localStorage.setItem("token", "")
                        })
                        .catch((error) => {
                            console.log(error);
                        });
                }
            })
        },
    },
    computed: {
        color: {
            get() {
                return this[this.type]
            },
            set(v) {
                this[this.type] = v
            },
        },
        showColor() {
            if (typeof this.color === 'string') return this.color
            return JSON.stringify(Object.keys(this.color).reduce((color, key) => {
                color[key] = Number(this.color[key].toFixed(2))
                return color
            }, {}), null, 2)
        },
        // color2: {
        //     get() {
        //         return this[this.type]
        //     },
        //     set(v) {
        //         this[this.type] = v
        //     },
        // },
        // showColor2() {
        //     if (typeof this.color2 === 'string') return this.color2
        //     return JSON.stringify(Object.keys(this.color2).reduce((color2, key) => {
        //         color2[key] = Number(this.color2[key].toFixed(2))
        //         return color2
        //     }, {}), null, 2)
        // },
        // color3: {
        //     get() {
        //         return this[this.type]
        //     },
        //     set(v) {
        //         this[this.type] = v
        //     },
        // },
        // showColor3() {
        //     if (typeof this.color3 === 'string') return this.color3
        //     return JSON.stringify(Object.keys(this.color3).reduce((color3, key) => {
        //         color3[key] = Number(this.color3[key].toFixed(2))
        //         return color3
        //     }, {}), null, 2)
        // },
    },
    created() {
        this.traercolor();
    }
}
</script>
<style>
#mascara {
    display: inline-block;
    width: 200px;
    height: 200px;
    background: url(https://upload.wikimedia.org/wikipedia/commons/8/83/Sena_Colombia_logo.svg);
}

@supports (-webkit-mask: url("")) or (mask: url("")) {
    #mascara {
        -webkit-mask: url(https://upload.wikimedia.org/wikipedia/commons/8/83/Sena_Colombia_logo.svg);
        mask: url(https://upload.wikimedia.org/wikipedia/commons/8/83/Sena_Colombia_logo.svg);
        mask-size: cover;
    }
}

.centered-input>>>label {
    text-align: center;
}
</style>