/**
 * Created by Administrator on 2017/7/31.
 */
var common=common || {
        ajax:function (method,url,data,fn){
            var xhr=new XMLHttpRequest();
            xhr.onreadystatechange=function(){
                if(xhr.readyState===4){
                    if(xhr.status>=200 && xhr.status<=300){
                        if(typeof fn==='function'){
                            fn(JSON.parse(xhr.responseText));
                        }
                    }
                    else{
                        console.error('发送请求失败');
                    }
                }
            }


            if(method==='get'){
                if(data){
                    xhr.open(method,url+'?'+data,ture);
                }
                else{
                    xhr.open(method,url,true);
                }
                xhr.send(null);
            }
            else{
                xhr.open(method,url,true);
                xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
                if(data){
                    xhr.send(data);
                }
                else{
                    xhr.send(null);
                }
            }
        }
    }