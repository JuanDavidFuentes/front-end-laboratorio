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
  <v-dialog v-model="dialog" persistent>
  <v-col class="text-center" cols="12">
          <v-text-field class="mt-n2" v-model="ensayo" :rules="emailRules" label="ensayo" required dense filled rounded></v-text-field>
          <v-text-field class="mt-n2" v-model="metodo" :rules="emailRules" label="metodo" required dense filled rounded></v-text-field>
          <v-text-field class="mt-n2" v-model="tecnica" :rules="emailRules" label="tecnica" required dense filled rounded></v-text-field>
          <v-text-field class="mt-n2" v-model="valorMinimo" :rules="emailRules" label="valorMinimo" required dense filled rounded></v-text-field>
          <v-text-field class="mt-n2" v-model="valorMaximo" :rules="emailRules" label="valorMaximo" required dense filled rounded></v-text-field>
          <v-text-field class="mt-n2" v-model="unidades" :rules="emailRules" label="unidades" required dense filled rounded></v-text-field>
          <v-text-field class="mt-n2" v-model="costo" :rules="emailRules" label="costo" required dense filled rounded></v-text-field>
          <v-text-field class="mt-n2" v-model="descrpcion" :rules="emailRules" label="descripcion" required dense filled rounded></v-text-field>
          <v-text-field class="mt-n2" v-model="limiteCuantificacion" :rules="emailRules" label="limiteCuantificacion" required dense filled rounded></v-text-field>
          <v-text-field class="mt-n2" v-model="titular" :rules="emailRules" label="titular" required dense filled rounded></v-text-field>
          <v-text-field class="mt-n2" v-model="suplente" :rules="emailRules" label="suplente" required dense filled rounded></v-text-field>
        
      </v-col>
</v-dialog>
      
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'EnsayoLab',
  data: () => ({
    dialog:false,
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