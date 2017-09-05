//最新
import "./index.scss";
import{
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	NavLink
} from 'react-router-dom';

class Newest extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			Newestlist:[]
		}
	}
componentDidMount() {
	//ajax请求
	axios.get("http://localhost:3000/api/newest").then(res=>{
		this.setState({
			Newestlist:res.data.data.activityinfo[0].activitylist
		})
	})
}
	render(){
		return(
			<div id="newest">
				<ul>
					{
						this.state.Newestlist.map(item=>
							<li key={item.id}>
								<img src={item.imgurl}/>
								<p>{item.name}</p>
								<p className="discount_new">{item.discount}</p>
							</li>
							)
					}
				</ul>
			</div>	
		)
	}
}

export default Newest;
