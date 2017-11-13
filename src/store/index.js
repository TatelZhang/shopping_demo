import Vue from 'vue'
import Vuex from 'vuex'

import LoginStatus from './modules/loginStatus'
import cnodeIndex from './modules/cnodeIndex'

Vue.use(Vuex);



export default  new Vuex.Store({
    modules: {
        LoginStatus,
        cnodeIndex
    }
});