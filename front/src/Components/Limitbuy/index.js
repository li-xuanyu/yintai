//抢先
import "./index.scss";
import Header from "./header";
import Nav from "./nav";
import Newest from "../Newest"
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
	}

	render(){
		return(
			<div id="limitbuy">
				<Header></Header>
				<Nav></Nav>
				<section>
					{this.props.children}
				</section>

			</div>	
			
		)
	}
}

export default Limitbuy;
