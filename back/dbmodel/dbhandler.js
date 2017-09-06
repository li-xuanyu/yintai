//创建collection,以及model，通过model，去操作数据库的增删改查


var mongoose=require("mongoose");
var Schema=mongoose.Schema;//概要计划

var user={
	tel:{type:String},
	email:{type:String},
	password:{type:String}
}

//讲collection与model关联,自动创建collection的名字是users

mongoose.model("user",new Schema(user));

module.exports={
	user:mongoose.model("user")
}