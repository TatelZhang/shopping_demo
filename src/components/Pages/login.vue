<template>
    <div class="login-panel">
        <div class="login-container">
            <h1>登录</h1>
            <div :class="['alert', {'alert-danger': error,'alert-success': !error}]" v-if="showStatus">{{errorText}}</div>
            <form action="#" @keydown.enter="onSubmit">
                <div class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon">@</span>
                        <input type="text" class="form-control" placeholder="用户名" v-model="username">
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon">@</span>
                        <input type="password" class="form-control" placeholder="密码" v-model="passwd">
                    </div>
                </div>
                <div class="form-group">
                    <button type="button" class="btn btn-success btn-block" @click="onSubmit">登录</button>
                </div>

                <!-- <div class="form-group">
                    <a href="#">忘记密码？</a>
                    <a href="#" class="pull-right">注册一个账号？</a>
                </div> -->
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                error: false,
                showStatus: false,
                errorText: '',
                username: '',
                passwd: ''
            }
        },
        computed:{
           usernameValidate(){
               if(/^\w{6,10}$/.test(this.username)){
                   return true;
               }else{
                   this.errorText = "用户名错误~"
                   return false;
               }
           },
           passwdValidate(){
               if(/^\w{6,12}$/.test(this.passwd)){
                   return true;
               }else{
                   this.errorText = "密码长度为6~12位";
                   return false;
               }
           }
        },
        methods: {
            onSubmit(){
                if(this.usernameValidate&&this.passwdValidate){
                    this.error = false;
                    this.errorText = '登录成功~';
                    this.$emit("loginSuccess", this.username);
                    this.$emit("on-close");
                }else{
                    this.error = true;
                    
                }
                this.showStatus = true;
                
            }
        },
        Trigger(target){
            this.$emit(target);
        }
    }
</script>
<style>
    .login-panel{
        /* min-height: 700px; */
    }
    .login-panel h1, span{
        text-align: center;
    }
    .login-container{
        /* background-color: #eee; */
        padding: 10px 80px 50px;
        width: 80%;
        margin: 0 auto;
        border-radius: 3px;
        
    }
    
</style>

