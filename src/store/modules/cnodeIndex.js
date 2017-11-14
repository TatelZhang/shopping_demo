import axios from 'axios'
const state = {
    articles: [],
    tab: 'all'
}
const getters = {
    articles (state) {
        return state.articles
    },
    tab (state) {
        return state.tab
    }
}

const mutations = {
    getArticles(state, data){
        state.articles = data;
    },
    getTab (state, tab) {
        state.tab = tab;
    }
}

const actions = {
    changeTab ({commit, state}, tab){
        state.tab = tab;
        axios.get(`https://cnodejs.org/api/v1/topics/?tab=${tab}`).then(res=>{
            // console.log(res);
            // console.log(context, tab)
            commit('getArticles', res.data.data);
        }).catch(err=>{
            console.log("error")
            console.log(err)
        })
    },
    changePage ({commit, state}, page) {
        let tab = state.tab;
        axios.get(`https://cnodejs.org/api/v1/topics/?tab=${tab}&page=${page}`).then(res => {
            commit('getArticles', res.data.data);
        }).catch(err => {
            console.log("error")
            console.log(err)
        })
    }
}

export default {
    state,
    getters,
    mutations,
    actions
}