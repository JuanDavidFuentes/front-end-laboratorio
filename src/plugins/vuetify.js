import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';


Vue.use(Vuetify);

let color = JSON.parse(localStorage.getItem("color"))
let a=[]
console.log(a);
a = color
let formato=""
let interfaz=""
let logo=""
let temporal=""
if(a===null || a===undefined || a===0 || localStorage.getItem("color")===[] || a.length===0){
  formato="#9E9E9E"
  interfaz="#000000"
  logo="#8BC34A"
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
