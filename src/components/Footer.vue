
<template>
  <v-footer app color="deep-orange darken-1" padless>
    <v-row justify="center" no-gutters>
      
      <v-col class="deep-orange ligthken-4 py-4 text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>
<script>
export default {
  name: 'PageFooter',
  data: () => ({
    
  }),
}
</script>
