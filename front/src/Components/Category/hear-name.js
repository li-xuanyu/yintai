import React from "react";
import {NavLink} from "react-router-dom"
class Hear extends React.Component{
	constructor(prop){
		super(prop);
		
	}

	render(){
		return (
		<div className="yintai-header">
			<NavLink to="/home" className="back-button"onClick={()=>{
				this.props.event()
			}}>＜</NavLink>
			<div className="hear-name">分类</div>
			<div className="xiala r" onClick={()=>{
				this.props.event()
			}}>
				<span>•••</span>
			</div>		
		</div>
		)
	}

	
}

export default Hear;