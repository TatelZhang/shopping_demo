<template>
    <div>
        <div class="func-header">
            <div class="container">
                <div class="func-label">
                    <h1 style="">精彩特权推荐</h1>
                    <div>超级会员专享80余项顶级特权，覆盖QQ功能游戏生活购物，让你不再是大多数！</div>
                    <span class="kaitong">开通超级会员</span>
                </div>
                <div class="pull-right signin"><a href="#"><img src="../../assets/signin_svip8.png"></a></div>
                <div class="mod-function-list">
                    <mode-function-item v-for="item in modeLists" :item="item" :key="item.id"></mode-function-item>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="mainfunc">
                    <ul class="vipfuncs">
                        <li v-for="(vip1,index) in vipfunc" :key="index" :class="{on: index===currIndex}" @click="currIndex=index"><router-link to="#">{{vip1.title}}</router-link></li>
                    </ul>
                    <div class="vipfuncs-container">
                        <template  v-for="(vip2,index) in vipfunc">
                            <ul :class="[vip2.css,{hide: index !==currIndex}]">
                                <li v-for="data in vip2.contains"><a href="#"><span></span><h3>{{data}}</h3></a></li>
                            </ul>
                        </template>
                    </div>
                    <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
    import modeFunctionItem from '../plugins/modeFunctionItem'
    export default {
        components: {
            modeFunctionItem
        },
        data(){
            return {
                currIndex: 0,
                bgimg: require('../../assets/function_banner.png'),
                modeLists: [
                    {
                        "title": "最高2000人群",
                        "desc": "独乐乐 不如众乐乐"
                        },
                        {
                        "title": "成长速度特权",
                        "desc": "拥有飞一般的速度"
                        },
                        {
                        "title": "QQ等级加速",
                        "desc": "QQ等级更快成长"
                        },
                        {
                        "title": "云消息漫游",
                        "desc": "漫游聊天 记忆无间"
                        },
                        {
                        "title": "好友上线提醒",
                        "desc": "好友上限立刻知晓"
                        }
                ],
                vipfunc: [
                    {
                        title: "成长与身份",
                        css: "red",
                        contains: ["等级加速","成长加速","会员群图标", "会员长语音", "会员图标", "身份铭牌","红色昵称", "排名靠前"]
                    },
                    {
                        title: "好友与群",
                        css: "green",
                        contains: ["特别关心", "好友克隆", "群克隆", "好友上线提醒", "好友恢复", "群@全体成员", "最高2000人群","更高好友上限", "会员群特权", "好友分组","会员超级群"]
                    },
                    {
                        title: "折扣与分享",
                        css: "yellow",
                        contains: ["靓号抵用券", "充值Q点/Q币9.1折起", "动漫折扣", "免费阅读","阅读折扣"]
                    },
                    {
                        title: "装扮与个性",
                        css:"zi",
                        contains: ["表情漫游", "涂鸦表情", "超级表情", "签名表情","会员头像", "QQ皮肤特权", "资料卡皮肤","多彩气泡", "个性名片", "魔法表情", "视频美化"]
                    },
                    {
                        title: "离线与同步",
                        css: "lv",
                        contains: ["VIP邮箱特权", "网络相册", "文件中转站","移动在线", "专属客服", "云消息服务","离线传文件"]
                    },
                    {
                        title: "安全与其他",
                        css: "lan",
                        contains: ["手机设置头像", "手机设置个人资料", "离线消息手机通知", "手机查找在线好友", "体贴登录提醒", "过滤广告"]
                    },
                ]
            }
        },
        mounted(){
            // this.$http.get("api/modelist").then((data)=>{
            //     this.modeLists = data.data;
            // })
        }
    }
</script>
<style>
    .func{
        /* margin-left: -34%;
        margin-top: -10px;
        margin-right: -33.5%; */
    }
    .func-header{
        /* background: url('../../assets/function_banner.png') no-repeat; */
        /* background: url('../../../static/function_banner.png') no-repeat; */
        max-width: 100%;
        min-height: 320px;
        color: white;
        padding-top: 20px;
    }
    .func-header .func-label{
        /* margin-top: 10px; */
        text-align: center;
    }
    
    .kaitong{
        background-color: goldenrod;
        margin-top: 20px;
        padding: 16px;
        font-size: 20px;
        font-weight: 500;
        display: inline-block;
        border-radius: 40px;
        transition: all 1s;
    }
    .kaitong:hover{
        /* color: ; */
        cursor: pointer;
        background-color: gold;
    }
    .signin{
        position: fixed;
        top: 130px;
        right: -80px;
        transition: all .5s;
    }
    .signin:hover{
        right: 0;
    }
    .mod-function-list{
        position: relative;
        /* width: 50%; */
        margin:auto;
        padding: 15px;
        vertical-align: top;
        text-align: center;
    }
    .mainfunc{
        margin-top:30px;
    }
    .vipfuncs{
        margin: 0;
        padding: 0;
        list-style-type: none;
        border-bottom: 1px solid #ccc;
    }
    .vipfuncs li{
        box-sizing: border-box;
        display: inline-block;
        font-size: 16px;
        margin-bottom: -1px;
        cursor: pointer;
        
    }
    .vipfuncs .on{
        border-bottom: 4px solid gold;
    }
    .vipfuncs .on a{
        color:#444; 
    }
    .vipfuncs li a{
        color: #777;
        text-decoration: none;
        padding: 0 10px;
        line-height: 42px;
    }
    .vipfuncs-container ul{
        list-style-type: none; 
        margin-top: 5px;
        padding: 10px 0;
        /* position: relative; */
    }
    .vipfuncs-container ul li{
        box-sizing: border-box;
        display: inline-block;
        /* float: left; */
        /* margin-top: 10px; */
        /* margin-right: 0.5%; */
        width: 14%;
        height: 240px;;
        text-align: center;
        border: solid 1px #fbfbfb;
    }
    .vipfuncs-container ul li:hover{
        border: 1px solid #ccc;
        /* cursor: pointer; */
    }
    .vipfuncs-container ul li a{
        display: block;
        width: 100%;
        height: 100%;
    }
    .vipfuncs-container li a{
        text-decoration: none;
        color: #444;
    }
    .vipfuncs-container li span{
        display: block;
        margin: 30px auto;
        width: 80%;
        height: 50%;
        background-color: goldenrod;
        border-radius: 1000px;
        /* background-color: pink;
        width: 50%;
        height: 50%;
        border-radius: 100px;
        /* border: 1px solid pink; */
        /* margin-top:  auto; */
        /* width: 100%; */
        /* vertical-align: center; */
        /* font-size: 13px; */
    }
    .vipfuncs-container ul.red li span{
        background-color: #d30000;
    }
    .vipfuncs-container ul.green li span{
        background-color: #2ada86;
    }
    .vipfuncs-container ul.yellow li span{
        background-color: goldenrod;
    }
    .vipfuncs-container ul.zi li span{
        background-color:#9964f1;
    }
    .vipfuncs-container ul.lv li span{
        background-color:#0ad1ae;
    }
    .vipfuncs-container ul.lan li span{
        background-color:#03afff;
    }
    .vipfuncs-container li h3{
        font-size: 13px;
    }
</style>

