//特卖爆推
import "./index.scss";

class Specialsale extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			specialsale:[]
		}
	}
componentDidMount() {
	//ajax
	axios.get("http://localhost:3000/api/specialsale").then(res=>{
		this.setState({
			specialsale:res.data.data.productlist
		})
	})
}
	render(){
		return(
			<div id="sale">
				<ul>
					{
						this.state.specialsale.map(item=>
							<li key={item.itemcode}>
								<img src={item.image} className="l"/>
								<div className="intro">
									<p className="name">{item.name}</p>
									<p className="special">{item.promotionlist[0].name}</p>
									<p className="original_cost">¥{item.price}.00</p>
									<p className="current_price">¥{item.yt_price}.00</p>
								</div>
							</li>
							)
					}
				</ul>
			</div>	
		)
	}
}

export default Specialsale;
