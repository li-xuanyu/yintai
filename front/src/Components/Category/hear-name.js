import React from "react";
import {NavLink} from "react-router-dom"
class Hear extends React.Component{
	constructor(prop){
		super(prop);
		
	}

	render(){
		return (
		<div className="yintai-header">
			<a className="back-button">＜</a>
			<div className="hear-name">分类</div>
			<div className="xiala r" onClick={()=>{
				this.props.event()
			}}>
				<span> ●●● </span>
			</div>		
		</div>
		)
	}

	
}

export default Hear;