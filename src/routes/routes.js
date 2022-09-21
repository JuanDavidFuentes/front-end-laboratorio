import login from '../components/Login.vue';
import cotizacion from '../components/Cotizacion.vue';
import DetalleCotizacion from '../components/DetallesCotizacion.vue'; 
import Home from '../components/Home.vue';
import Configuracion from '../components/Configuracion.vue';
import AgregarUsuario from '../components/AgregarUsuario.vue';
import Setup from '../components/Setup.vue';
import AggCiudad from '../components/AggCiudades.vue';

export const routes = [
    {path: '/login', component: login},
    {path: '/cotizacion', component: cotizacion},
    {path: '/DetallesCotizacion', component: DetalleCotizacion},
    {path: '/', component: Home},
    {path: '/Configuracion', component: Configuracion},
    {path: '/agregarusuario', component: AgregarUsuario},
    {path: '/setup', component: Setup},
    {path: '/AggCiudades', component: AggCiudad},
    
]