import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';


Vue.use(Vuetify);


let color = JSON.parse(localStorage.getItem("color"))
let a={}
a = color
let formato=a[0].formato
let interfaz=a[0].interfaz
let logo=a[0].logo
let temporal=a[0].temporal


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
