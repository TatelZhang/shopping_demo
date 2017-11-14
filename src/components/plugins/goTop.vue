<template>
    <div id="goTop" @click="goTop">
        <span>返回顶部</span>
    </div>
</template>
<script>
    export default {
        methods: {
            goTop () {
                window.scrollTo(0,0);
            }
        },
        mounted () {
            window.addEventListener('scroll', ()=>{
                let goTop = document.getElementById('goTop')
                if(window.scrollY===0){
                    goTop.style.opacity = 0;
                }else{
                    goTop.style.opacity = 1;
                }
            })
        }
    }
</script>
<style>
    #goTop{
        padding: 1em;
        position: fixed;
        right: 60px;
        bottom: 60px;
        background-color:#252525;
        text-align: center;
        border-radius: 8px;
        cursor: pointer;
    }
    #goTop span{
        display: inline-block;
        color: #a5a5a5;
        width: 1em;
        font-weight: bold;
    }
</style>

