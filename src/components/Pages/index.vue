<template>
<div class="content">
    <div class="container">
        <div id="firstpage">
            <div class="col-md-3">
                <div class="products">
                    <div class="panel panel-danger">
                        <div class="panel-heading">
                            <div class="head">QQ会员</div>
                        </div>
                        <div class="panel-body">
                            <template v-for='part in parts'>
                                <div class="title">{{part.title}}</div>
                                <ul>
                                    <li v-for="item in part.products"><a :href="item.url">{{ item.name }}</a></li>
                                </ul>
                                <hr v-if='!part.is_last'>
                            </template>                        
                        </div>
                    </div>
                    <div class="panel panel-danger">
                        <div class="panel-heading">
                            <div>最新消息</div>
                        </div>
                        <div class="panel-body">
                            <div class="msg-container">
                                <ul>
                                    <li v-for="msg in message"><a :href="msg.url" class="more">Lorem ipsum dolor sit amet consectetur adipisicing elit. {{ msg.name }}</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-9">
                <div class="row">

                <div class="products-right">
                    <!-- 幻灯片 -->
                    <slider :slides="slides"></slider>
                    <pic-box :slides="slides"></pic-box>
                </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script>
// import some_data from "../../assets/product.json"
    import slider from '../plugins/slider'
    import p_data from '../../assets/product'
    import picBox from '../plugins/picbox'
    export default {
        name: 'firstpage',
        components:{
            slider,
            picBox
        },
        created(){
            // var self = this;
            // this.$http.get("/api/parts").then((data)=>{
            //     // console.log(data)
            //     this.parts = data.data;
            // },(err)=>{console.log("error~!")});
            // this.$http.get("/api/message").then(function(data){
            //     this.message = data.data;
            // }, function(err){console.log("error")});
        },
        mounted(){
            // this.$http.get('/api/slideShow').then((res)=>{
            //     this.slidesshow = res.data;
            //     console.log(res.data);
            // },(err)=>{})
        },
        data(){
            return{
                parts: p_data.parts,
                message: p_data.message,
                count: [1, 2, 3, 4],
                slidesshow: null,
                slides: [
                    {   
                        id: 0,
                        src: require('../../assets/1.jpg'),
                        title: '天涯明月刀',
                        href: "nothing"
                    },
                    {   
                        id: 1,
                        src: require('../../assets/2.jpg'),
                        title: '极品飞车',
                        href: "nothing222"
                    },
                    {   
                        id: 2,
                        src: require('../../assets/3.jpg'),
                        title: '使命召唤',
                        href: "nothing33333"
                    },
                    {   
                        id: 3,
                        src: require('../../assets/4.jpg'),
                        title: '剑灵',
                        href: "nothing44444"
                    },
                    {   
                        id: 4,
                        src: require('../../assets/5.jpg'),
                        title: '逆战',
                        href: "nothing44444"
                    },
                    {   
                        id: 5,
                        src: require('../../assets/6.jpg'),
                        title: '穿越火线',
                        href: "nothing44444"
                    },
                    {   
                        id: 6,
                        src: require('../../assets/7.jpg'),
                        title: 'DNF',
                        href: "nothing44444"
                    },
                    {   
                        id: 7,
                        src: require('../../assets/8.jpg'),
                        title: '超级会员',
                        href: "nothing44444"
                    },
                ]
            }
        }
        
    }
</script>
<style>
#firstpage ul{
    list-style-type: none;
    padding-left: 20px;
}
.products, .products div,.products li a, .products div.title{
    color:black;
}
.products .head, .title{
    font-weight: bold;
}
.products li:hover, .products li a:hover{
    color: #d30000
}
/* #firstpage .title{
    color: #4983b5
} */
.msg-container{
    /* height: 500px; */
}
.more{
    display: inline-block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
} 
</style>
