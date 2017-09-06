import React from "react";
import {NavLink} from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'; // ES6

class Alert extends React.Component{
	constructor(prop){
		super(prop);
		
	}

	render(){
		return <div className="alerts">
				
			{
				this.props.isShow?
				<div id="bj-alert">
				<div className="kd-alert">
				<div className="alert-content" onClick={()=>{
					this.props.event()
				}}>
					<NavLink to="/home">
						<img src="https://r.ytrss.com/mobile/img/bar-default-home.png"/>
						<span>银泰首页</span>
					</NavLink>
					<NavLink to="/category">
						<img src="https://r.ytrss.com/mobile/img/bar-default-class.png"/>
						<span>分类</span>
					</NavLink>
					<NavLink to="/cart">
						<img src="https://r.ytrss.com/mobile/img/bar-default-cart.png"/>
						<span>购物车</span>
					</NavLink>
					<NavLink to="/mine">
						<img src="https://r.ytrss.com/mobile/img/bar-default-my.png" />
						<span>我的银泰</span>
					</NavLink>
				</div>
				</div>
				</div>
				:
				null		
			}			
		
			</div>
	}

	
}

export default Alert;