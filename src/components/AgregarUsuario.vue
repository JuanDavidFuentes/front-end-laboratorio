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
                         Nuevo usuario
                     </v-btn>
                 </template>
                 <v-card class="">
                     <v-card-title class="text-h5">
                         Datos Usuario
                     </v-card-title>
                     <v-col cols="12">
                        <v-select :items="tipoPersona" dense filled rounded label="Tipo persona"></v-select>
                        <v-select :items="rol" dense filled rounded label="Rol"></v-select>
                        <v-text-field v-model="nombre" label="Nombre*" filled rounded dense></v-text-field>
                        <v-text-field v-model="apellidos" label="Apellidos*" filled rounded dense></v-text-field>
                        <v-text-field v-model="documento" label="Documento*" filled rounded dense></v-text-field>
                        <v-text-field v-model="direccion" label="Dirección*" filled rounded dense></v-text-field>
                     
                        <v-select :items="Ciudades" filled rounded dense label="Departamento" @click="ListarDepar()" ></v-select>
                        <v-select :items="Ciudades" filled rounded dense label="Ciudad" ></v-select>
                        <!-- contacto -->
                        <v-text-field v-model="telefono" label="Telefono*" filled rounded dense></v-text-field>
                        <v-text-field v-model="email" label="Email*" filled rounded dense></v-text-field>
                        <v-text-field v-model="password" type="password" label="Password*" filled rounded dense></v-text-field>
                        <!-- foto -->
                        </v-col>

                     <v-card-actions class="mt-n7">
                         <v-spacer></v-spacer>
                         <v-btn class="mr-15" outlined color="red darken-3" @click="Volver()">
                            Cancelar
                         </v-btn>
                         <v-btn color="success" @click="guardar()">
                            Guardar Datos
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
                             <th class="text-left black--text title"> Nombre</th>
                             <th class="text-left black--text title"> Apellidos </th>
                             <th class="text-left black--text title"> Documento </th>
                             <th class="text-left black--text title"> Dirección </th>
                             <th class="text-left black--text title"> Ciudad </th>
                             <th class="text-left black--text title"> Departamento </th>
                             <th class="text-left black--text title"> Telefono </th>
                             <th class="text-left black--text title"> Estado </th>
                         </tr>
                     </thead>
                     <tbody>
                         <tr v-for="(p, i) in Usuarios" :key="i">
                             <td>{{p.nombre}} nombres</td>
                             <td>{{p.apellidos}}</td>
                             <td>{{p.documento}}</td>
                             <td>{{p.direccion}}</td>
                             <td>{{p.ciudad}}</td>
                             <td>{{p.telefono}}</td>
                             <td>
                                <button class="">
                                <span> Activo </span></button>
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
import axios from 'axios';

export default {
 name: 'PageUsuarios',
 data: () => ({
    Ciudad:[],
    depar:{},
    municipio:{},
    Depar:[],

    Usuarios:[],
    nombre:"",
    apellidos:"",
    documento:"",
    direccion:"",
    ciudad:"",
    departamento:"",
    telefono:"",
    email:"",
    password:"",
    tipoPersona: ['Natural','Juridica'],
    rol:['CLIENTE','ADMIN','TECNICO','SUPERVISOR','CIENTIFICO','RECEPCIONISTA'],

    dialog: false,alog: false,
 }),

 methods: {
     Volver() {
         this.dialog = false
     },

     guardar(){
        let header = { headers: { "token": this.$store.state.token } }
        axios.post("/usuarios", {
            nombre: this.nombre,
            apellidos: this.apellidos,
            documento: this.documento,
            direccion: this.direccion,
            ciudad: this.ciudad,
            departamento: this.departamento,
            telefono: this.telefono,
            email: this.email,
            password: this.password,
            tipoPersona:this.tipoPersona,
            rol:this.rol
      }, header)
        .then(response => {
          console.log("registro exitoso");
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        })
     },
     ListarDepar(){
        axios.get("/ciudad/CiudadDepartamento")
        .then(response => {
          console.log(response);
          this.Ciudad=response.data.ciudad
          for (let i = 0; i < this.Ciudad.length; i++) {
            this.depar=this.Ciudad[i].departamento 
            this.Depar.push(this.depar)
          }
    

          console.log(this.Depar);
        })
        .catch(error => {
          console.log(error);
        })
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

