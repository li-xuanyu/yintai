import "./index.scss";
import Nav from "./nav";
import Header from "./header";
import InfiniteScroll from 'react-infinite-scroller';
import{
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	NavLink
} from 'react-router-dom';
class Product extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			defaultlist:[],
			currentPage:1,
			page_count:0,
			hasMore:true
		}
	}
	componentDidMount() {
		console.log(this.props.match.params.productID)
		axios.get(`/api/discount?page_index=${this.state.currentPage}&bargainid=${this.props.match.params.productID}`).then(res=>{
		
		this.setState({
			defaultlist:res.data.data.product_list,
			page_count:res.data.data.page_count
		})
		// console.log(this.state.page_count);
	})
	}
	render(){
		return(
			<div id="product">
				<header>
				<span className="l" onClick={()=>{
					this.props.history.goBack()
				}}>＜</span>
				<span className="middle">优家美妆工具</span>
				<span className="r">...</span>
			</header>
				<Nav></Nav>
				<section>
					<div id="default">
				<ul>
					<InfiniteScroll
				    pageStart={0}
				    initialLoad={false}
				    loadMore={this.kerwinloadMore.bind(this)}
				    hasMore={this.state.hasMore}
				    loader={<div className="kerwinloader">组件自带的正在加载中....</div>}
				>
					{
						this.state.defaultlist.map((item,index)=>
							<li key={index}>
								<img src={item.image} className="l"/>
								<div className="intro l">
									<p className="name">{item.name}</p>
									<p className="special">{item.promotionlist[0].name}</p>
									<p className="original_cost">짜{item.price}.00</p>
									<p className="current_price">짜{item.promotion_price}.00</p>
								</div>
							</li>
							)
					}
					</InfiniteScroll>
				</ul>
			</div>
				</section>
			</div>	
		)
	}
	kerwinloadMore(){
		// console.log(111)
		this.state.currentPage++;
		if(this.state.currentPage>this.state.page_count){
			this.setState({
				hasMore:false
			})
			// console.log("gg")
			return;
		}
		axios.get(`/api/discount?page_index=${this.state.currentPage}&bargainid=${this.props.match.params.productID}`).then(res=>{
			this.setState({
				defaultlist:[...this.state.defaultlist,...res.data.data.product_list]
			})
		})
	}
}

export default Product;