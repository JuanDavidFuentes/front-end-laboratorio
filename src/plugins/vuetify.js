import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify, {
    theme: {
      primary: '#FF5722',
      secondary: '#b0bec5',
      accent: '#8c9eff',
      error: '#b71c1c'
    }
});

export default new Vuetify({
});
