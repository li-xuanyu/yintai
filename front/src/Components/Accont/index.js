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
						<img src="https://h5.yintai.com/m/images/ueser-img-75da284743.png"/>
						<input type="text" placeholder="请输入手机/邮箱" id="name"/>
					</div>
					<div className="password">
						<img src="https://h5.yintai.com/m/images/pass-img-c8ba68915f.png"/>
						<input type="password" placeholder="请输入密码" id="password"/>
					</div>
					<div id="login">登 录</div>
					<div className="login-reg">
						<a className="forget-word l">忘记密码?</a>
						<a className="register r">注册</a>
					</div>
				</div>
				<div className="ft l">
					<p>客服电话: <a href="https://h5.yintai.com/m/tel:4001191111">400-119-1111</a>（8:00-24:00）</p>
				</div>
			</div>	
		)
	}
}

export default Accont;
