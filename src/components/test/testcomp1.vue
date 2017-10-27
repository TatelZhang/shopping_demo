<template>
    <div class="content">
        <div class="container">
            <h1>test 1</h1>
            <!-- <router-view></router-view> -->
            <button @click="testShow">点击</button>
            <testmodal :isShow='isShow' @on-close="testShow"></testmodal>
        </div>
    </div>
    
</template>
<script>
import testmodal from './dialog1'
    export default {
        mounted(){
            // console.log(this.$route.path);
        },
        components: {
            testmodal
        },
        data(){
            return {
                isShow: true
            }
        },
        methods: {
            testShow(){
                this.isShow = !this.isShow;
            }
        }
    }
</script>
