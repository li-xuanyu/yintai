//我的银泰
import {NavLink} from "react-router-dom";
import Alert from "../Category/alert-content.js";
import Hear from "../Category/hear-name.js";
import "../../../assets/js/common.js";
import "../Category/index.scss";
import "./index.scss"; 

class Register extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			isShow:false,
			isHide:false
		}
	}

	render(){
		return(
			<div id="category">
			<Hear event={this.handleClick.bind(this)}></Hear>
			<Alert isShow={this.state.isShow} event={this.handleClick.bind(this)}></Alert>
			<div id="create">
				<div className="filed">
					<input type="text" placeholder="请输入手机号" id="cellphone" maxLength="11" method="post"/>
				</div>
				<div className="filed">
					<input type="text" placeholder="请输入验证码" id="code"/>
					<button type="button" id="getcode">获取验证码</button>
				</div>
				<div className="filed">
					<input type="text" placeholder="请设置银泰护照密码" id="password" maxLength="12" method="post"/>
				</div>
				<div className="filed">
					<input type="text" placeholder="请再次确认银泰护照密码" id="repassword" maxLength="12" method="post"/>
				</div>
				<p className="explain">请为护照设置密码（6到12位，英文+数字）</p>
				<p className="explain">注册关联银泰护照后您可使用护照直接登录银泰网。银泰护照即银泰百货会员，注册后，在银泰百货商场可享受会员待遇，并可共享积分等。</p>
				<button id="submit" type="button" onClick={this.handleClick1.bind(this)}>创建银泰护照</button>
			</div>
			</div>	
		)
	}
	handleClick(){
		this.setState({
			isShow:!this.state.isShow
		})
	}
	handleClick1(){
		var user=document.querySelector("#cellphone").value;
		var password=document.querySelector("#password").value;
    	var pConfirm=document.querySelector("#repassword").value;
    	var codeConfirm=document.querySelector("#code").value;

    	checkUser();
    	checkPw();
    	if(checkUser()===true && checkPw()===true){
    		axios.post('/api/register',{
    			tel:user,
    			password:password
    		}).then(res=>{
				if(res.data){
					alert("注册成功");
					location.href="/mine";
				}
				else{
					alert("该用户名已被注册");
				}
    		})
    	}	

    	function checkUser(){
    	if (user === '') {
       	alert("用户名不能为空");
       	return false;
    	}
   	 	else if (!(/^1(3|4|5|7|8)\d{9}$/.test(user))) {
       	alert("用户名为11位手机号");
       	return false;
    	}
    	else {
    	   	return true;
    	}
		}
    	function checkPw(){
    	if(password===''){
    	    alert("密码不能为空");
    	    return false;
    	}
    	else if(!(/^(?!\d+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/.test(password))){
    	    alert("密码为6到12位，英文+数字");
    	    return false;
    	}
    	else if(!(password===pConfirm)){
    	    alert("密码前后不一致");
    	    return false;
    	}
    	else{
    	    return true;
    	}
    	}
		}
	}

export default Register;
