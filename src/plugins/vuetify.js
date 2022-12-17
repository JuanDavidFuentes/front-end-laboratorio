import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import axios from 'axios'
Vue.use(Vuetify);


//https://laboratorio-production.up.railway.app
async function color() {
  await axios.get("https://laboratorio-ten.vercel.app/api/colores/")
    .then((response) => {
      console.log(response);
      localStorage.setItem("color",JSON.stringify(response.data.color))
    })
    .catch((error) => {
      console.log(error);
    });
}
color() 


let a=[]
a = JSON.parse(localStorage.getItem("color"))
console.log(a);
let formato=""
let interfaz=""
let logo=""
let temporal=""
if(a===null){
  formato="#9E9E9E"
  interfaz="#000000"
  logo="#43A047"
  temporal="#FFFFFF"
}else{
  formato=a[0].formato
  interfaz=a[0].interfaz
  logo=a[0].logo
  temporal=a[0].temporal
}



export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: interfaz,
        secondary: formato,
        accent: logo,
        error: temporal,
      },
    },
  },
});
