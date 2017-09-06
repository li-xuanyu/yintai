import React from "react";
import{
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	NavLink
} from 'react-router-dom';
class Contend extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			contendlist:[]
		}
	}
	componentDidMount() {
		//ajax请求
		axios.get("/api/contend").then(res=>{
			this.setState({
				contendlist:res.data.data.activityinfo[0].activitylist
			})
		})
	}
	render(){
		return(
			<div id="nowShow">
				<ul>
					{this.state.contendlist.map(item=>
						<li key={item.id}>
							<img src={item.imgurl}/>
							<p>{item.name}</p>
							<p className="discount">{item.discount}</p>

						</li>


						)}
				</ul>
			</div>
			
		)
	}
}

export default Contend;