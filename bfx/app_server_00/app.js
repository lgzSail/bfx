const express=require('express');
var server=express();
const session = require("express-session");
const pool=require('./pool.js');
server.listen(3000);
server.use(express.static('./public'));
const cors = require("cors");
server.use(cors({
  origin:[
	"http://127.0.0.1:3000",
	"http://127.0.0.1:8080",
	"http://localhost:8080",
	"http://127.0.0.1:8080",
	"http://localhost:8080",
	"http://127.0.0.1:8080",
	"http://localhost:8080",
	"http://127.0.0.1:5500",
	"http://localhost:5500",
	"http://localhost",
  "*"
],
  credentials:true
}));

server.use(session({
  secret:'随机字符串',
  cookie:{maxAge:60*1000*30},//过期时间ms
  resave:false,
  saveUninitialized:true
}));//将服务器的session，放在req.session中

const bodyParser=require('body-parser');
server.use(bodyParser.urlencoded({
  entended:false
}))

const index=require('./routes/index.js');
server.use('/index',index);

//获取商品列表
server.get("/getlist",(req,res)=>{
  var sql="select pid,bg_img,logo_img,lname,style,expend,price from zw_list";
  pool.query(sql,[],(err,result)=>{
    if(err) throw err;
    res.send(result);
  })
})
//商品详情
server.get('/banner',(req,res)=>{
	var game=req.query.game
	var sql='select banner from zw_banner where game=?'
	pool.query(sql,[game],(err,result)=>{
		if(err) throw err

		res.send(result)
	})
})
server.get('/shop',(req,res)=>{
	var game=req.query.game
	var sql='select title,bri from zw_shop where game=?'
	pool.query(sql,[game],(err,result)=>{
		if(err) throw err
		res.send(result)
	})
})
server.get('/shop/pri',(req,res)=>{
	var game=req.query.game
	var sql='select sid,pri,pid from zw_shop_pri where game=?'
	pool.query(sql,[game],(err,result)=>{
		if(err) throw err
		res.send(result)
	})
})
server.get('/shop/tb',(req,res)=>{
	var game=req.query.game
	var sql='select tb from zw_tb where game=?'
	pool.query(sql,[game],(err,result)=>{
		if(err) throw err

		res.send(result)
	})
})
server.get('/shop/detail',(req,res)=>{
	var pid=req.query.pid
	var sql='select pri,tb,title,bri,title2,bri2,price from zw_detail where pid=?'
	pool.query(sql,[pid],(err,result)=>{
		if(err) throw err
		res.send(result)
	})
})
server.get('/shop/detail/content',(req,res)=>{
	var pid=req.query.pid
	var sql='select title,pri,ctitle,bri from zw_detail_content where pid=?'
	pool.query(sql,[pid],(err,result)=>{
		if(err) throw err
		res.send(result)
	})
})

server.get('/search',(req,res)=>{
	var que=req.query.que
	var sql=`select pid,pri,title,bri from zw_detail where title like ?;`
	que='%'+que+'%'
	pool.query(sql,[que],(err,result)=>{
		if(err) throw err
		res.send(result)
	})
})
//功能一 用户注册
server.post("/Register",(req,res)=>{
  var $Id=req.body.ID;
  var $uname=req.body.uname;
	var $email=req.body.uemail;
	var $user=req.body.user;
  var $upwd=req.body.upwd;
  var $uphone=req.body.uphone;
  var sql="INSERT INTO zw_user(uid,ID,uname,uemail,user,upwd,uphone) VALUES(null,?,?,?,?,?,?);"
  pool.query(sql,[$Id,$uname,$email,$user,$upwd,$uphone],(err,result)=>{
    if(err) throw err;
    if(result.affectedRows>0){
      res.send({code:1,msg:"注册成功"});
    }else{
      res.send({code:-1,msg:"注册失败，请检查"});
    }
  })
})

// 功能二  用户登录
server.post("/login",(req,res)=>{
  //2.获取两个参数 uname upwd
  var obj=req.body;
  var $email=obj.uemail;
  var $upwd=obj.upwd;
  // 3.创建sql
  var sql="SELECT user,uid FROM zw_user WHERE uemail=? AND upwd=?";
  // 4.执行sql
  pool.query(sql,[$email,$upwd],(err,result)=>{
  // 5.获取数据库返回结果
  // 6.返回客户数据
    if(err) throw err;
    if(result.length>0){
      res.send(result);
    }else{
      res.send({code:-1,msg:"用户名或密码错误"});
    }
  })
})

//验证码
server.post("/code",(req,res)=>{
	var crypto = require('crypto')
	var http = require('http')
	var querystring = require('querystring')
	var md5 = crypto.createHash('md5')
	//随机生成4位数
	var code='';
	for(var i=0;i<4;i++){
		code+=Math.floor(Math.random()*10)
	}
	var smsapi="api.smsbao.com"
	// 短信平台账号
	var user="z976306453"
	// 短信平台密码
	var password="976306453"
	// 要发送的短信内容
	var content="【DarkPanda】您的验证码为:"+code+",在30分钟内有效。"
	// 要发送短信的手机号码
	var phone=req.body.kphone
	send_sms(smsapi,user,password,content,phone)
	
	function send_sms(smsapi,user,password,content,phone){
		var pass = md5.update(password).digest('hex')
		var data={
			'u':user,
			'p':pass,
			'm':phone,
			'c':content
		}
		var content=querystring.stringify(data);
		var sendmsg='';                                //创建空字符串，用来存放收到的数据
		var options={
			hostname:smsapi,
			path:'/sms?'+content,
			method:'GET'
		}
		//创建请求
		var req=http.request(options,function(res){
			res.setEncoding('utf-8');
			res.on('data',function(result){
				statusStr(result)
			});
			res.on('end',function(){
			});
		});
		req.on('error',function(err){
			console.error(err);
		});
		req.end();
	}

	function statusStr(result){
		switch(result)
		{
			case '0':
				console.log('短信发送成功')
				break
			case '-1':
				console.log('参数不全')
				break
			case '-2':
				console.log('服务器空间不支持,请确认支持curl或者fsocket，联系您的空间商解决或者更换空间！')
				break
			case '30':
				console.log('密码错误')
				break
			case '40':
				console.log('账户不存在')
				break
			case '41':
				console.log('余额不足')
				break
			case '42':
				console.log('账户已过期')
				break
			case '43':
				console.log('IP地址限制')
				break
			case '50':
				console.log('内容含有敏感字')
				break
		}
	}
	res.send(code)
})


/*使用路由器来管理路由*/
/*引入路由模块*/
var postRouter=require("./routes/post");
var commentRouter=require("./routes/comment");

server.use("/post",postRouter);
server.use("/comment",commentRouter);