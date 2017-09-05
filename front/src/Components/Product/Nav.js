import "./index.scss";
import{
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	NavLink
} from 'react-router-dom';
class Nav extends React.Component{
	constructor(prop){
		super(prop);
	}

	render(){
		return(
			<nav>
				<div>
					<span><NavLink to="/product/default" activeClassName="focus">默认</NavLink></span>
					<span><NavLink to="/product/sales" activeClassName="focus">销量</NavLink></span>
					<span><NavLink to="/product/price" activeClassName="focus">价格</NavLink></span>
					<span><NavLink to="/product/discount" activeClassName="focus">折扣</NavLink></span>
					<span className="herald"><NavLink to="/product/choose" activeClassName="focus">筛选</NavLink></span>
				</div>
			</nav>	
		)
	}
}

export default Nav;