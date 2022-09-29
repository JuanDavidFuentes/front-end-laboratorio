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

                        <v-select v-model="selecionadoTipo" :items="tipoPersona" dense filled rounded label="Tipo Persona"></v-select>

                        <v-select v-model="selecionadoRol" :items="rolPersona" dense filled rounded label="Rol"></v-select>
                        <v-text-field v-model="nombre" label="Nombre*" filled rounded dense></v-text-field>
                        <v-text-field v-model="apellidos" label="Apellidos*" filled rounded dense></v-text-field>
                        <v-text-field v-model="documento" label="Documento*" filled rounded dense></v-text-field>
                        <v-text-field v-model="direccion" label="Dirección*" filled rounded dense></v-text-field>
                     
                        <!-- <v-select :items="Ciudad1" filled rounded dense label="Departamento" @click="ListarDepar()" ></v-select> -->

                        <v-autocomplete v-model="seleccionadoCiudad" :items="Municipio" item-text="ciudad" item-value="_id" filled rounded dense label="Ciudad" @click="listarCiudad()" >
                        </v-autocomplete>

                        <!-- contacto -->
                        <v-text-field v-model="celular" label="celular*" filled rounded dense></v-text-field>
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
                            <th class="text-left black--text title"> Tipo Persona</th>
                             <th class="text-left black--text title"> Nombre</th>
                             <th class="text-left black--text title"> Apellidos </th>
                             <th class="text-left black--text title"> Documento </th>
                             <th class="text-left black--text title"> Dirección </th>
                             <th class="text-left black--text title"> Ciudad </th>
                             <th class="text-left black--text title"> Celular </th>
                             <th class="text-left black--text title"> Estado </th>
                             <th class="text-left black--text title"> Cargo </th>
                             <th> </th>
                         </tr>
                     </thead>
                     <tbody>
                         <tr v-for="(p, i) in Usuarios" :key="i">
                            <td>{{p.tipoPersona}}</td>
                             <td>{{p.nombre}}</td>
                             <td>{{p.apellidos}}</td>
                             <td>{{p.documento}}</td>
                             <td>{{p.direccion}}</td>
                             <td>{{p.ciudad.ciudad}}</td>
                             <td>{{p.celular}}</td>
                             <td>
                                <button class="">
                                <span> Activo </span></button>
                             </td>
                             <td></td>
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
    idciudad:"",
    municipio:"",
    idmunicipio:{},
    Municipio:[],
    MuniS:{},
    Usuarios:[],
    nombre:"",
    apellidos:"",
    documento:"",
    direccion:"",
    ciudad:"",
    celular:"",
    email:"",
    password:"",

    seleccionadoCiudad:"",
    selecionadoTipo:"",
    selecionadoRol:"",

    tipoPersona: [
        { text: "Natural", value: "Natural" },
        { text: "Juridica", value: "Juridica" }
      ],
      rolPersona: [
        { text: "CLIENTE",  value: "CLIENTE"},
        { text: "ADMIN",  value: "ADMIN" },
        { text: "TECNICO", value: "TECNICO"},
        { text: "SUPERVISOR", value: "SUPERVISOR" },
        { text: "CIENTIFICO",  value: "CIENTIFICO"},
        { text: "RECEPCIONISTA",  value: "RECEPCIONISTA" },
      ],

    dialog: false,
 }),
created(){
    this.usuarios()
},
 methods: {
    changeState(valor) {
        this.selecionadoRol = this.rolPersona[valor - 1];
        this.selecionadoTipo = this.tipoPersona[valor - 1];
        this.seleccionadoCiudad= this.Municipio[valor - 1];
    },

    guardar(){
        let header = { headers: { "token": this.$store.state.token } }
        axios.post("/usuarios", {
            tipoPersona:this.selecionadoTipo,
            nombre: this.nombre,
            apellidos: this.apellidos,
            documento: this.documento,
            direccion: this.direccion,
            ciudad: this.seleccionadoCiudad,
            celular: this.celular,
            email: this.email.toUpperCase(),
            password: this.password,
            rol:this.selecionadoRol
      }, header)
        .then(response => {
            console.log(response);
            this.dialog = false
            this.$swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: response.data.msg,
                        showConfirmButton: false,
                        timer: 1500,
                    });          
        })
        .catch(error => {
          console.log(error);
          console.log(this.selecionadoTipo);
          console.log(this.selecionadoRol);
          console.log(this.seleccionadoCiudad);
        })
     },
    Volver() {
        this.dialog = false
     },
    usuarios() {
        let header = { headers: { "token": this.$store.state.token } };
        axios.get(`/usuarios/`, header)
            .then((response) => {
                console.log(response);
                response.data.usuarios.forEach(usuarios => {
                    this.Usuarios.push(usuarios)
                })
                console.log(this.Usuarios);
            })
            .catch((error) => {
                console.log(error);
            });
    },

    listarCiudad(){
        axios.get("/ciudad/CiudadDepartamento")
        .then(response => {
                    console.log(response);
                    response.data.ciudad.forEach(city => {
                        this.Municipio.push(city)
                    })
                    console.log(this.Municipio);
                    
                })
                .catch(error => {
                    console.log(error);
                })
        },

        customFilter(item, queryText) {
            const textOne = item.ciudad.toUpperCase()
            const searchText = queryText.toUpperCase()

            return textOne.indexOf(searchText) > -1
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

