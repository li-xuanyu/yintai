var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/',function(req,res,next){
	//req.body接受前端的post请求；
	
	console.log(req.body);
	
	dbhandler.user.findOne({
		tel:req.body.email,
		password:req.body.password
	},function(error,data){
		if(data){
			return true;
			alert(true);
		}
		else{
			return false;
			alert(false);
		}
	})
})

module.exports = router;