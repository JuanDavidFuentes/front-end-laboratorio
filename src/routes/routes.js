import login from '../components/Login.vue';
import cotizacion from '../components/Cotizacion.vue';
import DetalleCotizacion from '../components/DetallesCotizacion.vue'; 
import Home from '../components/Home.vue';
export const routes = [
    {path: '/login', component: login},
    {path: '/', component: cotizacion},
    {path: '/DetallesCotizacion', component: DetalleCotizacion},
    {path: '/home', component: Home},
]