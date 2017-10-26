<template>
  <div class="dialog-modal"> <!-- 根元素，z-index 需要高于父容器其他元素 -->
    <div class="dialog-wrapper" @click="onClose" v-show="isShow"></div> <!-- 加载一个具有透明度的背景，使根元素透明，子元素会继承该透明度 -->
    <transition name="drop">
        <div class="dialog-container" v-show="isShow">  <!-- 模态框容器，z-index 需要高 -->
            <span class="close-btn" @click="onClose">x</span>
            <slot>
                <p>hello</p>
            </slot>
        </div>
    </transition>
  </div>
</template>
<script>
    export default {
        props: {
            isShow:{
                type: Boolean,
                default: false
            }
        },
        methods: {
            onClose(){
                this.$emit('on-close');
            }
        }
    }
</script>
<style>
    .drop-enter-active {
  transition: all .5s ease;
}
.drop-leave-active {
  transition: all .3s ease;
}
.drop-enter {
  transform: translateY(-500px);
}
.drop-leave-active {
  transform: translateY(-500px);
}
    .dialog-modal, .dialog-wrapper{
        position: fixed;
        height: 100%;
        width: 100%;
        z-index: 4;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
      
    }
    .dialog-wrapper{
        background-color: black;
        opacity: .7;
    }
    .dialog-container{
        position: relative;
        z-index: 6;
        width: 50%;
        margin: 0 auto;
        margin-top: 50px;
        background-color: #eee;
        border-radius: 3px;
        box-shadow: 0 5px 15px rgba(0,0,0,.5);
    }
    span.close-btn{
        padding: 0 5px;
        float: right;
        cursor: pointer;
        font-size: 18px;
        font-weight: bold;
    }
</style>
