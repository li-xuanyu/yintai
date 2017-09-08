import React from "react";
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
		this.state={
			limit:[]
		}
	}

	componentDidMount() {
	   axios.get("/api/limit").then(res=>{
	   		this.setState({
	   			limit:res.data.data
	   		})
	   		console.log(this.state.limit)
	   })
	}
	render(){
		return(
			<nav>
				<ul onClick={()=>{
					this.props.logo();
				}}>
					{
						this.state.limit.map(item=>
							<li key={item.bargaintagtype} onClick={()=>{
								this.props.event(item.bargaintagtype);
							}}>{item.bargaintagname}</li>
						)
					}
				</ul>
			</nav>	
		)
	}
}

export default Nav;