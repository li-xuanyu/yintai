var express=require('express');
var router=express.Router();
var spider=require("./spider");

//首页数据
router.get("/home1",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	spider("/Services/Proxy.ashx?r=20179021951&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1",function(data){
	res.send(data);	
	})
})

router.get("/recommend",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	spider("/Services/Proxy.ashx?r=0.30687986934858347&type=5&page_index=1&displaycount=30&methodName=products.limitbuy_1.2.0&method=products.limitbuy&ver=2.1",function(data){
	res.send(data);	
	})
})

router.get("/newest",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	spider("/Services/Proxy.ashx?r=0.4606597812287532&type=5&page_index=1&displaycount=30&methodName=products.limitbuy_1.2.0&method=products.limitbuy&ver=2.1",function(data){
	res.send(data);	
	})
})

router.get("/specialsale",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	spider("/Services/Proxy.ashx?r=0.9018027001873778&type=3&pageindex=1&pagesize=30&methodName=products.getrecommendedproductlist_1.2.0&method=products.getrecommendedproductlist&ver=2.1",function(data){
	res.send(data);	
	})
})

router.get("/countdown",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	spider("/Services/Proxy.ashx?r=0.47881123421291094&type=4&page_index=1&displaycount=30&methodName=products.limitbuy_1.2.0&method=products.limitbuy&ver=2.1",function(data){
	res.send(data);	
	})
})

router.get("/advance",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	spider("/Services/Proxy.ashx?r=0.41940738537470135&type=2&page_index=1&displaycount=30&methodName=products.limitbuy_1.2.0&method=products.limitbuy&ver=2.1",function(data){
	res.send(data);	
	})
})
module.exports=router;