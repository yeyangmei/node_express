var express = require('express');
var bodyParser = require('body-parser');

var server = express();

//4. 生成解析器
// application/x-www-form-urlencoded
var urlencoded = bodyParser.urlencoded({ extended: false });

//spplication/json
var jsonParser = bodyParser.json();

//中间件：把请求体参数存放到request.body
server.use(jsonParser);
server.use(urlencoded);

server.post('/login', urlencoded, function(request, response) {
    console.log(request.body);
    response.send('welcome ' + request.body.username);
});

server.listen('5050');
console.log('启动5050');

