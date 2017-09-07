var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/register', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/register',function(req,res,next){
	//req.body接受前端的post请求；
	
	console.log(req.body);
	//将用户名存入数据库 mongodb<=mongoose模块
	
	//利用dbhandler.user
	dbhandler.user.create({
		tel:req.body.username,
		password:req.body.password,
	},function(error,result){
		if(!error){
			return true;
			alert(true);
		}
		else{
			return false;
			alert(error);
		}
	})
})

module.exports = router;