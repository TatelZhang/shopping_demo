<template>
    <div class="mode-item">
        <div class="introduce-tile">
            <p>
                {{item.title}}
            </p>
            <span>{{item.desc}}</span>
        </div>
        <div class="pic">
            <img src="../../assets/doge.png" alt="">
        </div>
    </div>
</template>
<script>
    export default{
        props:{
            item: {
                type:Object,
                default: {
                    title: "最高2000人群",
                    desc: "独乐乐 不如众乐乐"
                }
            }
        }
    }
</script>
<style>
    .mode-item{
        box-sizing: border-box;
        max-width: 18%;
        display: inline-block;
        background-color: white;
        color: black;
        padding: 15px 5px;
        text-align: center;
        cursor: pointer;
        border-radius: 3px;
        margin: 0 5px;
        vertical-align: top;
    }
    .mode-item:hover .pic img{
        max-width: 100%;
        /* padding: 5px; */
        
    }
    .mode-item .pic{
        margin: 0 auto;
        height: 210px;
    }
    .mode-item:hover .introduce-tile p{
        font-weight: bold;
    }
    .mode-item .introduce-tile p{
        font-size: 18px;
        font-weight: normal;
        -webkit-transition: all 0.5s  ease;
        -moz-transition: all 0.5s  ease;
        transition: all 0.5s  ease;
        
    }
    .mode-item .introduce-tile span{
        font-size: 10px;
        color: #666;
    }
    .mode-item .pic{
        /* padding: 15px; */
        /* transition: all 1.5s ease; */
    }
    .mode-item .pic img{
        max-width: 80%;
        -webkit-transition: all .5s  ease;
        -moz-transition: all .5s  ease;
        transition: all .5s  ease;
    }
</style>
