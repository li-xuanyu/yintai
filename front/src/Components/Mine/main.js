import {NavLink} from "react-router-dom";
class Main extends React.Component{
	constructor(prop) {
		super(prop);
	}

	render(){
		return (
			<div className="main">
				<ul className="tablist l">
					<li className="item l">
					<NavLink to="/mine/passport" className="one">
					银泰护照
					</NavLink>
					</li>

					<li className="item l">
					<NavLink to="/mine/accont">
					银泰网账号
					</NavLink>
					</li>
				</ul>
			</div>
		)
	}
}

export default Main;