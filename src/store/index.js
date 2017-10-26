import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

var store = new Vuex.Store({
    state:{
        username: ''
    },
    mutations:{
        loginUser(state, data){
            state.username = data;
        }
    }
});

export default store