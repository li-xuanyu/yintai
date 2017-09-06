import {NavLink} from 'react-router-dom';
class Footer extends React.Component{
	constructor(prop){
		super(prop);
	}

	componentDidMount() {
	    window.onscroll=()=>{
	    	var gotop=document.querySelector(".gotop");
	    	document.body.scrollTop>1000?
	    	gotop.style.display="block"
	    	:
	    	gotop.style.display="none"
	    }
	}

	componentWillUpdate() {
	    window.onscroll=null;
	}

	render(){
		return (
			<footer className="ft l">
				<div className="footer l">
					<div className="ftnav">
						<NavLink to="/" className="l">
							<strong>首页</strong>
						</NavLink>
						<NavLink to="/category" className="l">
							<strong>分类</strong>
						</NavLink>
						<NavLink to="/cart" className="l">
							<strong>购物车</strong>
						</NavLink>
						<NavLink to="/mine" className="l">
							<strong>我的</strong>
						</NavLink>
					</div>
					<div className="login l">
						<div className="l left">
							<NavLink to="" className="bor">登录</NavLink>
							<NavLink to="">注册</NavLink>		
						</div>
						<div className="r right">
							<NavLink to="">客户端下载</NavLink>
						</div>
					</div>
				</div>
				<div className="contact l">
					<p>
						客服电话：
						<NavLink to="">400-119-1111</NavLink>
					   （8:00-24:00）
					</p>
					<p>浙ICP备10200233号</p>
				</div>
				{

				}
				<div className="gotop" style={{display:"none"}} onClick={this.handleClick.bind(this)}>
				<a href='javascript:;'></a>
				</div>
			</footer>
		)
	}

	handleClick(){
		document.body.scrollTop=0;
	}
}

export default Footer;