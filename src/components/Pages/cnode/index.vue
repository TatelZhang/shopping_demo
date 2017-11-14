<template>
  <div class="main">
        <div class="container">
            <div class="col-md-9">
                <div class="nav nav-pills" id="menuBar">
                    <li :class="{'white-color': tab==='all'}" @click="changeTab('all')"><a>全部</a></li>
                    <li :class="{'white-color': tab==='good'}" @click="changeTab('good')"><a>精华</a></li>
                    <li :class="{'white-color': tab==='share'}" @click="changeTab('share')"><a>分享</a></li>
                    <li :class="{'white-color': tab==='ask'}" @click="changeTab('ask')"><a>问答</a></li>
                    <li :class="{'white-color': tab==='job'}" @click="changeTab('job')"><a>招聘</a></li>
                    <li :class="{'white-color': tab==='dev'}"@click="changeTab('dev')"><a>客户端测试</a></li>
                </div>
                <div class="cnode">
                    <page-list :articles="articles"></page-list>
                    <pagination :tab="tab"></pagination>
                </div>
            </div>
            <div class="col-md-3">
                <div class="sideBar">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            jssss
                        </div>
                        <div class="panel-body">
                            skkk
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import "./cnodeIndex.css"
import pageList from './pageList'
import pagination from './pageBar'
export default  {
    data () {
        return {

        }
    },
    computed: {
        articles () {
            return this.$store.getters.articles;
        },
        tab () {
            return this.$store.getters.tab;
        }
    },
    methods: {
        changeTab (tab) {
            this.$store.dispatch('changeTab', tab);
        }
    },
    components: {
        pageList,
        pagination,
    },
    mounted () {
        // console.log(this.$store)
        this.$http.get("https://cnodejs.org/api/v1/topics/").then(res=>{
            this.$store.commit("getArticles", res.data.data);
        })
        .catch(err=>{
            console.log("error")
        })
        // var res = require('./res.json')
        // this.$store.commit('getArticles', res.data);
        // this.$store.dispatch('changeTab', 'share');
    }
}
</script>
<style>

</style>
