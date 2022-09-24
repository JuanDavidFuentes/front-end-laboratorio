
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
                                    <th class="text-center">Codigo Departamento</th>
                                    <th class="text-center">Departamento</th>
                                    <th class="text-center">Codigo Ciudad</th>
                                    <th class="text-center">Ciudad</th>
                                </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(ciudad, i) in ciudades" :key="i">
                                    <td class="text-center">{{ ciudad.coddepartamento }}</td>
                                    <td class="text-center">{{ ciudad.departamento}}{{idPut}}</td>
                                    <td class="text-center">{{ ciudad.codciudad }}</td>
                                    <td class="text-center">{{ ciudad.ciudad}}</td>
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
  import axios  from 'axios';
export default {
  name: 'AggCiudad',
  data: () => ({
    ciudades:[],
  }),
  methods: {
        Volver1() {
      this.$router.push("/Configuracion");
    },
    listar() {
                axios.get(`/ciudad/CiudadDepartamento`)
                    .then((response) => {
                      console.log(response);
                         this.ciudades=response.data.ciudad
                        console.log(this.ciudades);
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            },
      },
      created() {
        this.listar();
  }
}


</script>
  