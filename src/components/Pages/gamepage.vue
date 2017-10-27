<template>
  <div> 
      <main-slider :slides="slides"></main-slider>
      
  </div>
</template>
<script>
    import Slider from '../plugins/slider'
    import MainSlider from '../plugins/mainslider'

    export default {
        components: {
            Slider,
            MainSlider
        },
        data(){
            return {
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
   
</style>
