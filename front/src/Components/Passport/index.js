//我的银泰
import "./index.scss";

class Passport extends React.Component{
	constructor(prop){
		super(prop);
	}

	render(){
		return(
			<div id="passport">
				<div className="login-p l">
					<div className="text">
						<img src="https://h5.yintai.com/m/images/ueser-img-75da284743.png" className="l"/>
						<input type="text" placeholder="请输入银泰护照号(手机号)" id="name" className="l"/>
					</div>
					<div className="password">
						<img src="https://h5.yintai.com/m/images/pass-img-c8ba68915f.png" className="l"/>
						<input type="password" placeholder="请输入密码" id="password" className="l"/>
					</div>
					<div id="login">登 录</div>
					<div className="login-reg">
						<a className="forget-word l">忘记密码?</a>
						<a className="register r" href="/register">注册</a>
					</div>
					<p className="word l">银泰护照即银泰门店会员账号，一般为手机号，如未设置过密码或忘记密码可点击“忘记密码”进行找回。</p>
					<p className="word l">
					<span>推荐您使用银泰护照进行登录。</span>
					使用银泰护照登录，将可在线享受银泰会员的一些权益，并与您线上账号进行关联，确保您的会员权益最大化。
					</p>
				</div>
				<div className="ft l">
					<p>客服电话: <a href="https://h5.yintai.com/m/tel:4001191111">400-119-1111</a>（8:00-24:00）</p>
				</div>
			</div>	
		)
	}
}

export default Passport;
