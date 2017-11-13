<template>
        <div class="main">
        <div class="container">
            <div class="col-md-10">
                <div id="article">
                    <div class="panel">
                        <div class="header">
                            <div class="topic_full_title">
                                <div class="main_title">
                                    <span class="share" v-if="tab==='share'">精华</span>
                                    <span class="full_title">
                                        {{title}}
                                    </span> 
                                </div>
                                <div class="topics">
                                    <span>发布于{{getTime(create_at)}}</span>
                                    <span>作者 {{author.loginname}}</span>
                                    <span>{{visit_count}} 次浏览</span>
                                    <span>最后一次编辑是{{getTime(last_reply_at)}}</span>
                                    <span>来自 分享</span>
                                    <input type="button" value="收藏" class="btn btn-success pull-right">
                                </div>
                            </div>
                        </div>
                        <div v-html='content' class="markup">
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <span>{{reply_count}} 回复</span>
                        </div>
                        <div class="cell" v-for="(reply, index) in replies" :id="reply.id">
                            <div class="author_content">
                                <a href="#" class="user_avatar">
                                    <img :src="reply.author.avatar_url" alt="">
                                </a>
                                <a href="#" class="user_link">{{reply.author.loginname}}</a>
                                <span><a :href="'#'+reply.id"> {{index + 1}}楼•{{getTime(reply.create_at)}}</a></span>
                                <div class="reply_author">
                                    <span><span class="click">赞</span><span>{{reply.ups.length}}</span></span>
                                    <span><span class="click">回复</span></span>
                                </div>
                            </div>
                            <div class="reply-content" v-html="reply.content">  
                            </div>
                        </div>
                    </div>
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <span>添加回复</span>
                        </div>
                        <div class="cell">
                            富文本区域
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import solvefunc from '../../../utils/solvefunc'
export default {
    data () {
        return {
                id: null,
                author_id: null,
                tab: '',
                content: '',
                title: '',
                last_reply_at: '',
                good: false,
                top: false,
                reply_count: null,
                visit_count: null,
                create_at: '',
                author: {},
                replies: {}
        }
    },
    computed: {
        
    },
    methods:{
        getTime: solvefunc.getTime
    },
    mounted () {
        this.$http.get("https://cnodejs.org/api/v1/topic/"+this.$route.params.id).then((res)=>{
            res = res.data;
            this.id = res.data.id;
            this.author_id = res.data.author_id;
            this.tab = res.data.tab;
            this.content = res.data.content;
            this.title = res.data.title;
            this.last_reply_at = res.data.last_reply_at;
            this.good = res.data.good;
            this.top = res.data.top;
            this.reply_count = res.data.reply_count;
            this.visit_count = res.data.visit_count;
            this.create_at = res.data.create_at;
            this.author = res.data.author;
            this.replies = res.data.replies;
        });  
    }
}
</script>
