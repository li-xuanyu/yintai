//详情
import {NavLink} from "react-router-dom";
import Alert from "../Category/alert-content.js";
import Hear from "../Category/hear-name.js";
import Main from "./main.js";
import "../Category/index.scss";
import "./index.scss";

class Dateils extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			isShow:false,
			isHide:false
		}
	}
	render(){
		return(
			<div id="category">
			<Hear event={this.handleClick.bind(this)}></Hear>
			<Alert isShow={this.state.isShow} event={this.handleClick.bind(this)}></Alert>
			<Main></Main>
			</div>	
		)
	}

	handleClick(){
		this.setState({
			isShow:!this.state.isShow
		})
	}
}

export default Dateils;
