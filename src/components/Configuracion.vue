<template>
  <v-container class="mt-15">
    <v-row>
      <v-col cols="7" xs="5" sm="8" md="10" lg="10" xl="10">
        <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver1()">
          Volver
        </v-btn>
      </v-col>
    </v-row>


    <v-row>
      <v-col cols="4">
        <v-card class="mx-auto" max-width="344">
          <v-row>
            
            <v-col cols="10" class="text-center">
              <v-img height="210px" max-width="250px" 
            src="https://thumbs.dreamstime.com/b/icono-de-vector-herramientas-signo-ilustraci%C3%B3n-configuraci%C3%B3n-s%C3%ADmbolo-o-logotipo-reparaci%C3%B3n-para-sitios-web-m%C3%B3viles-165306743.jpg"></v-img>
            </v-col>
          </v-row>
          
          <v-card-title> Setup </v-card-title>
          <v-card-title>
            <v-card-text>
              <v-btn block> Consecutivo cotizacion </v-btn>
            </v-card-text>
            <v-card-text>
              <v-btn block> Consecutivo muestra </v-btn>
            </v-card-text>
          </v-card-title>
          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
            </div>
          </v-expand-transition>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
            </div>
          </v-expand-transition>

        </v-card>
      </v-col>
        

        <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-img

            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQUaEQ2HVBSGk45uNUTgI8xRErCwsTTieMfA&usqp=CAU"
            height="300px"
          ></v-img>
          <v-card-title> Ciudades</v-card-title>
          <v-card-text>
              <v-btn block> Ageagar ciudad</v-btn>
              </v-card-text>
        </v-card>
      </v-col>

      
      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUv3qtlvC8AE41rrfyFlkfKn8KfWCOxrW8LA&usqp=CAU"
            height="350px"
          ></v-img>
          <v-card-title> Ensayo</v-card-title>
          <v-card-text>
              <v-btn block> Registro ensayo</v-btn>
              </v-card-text>
        </v-card>
      </v-col>
      

      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://us.123rf.com/450wm/denysdrozd/denysdrozd2008/denysdrozd200804351/164282913-icono-de-vector-de-libro-de-escritura-s%C3%ADmbolo-de-ilustraci%C3%B3n-de-cuaderno-de-bit%C3%A1cora-signo-de-cuader.jpg?ver=6"
            height="300px"
          ></v-img>
          <v-card-title> Bitacora</v-card-title>
          <v-card-text>
              <v-btn block> log</v-btn>
              </v-card-text>
        </v-card>
      </v-col>


      <v-col>
        <v-card class="mx-auto" max-width="344">
          <v-img
            src="https://https://www.flaticon.es/icono-gratis/calidad_115778"
            height="200px"
          ></v-img>
          <v-card-title> Calidad</v-card-title>
          <v-card-text>
              <v-btn block> Editar vercimes anteriore</v-btn>
              </v-card-text>
        </v-card>
      </v-col>
      
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "PageConfiguracion",
  data: () => ({
    show: false,
  }),
  methods: {
    Cotizaciones() {
      this.$router.push("/");
    },
    Volver1() {
      this.$router.push("/");
    },
  },
};
</script>


