<template>
  <div  id="main-slider">
      <div class="slider-wrapper tianya"></div>
        <div class="container">
            <div class="img-container">
                <ul class="img-list">
                    <li v-for="(slide,index) in slides" :key="index" v-show="currIndex===index">
                        <img :src="slide.src" alt="">
                    </li>
                </ul>
            </div>
            <div class="img-bar">
                <span v-for="slide in slides" :class="{on: slide.id===currIndex}" @click="changeCurr(slide.id)">●</span>
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
            currIndex: 0
        }
    },
    methods: {
        changeCurr(index){
            this.currIndex = index;
        }
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
}
.slider-wrapper.tianya{
    background-color: #ccc;
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
#main-slider .img-list img{
    max-width: 100%;
    max-height: 400px;
    position: absolute;
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
