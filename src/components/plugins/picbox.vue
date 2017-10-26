<template>
    <div class="pic-box">
        <div class="info-box-item clearfix" v-for="(item,index) in slides" :class="{odd: index%2===0}">
            <div class="box-img">
                <img :src="item.src" alt="">
            </div>
            <div class="introduce">
                <div class="i-title">{{item.title}}</div>
                <div class="desc">游戏</div>
                <a href="#" class="btn btn-success pull-right">了解更多</a>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        props: {
            slides:{
                type: Array,
                default: [
                    {
                        id: 0,
                        src: '',
                        title: '',
                        href: ''
                    }
                    ]
            }
        }
    }
</script>
<style>

.info-box-item
    {
    float: left;
    background-color: white;
    padding: 10px;
    margin-bottom: 10px;
    box-sizing: border-box;
    width: 49%;
    /* border: 1px solid pink; */
    border-radius: 3px;
    box-shadow: 0 4px 6px rgba(0,0,0,.5);
    /* margin-bottom: 15px;
    margin-right: 10px; */
}
.odd{
    margin-right: 15px; 
}
.even{
}
/* .info-box-item .desc{
    padding: 20px 10px;
} */
.box-img{
    max-width: 100%;
    padding: 2px;
    border: 1px solid gray;
}
.box-img img{
    /* box-sizing: border-box; */
    /* float: left; */
    max-width: 100%;
    margin: auto;
    /* height: 150px; */
}
.info-box-item .introduce{
    padding-top: 10px;
    width: 90%;
    margin: 0 auto;
    /* margin-left: 150px; */
}
.introduce .i-title{
    font-size: 16px;
    font-weight: bold;
}
.introduce .desc{
    padding: 5px;
    float: left;
}
.introduce .btn{
    margin: auto;
}
</style>
