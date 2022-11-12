import Vue from 'vue';
import Vuex from 'vuex';


Vue.use(Vuex);

export const store =new Vuex.Store({
    state: {
        token:"",
        datos:{},
        cotizaciones:{},
        muestras:{},
        cotiImprimir:{},
        imprimirM:{},
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
        setCotiImprimir(state, value){
            state.cotiImprimir = value
        },
        setImprimirM(state, value){
            state.imprimirM = value
        },
        setMuestras(state, value){
            state.muestras = value
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
        setCotiImprimir(context,value){
            context.commit('setCotiImprimir',value)
        },
        setMuestras(context,value){
            context.commit('setMuestras',value)
        },
        setImprimirM(context,value){
            context.commit('setImprimirM',value)
        }, 
    }
}); 