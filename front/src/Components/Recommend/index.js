//推荐
import "./index.scss";

class Recommend extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			recommendlist:[]
		}
	}
componentDidMount() {
	//ajax请求
	axios.get("http://localhost:3000/api/recommend").then(res=>{
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

export default Recommend;
