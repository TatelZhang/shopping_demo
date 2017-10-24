<template>
    <div class="slider"  v-on="{mouseover:stopRun, mouseout: reRun}">
        <div class="item">
            <div class="img">
                <a href="#">
                    <transition name="slide-trans">
                        <img :src="slides[curr].src" alt="" v-if="isShow">
                    </transition>
                    <transition name="slide-trans-old">
                        <img :src="slides[curr].src" alt="" v-if="!isShow">
                    </transition>
                </a>
            </div>
            <div class="img-info clearfix">
                <div class="msg">{{slides[curr].title}}</div>
                <ul class="point">
                    <li @click="changeCurr(prevItem)">&laquo;</li>
                    <li v-for="(item, index) in slides" :class="{curr: index===curr}" @click="changeCurr(index)">●</li>
                    <li @click="changeCurr(nextItem)">&raquo;</li>
                </ul>
            </div>
            
        </div>
        
    </div>
</template>
<script>
    export default {
        props: {
            slides:{
                type: Array,
                default: []
            }
        },
        data(){
            return{
                curr: 1,
                runId: null,
                isShow: false
            }
        },
        computed:{
            prevItem(){
                if(this.curr>0){
                    return this.curr - 1;
                }else{
                    return this.slides.length - 1;
                }
            },
            nextItem(){
                if(this.curr<this.slides.length-1){
                    return this.curr + 1;
                }else{
                    return 0;
                }
            }
        },
        methods:{
            changeCurr(index){
                this.isShow = false;
                setTimeout(()=>{
                    this.isShow = true;
                    this.curr = index;
                    
                }, 0);
            },
            autoRun(){
                this.runId = setInterval(()=>{
                    this.changeCurr(this.nextItem);
                },3000);
                // console.log(this.runId);
            },
            stopRun(){
                clearInterval(this.runId);
            },
            reRun(){
                this.autoRun();
            }
            // currDec(){
            //     if(this.curr>0){
            //         this.curr--;
            //     }else{
            //         this.curr = this.slides.length - 1;
            //     }
            // },
            // currAdd(){
            //     if(this.curr < this.slides.length-1){
            //         this.curr++;
            //     }else{
            //         this.curr = 0;
            //     }
            // }
        },
        mounted(){
            this.autoRun();
        }

    }
</script>
<style scoped>
    .slide-trans-enter-active{
        transition: all 0.5s;
    }
    .slide-trans-enter{
        transform: translateX(800px);
    }
    .slide-trans-old-leave-active{
        transition: all 0.5s;
        transform: translateX(-800px);
    }
    .slider{
        position: relative;
        overflow: hidden;
        width: 800px;
        height: 350px;
        margin-bottom: 13px;
        
    }
   
    .slider .item{
        /* width: 90%; */
        margin: 0 auto;
    } 
    .slider .item img{
        /* display: inline-block; */
        position: absolute;
        width: 100%;
        height: 350px;
        margin: 0 auto;
    }
    .img-info{
        /* margin-top: -29px; */
        background-color: rgba(0, 0, 0, .2);
        opacity: .9;
        z-index: 100;
        position: absolute;
        width: 100%;
        bottom: 0px;
    }
    .img-info .msg{
        float: left;
        padding: 3px;
        padding-left:10px; 
        font-size: 16px;
        color: #ddd
    }
    .img-info .point{
        float: right;
    }
    .point{
        margin: 0;
        padding-right: 50px;
    }
    .point li{
        display: inline-block;
    }
    .point li{
        text-decoration: none;
        font-size: 20px;
        color: #bbb;
        margin: 0 8px;
    }
    .point li:hover, .point li.curr{
        cursor: pointer;
        color:#8bc34a;
    }
</style>
