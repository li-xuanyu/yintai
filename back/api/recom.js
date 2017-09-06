var https=require("https");
function recom(path,callback){
    //爬数据
    console.log(callback);
    var options={
        hostname:'recommend-prod.yintai.com',
        port:443,//https 443端口号,http80端口号
        path:path,
        method:'get',

        headers:{
            authorization:'Bearer 93153732b49f74cff28bfe91a51e3bc663ff89bd'
        }
    };


    var req=https.request(options,function(res){
        var alldata="";
        res.on("data",function(chunk){
            alldata+=chunk;
        })

        res.on("end",function(){s
            callback(alldata);
        })
    })

    req.end();
}
module.exports=recom;