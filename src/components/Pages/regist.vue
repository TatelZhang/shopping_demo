<template>
    <div class="login-panel">
        <div class="login-container">
            <h1>注册</h1>
            <div class="alert" v-show="!msg" :class="{'alert-danger': !msg}">{{msg}}</div>
            <form>
                <div class="form-group">
                    <label>手机</label>
                    <input type="text" class="form-control" v-model="phoneNum">
                </div>
                <div class="form-group">
                    <label>验证码</label>
                    <div class="input-group">
                        <input :disabled="!phoneIn" type="text" class="form-control" v-model='validate'>
                        <div class="input-group-btn">
                            <button type="text" @click.prevent="getValidate" class="btn btn-default" :disabled="!phoneIn">获取验证码</button>
                        </div>
                    </div>
                </div>
                <div class="form-group">
                        <label>密码</label>
                        <input type="password" class="form-control" v-model="passwd">
                    </div>
                <div class="form-group">
                    <button class="btn btn-primary btn-block" type="submit" @click.prevent="onRegist">注册</button>
                </div>
                <div class="form-group">
                    注册<a href="#">相关协议</a>
                </div>
            </form>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                phoneIn: false,
                phoneNum: '',
                validate: '',
                passwd: '',
                msg: 'hello'
            }
        },
        watch: {
            phoneNum(){
                if(/^\d{11}$/.test(this.phoneNum)){
                    this.phoneIn = true;
                }else{
                    this.phoneIn = false;
                }
            }
        },
        methods: {
            getValidate(){
                // console.log("ok");
                this.validate = this.phoneNum;
            },
            onRegist(){
                if(this.phoneIn&&this.validate&&(/\w{6,9}/.test(this.passwd))){
                    // console.log('hello')
                }
        }
        },
       
    }
</script>
<style>
    .regist-container{
    }
</style>
