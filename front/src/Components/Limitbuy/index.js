//抢先
import "./index.scss";
import Header from "./header";
import Nav from "./nav";
import Xiala from "./xiala";
import Liebiao from "./liebiao"
import Alert from "../Category/alert-content.js";
import "../Category/index.scss";
import{
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	NavLink
} from 'react-router-dom';
class Limitbuy extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			limitId:5,
			isShow:false,
			isHide:true
			
		}
	}

	render(){
		return(
			<div id="category">
			{
				this.state.isHide?
				<div className="bj-logo">
				<img className="logo" src="https://r.ytrss.com/mobile/img/h5-loading.gif"/>
				</div>
				:
				null
			}
			<div className="yintai-header">
			<NavLink to="/home" className="back-button" onClick={()=>{
				this.props.history.goBack();
			}}>＜</NavLink>
			<div className="hear-name">抢先</div>
			<div className="xiala r" onClick={this.handleClicks.bind(this)}>
				<span>···</span>
				</div>		
			</div>
			<Alert isShow={this.state.isShow} event={this.handleClicks.bind(this)}></Alert>
			<div id="limitbuy">
				<Nav event={this.handleClick.bind(this)} logo={this.handleLogo2.bind(this)}></Nav>
				
				<section>
				<Liebiao isId={this.state.limitId} event={this} logo={this.handleLogo.bind(this)}></Liebiao>
				</section>
			</div>	
			</div>
		)
	}

	handleClick(id){
		this.setState({
			limitId:id
		})
	}
	handleClicks(){
		this.setState({
			isShow:!this.state.isShow
		})
	}
	handleLogo(){
		this.setState({
			isHide:false
		})
	}
	handleLogo2(){
		this.setState({
			isHide:true
		})
	}
}

export default Limitbuy;
