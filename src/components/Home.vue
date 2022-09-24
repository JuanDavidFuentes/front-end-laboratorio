<template>
    <v-container>
        <v-row class="my-13">
            <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
                <v-card color="blue-grey lighten-2" dark>
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title class="text-h5">Configuracion <br> Parametrización</v-card-title>
                            <v-card-subtitle>Nuevo</v-card-subtitle>
                            <v-card-actions>
                                <v-btn class="ml-2 mt-5" outlined rounded @click="Deudor()" to="/Configuracion" >
                                    <v-icon>mdi-cogs</v-icon>
                                    Configurar
                                </v-btn>
                            </v-card-actions>
                        </div>
                        <v-avatar class="ml-n7 mr-5 mt-4" size="125">
                            <img  height=90% src="data:image/png;base64,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" alt="John">
                        </v-avatar>
                    </div>
                </v-card>
            </v-col>
            
            <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
                <v-card color="#1F7087" dark >
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title class="text-h5">Nuevo <br> Usuario </v-card-title>
                            <v-card-subtitle>Nuevo</v-card-subtitle>
                            <v-card-actions>
                                <v-btn class="ml-2 mt-5" outlined rounded @click="Prestamo()" to="/agregarusuario">
                                    <v-icon>mdi-human-edit</v-icon>
                                    Agregar Usuario
                                </v-btn>
                            </v-card-actions>
                        </div>
                        <v-avatar class="ml-n7 mr-5 mt-4" size="125">
                            <img src="https://i.ibb.co/wB9Ydh9/Mesa-de-trabajo-100.jpg" alt="John">
                        </v-avatar>
                    </div>
                </v-card>
            </v-col>

            <!-- <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
                <v-card color="#385F73" dark>
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title class="text-h5">Recepcion <br> Muestras </v-card-title>
                            <v-card-subtitle>Listar</v-card-subtitle>
                            <v-card-actions>
                                <v-btn class="ml-2 mt-5" outlined rounded @click="Listar()" to="/muestras">
                                    <v-icon>mdi-text-box-check-outline</v-icon>
                                    Muestras
                                </v-btn>
                            </v-card-actions>
                        </div>
                        <v-avatar class="ml-n7 mr-5 mt-4" size="125">
                            <img src="https://images.vexels.com/media/users/3/151869/isolated/preview/767ca771755f4675d4063c03e17c8595-icono-de-lista-de-verificacion-medica.png" alt="John">
                        </v-avatar> 
                    </div>
                </v-card>
            </v-col> -->


            <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
                <v-card color="amber darken-4" dark>
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title class="text-h5">Reportes </v-card-title>
                            <v-card-subtitle>Nuevo</v-card-subtitle>
                            <v-card-actions>
                                <v-btn class="ml-2 mt-5" outlined rounded @click="Deudor()">
                                    <v-icon>mdi-clipboard-alert-outline</v-icon>
                                    Reportes
                                </v-btn>
                            </v-card-actions>
                        </div>
                        <v-avatar class="ml-n7 mr-5 mt-4" size="125">
                            <img  height=90% src="https://img.lovepik.com/element/45007/5080.png_860.png" alt="John">
                        </v-avatar>
                    </div>
                </v-card>
            </v-col>

            
            <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4">
                <v-card color="#1F7087" dark >
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>

                            <v-card-title class="text-h5">Cotizaciones <br> </v-card-title>
                            <v-card-subtitle>Nuevo</v-card-subtitle>
                            <v-card-actions>

                                <v-btn class="ml-2 mt-5" outlined rounded @click="Cotizaciones()" to="/cotizacion">
                                    <v-icon>mdi-plus-circle-outline</v-icon>
                                    Agregar Cotizacion
                                </v-btn>
                            </v-card-actions>
                        </div>
                        <v-avatar class="ml-n7 mr-5 mt-4" size="125">
                            <img src="https://i.ibb.co/wB9Ydh9/Mesa-de-trabajo-100.jpg" alt="John">
                        </v-avatar>
                    </div>
                </v-card>
            </v-col>

        </v-row>
    </v-container>
</template>
<script>
export default {
    name: 'PageHome',
    data: () => ({

    }),
    methods: {
        Cotizaciones(){
            this.$router.push("/")
        }   
    }

}
</script>