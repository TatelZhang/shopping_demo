<template>
    <div class="login-panel">
      
        <div class="login-container">
            <h1>登录</h1>
            <div class="alert alert-danger text-center">用户名或密码错误</div>
            <form action="#">
                <div class="input-group form-input">
                    <span class="input-group-addon">@</span>
                    <input type="text" class="form-control" placeholder="用户名">
                </div>
                <div class="input-group form-input">
                    <span class="input-group-addon">@</span>
                    <input type="password" class="form-control" placeholder="密码">
                </div>
                <button type="button" class="btn btn-success btn-block">登录</button>
                <div class="form-input">

                    <a href="#">忘记密码？</a>
                    <a href="#" class="pull-right">注册一个账号？</a>
                </div>
            </form>
        </div>
    </div>
</template>
<style>
    .login-panel{
        min-height: 700px;
    }
    .login-panel h1, span{
        text-align: center;
    }
    .login-container{
        background-color: #eee;
        padding: 10px 80px 50px;
        width: 60%;
        margin: 0 auto;
        border-radius: 3px;
        
    }
    .form-input:first-child{
        padding: 0 0 10px 0;
    }
    .form-input{
        padding: 10px 0;
    }
    .pos-center{
        widows: 100%;
        margin: 0 auto;
    }
</style>

