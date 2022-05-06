const express = require('express');

const app = express();

// 转到一个页面
app.get('/home', (req, res) => {
  res.sendFile(__dirname + '/index.html');
})

app.get('/data', (req, res) => {
  res.send('Welcome');
})

app.listen(8094, () => {
  console.log("服务启动");
})