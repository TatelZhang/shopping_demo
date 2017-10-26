
const state = {
    username: ''
}

const getters = {
    usr(state){
        return state.username;
    }
}
const mutations = {
    loginUser(state, data){
        state.username = data;
    }
}

export default {
    state,
    getters,
    mutations,
}