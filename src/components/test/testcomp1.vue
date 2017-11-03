<template>
    <div class="content">
        <div class="container">
            <h1>test 1</h1>
            <!-- <button @click="testShow">点击</button> -->
            <!-- <testmodal :isShow='isShow' @on-close="testShow"></testmodal> -->

            <button @click="test1">测试</button>
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
            },
            test1(){
                this.$http.get('/api/').then((data)=>{
                    console.log(data.data);
                    console.log(typeof data.data);
                }),(err)=>{console.log(err);}
            }
        }
    }
</script>
