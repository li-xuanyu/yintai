//推荐
import{
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	NavLink
} from 'react-router-dom';
class Recommend extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			recommendlist:[]
		}
	}
componentDidMount() {
	//ajax请求
	axios.get("/api/recommend").then(res=>{
		this.setState({
			recommendlist:res.data.data.activityinfo[0].activitylist
		})
	})
}
	render(){
		return(
			<div id="nowShow">
				<ul>
					{this.state.recommendlist.map(item=>
						<NavLink to="/product">
							<li key={item.id}>
								<img src={item.imgurl}/>
								<p>{item.name}</p>
								<p className="discount">{item.discount}</p>

							</li>
						</NavLink>


						)}
				</ul>
			</div>	
		)
	}
}

export default Recommend;
