import "./index.scss";
import Nav from "./nav";
import InfiniteScroll from 'react-infinite-scroller';
import Alert from "../Category/alert-content.js";
import "../Category/index.scss";
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
			hasMore:true,
			name:'',
			isShow:false
		}
	}
	componentDidMount() {
		console.log(this.props.match.params.productID)
		this.setState({
			name:this.props.match.params.name
		})
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
			<div id="category">
			<div className="yintai-header">
			<NavLink to="/home" className="back-button" onClick={()=>{
				this.props.history.goBack();
			}}>＜</NavLink>
			<div className="hear-name">{this.state.name}</div>
			<div className="xiala r" onClick={this.handleClick.bind(this)}>
				<span>···</span>
				</div>		
			</div>
			<Alert isShow={this.state.isShow} event={this.handleClick.bind(this)}></Alert>
			<div id="product">
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
							<li key={index} onClick={()=>{
								this.props.history.push(`/details/${item.itemcode}`)
							}}>
								<img src={item.image} className="l"/>
								<div className="intro l">
									<p className="name">{item.name}</p>
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
	handleClick(){
		this.setState({
			isShow:!this.state.isShow
		})
	}
}

export default Product;