import "./index.scss";
import Nav from "./nav";
import Header from "./header";
import{
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	NavLink
} from 'react-router-dom';
class Product extends React.Component{
	constructor(prop){
		super(prop);
	}

	render(){
		return(
			<div id="product">
				<Header></Header>
				<Nav></Nav>
				<section>
					{this.props.children}
				</section>
			</div>	
		)
	}
}

export default Product;