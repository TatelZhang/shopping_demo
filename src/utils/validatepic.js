function randomNum(min, max){
    return Math.floor(Math.random()*(max-min)+min);
}
function randomColor(min, max){
    var r = randomNum(min, max);
    var g = randomNum(min, max);
    var b = randomNum(min, max);
    return "rgb(" + r + "," + g + ","+ b + ")";
}

function drawpic(id, len){
    var length = len || 4;
    var validateStr = ''
    var canvas = document.getElementById(id);
    var width = canvas.width;
    var height = canvas.height;
    var ctx = canvas.getContext('2d');
    ctx.textBaseline = 'bottom';
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // 背景色
    ctx.fillStyle = randomColor(180, 240); // 浅色
    ctx.fillRect = (0, 0, width, height);
    /** 绘制验证码 */
    var str = "ABCDEFGHOJKLMNOPQRSTUVWXYZ123456789";
    for (var i = 0; i < length; i++){
        var txt = str[randomNum(0, str.length)]; // 生成字体
        validateStr += txt;
        ctx.fillStyle = randomColor(50, 160); // 生成字体颜色
        ctx.font = randomNum(25, 45) + "px SimHei"; // 随机生成字体大小
        // 生成坐标及角度
        var x = 10+i*25;
        var y = randomNum(25, 45)
        var deg = randomNum(-45, 45);
        // 修改坐标原点和旋转角度
        ctx.translate(x,y);
        ctx.rotate(deg*Math.PI/180);
        ctx.fillText(txt, 0, 0);
        // 修复坐标原点和旋转角度
        ctx.rotate(-deg*Math.PI/180);
        ctx.translate(-x, -y);
    }

    /** 绘制干扰线 */
    for(var i=0; i<8; i++){
        ctx.strokeStyle = randomColor(40, 180);
        ctx.beginPath();
        ctx.moveTo(randomNum(0, width), randomNum(0, height));
        ctx.lineTo(randomNum(0, width), randomNum(0, height));
        ctx.stroke();
    }

    /** 绘制干扰点 */
    for(var i=0; i<100; i++){
        ctx.fillStyle = randomColor(0, 255);
        ctx.beginPath();
        ctx.arc(randomNum(0, width), randomNum(0, height), 1, 0, 2*Math.PI)
    }

    return validateStr;
}

module.exports = drawpic