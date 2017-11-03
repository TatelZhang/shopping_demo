
const state = {
    username: ''
}

const getters = {
    usr(state){
        return state.username;
    }
}
const mutations = {
    loginUser:(state, data)=>{
        // console.log(state);
        state.username = data;
    }
}

const actions = {
    getUserInfo:(context)=>{
        // context.commit('loginUser')
        // this.$https.post('/api/login').then((data)=>{
        //     if(data.status === 200){
        //         mutations.commit('loginUser', data.data.username);
        //     }
        // })
        // console.log(this.$http);
        console.log(context);
    }
}
export default {
    state,
    getters,
    mutations,
    actions,
}