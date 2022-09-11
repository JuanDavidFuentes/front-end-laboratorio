import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store =new Vuex.Store({
    state: {
        token:"",
        datos:{},
        cotizaciones:{},
        backend:"https://laboratorio-jjai-2.herokuapp.com/api",
    },
    mutations:{
        setToken(state,value){
            state.token = value
        },
        setDatos(state, value){
            state.datos = value
        },
        setCotizacion(state, value){
            state.cotizaciones = value
        },
    },
    actions:{
        setToken(context,value){
            context.commit('setToken',value)
        },
        setDatos(context,value){
            context.commit('setDatos',value)
        },
        setCotizacion(context,value){
            context.commit('setCotizacion',value)
        },
    }
}); 