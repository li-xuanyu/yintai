//åˆ†ç±»
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
			famousId:88
		}
	}

	componentDidMount() {
	    axios.get("/api/famous1").then(res=>{
	    	this.setState({
	    		famouslist:res.data.data.data
	    	})
	    })
	}


	render(){
		return(
			<div id="category">
				<Hear event={this.handleClick.bind(this)}></Hear>
				<Alert isShow={this.state.isShow} event={this.handleClick.bind(this)}></Alert>
				<Seek></Seek>
				<section id="recom">
				<div className="famous">
				<ul className="famousul">
					{this.state.famouslist.map(item=>

					<li key={item.id} onClick={()=>{
						//ÇÐ»»Ò³Ãæ  
						this.setState({
							famousId:item.id
						})
						// console.log(item.id)
					}} className={this.state.famousId==item.id?"famouslist":""}>{item.name}</li>

					)}
				</ul>
				</div>
				<Manul famousId={this.state.famousId}></Manul>	
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
