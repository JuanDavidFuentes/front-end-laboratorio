import login from '../components/Login.vue';
import cotizacion from '../components/Cotizacion.vue'; 
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
import Calidad  from "../components/Calidad.vue";
import Perfil from "../components/Perfil.vue";
import Orden from "../components/OrdenesServicio.vue";
import Color from "../components/Color.vue";
import CotiImprimir from "../components/CotiImprimir.vue";

export const routes = [
    {path: '/', component: login},
    {path: '/cotizacion', component: cotizacion},
    {path: '/Home', component: Home},
    {path: '/Configuracion', component: Configuracion},
    {path: '/agregarusuario', component: AgregarUsuario},
    {path: '/setup', component: Setup},
    {path: '/AggCiudades', component: AggCiudad},
    {path: '/log', component: Log},
    {path: '/Muestras', component: Muestras},
    {path: '/EnsayoLab', component: Ensayo},
    {path: '/ListaMuestras', component: ListaMuestras},
    {path: '/Clientes', component: Clientes},
    {path: '/Calidad', component: Calidad}, 
    {path: '/perfil', component: Perfil},
    {path: '/orden', component: Orden},
    {path: '/color', component: Color},
    {path: '/CotiImprimir', component: CotiImprimir},
]