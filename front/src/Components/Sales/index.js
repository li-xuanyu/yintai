import "./index.scss";
import{
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	NavLink
} from 'react-router-dom';
class Sales extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			saleslist:[]
		}
	}

componentDidMount() {
	axios.get("http://localhost:3000/api/sales").then(res=>{
		this.setState({
			saleslist:res.data.data.product_list
		})
	})
}
	render(){
		return(
			<div id="default">
				<ul>
					{
						this.state.saleslist.map(item=>
							<li key={item.itemcode}>
								<img src={item.image} className="l"/>
								<div className="intro l">
									<p className="name">{item.name}</p>
									<p className="special">{item.promotionlist[0].name}</p>
									<p className="original_cost">￥{item.price}.00</p>
									<p className="current_price">￥{item.promotion_price}.00</p>
								</div>
							</li>
						)
					}
				</ul>
			</div>	
		)
	}
}

export default Sales;
