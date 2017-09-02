var express=require('express');
var router=express.Router();
var spider=require("./spider");

//首页轮播
router.get("/swipe",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	spider("/Services/Proxy.ashx?r=20179021951&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1",function(data){
	res.send(data);	
	})
})

module.exports=router;