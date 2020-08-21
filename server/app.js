var express = require('express');
var server = express();

server.get('/home', function(request, response, next) {
    console.log(request);
    console.log('从据库获取数据');
    next();
}, function(request, response) {
    response.send('get请求成功么')
});

server.post('/', function(request, response) {
    response.send('post请求成功');
});

server.listen('4040');
console.log('启动4040');
