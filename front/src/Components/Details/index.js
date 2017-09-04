//详情
import "./index.scss";

class Dateils extends React.Component{
	constructor(prop){
		super(prop);
	}

	render(){
		return(
			<div id="details">
				Dateils
				{this.props.children}
			</div>	
		)
	}
}

export default Dateils;
