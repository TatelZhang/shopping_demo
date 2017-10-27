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
                  <li><router-link to="/func">功能特权</router-link></li>
                  <li><router-link to="/game">游戏特权</router-link></li>
                  <li><router-link to="#">生活特区</router-link></li>
                  <li><router-link to="#">会员特权</router-link></li>
              </ul>
              <ul class="navbar-nav nav navbar-right">
                  <li v-if="username"><a href="#" class="avatar"><img src="../assets/doge.png" alt=""></a></li>
                  <li v-if="username"><a href="#">用户：{{username}}</a></li>
                  <li v-if="username" @click="logOut"><a href="#">退出</a></li>
                  <li v-if="!username"><a href="#" @click.prevent="showThis('isShowLog')">登陆</a></li>
                  <li v-if="!username"><a href="#" @click.prevent="showThis('isShowReg')">注册</a></li>
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
      <p></p>
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
          <login @loginSuccess="successLogin"></login>
      </modal>
      <modal @on-close="closeThis('isShowReg')" :is-show='isShowReg'>
        <regist></regist>
      </modal>
      <modal @on-close="closeThis('isShowAbout')" :is-show='isShowAbout'>
            <p>
                不充钱你是不会变强的
            </p>
          
      </modal>
  </div>
</template>
<script>
import modal from './plugins/dialog'
import login from './Pages/login'
import regist from './Pages/regist'
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
            // console.log(target);
            // this.$router.push({path: '/test'});
        },
        showThis(target){
            this[target] = true;
        },
        successLogin(data){
            // this.username = data;
            this.$store.commit('loginUser', data);
            // 登录成功，并在1s后关闭模态框。
            setTimeout(()=>{
                this.isShowLog = false
            }, 1000);
            // console.log(data);
            // console.log(this.username);
        },
        logOut(){
            this.$store.commit('loginUser', '');
        }
    },
    components: {
        modal,
        login,
        regist
    },
    computed:{
        username(){
            return this.$store.getters.usr;
        }
    },
    mounted(){
        // console.log(this.$store);
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
