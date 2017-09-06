import {NavLink} from "react-router-dom";
import ReactSwipe from 'react-swipe';
class Main extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			swiper:[]
		}
	}

	componentDidMount() {
	    axios.get("/api/address").then(res=>{
	    	console.log(res.data)
	    	this.setState({
				swiper:res.data.data.products[2].largeimgurls
	    	})
	    		
	    })
	}

	render(){
		return (
			<div id="detail">
				<div className="slider l">
					<div className="swipe">
					<ReactSwipe className="carousel" swipeOptions={{continuous:true,auto:3000,speed:1000}}
					key={this.state.swiper.length}
					>
					{
					this.state.swiper.map(item=>
					<NavLink to="" key={item} className="l">
					<img src={item}/>
					</NavLink>
					)
					}
					</ReactSwipe>
					</div>
				</div>
				<div className="product-info l">
					<div className="product-h">
						<div id="product-name">
							【新品】【自营】VERSACE范思哲黑色棉氨材质美杜莎头像装饰男士短袖T恤, AUU01005 Black MAN T-Shirt 3
						</div>
						<span>
							<i className="sc">
							</i>
						</span>
					</div>
					<div className="product-p">
						<p className="sou l">￥<span className="price">299.00</span></p>
						<p className="shi l">￥<span className="marketprice">700.00</span></p>
						<p className="sku r">商品编号：<span className="code">21-458-8119</span></p>
					</div>
					<div className="phone-price">
						<div className="enjoy">
							<span className="phone-desc"></span>
							<span className="phone-enjoy"></span>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

export default Main