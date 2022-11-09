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
            <v-col class="d-flex justify-center" cols="6">
                <v-color-picker v-model="color" hide-inputs ></v-color-picker>
            </v-col>
            <v-col cols="6" md="4">
                <v-sheet 
                
                class="fondo pa-4 ">
                
                  <h1 >
                    {{ this.color }}
                  </h1>
                </v-sheet>

                <v-col cols="7" xs="5" sm="8" md="10" lg="10" xl="10" class="mt-8">
                <v-btn class="mt-n3" color="green" @click="Guardar()">
                    Guardar
                </v-btn>
            </v-col>
            </v-col>
            
        </v-row>
    </v-container>
</template>
<script>
export default {
    name: "PageColores",
    data: () => ({
        type: 'hex',
        hex: '#FF00FF',
    }),
    methods:{
        Guardar(){
            console.log(this.color);
        },
        Volver1(){
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
    }
}
</script>
<style>
:root {
  --first-color: var(this.color)
}
</style>