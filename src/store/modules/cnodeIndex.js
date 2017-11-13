
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
    changeTab (state, arg){
        state.tab = arg;
    },
    getArticles(state, data){
        state.articles = data;
    }
}

const actions = {

}

export default {
    state,
    getters,
    mutations,
    actions
}