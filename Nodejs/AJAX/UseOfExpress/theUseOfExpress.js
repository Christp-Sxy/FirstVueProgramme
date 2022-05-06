// 1.引入express
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
app.get('/', (req, res) => {
  // 设置简单响应
  res.send("Hello World!");
});

// 4.监听端口启动服务
app.listen(8095, () => {
  console.log("服务已经启动，8095端口监听中");
})