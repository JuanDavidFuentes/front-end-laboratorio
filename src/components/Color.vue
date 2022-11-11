<template>
    <v-container>
        <v-row style="margin: 0px;">
            <v-col cols="7" xs="5" sm="8" md="10" lg="10" xl="10" class="mt-15">
                <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver1()">
                    Volver
                </v-btn>
            </v-col>
        </v-row>
        <v-row>

            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                <v-row>
                    <v-col cols="12">
                        <div class="text-center black--text font-weight-Normal">
                            <h1>Color del logo "SENA"</h1>
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="text-center" cols="12">
                        <div id="mascara" v-bind:style='{ background: `${color}` }'></div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="ml-16 pl-16" cols="12">
                        <v-color-picker v-model="color" hide-inputs></v-color-picker>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="text-center" cols="12">
                        <v-btn class="mt-n3" v-bind:style='{ background: `${color}` }' @click="Guardar()">
                            Guardar
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>
            <!-- 

            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                <v-row>
                    <v-col cols="12">
                        <div class="text-center black--text font-weight-Normal">
                            <h1>Color de la interfaz</h1>
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="text-center" cols="12">
                        <v-avatar v-bind:style='{ background: `${color2}` }' size="200">
                        </v-avatar>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="ml-16 pl-16" cols="12">
                        <v-color-picker v-model="color2" hide-inputs></v-color-picker>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="text-center" cols="12">
                        <v-btn class="mt-n3" v-bind:style='{ background: `${color2}` }' @click="Guardar()">
                            Guardar
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col>


            <v-col cols="12" xs="12" sm="12" md="4" lg="4" xl="4">
                <v-row>
                    <v-col cols="12">
                        <div class="text-center black--text font-weight-Normal">
                            <h1>Color de los formatos</h1>
                        </div>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="text-center" cols="12">
                        <v-avatar v-bind:style='{ background: `${color3}` }' size="200">
                        </v-avatar>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="ml-16 pl-16" cols="12">
                        <v-color-picker v-model="color3" hide-inputs></v-color-picker>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col class="text-center" cols="12">
                        <v-btn class="mt-n3" v-bind:style='{ background: `${color3}` }' @click="Guardar()">
                            Guardar
                        </v-btn>
                    </v-col>
                </v-row>
            </v-col> -->

        </v-row>
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
        idcolor: ""
    }),
    methods: {
        traercolor() {
            this.colores = JSON.parse(localStorage.getItem("color"))
            this.idcolor = this.colores[0]._id
            console.log(this.idcolor);
        },
        Guardar() {
            console.log(this.color);
            axios.put(`/colores/${this.idcolor}`, {
                logo: this.color
            })
                .then((response) => {
                    console.log(response);
                    this.$swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "El color del logo ha sido cambiado porfavor inicie sesión nuevamente",
                        showConfirmButton: false,
                        timer: 2500,
                    });
                    this.$router.replace("/")
                    this.$store.commit("setToken", "")
                    this.$store.commit("setDatos", {})
                    this.$store.commit("setColor", "")
                    localStorage.setItem("token", "")
                    localStorage.setItem("color", {})
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        Volver1() {
            this.$router.push("/Configuracion")
        }
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
</style>