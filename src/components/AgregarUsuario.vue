<template>
    <v-container>
     <v-row class="mt-13 ">
         <v-col cols="7" xs="5" sm="8" md="10" lg="10" xl="10">
            <v-btn class="mt-n3" outlined color="red darken-3" @click="Volver1()">
                    Volver
                </v-btn>
         </v-col>
         <v-col cols="5" xs="7" sm="4" md="2" lg="2" xl="2">
             <v-spacer></v-spacer>
             <v-dialog v-model="dialog" class="mr-15">
                 <template v-slot:activator="{ on, attrs }">
                     <v-btn color="primary" dark v-bind="attrs" v-on="on">
                         Nuevo Deudor
                     </v-btn>
                 </template>
                 <v-card>
                     <v-card-title class="text-h5">
                         Datos Prestamo
                     </v-card-title>
                     <v-col cols="12">
                         <v-text-field v-model="deuda" label="Deuda*" filled rounded dense></v-text-field>
                         <v-text-field v-model="cuota" label="Cuota*" filled rounded dense></v-text-field>
                         <v-text-field v-model="interes" label="Interes*" filled rounded dense></v-text-field>
                         <v-text-field v-model="tiempo" label="Tiempo*" filled rounded dense></v-text-field>
                     </v-col>
                     <v-card-actions>
                         <v-spacer></v-spacer>
                         <v-btn class="mr-15" outlined color="red darken-3" @click="Volver()">
                             Cancelar
                         </v-btn>
                         <v-btn class="" :loading="loading2" :disabled="loading2" color="success"
                             @click="loader = 'loading2'">
                             Guardar Datos
                             <template v-slot:loader>
                                 <span>Guardando...</span>
                             </template>
                         </v-btn>
                     </v-card-actions>
                 </v-card>
             </v-dialog>
         </v-col>
     </v-row>

     <v-row>
         <v-col cols="12">
             <v-simple-table fixed-header height="300px">
                 <template v-slot:default>
                     <thead>
                         <tr>
                             <th class="text-left black--text title"> Nombres</th>
                             <th class="text-left black--text title"> Fecha </th>
                             <th class="text-left black--text title"> Deuda </th>
                             <th class="text-left black--text title"> Interes </th>
                             <th class="text-left black--text title"> Tiempo </th>
                             <th class="text-left black--text title"> Cuota </th>
                             <th class="text-left black--text title"> Estado </th>
                         </tr>
                     </thead>
                     <tbody>

                         <tr v-for="(p, i) in Deudores" :key="i">
                             <td>{{p.nombres}} nombres</td>
                             <td>{{p.fecha}}</td>
                             <td>${{p.deuda}}</td>
                             <td>{{p.interes}}%</td>
                             <td>{{p.tiempo}}Meses</td>
                             <td>{{p.cuota}}Cuota</td>
                             <td><button type="button"
                                     class="mr-3 v-btn v-btn--is-elevated v-btn--has-bg theme--light v-size--default success"><span
                                         class="v-btn__content"> Activo </span></button>
                             </td>
                         </tr>
                     </tbody>
                 </template>
             </v-simple-table>
         </v-col>
     </v-row>

 </v-container>
</template>
<script>

export default {
 name: 'AgregarPrestamo',
 data: () => ({
     deuda: "",
     interes: "",
     tiempo: "",
     cuota: "",
     loader: null,
     loading2: false,
     dialog: false,
 }),

 methods: {
     Volver() {
         this.dialog = false
     },
     Volver1() {
         this.$router.push("/")
     }
 },
 watch: {
     loader() {
         const l = this.loader
         this[l] = !this[l]
         setTimeout(() => (this[l] = false), 3000)
         this.loader = null
         this.dialog = false
     },
 },
}
</script>

