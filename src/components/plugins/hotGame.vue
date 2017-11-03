<template>
<div id="hot-game">
    <div class="hot-game-container">
        <div class="hot-label">
            <h3>游戏热门专区</h3>
        </div>
        <div class="hot-content">
            <ul class="type-class">
               <li><a href="#">竞技游戏</a></li>
               <li><a href="#">动作游戏</a></li>
               <li><a href="#">动作游戏</a></li>
               <li><a href="#">动作游戏</a></li>
            </ul>
            <ul class="game-list">
                <li><a href="#">穿越火线</a></li>
                <li><a href="#">神之浩劫</a></li>
            </ul>
        </div>
    </div>
</div>
</template>
<script>
    export default {

    }
</script>
<style>
#hot-game, #hot-game *{
    /* border: 1px solid gray; */
    background-color: rgba(0,0,0, .2);
    /* box-sizing: border-box; */
}

#hot-game{
    margin-top: 20px;
    position: relative;
}
#hot-game .hot-game-container{
    height: 100px;
}
#hot-game .hot-label{
    display: inline-block;
    width: 20%;
    vertical-align: top;
    /* font-size: 0; */
    /* line-height: 0%; */
    
}
.hot-label h3{
    margin: 0;
    line-height: 100px;
    /* padding: 25px; */
    text-align: center;
    /* vertical-align: bottom; */
}
#hot-game .hot-content{
    display: inline-block;
    height: 100px;
}
#hot-game .hot-content li{
    /* vertical-align: center; */
    
}
.hot-content ul{
    margin: 0;
    padding: 0;
    list-style-type: none;
    height: 50px; 
    display: block;
}
.hot-content ul li, .hot-content ul li a{
    display: inline-block;
    /* padding: 19px; */
}
.hot-content ul li a{
    /* padding: 19px; */
    /* line-height: 50px; */
}
</style>
