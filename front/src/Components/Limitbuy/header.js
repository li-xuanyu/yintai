
import React from "react";

class Header extends React.Component{
	constructor(prop){
		super(prop);
	}

	render(){
		return(
			<header>
				<span className="l" onClick={()=>{
					let that=this.props.isHide;
					that.props.history.goBack();
				}}>＜</span>
				<span className="middle">抢先</span>
				<span className="r">...</span>
			</header>	
		)
	}
}

export default Header;