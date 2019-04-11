const express=require("express");
const router=express.Router();
const pool=require("../pool");
//查看次数
router.get('/see',(req,res)=>{
	var fid=+req.query.fid
	var clicks=+req.query.clicks
	sql='update forum SET clicks=? where fid=?'
	pool.query(sql,[clicks,fid],(err,result)=>{
		if(err) throw err
		if(result.affectedRows>0){
		   res.send({code:200,msg:"更新成功"})
		}else{
		   res.send({code:301,msg:"更新失败"})
     }
	})
})
//获取帖子
router.get("/getforumlist",(req,res)=>{
	var obj=req.query;
	if(!obj.fid){
		var $game=+obj.game;
		var $type=+obj.type;
		var $pno=obj.pno;
		$pno=parseInt($pno);
		$pageSize=10;
		var sql="SELECT * FROM forum WHERE game=? and type=? LIMIT ? , ?";
		var arr=[$game,$type,$pno,$pageSize];
	}else{
		var arr=obj.fid
		var sql="SELECT * FROM forum WHERE fid=?"
	}
  pool.query(sql,arr,(err,result)=>{
      if(err)throw err
	  res.send(result)
//      res.writeHead(200,{"Access-Control-Allow-Origin":"*","Content-Type":"text/html; charset=utf-8"});
//      res.write(JSON.stringify(result));
//      //console.log(JSON.stringify(result));
//      res.end();
  })
})
//发帖子
router.post("/sendforum",(req,res)=>{
   var obj=req.body;
   var sql="INSERT INTO forum SET ?";
   pool.query(sql,obj,(err,result)=>{
     if(err)console.log(err);
     if(result.affectedRows>0){
       res.send({code:200,msg:"发帖成功"})
     }else{
       res.send({code:301,msg:"发帖失败"})
     }
   })
})
module.exports=router;