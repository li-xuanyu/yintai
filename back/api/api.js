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

<<<<<<< HEAD
// router.get("/home2",function(req,res){
// 	res.header("Access-Control-Allow-Origin","*");
// 	spider("/Services/Proxy.ashx?r=20179031549&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=2")
// })
router.get("/famous1",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	spider("/Services/Proxy.ashx?r=0.43041094412102776&methodName=products.category.getcategory_3.0.0&method=products.category.getcategory&ver=3.0.0",function(data){
		res.send(data);
	})
})

router.get("/famous2",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	spider("/Services/Proxy.ashx?r=0.8914744960382175&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=88",function(data){
		res.send(data);
	})
})

router.get("/woman",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	spider("/Services/Proxy.ashx?r=0.32841183970624477&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=150",function(data){
		res.send(data);
	})
})

router.get("/man",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	spider("/Services/Proxy.ashx?r=0.37799000084364276&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=257",function(data){
		res.send(data);
	})
})

router.get("/underwear",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	spider("/Services/Proxy.ashx?r=0.5993695889088886&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=245",function(data){
		res.send(data);
	})
})

router.get("/cosmetics",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	spider("/Services/Proxy.ashx?r=0.7518876161357857&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=151",function(data){
		res.send(data);
	})
})

router.get("/boot",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	spider("/Services/Proxy.ashx?r=0.16672229695413554&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=2",function(data){
		res.send(data);
	})
})

router.get("/bag",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	spider("/Services/Proxy.ashx?r=0.42379642052367816&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=5",function(data){
		res.send(data);
	})
})

router.get("/outdoor",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	spider("/Services/Proxy.ashx?r=0.8057479768984901&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=242",function(data){
		res.send(data);
	})
})

router.get("/jewelry",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	spider("/Services/Proxy.ashx?r=0.7641221507200813&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=1",function(data){
		res.send(data);
	})
})

router.get("/badys",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	spider("/Services/Proxy.ashx?r=0.21848800756882913&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=3",function(data){
		res.send(data);
	})
})

router.get("/house",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	spider("https://m.yintai.com/Services/Proxy.ashx?r=0.7927333240386347&methodName=products.category.getchildcategory_3.0.0&method=products.category.getchildcategory&ver=3.0.0&categoryid=4",function(data){
		res.send(data);
=======
router.get("/home2",function(req,res){
	res.header("Access-Control-Allow-Origin","*");
	spider("/Services/Proxy.ashx?r=20179041345&os=HTML5&client_v=1.0.0&pageid=104001&previewtime=0&methodName=products.template.getpage_1.0.0&method=products.template.getpage&apptype=10&ver=1.0.0&pageindex=2",function(data){
	res.send(data);	
>>>>>>> 1b277ebcf06572b6b3c7c08f4306cbadce1c4288
	})
})

module.exports=router;