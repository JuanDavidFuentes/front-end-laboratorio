<template>
  <v-container class="mt-15 mb -15">
    <v-row>
      <v-col cols="12">
        <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver1()">
          Volver
        </v-btn>
      </v-col>
    </v-row>

    <v-row style="margin:32px">
      <v-col class="text-center" cols="12">
        <v-form v-model="valid">

          <v-text-field v-model="ensayo" :rules="emailRules" label="ensayo" required></v-text-field>
          <v-text-field v-model="metodo" :rules="emailRules" label="metodo" required></v-text-field>

          <v-text-field v-model="tecnica" :rules="emailRules" label="tecnica" required></v-text-field>

          <v-text-field v-model="valorMinimo" :rules="emailRules" label="valorMinimo" required></v-text-field>
          <v-text-field v-model="valorMaximo" :rules="emailRules" label="valorMaximo" required></v-text-field>
          <v-text-field v-model="unidades" :rules="emailRules" label="unidades" required></v-text-field>
          <v-text-field v-model="costo" :rules="emailRules" label="costo" required></v-text-field>
          <v-text-field v-model="descrpcion" :rules="emailRules" label="descripcion" required></v-text-field>
          <v-text-field v-model="limiteCuantificacion" :rules="emailRules" label="limiteCuantificacion" required></v-text-field>
          <v-text-field v-model="titular" :rules="emailRules" label="titular" required></v-text-field>
          <v-text-field v-model="suplente" :rules="emailRules" label="suplente" required></v-text-field>
          <v-btn class="mt-n3" outlined color="red darken-3" @click="(insertar1)">
            insertar
          </v-btn>

        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'EnsayoLab',
  data: () => ({
    ensayo: "",
    metodo:"",
    tecnica:"",
    valorMaximo:"",
    valorMinimo:"",
    unidades:"",
    costo:"",

  }),
  methods: {
    Volver1() {
      this.$router.push("/Configuracion");
    },
  insertar1(){ console.log("se ha insertado correctamente");
    this.$router.push("/ensayo/");

  },
},
}
</script>