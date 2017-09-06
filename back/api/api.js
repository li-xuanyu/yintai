var express=require('express');
var router=express.Router();
var spider=require("./spider");

//首页数据
router.get("/home1",function(req,res){
	spider("/Services/Proxy.ashx?r=20179021951&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1",function(data){
	res.send(data);	
	})
})

router.get("/famous1",function(req,res){
	spider("/Services/Proxy.ashx?r=0.5196856449072678&methodName=products.category.getcategory_3.0.0&method=products.category.getcategory&ver=3.0.0",function(data){
		res.send(data);
	})
})

router.get("/famous2",function(req,res){
	spider("/Services/Proxy.ashx?r=0.8914744960382175&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid="+req.query.id,function(data){
		res.send(data);
	})
})

router.get("/home2",function(req,res){
	spider("/Services/Proxy.ashx?r=20179041345&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=2",function(data){
	res.send(data);	

	})
})

router.get("/default",function(req,res){
	spider("/Services/Proxy.ashx?r=0.15181752262363646&order_type=0&page_index=1&displaycount=30&query_string=&keyword=&bargainid=26686&method=products.getlimitlist&ver=2.1",function(data){
	res.send(data);	

	})
})

router.get("/address",function(req,res){
	spider("/Services/Proxy.ashx?data=%7B%22itemcode%22%3A%2221-458-8119%22%2C%22userid%22%3A%22%22%7D&userid=&methodName=products.getproductdetail_1.0.0&method=products.getproductdetail&ver=1.0.0&r=20179061307",function(data){
	res.send(data);	

	})
})


module.exports=router;

