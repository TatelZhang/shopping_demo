
const state = {
    account:{
        username: '',
        avatar:'',
        isLogin: false
    }
}

const getters = {
    account(state){
        return state.account;
    }
}
const mutations = {
    loginUser:(state, data)=>{
        // state.username = data.username;
        // state.avatar = data.avatar;
        state.account = data;
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
        // console.log(this);
    }
}
export default {
    state,
    getters,
    mutations,
    actions,
}