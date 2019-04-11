const express=require('express');
//引入连接池模块
const pool=require('../pool.js');
//创建空的路由器对象
var router=express.Router();
	router.get('/banner',(req,res)=>{
		var game=req.query.game
		var sql='select banner from zw_banner where game=?'
		pool.query(sql,[game],(err,result)=>{
			if(err) throw err

			res.send(result)
		})
	})
	router.get('/shop',(req,res)=>{
		var game=req.query.game
		var sql='select title,bri from zw_shop where game=?'
		pool.query(sql,[game],(err,result)=>{
			if(err) throw err
			res.send(result)
		})
	})
	router.get('/shop/pri',(req,res)=>{
		var game=req.query.game
		var sql='select sid,pri,pid from zw_shop_pri where game=?'
		pool.query(sql,[game],(err,result)=>{
			if(err) throw err
			res.send(result)
		})
	})
	router.get('/shop/tb',(req,res)=>{
		var game=req.query.game
		var sql='select tb from zw_tb where game=?'
		pool.query(sql,[game],(err,result)=>{
			if(err) throw err

			res.send(result)
		})
	})
module.exports=router;