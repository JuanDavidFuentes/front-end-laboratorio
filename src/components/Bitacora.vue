
<template>
    <v-container class="mt-15 mb-15">
        <v-row>
          <v-col cols="7" xs="5" sm="8" md="10" lg="10" xl="10">
            <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver1()">
              Volver
            </v-btn>
          </v-col>
        </v-row>
        <v-row style="margin: 0">
                <v-col cols="2"></v-col>
                <v-col cols="8">
                    <v-simple-table class="mb-15" align-center justify-center>
                        <template v-slot:default>
                            <thead>
                                <tr>
                                    <th class="text-center">Usuario</th>
                                    <th class="text-center">Insertar/Editar</th>
                                    <th class="text-center">Navegador</th>
                                    <th class="text-center">Ip</th>
                                    <th class="text-center">Fecha</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(log, i) in infoBitacora" :key="i">
                                    <td class="text-center">{{ log.idUsuario }}</td>
                                    <td class="text-center">{{ log.idPost}}{{idPut}}</td>
                                    <td class="text-center">{{ log.navegador }}</td>
                                    <td class="text-center">{{ log.ip}}</td>
                                    <td class="text-center">{{ log.fecha.slice(0, 10)}}</td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                </v-col>
                <v-col cols="2"></v-col>
            </v-row>
    
    </v-container>
      </template>
        
      <script>
        import axios from "axios";
      export default {
        name: 'PageBitacora',
        data: () => ({
          infoBitacora:[],
    
        }),
        methods: {
            Volver1() {
          this.$router.push("/Configuracion");
        },
        listar() {
                axios.get(`/cotizacion/traerBitacora`)
                    .then((response) => {
                      console.log(response);
                         this.infoBitacora=response.data.bitacora
                        console.log(this.infoBitacora);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
      },
      created() {
        this.listar();
        },
    }
      </script>
      