import React from "react";
import {NavLink} from "react-router-dom"
class Hear extends React.Component{
	constructor(prop){
		super(prop);
		
	}

	render(){
		return (
		<div className="cart-header">
			<NavLink to="/home" className="back-button"   onClick={()=>{
				this.props.history.goBack();
			}}>＜</NavLink>

			<NavLink to="/home" className="back-button">
				<img src="https://r.ytrss.com/mobile/img/bar-default-home.png"/>
			</NavLink>

			<div className="hear-name">购物车</div>	
				
		</div>
		)
	}

	
}

export default Hear;