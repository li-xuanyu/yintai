//抢先
import "./index.scss";
import Header from "./header";
import Nav from "./nav";
import Xiala from "./xiala";
import Liebiao from "./liebiao"

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
			limitId:5
			
		}
	}

	
		


	render(){
		return(
			<div id="limitbuy">
				<Header isHide={this}></Header>
				<Xiala></Xiala>
				<Nav event={this.handleClick.bind(this)}></Nav>
				
				<section>
				<Liebiao isId={this.state.limitId} event={this}></Liebiao>
				</section>
			</div>	
			
		)
	}

	handleClick(id){
		this.setState({
			limitId:id
		})
	}
}

export default Limitbuy;
