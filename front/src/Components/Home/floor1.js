import {NavLink} from "react-router-dom";
class Floor1 extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			homelist3:[],
			homelist4:[]
		}
	}

	componentDidMount() {
	    axios.get("http://localhost:3000/api/home1").then(res=>{
	    	this.setState({
	    		homelist3:res.data.data.templatelist[2].items,
	    		homelist4:res.data.data.templatelist[3].items
	    	})
	    })
	}

	render(){
		return (
			<section className="floor1">
				<div className="head">
				{
					this.state.homelist3.map(item=>
						<NavLink to={item.jumpurl} key={item.itemid}>
						<img src={item.imgurl}/>
						</NavLink>
					)
				}
				</div>
				<div className="content">
						{
							this.state.homelist4.map(item=>
								<div className="pro-one l" key={item.itemid}>
									<div className="pro-img">
										<NavLink to={item.jumpurl}>
											<img src={item.imgurl}/>
										</NavLink>
									</div>
									<div className="pro-name">
										{item.extra.productdetail.name}
									</div>
									<div className="pro-price">
										<span className="sell">
											￥<b>{item.extra.productdetail.price}.00</b>
										</span>
									</div>
									{
										item.extra.productdetail.prmotionlist.length==0?
										null
										:
										<div className="pro-prom">
										{
										item.extra.productdetail.prmotionlist[0].plabel
										}
										</div>
									}
								</div>
							)
						}
				</div>
			</section>
		)
	}
}

export default Floor1;