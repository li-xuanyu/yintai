import {NavLink} from 'react-router-dom';
class Nav extends React.Component{
	constructor(prop){
		super(prop);
	}

	render(){
		return (
			<nav className="guide">
				<div className="container">
					<ul className="cf">
						<li className="l first">
							<NavLink to="/home">
								<img src="https://r.ytrss.com/mobile/img/bar-hover-home.png"/>
								<span>首页</span>
							</NavLink>
						</li>
						<li className="l">
							<NavLink to="/limitbuy">
								<img src="https://r.ytrss.com/mobile/img/bar-default-sale.png"/>
								<span>抢先</span>
							</NavLink>
						</li>
						<li className="l">
							<NavLink to="/category">
								<img src="https://r.ytrss.com/mobile/img/bar-default-class.png"/>
								<span>分类</span>
							</NavLink>
						</li>
						<li className="l">
							<NavLink to="/cart">
								<img src="https://r.ytrss.com/mobile/img/bar-default-cart.png"/>
								<span>购物车</span>
							</NavLink>
						</li>
						<li className="l">
							<NavLink to="/mine">
								<img src="https://r.ytrss.com/mobile/img/bar-default-my.png"/>
								<span>我的银泰</span>
							</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		)
	}
}

export default Nav