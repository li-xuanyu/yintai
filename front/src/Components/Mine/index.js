//我的银泰
import {NavLink} from "react-router-dom";
import Alert from "../Category/alert-content.js";
import Hear from "../Category/hear-name.js";
import Main from "./main";
import "../Category/index.scss";
import "./index.scss";

class Mine extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			isShow:false,
			isHide:false
		}
	}

	render(){
		return(
			<div id="category" className="mine">
			<div className="yintai-header">
			<NavLink to="/home" className="back-button" onClick={()=>{
				this.props.history.goBack();
			}}>＜</NavLink>
			<div className="hear-name">我的银泰</div>
			<div className="xiala r" onClick={this.handleClick.bind(this)}>
				<span>···</span>
				</div>		
			</div>
			<Alert isShow={this.state.isShow} event={this.handleClick.bind(this)}></Alert>
			<Main></Main>
			{this.props.children}
			</div>	
		)
	}
	handleClick(){
		this.setState({
			isShow:!this.state.isShow
		})
	}
}

export default Mine;
