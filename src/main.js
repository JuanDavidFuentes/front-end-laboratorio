import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import VueRouter from 'vue-router';
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';
import {store} from './store/store.js';
import {routes} from './routes/routes.js';
import axios from 'axios'

//https://laboratorio-ten.vercel.app/api
//https://laboratorio-production.up.railway.app/api
axios.defaults.baseURL = 'https://lab-wheat.vercel.app/api';

Vue.use(VueRouter)
Vue.use(VueSweetalert2);
Vue.config.productionTip = false

const router = new VueRouter({
  routes,
})

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount('#app')
