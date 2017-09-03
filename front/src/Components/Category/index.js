//分类
import "./index.scss";
import{
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	Link
} from 'react-router-dom';

import Hear from "./hear-name";
import Alert from "./alert-content";
class Category extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			isShow:false
		}
	}

	render(){
		return(
			<div id="category">
				<Hear event={this.handleClick.bind(this)}></Hear>
				<Alert isShow={this.state.isShow} event={this.handleClick.bind(this)}></Alert>
				<section>
				
				</section>
				
			</div>
			
		)
	}

	handleClick(){
		this.setState({
			isShow:!this.state.isShow
		})
	}
}

export default Category;