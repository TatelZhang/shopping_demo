<template>
  <div>
      <div class="navbar-inverse ">
          <div class="container">
              <div class="navbar-header">
                  <a href="/" class="navbar-brand">
                      <img src="../assets/logo.png" alt="" class="logo">
                  </a>
              </div>
              <ul class="navbar-nav nav">
                  <li class="active"><a href="#">国际</a></li>
                  <li><a href="/test">测试</a></li>
                  <li><a href="#">熟读</a></li>
                  <li><a href="#">社会</a></li>
              </ul>
              <ul class="navbar-nav nav navbar-right">
                  <li><a href="/login">登陆</a></li>
                  <li><a href="/regist">注册</a></li>
                  <li><a href="#">关于</a></li>
              </ul>
          </div>
      </div>
      <div class="content">
          <div class="container">
              <keep-alive>
                <router-view></router-view>
              </keep-alive>
          </div>
      </div>
      <p></p>
      <footer>
          <div class="container">
              <div class="col-md-4">
                    <div class="cpr">
                        ©<a href="#">Tatel</a> All Rights Reserved 2017 
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
  </div>
</template>
<script>
export default{
   
}
</script>
<style>
body{
    background-color: #ddd;
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
</style>
