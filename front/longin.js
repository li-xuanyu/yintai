/**
 * Created by Administrator on 2017/5/19 0019.
 */
    var but=document.querySelector('#but');
        but.onclick=function (){
            var userSpan = document.querySelector('#box1').value;
            var passSpan = document.querySelector('#box2').value;

            if(userSpan === ''){
               alert('用户名不能为空');
            }else if( !(/^1\d{10}$/.test(userSpan)) ){
                var na = document.querySelector('#ent');
                na.style.opacity='1';
            }
            if(passSpan === ''){
                alert('密码不能为空');

            }else if( !(/^[a-zA-Z0-9]{6,19}$/.test(passSpan)) ){
                var co = document.querySelector('#ant');
                co.style.opacity='1';
            }
            if ((/^1\d{10}$/.test(userSpan)) && (/^[a-zA-Z0-9]{6,19}$/.test(passSpan))) {
               location.href = 'index.html'; 
            }
               
        }
