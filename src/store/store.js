import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store =new Vuex.Store({
    state: {
        token:localStorage.token,
        datos:{},
        cotizaciones:{},
        muestras:{},
        color:localStorage.color,
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
        setMuestras(state, value){
            state.muestras = value
        },
        setColor(state,value){
            state.color = value
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
        setMuestras(context,value){
            context.commit('setMuestras',value)
        },
        setColor(context,value){
            context.commit('setColor',value)
        },
    }
}); 