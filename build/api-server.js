var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs');
var apiServer = new express();

// 使用body-parser 解析 params
apiServer.use(bodyParser.urlencoded({ extended: true}));
// 使用json中间件，发送json数据
apiServer.use(bodyParser.json());
var apiRouter = express.Router();
apiRouter.route('/:apiName')
.all(function(req, res){
    fs.readFile('./db.json', 'utf8', function(err, data){
        if(err) throw err
        var data = JSON.parse(data);
        if(data[req.params.apiName]){
            res.json(data[req.params.apiName]);
        }else{
            res.send("no such api name");
        }
    })
})

// 改写router名
apiServer.use('/api', apiRouter);

// export {apiServer}
module.exports = apiServer