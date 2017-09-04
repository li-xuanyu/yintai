//预告
import "./index.scss";

class Advance extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			advancelist:[]
		}
	}
componentDidMount() {
	//ajax
	axios.get("http://localhost:3000/api/advance").then(res=>{
		this.setState({
			advancelist:res.data.data.activityinfo[0].activitylist
		})
	})
	axios.get("http://localhost:3000/api/advance").then(res=>{
		this.setState({
			advancelist:[...this.state.advancelist,...res.data.data.activityinfo[1].activitylist]
		})
	})
}
	render(){
		return(
			<div id="advance">
				<ul>
					{	
						this.state.advancelist.map(item=>
							<li key={item.id}>
								<img src={item.imgurl}/>
								<p>{item.name}</p>
								<p className="discount">{item.discount}</p>
							</li>

							)
					}
				</ul>
			</div>	
		)
	}
}

export default Advance;
