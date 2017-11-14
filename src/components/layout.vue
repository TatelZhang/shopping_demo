<template>
  <div>
      <div class="navbar-inverse">
          <div class="container">
              <div class="navbar-header">
                  <router-link to="/" class="navbar-brand">
                      <img src="../assets/logo.png" alt="" class="logo">
                  </router-link>
              </div>
              <ul class="navbar-nav nav">
                  <li><router-link to="/func">会员特权</router-link></li>
                  <li><router-link to="/index">功能特权</router-link></li>
                  <li><router-link to="/game">游戏特权</router-link></li>
                  <!-- <li><router-link to="#">生活特区</router-link></li>-->
                  <!-- <li><router-link to="/test">测试</router-link></li> -->
              </ul>
              <ul class="navbar-nav nav navbar-right">
                  <li v-if="account.isLogin"><a href="#" class="avatar"><img :src="account.avatar" alt="头像"></a></li>
                  <li v-if="account.isLogin"><a href="#">用户：{{account.username}}</a></li>
                  <li v-if="account.isLogin" @click="logOut"><a href="#">退出</a></li>
                  <li v-if="!account.isLogin"><a href="#" @click.prevent="showThis('isShowLog')">登陆</a></li>
                  <li v-if="!account.isLogin"><a href="#" @click.prevent="showThis('isShowReg')">注册</a></li>
                  <li><a href="#" @click.prevent="showThis('isShowAbout')">关于</a></li>
              </ul>
          </div>
      </div>
      <!-- <div class="content">
          <div class="container">
              <keep-alive>
                <router-view></router-view>
              </keep-alive>
          </div>
      </div> -->
      <router-view></router-view>


      <footer>
          <div class="container">
              <div class="col-md-4">
                    <div class="cpr">
                        ©<a href="https://github.com/TatelZhang">Tatel</a> All Rights Reserved 2017 
                    </div> 
              </div>
              <div class="col-md-8">
                  <div class="row">
                    <ul class="footer-nav pull-right">
                        <li><a href="#">工作联系</a></li>
                        <li><a href="#">工作联系</a></li>
                        <li><a href="#">工作联系</a></li>
                    </ul>
                  </div>
              </div>
          </div>
      </footer>
      <modal @on-close="closeThis('isShowLog')" :is-show='isShowLog'>
          <login @on-close="closeThis('isShowLog')"></login>
      </modal>
      <modal @on-close="closeThis('isShowReg')" :is-show='isShowReg'>
        <regist @on-close="closeThis('isShowReg')"></regist>
      </modal>
      <modal @on-close="closeThis('isShowAbout')" :is-show='isShowAbout'>
            <p>
                用户名: tatel
                密码: 123456
            </p>
          
      </modal>
      <go-top />

  </div>
</template>
<script>
import modal from './plugins/dialog'
import login from './Pages/login'
import regist from './Pages/registPage'
import goTop from './plugins/goTop'

export default{
    data(){
        return {
            isShowLog: false,
            isShowReg: false,
            isShowAbout: false,
        }
    },
    methods: {
        closeThis(target){
            this[target] = false;
        },
        showThis(target){
            this[target] = true;
        },
        successLogin(data){
            this.$store.commit('loginUser', data);
            setTimeout(()=>{
                this.isShowLog = false;
                this.isShowReg = false;
            }, 1000);
        },
        logOut(){
            this.$http.get(this.api+'/login').then(res=>{
                this.$store.commit('loginUser', res.data);
            })
        },
        test(){
            console.log(this.account);
        }
    },
    components: {
        modal,
        login,
        regist,
        goTop

    },
    computed:{
        account(){
            var account = this.$store.getters.account;
            return account;
        }
    },
    mounted(){
        this.$http.post(this.api + '/login').then((res)=>{
            this.$store.commit('loginUser', res.data.account);
        }).catch((err)=>{
            // console.log("error",err)
        })
    }
}
</script>
<style>
body{
    background-color: #fbfbfb;
}
img.logo{
    width: 34px;
    margin-top: -7px;
}
.content{
    padding-top: 10px; 
}
footer{
    width: 100%;
    background-color: #eee;
}
footer .cpr{
    padding: 10px 0;
    float: left;
} 
footer, footer a{
    color:#b4b4b4;
}
ul.footer-nav{
    margin: 0px;
    padding: 10px 0;
}
.footer-nav, .footer-nav li{
    list-style-type: none;
}
.footer-nav li{
    display: inline-block;
}
.footer-nav li::after{
    content: '丨'
}
li a.avatar{
    max-width: 100%;
    max-height: 100%;
    padding: 5px;
}
.avatar img{
    height: 35px;
    border-radius: 100px;
    border: solid 1px white;
}
</style>
