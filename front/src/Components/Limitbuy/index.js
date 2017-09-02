//抢先
import "./index.scss";

class Limitbuy extends React.Component{
	constructor(prop){
		super(prop);
	}

	render(){
		return(
			<div id="limitbuy">
				limitbuy
				{this.props.children}
			</div>	
		)
	}
}

export default Limitbuy;
