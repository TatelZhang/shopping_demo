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
        width: 19%;
        display: inline-block;
        background-color: white;
        color: black;
        padding: 15px 5px;
        text-align: center;
        cursor: pointer;
        border-radius: 3px;
        margin: 0 5px;
    }
    .mode-item:hover .pic{
        padding: 5px;
        
    }
    .mode-item:hover .introduce-tile p{
        font-weight: bold;
    }
    .mode-item .introduce-tile p{
        font-size: 20px;
        
    }
    .mode-item .introduce-tile span{
        font-size: 10px;
        color: #666;
    }
    .mode-item .pic{
        padding: 20px;
        /* transition: all 1.5s ease; */
    }
    .mode-item .pic img{
        max-width: 100%;
    }
</style>
