/**
 * Created by Administrator on 2017/8/15.
 */
var https=require("https");
function spider(path,callback){
    //爬数据
    console.log(callback);
    var options={
        hostname:'m.yintai.com',
        port:443,//https 443端口号,http80端口号
        path:path,
        method:'get'
    };


    var req=https.request(options,function(res){
        var alldata="";
        res.on("data",function(chunk){
            alldata+=chunk;
        })

        res.on("end",function(){
            callback(alldata);
        })
    })

    req.end();
}
module.exports=spider;//导出什么就是什么
