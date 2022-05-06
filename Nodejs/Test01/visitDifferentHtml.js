const http = require('http');
const fs = require('fs');
const server = http.createServer();
server.listen(8075, '192.168.1.106');
server.on('request', (req, res) => {
  // if (req.url === '/index1.html') {
  //   fs.readFile('./index1.html', (err, data) => {
  //     res.end(data);
  //   })
  // } else if (req.url === '/index2.html') {
  //   fs.readFile('./index2.html', (err, data) => {
  //     res.end(data);
  //   })
  // } else if (req.url === '/js/index.js') {
  //   fs.readFile('./js/index.js', (err, data) => {
  //     res.end(data);
  //   })
  // }

  // 可以统一处理所有的静态资源
  fs.readFile('.' + req.url, (err, data) => {
    res.end(data);
  })
});