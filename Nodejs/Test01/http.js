// 1.使用http模块
const http = require('http');

// 2.创建一个服务器对象
const server = http.createServer();

// 3.给服务器指定ip和端口
server.listen(8075, '192.168.1.106');

// 4.监听浏览器请求服务器的事件
server.on('request', (req, res) => {
  // request
  res.end('<h1 style="color: red">ok</h1>')
});