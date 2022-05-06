const express = require('express');
const app = express();
const bodyParser = require('body-parser')
const qs = require('qs')
const fs = require('fs');
const { LOADIPHLPAPI } = require('dns');

const port = 3000;

app.get('/', (req, res)=>{
	fs.readFile('./index.html', 'utf8', (err, data)=>{
		res.send(data);
	});
})

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: false}));
// parse application/json
app.use(bodyParser.json());

app.get('/getdata', (req, res)=>{
	res.send("你好");
})

app.post('/postdata', (req, res)=>{
	console.log(req.body);
	let num = req.body.data.num;
	console.log(num);
	if(num==123){
		res.send('请求成功');
	}else{
		res.send('参数有误');	
	}
})

app.get('/getnews', (req, res)=>{
	let arr = ["如何巩固拓展脱贫攻坚成果？中央最新部署",
		'总书记一以贯之的理念情怀 习近平的“法治公开课”',
		'骄傲！月球上首次亮出五星红旗',
		'策马女副县长直播收入破百万，全花了',
		'澳总理文章被删除，华春莹：微信有自己的规则']
	res.send(arr);
})

app.listen(port, ()=>console.log('Server is running at http://localhost:'+port));