
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
                                <th class="text-center">Consecutivo cotización</th>
                                <th class="text-center">Consecutivo muestra</th>
                                <th class="text-center">IVA</th>
                                <th class="text-center">Editar</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(consecutivo, i) in infoConsecutivo" :key="i">
                                <td class="text-center">{{ consecutivo.numero_cotizacion }}</td>
                                <td class="text-center">
                                    {{ consecutivo.codMuestra }}
                                </td>
                                <td class="text-center">{{ consecutivo.iva }}</td>

                                <td class="text-center"><v-btn color="deep-orange" rounded dark @click="editarC()">
                                        <v-icon> mdi-border-color </v-icon></v-btn></td>
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
    name: 'PageSetup',
    data: () => ({
      infoConsecutivo:[],

    }),
    methods: {
        Volver1() {
      this.$router.push("/Configuracion");
    },
    listar() {
            axios.get(`/cotizacion/traerConsecutivo`)
                .then((response) => {
                    this.infoConsecutivo=response.data.consecutivo
                    console.log(this.infoConsecutivo);
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    editarC(){

    }
  },
  created() {
        this.listar();
    },
}
  </script>
  