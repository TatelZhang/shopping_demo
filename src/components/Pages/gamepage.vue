<template>
  <div> 
      <main-slider :slides="slides"></main-slider>
      <div class="container">
          <!-- <hot-game></hot-game> -->
      </div>
  </div>
</template>
<script>

    import Slider from '../plugins/slider'
    import MainSlider from '../plugins/mainslider'
    import hotGame from '../plugins/hotGame'

    export default {
        components: {
            Slider,
            MainSlider,
            hotGame
        },
        data(){
            return {
                slides: [
                    {   
                        id: 0,
                        src: require('../../assets/1.jpg'),
                        title: '天涯明月刀',
                        href: "nothing",
                        color: 'background-color: #5ea1d8;'
                    },
                    {   
                        id: 1,
                        src: require('../../assets/2.jpg'),
                        title: '极品飞车',
                        href: "nothing222",
                        color: "background-color: #0b0e17;"
                    },
                    {   
                        id: 2,
                        src: require('../../assets/3.jpg'),
                        title: '使命召唤',
                        href: "nothing33333",
                        color: "background-color: #070707;"
                    },
                    {   
                        id: 3,
                        src: require('../../assets/4.jpg'),
                        title: '剑灵',
                        href: "nothing44444",
                        color: "background-color: #0c2440;"
                    },
                    {   
                        id: 4,
                        src: require('../../assets/5.jpg'),
                        title: '逆战',
                        href: "nothing44444",
                        color: "background-color: #404b8d;"
                    },
                    {   
                        id: 5,
                        src: require('../../assets/6.jpg'),
                        title: '穿越火线',
                        href: "nothing44444",
                        color: "background-color: #3f4a8c;"
                    },
                    {   
                        id: 6,
                        src: require('../../assets/7.jpg'),
                        title: 'DNF',
                        href: "nothing44444",
                        color: "background-color: #2b1313;"
                    },
                    {   
                        id: 7,
                        src: require('../../assets/8.jpg'),
                        title: '超级会员',
                        href: "nothing44444",
                        color:"background-color: #112145;"
                    },
                ]
            }
        }
    }
</script>
<style>
   
</style>
