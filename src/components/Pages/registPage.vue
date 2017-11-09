<template>
    <div id="regist">
        <h1>注册</h1>
        <form @keydown.enter="submitRegist">
            <div class="form-item">
                <label>手机</label>
                <input class="item-input" type="text" v-model.number="phoneNum">
                <div class="desc" v-if="!phoneNum">请输入11手机号码</div>
                <div :class="['desc', {'desc-success':phoneNumStatus}]" v-else-if="phoneNum">{{testPhone}}</div>
            </div>
            <div class="form-item">
                <label>验证码</label>
                <input class="item-input" type="text" v-model.lazy="validate.validateNum">
                <canvas id="validateStr" width="120" height="40" @click="changeValidate" title="看不清楚,换一张"></canvas>
                <div class="desc" v-if="!validate.validateNum">请输入验证码</div>
                <div :class="['desc', {'desc-success':validate.validateStatus}]" v-if="validate.validateNum">{{testValidate}}</div>
                <!-- <a href="#">看不清楚</a> -->
                <!-- <button class="item-btn" :disabled="!phoneNumStatus" @click.prevent="getValidate">获取验证码</button> -->
                
                
            </div>
            <div class="form-item">
                <label>用户名</label>
                <input class="item-input" type="text" v-model.lazy="username">
                <div class="desc" v-if="!username">用户名:"4~8位以英文字母开头"</div>
                <div :class="['desc',{'desc-success': usernameStatus}]" v-if="username">{{usernameRes}}</div>
            </div>
            <div class="form-item">
                <label>密码</label>
                <input class="item-input" type="password" v-model="passwd">
                <div class="desc" v-if="!passwd">密码为6~18位</div>
                <div :class="['desc', {'desc-success': passwdStatus}]" v-if="passwd">{{testPasswd}}</div>
            </div>
            <div class="form-item">
                <label>确认密码</label>
                <input class="item-input" type="password" v-model="certpasswd">
                <div class="desc" v-if="!certpasswd">请确认密码</div>
                <div :class="['desc', {'desc-success': certpasswdStatus}]" v-if="certpasswd">{{testCertpasswd}}</div>
            </div>
            <div class="form-item">
                <button class="item-btn regist" @click.prevent="submitRegist">注册</button>
            </div>
        </form>
    </div>
</template>
<script>
    var validatepic = require('../../utils/validatepic')
    export default {
        data(){
            return {
                phoneNum: null,
                phoneNumStatus: false,
                // validateNum: null,
                // validateNumStatus:false,
                // validateStr:'',
                validate: {
                    validateNum: '',
                    validateStr:'',
                    validateStatus: false
                },
                username: '',
                usernameStatus: false,
                usernameRes:'',
                passwd: '',
                passwdStatus: false,
                certpasswd: '',
                certpasswdStatus: false,
                registResult: ""
            }
        },
        watch:{
            username(){
                this.testUsername;
            }
        },
        computed: {
            testPhone(){
                if(/^\d{11}$/.test(this.phoneNum)){
                    this.phoneNumStatus = true;
                    // this.validateStr = validatepic('validateStr');
                    return 'ok';
                }else{
                    this.phoneNumStatus = false;
                    return "请确认输入";
                }
            },
            testValidate(){
                if(this.validate.validateNum.toUpperCase() === this.validate.validateStr){
                    this.validate.validateStatus = true;
                    return "验证码通过";
                }else{
                    // console.log(this.validate.validateNum.toUpperCase());
                    this.validate.validateStatus = false;
                    return "验证码错误" 
                }
            },
            testUsername(){
                if(/^[a-zA-Z]\w{3,7}$/.test(this.username)){
                    this.$http.get('/api/user/'+this.username).then((res)=>{
                        // console.log(res);
                        if(res.data){
                            this.usernameStatus = false;
                            this.usernameRes =  "用户名已存在";
                        }else{
                            this.usernameStatus = true;
                            this.usernameRes =  "用户名可用"
                        }
                    })
                    // this.usernameStatus = true;
                    // return "用户名可用";
                }else{
                    this.usernameStatus = false;
                    this.usernameRes =  "用户名为4~8位";
                }
            },
            testPasswd(){
                if(/^\w{6,18}$/.test(this.passwd)){
                    this.passwdStatus = true;
                    return "密码可用";
                }else{
                    this.passwdStatus = false;
                    if(this.passwd.length<6){
                        return "密码过短";
                    }else{
                        return "密码过长"
                    }
                }
            },
            testCertpasswd(){
                if(this.passwdStatus&&(this.passwd === this.certpasswd)){
                    this.certpasswdStatus = true;
                    return "验证通过";
                }else if(!this.passwd){
                    this.certpasswdStatus = false;
                    return "请先输入密码"
                }else{
                    // this.certpasswd = '';
                    return "密码不一致"
                }
            }
        },
        methods: {
            submitRegist(){
                if(this.certpasswdStatus&&this.usernameStatus&&this.phoneNumStatus&&this.validate.validateStatus){
                    // this.$emit('loginSuccess');
                    this.$http.post('/api/regist',{username: this.username,passwd: this.passwd,phoneNum: this.phoneNum})
                    .then((res)=>{
                        this.$store.commit("loginUser", res.data);
                        this.$emit('on-close');
                    })
                }
            },
            changeValidate(){
                this.validate.validateStr =  validatepic('validateStr');
            }
        },
        mounted(){
            this.validate.validateStr =  validatepic('validateStr');
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
        position: relative;
    }
    #regist .form-item canvas{
        cursor: pointer;
        /* position: absolute; */
        /* background-color:rebeccapurple; */
        /* display:inline-block; */
        /* height: 50px; */
        /* width: 100px; */
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

