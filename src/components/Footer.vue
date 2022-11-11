
<template>
  <v-footer app color="dark" padless>
    <v-row justify="center" no-gutters>
      <v-col class="black py-4 text-center accent--text" cols="12">
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
