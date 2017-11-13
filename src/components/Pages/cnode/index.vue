<template>
  <div class="main">
        <div class="container">
            <div class="col-md-9">
                <div class="nav nav-pills" id="menuBar">
                    <li :class="{'white-color': tab==='all'}"><a href="/?tab=all">全部</a></li>
                    <li><a href="#">精华</a></li>
                    <li><a href="#">分享</a></li>
                    <li><a href="#">问答</a></li>
                    <li><a href="#">招聘</a></li>
                    <li><a href="#">客户端测试</a></li>
                </div>
                <div class="cnode">
                    <page-list :articles="articles"></page-list>
                    <page-bar :tab="tab"></page-bar>
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
import pageBar from './pageBar'
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
    components: {
        pageList,
        pageBar
    },
    mounted () {
        // console.log(this.$store)
        // this.$http.get("https://cnodejs.org/api/v1/topics/").then(res=>{
        //     // console.log(res)
        //     this.$store.commit("getArticles", res.data.data);
        // })
        // .catch(err=>{
        //     console.log("error")
        // })
        var res = require('./res.json')
        this.$store.commit('getArticles', res.data);
    }
}
</script>