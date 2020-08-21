// 创建Http服务器

// 1.加载http模块
var http = require('http');

// 2.创建http服务
// 参数：请求的回调，当有人访问服务器的时候，就会自动调用回调函数
var server = http.createServer(function(request, response) {
    console.log('有人访问了服务器啊，我知道了');
    // 回调数据
    // response.write('Hello my love,you are my best love');
    response.statusCode = 200
    response.setHeader('Content-Type', 'text/plain')
    response.end('你好世界\n');
})

// 3.绑定端口
server.listen(2733, '192.168.2.1');

// 4.执行
console.log('执行了2733');
