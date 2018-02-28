<template>
    <div class="login-panel">
        <div class="login-container">
            <h1>登录</h1>
            <div :class="['alert', {'alert-danger': loginStatus.error,'alert-success': loginStatus.success}]" v-if="loginStatus.error||loginStatus.success">{{loginStatus.text}}</div>
            <form action="#" @keydown.enter="onSubmit">
                <div class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon">@</span>
                        <input type="text" class="form-control" placeholder="用户名" v-model="account.username">
                    </div>
                </div>
                <div class="form-group">
                    <div class="input-group">
                        <span class="input-group-addon">@</span>
                        <input type="password" class="form-control" placeholder="密码" v-model="account.passwd">
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
                account:{
                    username:'',
                    passwd:''
                },
                loginStatus: {
                    error: false,
                    success: false,
                    text: ''
                },
                validateStatus: {
                    username: ''
                }
            }
        },
        computed:{
           usernameValidate(){
               if(/^\w{5,10}$/.test(this.account.username)){
                   return true;
               }else{
                   this.loginStatus.text = "用户名格式:5~10位数字与字母的组合";
                   return false;
               }
           },
           passwdValidate(){
               if(/^\w{6,12}$/.test(this.account.passwd)){
                   return true;
               }else{
                   this.loginStatus.text = "密码为6~12位";
                   return false;
               }
           }
        },
        methods: {
            onSubmit(){
                if(this.usernameValidate&&this.passwdValidate){

                    this.$http.post('/user/login',{username: this.account.username, passwd: this.account.passwd})
                    .then((res)=>{
                        // console.log(res);
                        if(res.status === 200){
                            // this.error = false;
                            this.loginStatus.error = false;
                            this.loginStatus.success = true;
                            this.loginStatus.text = `北京欢迎您, ${res.data.account.username}`;
                            this.$store.commit('loginUser', res.data.account);
                            // 关闭模态框
                            setTimeout(()=> {
                                this.$emit('on-close');
                            }, 1500);
                        }else{
                        }
                    }).catch((err)=>{
                        console.log("err~~:", err);
                        this.loginStatus.text = err.body.errorText;
                        this.loginStatus.error = true;
                        this.loginStatus.success = false;
                    })
                    
                }else{
                    this.loginStatus.error = true;
                }
                this.loginStatus.error = true;
                
            }
        },
        mounted(){
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

