//我的银泰
import "./index.scss";

class Accont extends React.Component{
	constructor(prop){
		super(prop);
	}

	render(){
		return(
			<div id="passport">
				<div className="login-p">
					<div className="text">
						<img src="https://h5.yintai.com/m/images/ueser-img-75da284743.png" className="l"/>
						<input type="text" placeholder="请输入手机/邮箱" id="name" className="l" maxLength="11"/>
					</div>
					<div className="password">
						<img src="https://h5.yintai.com/m/images/pass-img-c8ba68915f.png" className="l"/>
						<input type="password" placeholder="请输入密码" id="password" className="l" maxLength="12"/>
					</div>
					<div id="login" onClick={this.handleClick.bind(this)}>登 录</div>
					<div className="login-reg">
						<a className="forget-word l">忘记密码?</a>
						<a className="register r" href="/register">注册</a>
					</div>
				</div>
				<div className="ft l">
					<p>客服电话: <a href="https://h5.yintai.com/m/tel:4001191111">400-119-1111</a>（8:00-24:00）</p>
				</div>
			</div>	
		)
	}
	handleClick(){
		console.log(222);
		var user=document.querySelector('#name').value;
		var password=document.querySelector("#password").value;
		axios.post('/api/login',{
    			tel:user,
    			password:password
    		}).then(res=>{
    			if(res.data){
    				alert('登录成功,即将跳转到主页');
    				this.props.history.push("/home");
    			}
    			else{
    				alert("用户名/密码输入错误");
    				this.props.history.push("/mine");
    			}
    		})
	}
}

export default Accont;
