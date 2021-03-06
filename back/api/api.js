var express=require('express');
var router=express.Router();
var spider=require("./spider");

//购物车

router.post('/cart',function(req,res,next){
	dbhandler.good.create({
		name:req.body.name,
		ytprice:req.body.ytprice,
		name2:req.body.name2,
		url:req.body.url,
		value:req.body.value
	},function(error,result){
		if(!error){
			res.send(true);
		}else{
			console.log(error);
		}
	})
})

router.get('/cart',function(req,res,next){
	dbhandler.good.find({},function(error,data){
		if(data){
			res.send(data);
		}else{
			res.send(false);
		}
	})
})

//注册
router.post('/register',function(req,res,next){
	//req.body接受前端的post请求；
	//将用户名存入数据库 mongodb<=mongoose模块
	//利用dbhandler.user
	dbhandler.user.findOne({
		tel:req.body.tel
	},function(error,data){
		if(data){
			res.send(false)
		}
		else{
			dbhandler.user.create({
				tel:req.body.tel,
				password:req.body.password
			},function(error,result){
				if(!error){
					res.send(true);
				}
				else{
					console.log(error);
				}
			})
		}
	})
})

//登录
router.post('/login',function(req,res,next){
	//req.body接受前端的post请求；
	
	dbhandler.user.findOne({
		tel:req.body.tel,
		password:req.body.password
	},function(error,data){
		if(data){
			res.send(true);
		}
		else{
			res.send(false);
		}
	})

})

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

router.get("/recommend",function(req,res){
	spider("/Services/Proxy.ashx?r=0.30687986934858347&type="+req.query.type+"&page_index=1&displaycount=30&methodName=products.limitbuy_1.2.0&method=products.limitbuy&ver=2.1",function(data){
	res.send(data);	
	})
})


router.get("/default",function(req,res){
	spider("/Services/Proxy.ashx?r=0.15181752262363646&order_type=0&page_index="+req.query.page_index+"&displaycount=30&query_string=&keyword=&bargainid=26686&method=products.getlimitlist&ver=2.1",function(data){
	res.send(data);	

	})
})

router.get("/sales",function(req,res){
	spider("/Services/Proxy.ashx?r=0.8892220504583117&type=3&pageindex=1&pagesize=30&methodName=products.getrecommendedproductlist_1.2.0&method=products.getrecommendedproductlist&ver=2.1",function(data){
	res.send(data);	
	})
})

router.get("/limit",function(req,res){
	spider("/Services/Proxy.ashx?r=0.5063311052565642&methodName=products.getbargaintaglist_1.0.0&method=products.getbargaintaglist&ver=2.1",function(data){
	res.send(data);	
	})
})

router.get("/products",function(req,res){
	spider("/Services/Proxy.ashx?r=0.6802822056747244&order_type=0&page_index=1&displaycount=30&query_string=&keyword=&bargainid="+req.query.bargainid+"&method=products.getlimitlist&ver=2.1",function(data){
	res.send(data);	
	})
})

router.get("/address",function(req,res){
	spider("/Services/Proxy.ashx?data=%7B%22itemcode%22%3A%22"+req.query.itemcode+"%22%2C%22userid%22%3A%22%22%7D&userid=&methodName=products.getproductdetail_1.0.0&method=products.getproductdetail&ver=1.0.0&r=20179061307",function(data){
	res.send(data);	

	})
})

router.get("/discount",function(req,res){
	spider("/Services/Proxy.ashx?r=0.7757415012113089&order_type=7&page_index="+req.query.page_index+"&displaycount=30&query_string=&keyword=&bargainid="+req.query.bargainid+"&method=products.getlimitlist&ver=2.1",function(data){
	res.send(data);	

	})
})


module.exports=router;

