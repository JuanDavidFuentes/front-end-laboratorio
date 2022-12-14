<template>
    <v-container>
        <div v-if="this.$store.state.token">
        <v-row class="my-13">

            <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4" v-if="$store.state.datos.rol == 'ADMIN'|| $store.state.datos.rol == 'RECEPCIONISTA'|| $store.state.datos.rol == 'SUPERVISOR'">
                <v-card class="primary" dark >
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title class="text-h5 ">Configuración <br> Parametrización</v-card-title>
                            <v-card-subtitle>Nuevo</v-card-subtitle>
                            <v-card-actions>
                                <v-btn class="ml-2 mt-5 accent--text" outlined rounded to="/Configuracion" >
                                    <v-icon>mdi-wrench</v-icon>
                                    Configurar
                                </v-btn>
                            </v-card-actions>
                        </div>
                        <v-avatar class="ml-n7 mr-5 mt-4" size="125">
                            <img  height=90% src="https://i.ibb.co/P9H3RMJ/settings-icon-vector-21894454.jpg" alt="John">
                        </v-avatar>
                    </div>
                </v-card>
            </v-col>

            <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4" v-if="$store.state.datos.rol == 'ADMIN'|| $store.state.datos.rol == 'SUPERVISOR'">
                <v-card class="primary" dark > 
                    <div class="d-flex flex-no-wrap justify-space-between"> 
                        <div>
                            <v-card-title class="text-h5">Nuevo <br> Usuario </v-card-title>
                            <v-card-subtitle>Nuevo</v-card-subtitle>
                            <v-card-actions>
                                <v-btn class="ml-2 mt-5 accent--text" outlined rounded to="/agregarusuario">
                                    <v-icon class="mr-1">mdi-account-multiple-plus</v-icon>
                                    Agregar Usuario
                                </v-btn>
                            </v-card-actions>
                        </div>
                        <v-avatar class="ml-n7 mr-5 mt-4" size="125">
                            <img height=70%  src="https://i.postimg.cc/BnpC9521/add-new-user-avatar-icon-260nw-2100775648.png" alt="John">
                        </v-avatar>
                    </div>
                </v-card>
            </v-col>

            <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4" v-if="$store.state.datos.rol == 'RECEPCIONISTA'|| $store.state.datos.rol == 'ADMIN' || $store.state.datos.rol == 'CIENTIFICO'">
                <v-card class="primary" dark>
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title class="text-h5">Recepción <br> Muestras </v-card-title>
                            <v-card-subtitle>Listar</v-card-subtitle>
                            <v-card-actions>
                                <v-btn class="ml-2 mt-5 accent--text" outlined rounded @click="Listar()" to="/Muestras">
                                    <v-icon>mdi-beaker-outline</v-icon>
                                    Muestras
                                </v-btn>
                            </v-card-actions>
                        </div>
                        <v-avatar class="ml-n7 mr-5 mt-4" size="125">
                            <img src="https://i.postimg.cc/tJL9gVP3/baf9b10d-2897-4afa-80cb-1509296f1c22.jpg" alt="John">
                        </v-avatar> 
                    </div>
                </v-card>
            </v-col>

            <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4" v-if="$store.state.datos.rol == 'RECEPCIONISTA'|| $store.state.datos.rol == 'ADMIN'">
                <v-card class="primary" dark>
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title class="text-h5">Clientes</v-card-title>
                            <v-card-subtitle>Nuevo</v-card-subtitle>
                            <v-card-actions>
                                <v-btn class="ml-2 mt-5 accent--text" outlined rounded to="/Clientes">
                                    <v-icon>mdi-clipboard-alert-outline</v-icon>
                                    Clientes
                                </v-btn>
                            </v-card-actions>
                        </div>

                        <v-avatar class="ml-n7 mr-5 mt-4" size="125">
                            <img src="https://cdn.create.vista.com/api/media/small/453088566/stock-vector-add-group-icon-flat-design" alt="John">
                        </v-avatar>
                    </div>
                </v-card>
            </v-col>

            
            <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4" v-if="$store.state.datos.rol == 'RECEPCIONISTA'|| $store.state.datos.rol == 'ADMIN'">
                <v-card class="primary" dark >
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title class="text-h5">Cotizaciones <br> </v-card-title>
                            <v-card-subtitle>Nuevo</v-card-subtitle>
                            <v-card-actions>
                                <v-btn class="ml-2 mt-5 accent--text" outlined rounded to="/cotizacion">
                                    <v-icon>mdi-plus-circle-outline</v-icon>
                                    Agregar Cotizacion
                                </v-btn>
                            </v-card-actions>
                        </div>
                        <v-avatar class="ml-n7 mr-5 mt-4" size="125">
                            <img src="https://i.postimg.cc/FKyjHyDr/f92370bc-369c-43bf-80d1-50843b170528.jpg" alt="John">
                        </v-avatar>
                    </div>
                </v-card>
            </v-col>

            <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4" v-if="$store.state.datos.rol == 'TECNICO'|| $store.state.datos.rol == 'ADMIN'">
                <v-card class="primary" dark >
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>

                            <v-card-title class="text-h5">Tareas Pendientes <br> </v-card-title>
                            <v-card-subtitle>Nuevo</v-card-subtitle>
                            <v-card-actions>

                                <v-btn class="ml-2 mt-5 accent--text" outlined rounded to="/orden">
                                    <v-icon>mdi-eye</v-icon>
                                    Ver mis Tareas
                                </v-btn>
                            </v-card-actions>
                        </div>
                        <v-avatar class="ml-n7 mr-5 mt-4" size="125">
                            <img src="https://i.postimg.cc/FKyjHyDr/f92370bc-369c-43bf-80d1-50843b170528.jpg" alt="John">
                        </v-avatar>
                    </div>
                </v-card>
            </v-col>

            <v-col cols="12" xs="12" sm="12" md="6" lg="4" xl="4" v-if="$store.state.datos.rol == 'TECNICO'|| $store.state.datos.rol == 'ADMIN'">
                <v-card class="primary" dark >
                    <div class="d-flex flex-no-wrap justify-space-between">
                        <div>
                            <v-card-title class="text-h5">Informes <br/> de  resultados  </v-card-title>
                            <v-card-subtitle>Nuevo</v-card-subtitle>
                            <v-card-actions>
                                <v-btn class="ml-2 mt-5 accent--text" outlined rounded to="/Informe">
                                    <v-icon>mdi-eye</v-icon>
                                    Ver mis Tareas
                                </v-btn>
                            </v-card-actions>
                        </div>
                        <v-avatar class="ml-n7 mr-5 mt-4" size="125">
                            <img src="https://i.postimg.cc/FKyjHyDr/f92370bc-369c-43bf-80d1-50843b170528.jpg" alt="John">
                        </v-avatar>
                    </div>
                </v-card>
            </v-col>
        </v-row>
    </div>
        <div v-if="this.$store.state.token === ''">
            <v-row>
                <v-col cols="12" class="mb-16 box2">
                    <v-row>
                        <v-col cols="12" class="d-flex justify-center">
                            <img  height="450" src="https://cdn.dribbble.com/users/272763/screenshots/4576659/media/e7b35df88e9ab2a2ec158aaad703a7e9.gif" />
                        </v-col>
                    </v-row>
                    <center style="margin: 5vw;">
                        <h1 style="    color: var(--border); font-size: 2em;">Su sesión a caducado porfavor inicie sesión nuevamente!</h1>
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
export default {
    name: 'PageHome',
    data: () => ({
    }),
    methods:{
        recuperarToken(){
            localStorage.getItem("token")
            console.log(localStorage.getItem("token"));
        }
    }, 
    created(){
        this.recuperarToken();  
    }
}
</script>