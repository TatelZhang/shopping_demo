var express = require('express')
var bodyParser = require('body-parser')
var fs = require('fs');
var apiServer = new express();

apiServer.use(bodyParser.urlencoded({ extended: true}));
apiServer.use(bodyParser.json());
var apiRouter = express.Router();
apiRouter.route('/:apiName')
.all(function(req, res){
    fs.read('./db.json', 'utf8', function(err, data){
        if(err) throw err
        var data = JSON.parse(data);
        if(data[req.params.apiName]){
            res.json(data[req.params.apiName]);
        }else{
            res.send("no such api name");
        }
    })
})

apiServer.use('/api', apiRouter);

export default apiServer