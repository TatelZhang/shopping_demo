<template>
    <div id="regist">
        <h1>注册</h1>
        <form>
            <div class="form-item">
                <label>手机</label>
                <input class="item-input" type="text" v-model.number="phoneNum">
                <div class="desc" v-if="!phoneNum">请输入11手机号码</div>
                <div :class="['desc', {'desc-success':phoneNumStatus}]" v-else-if="phoneNum">{{testPhone}}</div>
            </div>
            <div class="form-item">
                <label>验证码</label>
                <input class="item-input" type="text" :disabled="!phoneNumStatus" v-model="validateNum">
                <button class="item-btn" :disabled="!phoneNumStatus">获取验证码</button>
                <div class="desc">请获取验证码</div>
            </div>
            <div class="form-item">
                <label>用户名</label>
                <input class="item-input" type="text" v-model="username">
                <div class="desc">用户名:"5~8位以英文字母开头"</div>
            </div>
            <div class="form-item">
                <label>密码</label>
                <input class="item-input" type="text" v-model="passwd">
                <div class="desc">密码为6~18位</div>
            </div>
            <div class="form-item">
                <label>确认密码</label>
                <input class="item-input" type="text" v-model="certpasswd">
                <div class="desc">请确认密码</div>
            </div>
            <div class="form-item">
                <button class="item-btn regist">注册</button>
            </div>
        </form>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                phoneNum: null,
                phoneNumStatus: false,
                validateNum: null,
                username: '',
                passwd: '',
                certpasswd: ''
            }
        },
        computed: {
            testPhone(){
                if(/^\d{11}$/.test(this.phoneNum)){
                    this.phoneNumStatus = true;
                    return 'ok';
                }else{
                    this.phoneNumStatus = false;
                    return "请确认输入";
                }
            },
            testUsername(){
                if(/^[a-zA-Z]\w{4,7}$/.test(this.username)){}
            }
        }
    }
</script>
<style>
    #regist{
        width: 60%;
        position: relative;
        padding: 20px;
        margin: 0 auto;
    }
    #regist h1{
        text-align: center;
    }
    #regist .form-item{
        padding: 10px 0;
    }
    #regist .form-item label{
        display: inline-block;
        width: 15%;
        text-align: right;
    }
    #regist .form-item .item-input{
        /* display: inline-block; */
        border: 1px solid #ccc;
        border-radius: 3px;
        padding: 3px;
    }
    .form-item .desc{
        display: inline-block;
        color: #b4b4b4;
        
    }
    .form-item .desc::before{
        content: '*';
        color: red;
    }
    .form-item .desc.desc-success::before{
        content: "*";
        color: #8bc34a;
    }
    .desc.desc-success {
        color: #8bc34a;
        /* margin-left: 5%; */
    }
    .form-item .item-btn{
        display: inline-block;
        border-radius: 3px;
    }
    .form-item .regist{
        display:block;
        text-align: center;
        margin-left: 30%;
    }
</style>

