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
            Authorization:"Bearer 00ec73d6335fdfb1964c43db20390314e40a3852"
        }
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
module.exports=recom;