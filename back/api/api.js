var express=require('express');
var router=express.Router();
var spider=require("./spider");
var recom=require("./recom");
//首页数据
router.get("/home1",function(req,res){
	spider("/Services/Proxy.ashx?r=20179021951&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=1",function(data){
	res.send(data);	
	})
})
router.get("/recommend",function(req,res){

	res.header("Access-Control-Allow-Origin","*");
	spider("/Services/Proxy.ashx?r=0.30687986934858347&type="+req.query.type+"&page_index=1&displaycount=30&methodName=products.limitbuy_1.2.0&method=products.limitbuy&ver=2.1",function(data){

	res.send(data);	
	})
})

router.get("/newest",function(req,res){
	spider("/Services/Proxy.ashx?r=0.4606597812287532&type=5&page_index=1&displaycount=30&methodName=products.limitbuy_1.2.0&method=products.limitbuy&ver=2.1",function(data){
	res.send(data);	
	})
})

router.get("/specialsale",function(req,res){
	spider("/Services/Proxy.ashx?r=0.9018027001873778&type=3&pageindex=1&pagesize=30&methodName=products.getrecommendedproductlist_1.2.0&method=products.getrecommendedproductlist&ver=2.1",function(data){
	res.send(data);	
	})
})

router.get("/countdown",function(req,res){
	spider("/Services/Proxy.ashx?r=0.47881123421291094&type=4&page_index=1&displaycount=30&methodName=products.limitbuy_1.2.0&method=products.limitbuy&ver=2.1",function(data){
	res.send(data);	
	})
})

router.get("/advance",function(req,res){
	spider("/Services/Proxy.ashx?r=0.41940738537470135&type=2&page_index=1&displaycount=30&methodName=products.limitbuy_1.2.0&method=products.limitbuy&ver=2.1",function(data){
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

router.get("/woman",function(req,res){
	spider("/Services/Proxy.ashx?r=0.32841183970624477&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=150",function(data){
		res.send(data);
	})
})

router.get("/man",function(req,res){
	spider("/Services/Proxy.ashx?r=0.37799000084364276&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=257",function(data){
		res.send(data);
	})
})

router.get("/underwear",function(req,res){
	spider("/Services/Proxy.ashx?r=0.5993695889088886&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=245",function(data){
		res.send(data);
	})
})

router.get("/cosmetics",function(req,res){
	spider("/Services/Proxy.ashx?r=0.7518876161357857&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=151",function(data){
		res.send(data);
	})
})

router.get("/boot",function(req,res){
	spider("/Services/Proxy.ashx?r=0.16672229695413554&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=2",function(data){
		res.send(data);
	})
})

router.get("/bag",function(req,res){
	spider("/Services/Proxy.ashx?r=0.42379642052367816&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=5",function(data){
		res.send(data);
	})
})

router.get("/outdoor",function(req,res){
	spider("/Services/Proxy.ashx?r=0.8057479768984901&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=242",function(data){
		res.send(data);
	})
})

router.get("/jewelry",function(req,res){
	spider("/Services/Proxy.ashx?r=0.7641221507200813&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=1",function(data){
		res.send(data);
	})
})

router.get("/badys",function(req,res){
	spider("/Services/Proxy.ashx?r=0.21848800756882913&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=3",function(data){
		res.send(data);
	})
})

router.get("/house",function(req,res){
	spider("/Services/Proxy.ashx?r=0.7927333240386347&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=4",function(data){
		res.send(data);
	})
})

router.get("/home2",function(req,res){
	spider("/Services/Proxy.ashx?r=20179041345&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=2",function(data){
	res.send(data);	

	})
})

router.get("/default",function(req,res){
	spider("/Services/Proxy.ashx?r=0.15181752262363646&order_type=0&page_index="+req.query.page_index+"&displaycount=30&query_string=&keyword=&bargainid=26686&method=products.getlimitlist&ver=2.1",function(data){
	res.send(data);	

	})
})


router.get("/sales",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	spider("/Services/Proxy.ashx?r=0.8892220504583117&type=3&pageindex=1&pagesize=30&methodName=products.getrecommendedproductlist_1.2.0&method=products.getrecommendedproductlist&ver=2.1",function(data){
	res.send(data);	

	})
})

router.get("/price",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	spider("/Services/Proxy.ashx?r=0.7443964619665411&order_type=3&page_index=1&displaycount=30&query_string=&keyword=&bargainid=26686&method=products.getlimitlist&ver=2.1",function(data){
	res.send(data);	

	})
})

router.get("/discount",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	spider("/Services/Proxy.ashx?r=0.7757415012113089&order_type=7&page_index="+req.query.page_index+"&displaycount=30&query_string=&keyword=&bargainid="+req.query.bargainid+"&method=products.getlimitlist&ver=2.1",function(data){
	res.send(data);	

	})
})

router.get("/choose",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	spider("/Services/Proxy.ashx?r=0.7757415012113089&order_type=7&page_index=1&displaycount=30&query_string=&keyword=&bargainid=26686&method=products.getlimitlist&ver=2.1",function(data){
	res.send(data);	

	})
})

router.get("/limit",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	spider("/Services/Proxy.ashx?r=0.5063311052565642&methodName=products.getbargaintaglist_1.0.0&method=products.getbargaintaglist&ver=2.1",function(data){
	res.send(data);	

	})
})

router.get("/products",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	spider("/Services/Proxy.ashx?r=0.6802822056747244&order_type=0&page_index=1&displaycount=30&query_string=&keyword=&bargainid="+req.query.bargainid+"&method=products.getlimitlist&ver=2.1",function(data){


router.get("/address",function(req,res){
	spider("/Services/Proxy.ashx?data=%7B%22itemcode%22%3A%2221-458-8119%22%2C%22userid%22%3A%22%22%7D&userid=&methodName=products.getproductdetail_1.0.0&method=products.getproductdetail&ver=1.0.0&r=20179061307",function(data){
	res.send(data);	

	})
})


module.exports=router;

