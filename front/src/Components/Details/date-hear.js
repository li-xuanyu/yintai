import React from "react";
import {NavLink} from "react-router-dom"
class Hear extends React.Component{
	constructor(prop){
		super(prop);
		
	}

	render(){
		return (
		<div className="yintai-header">
			<NavLink to="/home" className="back-button"  onClick={()=>{
				this.props.history.goBack();
			}}>＜</NavLink>
			<div className="hear-name">商品详情</div>
			<div className="xiala r" onClick={()=>{
				this.props.event()
			}}>
				<span>···</span>
			</div>		
		</div>
		)
	}

	
}

export default Hear;