
import React from "react";

class Header extends React.Component{
	constructor(prop){
		super(prop);
	}

	render(){
		return(
			<header>
				<span className="l">＜</span>
				<span className="middle">优家美妆工具</span>
				<span className="r">...</span>
			</header>	
		)
	}
}

export default Header;