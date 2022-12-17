
<template>
  <v-footer class="primary" v-if="this.$router.history.current['path'] !=='/CotiImprimir' && this.$router.history.current['path'] !=='/ImprimirMuestra' && this.$router.history.current['path'] !=='/PaginaImprimir'"
   app padless>
    <v-row justify="center" no-gutters>
      <v-col class=" py-4 text-center accent--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>LabFicat</strong>
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
