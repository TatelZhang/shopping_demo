<template> 
    <div>
        <ul class="list-group">
            <li class="list-group-item" v-for="item in articles" :key="item.id">
                <a :href="'/user/' + item.author.loginname" class="user_avatar">
                    <img :src="item.author.avatar_url" alt="">
                </a>
                <span class="reply_count">
                    <span class="count_of_replies" title="评论数">
                        {{item.reply_count}}
                    </span>
                    <span>/</span>
                    <span class="count_of_visits" title="点击数">{{item.visit_count}}</span>
                </span>
                <span class="share" v-if="item.top">置顶</span>
                <span class="share" v-else-if="item.tab === 'share'">分享</span>
                <span class="share gray" v-else-if="item.tab === 'ask'">问答</span>
                <span class="" v-else></span>
                <!-- <a v-link="{name: 'topic', params: {id: item.id}}" class="title">{{item.title}}</a> -->
                <router-link :to="'/topic/'+ item.id" class="title">{{item.title}}</router-link>
                <a class="last_time pull-right clearfix" href="#">
                    <!-- <img :src="item.author.avatar_url" alt=""> -->
                    <span class="last_reply_time" title="最后回复时间">{{reply_time(item.last_reply_at)}}</span>
                </a>
            </li>
        </ul>
    </div>            
</template>
<script>
    import solve from'../../../utils/solvefunc'

    export default {
        name: 'PageList',
        data(){
            return {
                msg: "this is title in component PageList.Vue",
            };
        },
        props:["articles"],
        methods:{
            reply_time: solve.getTime
        },
        // mounted(){
        //     this.articles = articles_data.data;
        // }
    }
</script>
