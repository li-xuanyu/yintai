//分类
import "./index.scss";
import{
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	Link,
	Mans
} from 'react-router-dom';
import {NavLink} from 'react-router-dom';
import Hear from "./hear-name";
import Alert from "./alert-content";
import Seek from "./seek";
import Mous from "./mous";
import Manul from "./man";

class Category extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			isShow:false,
			famouslist:[],
			famousId:88,
			isHide:false
		}
	}

	render(){
		return(
			<div id="category">
				{
					this.state.isHide?
					<div className="bjs"></div>
					:
					null
				}
					
				<Hear event={this.handleClick.bind(this)}></Hear>
				<Alert isShow={this.state.isShow} event={this.handleClick.bind(this)}></Alert>
				<Seek></Seek>
				<section id="recom">
				<Mous event={this.handleId.bind(this)}></Mous>
				<Manul famousId={this.state.famousId} ent={this}></Manul>
				
				</section>
				
			</div>
		)
	}

	handleClick(){
		this.setState({
			isShow:!this.state.isShow
		})
	}

	handleId(evt){
		this.setState({
			famousId:evt
		})
	}
}

export default Category;
