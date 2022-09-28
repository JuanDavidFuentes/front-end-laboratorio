<template>
  <v-container class="mt-15 mb -15">
    <v-row>


      <v-col cols="12" xs="12" sm="6" md="4" lg="3" xl="2">
        <v-data-table :headers="headers" :items="desserts" :items-per-page="5" item-key="name" class="elevation-1"
          :footer-props="{
          showFirstLastPage: true,
          firstIcon: 'mdi-arrow-collapse-left',
          lastIcon: 'mdi-arrow-collapse-right',
          prevIcon: 'mdi-minus',
          nextIcon: 'mdi-plus'
          }"></v-data-table>
      </v-col>

    </v-row>


  </v-container>
</template>

<script>
export default {
  name: 'EnsayoLab',
  data: () => ({
    ensayo: [],

    eaders: [
      {
        text: 'Dessert (100g serving)',
        align: 'start',
        value: 'name',
      },
      { text: 'Category', value: 'category' },
    ],
    desserts: [
      {
        name: 'Frozen Yogurt',
        category: 'Ice cream',
      },
      {
        name: 'Ice cream sandwich',
        category: 'Ice cream',
      },
      {
        name: 'Eclair',
        category: 'Cookie',
      },
      {
        name: 'Cupcake',
        category: 'Pastry',
      },
      {
        name: 'Gingerbread',
        category: 'Cookie',
      },
      {
        name: 'Jelly bean',
        category: 'Candy',
      },
      {
        name: 'Lollipop',
        category: 'Candy',
      },
      {
        name: 'Honeycomb',
        category: 'Toffee',
      },
      {
        name: 'Donut',
        category: 'Pastry',
      },
      {
        name: 'KitKat',
        category: 'Candy',
      },
    ],

  }),


  methods: {

  }
}
</script>