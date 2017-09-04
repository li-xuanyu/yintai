import React from "react";
import{
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	NavLink
} from 'react-router-dom';
class Nav extends React.Component{
	constructor(prop){
		super(prop);
	}

	render(){
		return(
			<nav>
				<div>
					<span><NavLink to="/LimitBuy/recommend" activeClassName="focus">推荐</NavLink></span>
					<span><NavLink to="/LimitBuy/latest" activeClassName="focus">最新</NavLink></span>
					<span><NavLink to="/LimitBuy/tmbt" activeClassName="focus">特卖爆推</NavLink></span>
					<span><NavLink to="/LimitBuy/countdown" activeClassName="focus">倒计时</NavLink></span>
					<span className="herald"><NavLink to="/LimitBuy/herald" activeClassName="focus">预告</NavLink></span>
				</div>
			</nav>	
		)
	}
}

export default Nav;