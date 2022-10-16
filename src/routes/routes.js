import login from '../components/Login.vue';
import cotizacion from '../components/Cotizacion.vue';
// import DetalleCotizacion from '../components/DetallesCotizacion.vue'; 
import Home from '../components/Home.vue';
import Configuracion from '../components/Configuracion.vue';
import AgregarUsuario from '../components/AgregarUsuario.vue';
import Setup from '../components/Setup.vue';
import AggCiudad from '../components/AggCiudades.vue';
import Log from '../components/Bitacora.vue';
import Muestras from '../components/Muestras.vue';
import Ensayo from '../components/Ensayo.vue';
import ListaMuestras from '../components/ListaMuestras.vue';
import Clientes from '../components/Clientes.vue'

export const routes = [
    {path: '/login', component: login},
    {path: '/cotizacion', component: cotizacion},
    // {path: '/DetallesCotizacion', component: DetalleCotizacion},
    {path: '/', component: Home},
    {path: '/Configuracion', component: Configuracion},
    {path: '/agregarusuario', component: AgregarUsuario},
    {path: '/setup', component: Setup},
    {path: '/AggCiudades', component: AggCiudad},
    {path: '/log', component: Log},
    {path: '/Muestras', component: Muestras},
    {path: '/EnsayoLab', component: Ensayo},
    {path: '/ListaMuestras', component: ListaMuestras},
    {path: '/Clientes', component: Clientes}
]