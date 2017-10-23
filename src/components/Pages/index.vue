<template>
    <div id="firstpage">
        <div class="col-md-3">
            <div class="products">
                <div class="panel panel-success">
                    <div class="panel-heading">
                        <div class="head">全部产品</div>
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
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <div>最新消息</div>
                    </div>
                    <div class="panel-body">
                        <div class="msg-container">
                            <ul>
                                <li v-for="msg in message"><a :href="msg.url" class="more">Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit nihil sapiente facilis tempore rem voluptas, ratione doloribus expedita, beatae veritatis cupiditate sunt fuga voluptate ipsa aliquam nisi laboriosam autem minus! {{ msg.name }}</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-9">
            <div class="products-right">
                <slider :slides="slides"></slider>
                <div class="info-box clearfix">
                    <div class="info-box-item clearfix" v-for="i in count">
                        <img src="../../assets/doge.png" alt="">
                        <div class="introduce">
                            <div class="i-title">开放产品</div>
                            <div class="desc">开放产品是一款开放的产品</div>
                            <a href="#" class="btn btn-success">了解更多</a>
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
    export default {
        name: 'firstpage',
        created(){
            var self = this;
            this.$http.get("/api/parts").then((data)=>{
                // console.log(data)
                this.parts = data.data;
            },(err)=>{console.log("error~!")});
            this.$http.get("/api/message").then(function(data){
                this.message = data.data;
            }, function(err){console.log("error")});
        },
        data(){
            return{
                parts: p_data.parts,
                message: p_data.message,
                count: [1, 2, 3, 4],
                slides: [
                    {   
                        id: 0,
                        src: require('../../assets/1.jpg'),
                        title: 'some',
                        href: "nothing"
                    },
                    {   
                        id: 1,
                        src: require('../../assets/2.jpg'),
                        title: 'other',
                        href: "nothing222"
                    },
                    {   
                        id: 2,
                        src: require('../../assets/3.jpg'),
                        title: 'else',
                        href: "nothing33333"
                    },
                    {   
                        id: 3,
                        src: require('../../assets/4.jpg'),
                        title: 'why',
                        href: "nothing44444"
                    },
                ]
            }
        },
        components:{
            slider
        }
    }
</script>
<style>
#firstpage ul{
    list-style-type: none;
    padding-left: 20px;
}
.products .head, .title{
    font-weight: bold;
}
#firstpage .title{
    color: #4983b5
}
.msg-container{
    height: 500px;
}
.info-box-item{
    float: left;
    width: 48%;
    background-color: white;
    margin-bottom: 15px;
    margin-right: 10px;
}

.info-box-item img{
    box-sizing: border-box;
    float: left;
    max-width: 200px;
    height: 150px;
    padding: 20px;
}
.info-box-item .introduce{
    padding-top: 20px;
    margin-left: 150px;
}
.introduce .i-title{
    font-size: 16px;
    font-weight: bold;
}
.introduce .btn{
    margin: auto;
}
.info-box-item .desc{
    padding: 20px 10px;
}
.more{
    display: inline-block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
