<template>
  <div  id="main-slider"  @mouseover="stopRun" @mouseout="autoRun">
      <div class="slider-wrapper" :style="slides[currIndex].color"></div>
        <div class="container">
            <div class="img-container">
                <ul class="img-list">
                    <li v-for="(slide,index) in slides" :key="index" :class="{on: index === currIndex}">
                        <img :src="slide.src" alt="">
                    </li>
                </ul>
            </div>
            <div class="img-bar">
                <!-- <span @click="changeCurr(prevPic)">&laquo;</span> -->
                <span v-for="slide in slides" :class="{on: slide.id===currIndex}" @click="changeCurr(slide.id)">●</span>
                <!-- <span @click="changeCurr(nextPic)">&raquo;</span> -->
            </div>
        </div>
  </div>
</template>
<script>
export default {
    props: {
        slides:
        {
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
    },
    data(){
        return {
            currIndex: 0,
            intervalId: 0
        }
    },
    methods: {
        changeCurr(index){
            this.currIndex = index;
        },
        autoRun(){
            this.intervalId = setInterval(()=>{
                this.changeCurr(this.nextPic);
                // console.log(this.nextPic);
            },2000);
        },
        stopRun(){
            clearInterval(this.intervalId);
            // console.log('stop');
        }
    },
    computed: {
        prevPic(){
            if(this.currIndex>0){
                return this.currIndex-1;
            }else{
                return this.slides.length-1;
            }
        },
        nextPic(){
            if(this.currIndex<this.slides.length-1){
                return this.currIndex + 1;
            }else{
                return 0;
            }
        },
        currColor(){
            // var x = '';
            switch(this.currIndex){
                case 0: return "tianya";
                case 1: return "hello";
                case 3: return "jianling";
                default: return "default";
            }
        }
    },
    mounted(){
        this.autoRun();
    }
}    
</script>
<style>
#main-slider{
    position: relative;
}

#main-slider, #main-slider .slider-wrapper, #main-slider .img-container{
    height: 400px;
}
.slider-wrapper{
    position: absolute;
    width: 100%;
    z-index: -1;
    transition: all .3s;
}

#main-slider ul{ 
    list-style: none;
    margin: 0 auto;
    padding: 0;
}
/* #main-slider .img-list li.hide{
    opacity: 0;
}
#main-slider .img-list li{
    transition: all 1s;
} */
#main-slider .img-list li{
    /* display: none; */
    position: absolute;
    opacity: 0;
    transition: opacity .5s;
}
#main-slider .img-list li.on{
    /* display: block; */
    opacity: 1;
    
}
#main-slider .img-list img{
    max-width: 100%;
    max-height: 400px;
    
    /* opacity: 0; */
    /* z-index: 1; */
}

#main-slider .img-bar{
    position: relative;

    margin-top: -40px;
    text-align: center;
    /* z-index: 3; */
}
#main-slider .img-bar span{
    box-sizing: border-box;
    display: inline-block;
    color: white;
    font-size: 20px;
    width: 20px;
    margin: 0 5px;
}
#main-slider .img-bar span{
    cursor: pointer;
}
#main-slider .img-bar span.on{
    color:#8bc34a;
}
</style>
