import {NavLink} from "react-router-dom";
class Main extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			mainlist:[]
		}
	}

	componentDidMount() {
	    axios.get("http://localhost:3000/api/home2").then(res=>{
	    	this.setState({
	    		mainlist:res.data.data.templatelist.slice(9)
	    	})
		})
	}

	render(){
		return (
			<main className="main l">
				<div className="product">
						{
							this.state.mainlist.map(item=>
								<div key={item.items[0].itemid} className="pro-line">
									<div className="pro-one l">
										<div className="pro-img">
											<NavLink to={item.items[0].jumpurl}>
												<img src={item.items[0].imgurl}/>
											</NavLink>
										</div>
										<div className="pro-name">
											{item.items[0].extra.productdetail.name}
										</div>
										<div className="pro-price l">
											<span className="sell l">
												￥
												<b>{item.items[0].extra.productdetail.price}.00</b>
											</span>
											<span className="market l">
												￥
												<s>{item.items[0].extra.productdetail.marketprice}.00</s>
											</span>
										</div>
												{
													item.items[0].extra.productdetail.prmotionlist.length==0?
													null
													:
													<div className="pro-prom">
													{
													item.items[0].extra.productdetail.prmotionlist[0].plabel
													}
													</div>
												}
									</div>

									<div className="pro-one l">
										<div className="pro-img">
											<NavLink to={item.items[1].jumpurl}>
												<img src={item.items[1].imgurl}/>
											</NavLink>
										</div>
										<div className="pro-name">
											{item.items[1].extra.productdetail.name}
										</div>
										<div className="pro-price l">
											<span className="sell l">
												￥
												<b>{item.items[1].extra.productdetail.price}.00</b>
											</span>
											<span className="market l">
												￥
												<s>{item.items[1].extra.productdetail.marketprice}.00</s>
											</span>
										</div>
					
												{
													item.items[0].extra.productdetail.prmotionlist.length==0?
													null
													:
													<div className="pro-prom">
													{
													item.items[0].extra.productdetail.prmotionlist[0].plabel
													}
													</div>
												}
										
									</div>
								</div>
							)
						}
				</div>
			</main>
		)
	}
}

export default Main;