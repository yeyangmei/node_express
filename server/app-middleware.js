//express的中间件
var express = require('express');
//创建express服务
var server = express();

// 创建中间件 use
// 截取请求，拦截回调
server.use('/', function(request, response, next) {
    console.log('执行中间件');
    console.log('获取数据库数据');
    console.log(request.params.id);
    next();
})

// 访问服务器
server.get('/home/:id', function(req, res) {
    console.log(req.params);
    res.send('user ' +req.params.id);
})

server.listen('4040');
console.log('启动4040');