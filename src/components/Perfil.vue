<template>
    <v-container fluid class="mt-9">
        <v-row class="columna">
            <v-col cols="3">
                <img class="mt-2 ml-13 circular--landscape" src="https://cdn.vuetifyjs.com/images/john.jpg">
                
                <!-- <div class="triangulo"></div> -->
            </v-col>

            <v-col cols="9 mt-15">
                <v-row>
                    <v-col cols="1">
                        <v-avatar class="mt-5">
                            <img src="https://cdn.vuetifyjs.com/images/john.jpg">
                        </v-avatar>
                        
                    </v-col>
                    <v-col cols="11" class="mt-6">
                        <h1 class="white--text ml-n7 ">
                            ADMIN
                            {{ cargo }}
                        </h1>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="4" class="ml-n10 box">
                <h2 class="ml-15 mr-n5">
                    Jholman Steven
                    <br>
                    Mayorga Rodriguez
                </h2>
                <h4 class="grey-darken-1--text ml-15 ">
                    Ciudad:
                    {{ ciudad }} city
                </h4>
                <h3 class="ml-15">
                    Celular:
                    {{ celular }}3213123213
                </h3>
                <h3 class="ml-15">
                    Tipo Persona: {{ tipoPersona }}
                </h3>
            </v-col>
            <v-col>

            </v-col>

        </v-row>
    </v-container>


</template>
<script>
// import axios from 'axios';
export default {
    name: 'PagePerfil',
    data: () => ({

    })
}
</script>
<style>
.columna {
    background-color: rgb(204, 87, 4);
    height: 150px;
}
.circular--landscape {
    display: inline-block;
    position: relative;
    width: 200px;
    height:
        200px;
    overflow:
        hidden;
    border-radius: 50%;
}

.circular--landscape img {
    width: auto;
    height: 100%;
    margin-left: -50px;
}
.triangulo {
     width: 1000; 
     height: 1000; 
     border-left: 100px solid #eb8c06;
     border-top: 50px solid transparent;
     border-bottom: 50px solid transparent; 
}
.box {
  border: 10px solid rgb(204, 87, 4);
  border-radius: 1000px;
  border-top-right-radius: 50% 30%;
}
</style>