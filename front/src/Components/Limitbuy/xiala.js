import React from "react";
import{
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	NavLink
} from 'react-router-dom';
class Xiala extends React.Component{
	constructor(prop){
		super(prop);
	}

	render(){
		return(
			<div id="xiala">
				<ul>
				<li>
					<NavLink to="/home" activeClassName="focus">
						<img src="https://r.ytrss.com/mobile/img/bar-default-home.png"/>
						<span>银泰首页</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/category" activeClassName="focus">
						<img src="https://r.ytrss.com/mobile/img/bar-default-class.png"/>
						<span>分类</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/car" activeClassName="focus">
						<img src="https://r.ytrss.com/mobile/img/bar-default-cart.png"/>
						<span>购物车</span>
					</NavLink>
				</li>
				<li>
					<NavLink to="/mine" activeClassName="focus">
						<img src="https://r.ytrss.com/mobile/img/bar-default-my.png"/>
						<span>我的银泰</span>
					</NavLink>
				</li>
				</ul>
			</div>	
		)
	}
}

export default Xiala;