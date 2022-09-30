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
      <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="2">
        <v-card class="mx-auto" max-width="345">
          <v-img
          src="https://static.vecteezy.com/system/resources/previews/005/374/887/non_2x/eye-icon-thin-line-for-web-and-mobile-modern-minimalistic-flat-design-icon-on-light-white-background-vector.jpg"
            height="345px"
          ></v-img>
          <v-card-title> Setup </v-card-title>
          <v-card-text>
            <v-btn color ="deep-orange" class="mr-6" @click="Setup()">Mostrar setup</v-btn>
          </v-card-text>
        </v-card>
      </v-col>
 
      <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="2">
        <v-card class="mx-auto" max-width="345">
          <v-img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQUaEQ2HVBSGk45uNUTgI8xRErCwsTTieMfA&usqp=CAU"
            height="345px"
          ></v-img>
          <v-card-title> Ciudades</v-card-title>
          <v-card-text>
            <v-btn color ="deep-orange" class="mr-6" @click="AggCiudades()"> Agregar ciudad</v-btn>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="2">
        <v-card class="mx-auto" max-width="345">
          <v-img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUv3qtlvC8AE41rrfyFlkfKn8KfWCOxrW8LA&usqp=CAU"
            height="345px"
          ></v-img>
          <v-card-title> Ensayo</v-card-title>
          <v-card-text>
            <v-btn color="deep-orange" class="mr-6" @click="ensayo()">Registro ensayo</v-btn>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="2">
        <v-card class="mx-auto" max-width="345">
          <v-img
            src="https://us.123rf.com/450wm/denysdrozd/denysdrozd2008/denysdrozd200804351/164282913-icono-de-vector-de-libro-de-escritura-s%C3%ADmbolo-de-ilustraci%C3%B3n-de-cuaderno-de-bit%C3%A1cora-signo-de-cuader.jpg?ver=6"
            height="345px"
          ></v-img>
          <v-card-title> Bitacora</v-card-title>
          <v-card-text>
            <v-btn color="deep-orange" class="mr-6" @click="Log()"> log</v-btn>
          </v-card-text>
        </v-card>
      </v-col>

      <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="2">
        <v-card class="mx-auto" max-width="345">
          <v-img
            src="https://es.dreamstime.com/icono-de-la-cinta-del-control-calidad-opci-n-certificada-o-mejor-producto-vector-recomend-marca-aprobada-certificado-premio-y-image142671070"
            height="345px"
          ></v-img>
          <v-card-title> Calidad</v-card-title>
          <v-card-text>
            <v-btn color="deep-orange" class="ml-n1"
              >Editar versiones<br>anteriores
            </v-btn>
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
    Setup() {
      this.$router.push("/setup");
    },
    AggCiudades(){
      this.$router.push("/AggCiudades");
    },
    Log() {
      this.$router.push("/log");
    },
    ensayo(){
      this.$router.push("/EnsayoLab")
    }

    },
};
</script>
