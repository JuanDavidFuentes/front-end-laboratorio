<template>
  <v-container class="mt-15 mb -15">
    <v-row>
      <v-col cols="7" xs="5" sm="8" md="8" lg="10" xl="10">
        <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver1()">
          Volver
        </v-btn>
      </v-col>
    </v-row>
    
    <v-form v-model="valid">
      <v-row>
        <v-col
          cols="12"
          md="4" 
          
        >
        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="ensayo"
            required
          ></v-text-field>
        <v-text-field
            v-model="email"
            :rules="emailRules"
            label="metodo"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="tecnica"
            required
          ></v-text-field>

          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="valorMinimo"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="valorMaximo"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="unidades"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="costo"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="descripcion"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="limiteCuantificacion"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="titilar"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            :rules="emailRules"
            label="suplente"
            required
          ></v-text-field>
          <v-btn class="mt-n3" outlined color="red darken-3" @click="(insertar)">
          insertar
        </v-btn>
        </v-col>
      </v-row>
  </v-form>
</v-container>
</template>

<script>
export default {
  name: 'EnsayoLab',
  data: () => ({
    ensayo: [],
  }),
  methods: {
    Volver1() {
      this.$router.push("/Configuracion");
    }
  },
}
</script>