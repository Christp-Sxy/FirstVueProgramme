// 1.引入express
const express = require('express');

// 2.创建应用对象
const app = express();

// 3.创建路由规则
// request是对请求报文的封装
// response是对响应报文的封装
// all为可以接受任何请求，一般来说用get
app.all('/server', (req, res) => {
  // 设置响应头 设置允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*');

  // 响应头 设置可以接收所有类型的头信息类型
  res.setHeader('Access-Control-Allow-Methods', '*');
  // 设置响应体
  res.send("Hello World!");
});
app.post('/server', (req, res) => {
  // 设置响应头 设置允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*');

  // 设置响应体
  res.send("Hello Guys!");
});

app.all('/json-server', (req, res) => {
  // 设置响应头 设置允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*');

  // 响应头 设置可以接收所有类型的头信息类型
  res.setHeader('Access-Control-Allow-Methods', '*');

  // 响应一个数据
  const data = {
    name: 'wdnmd'
  };

  // 对对象进行字符串的转化
  let str = JSON.stringify(data);

  // 设置响应体
  res.send(str);
});

app.get('/delay', (req, res) => {
  // 设置响应头 设置允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*');

  // 响应头 设置可以接收所有类型的头信息类型
  res.setHeader('Access-Control-Allow-Methods', '*');

  // 添加定时器
  // 设置响应体
  setTimeout(() => {
    res.send("Hello World!, 延时响应");
  }, 3000)
  
});

// jQuery服务
app.all('/jQuery', (req, res) => {
  // 设置响应头 设置允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  const data = {name: 'wdnmd'};
  let str = JSON.stringify(data);
  // 响应头 设置可以接收所有类型的头信息类型
  
  // 设置响应体
  res.send(str);  
});

// axios服务
app.all('/Axios', (req, res) => {
  // 设置响应头 设置允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  const data = {name: 'wdnmd'};
  let str = JSON.stringify(data);
  // 响应头 设置可以接收所有类型的头信息类型
  
  // 设置响应体
  res.send("hello");  
});

// fetch服务
app.all('/fetch', (req, res) => {
  // 设置响应头 设置允许跨域
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', '*');
  res.setHeader('Access-Control-Allow-Headers', '*');
  const data = {name: 'wdnmd'};
  let str = JSON.stringify(data);
  // 响应头 设置可以接收所有类型的头信息类型
  
  // 设置响应体
  res.send(str);  
});

// jsonp服务
app.all('/jsonp', (req, res) => {
  // res.send("console.log('wdnmd');");
  const data = {name: 'wdnmd'};

  let str = JSON.stringify(data);
  // 返回结果
  res.end(`handle(${str})`);
})

// 4.监听端口启动服务
app.listen(8095, () => {
  console.log("服务已经启动，8095端口监听中");
})