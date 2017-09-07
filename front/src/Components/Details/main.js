import {NavLink} from "react-router-dom";
import ReactSwipe from 'react-swipe';
class Main extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			swiper:[],
			imgs:[],
			details:[],
			special:[],
			promotion:[],
			brand:[]
		}
	}

	componentDidMount() {
		let url=this.props.itemcode;

	    axios.get(`/api/address?itemcode=${url.props.match.params.itemcode}`).then(res=>{
	    	this.setState({
	    		brand:res.data.data,
				swiper:res.data.data.products[0].largeimgurls,
				imgs:res.data.data.products[0].superlargeimgurls,
				details:res.data.data.products.slice(-1)[0],
				special:res.data.data.products.slice(-1)[0].promotions[0],
				promotion:res.data.data.products.slice(-1)[0].promotions[0].desc[0]
	    	})
	    	console.log(res.data.data);
	    })

	    window.onscroll=()=>{
	    	var gotop=document.querySelector(".gotop");
	    	document.body.scrollTop>500?
	    	gotop.style.display="block"
	    	:
	    	gotop.style.display="none"
	    }
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
								{this.state.details.name}
							</div>
						<span>
							<i className="sc">
							</i>
						</span>
					</div>
					<div className="product-p">
						<p className="sou l">￥
						<span className="price">{this.state.details.ytprice}.00</span>
						</p>
						<p className="shi l">￥<span className="marketprice">{this.state.details.marketprice}.00</span></p>
						<p className="sku r">商品编号：<span className="code">{this.state.details.itemcode}</span></p>
					</div>
					<div className="phone-price">
						<div className="enjoy">
							<span className="phone-desc">手机专享</span>
							<span className="phone-enjoy">比PC端省201.00元</span>
						</div>
					</div>
				</div>
				<div className="product-policy l">
					<a href="javascript:;" className="sale">
					<span>{this.state.special.name}</span>{this.state.promotion}
					</a>
				</div>
				<div className="product-tui l">
					<div></div>
				</div>
				<div className="product-check l">
					<span className="check-tit">已选：</span>
					<span className="check-txt">"黑色" "L"</span>
					<span className="check-num">
						<b>1</b>件
					</span>
				</div>
				<div className="product-move l">
					<div className="concise">
						<div className="color">
							<div className="word">颜色：</div>
							<div className="prop">
								<span className="curr">黑色</span>
							</div>
						</div>
						<div className="prodsize">
							<div className="word">
							尺码:
							<a href="/" className="r">尺码说明</a>
							</div>
							<div className="size">
								<span className="normal">XXL</span>
								<span className="normal">XL</span>
								<span className="normal forbid">L</span>
							</div>
						</div>
					</div>
					<div className="count">
						<div className="wenzi">数量：</div>
						<div className="dise">
							<span id="sub" className="jian"></span>
							<span id="val">1</span>
							<span id="add" className="jia"></span>
							<em id="tips" className="l">此商品库存不足</em>
						</div>
					</div>
				</div>
				<div className="product-brand l">
					<a>
						<span className="l">品牌 : 
						<strong> {this.state.brand.brandname}</strong>
						</span>
						<img src={this.state.brand.brandurl} className="r"/>
					</a>
				</div>
				<div className="product-recommend l">
					<div className="title">
						<i></i>
						<span>为你推荐</span>
					</div>
					<div className="main">
						<div className="pm-slider">
						</div>
					</div>
				</div>
				<div className="product-more l">
					<div className="more-title">
						<span className="more cursor">图文介绍</span>
					</div>
				</div>
				<div id="ht" className="l">
					<iframe src={this.state.brand.productparamsurl} style={{width:"100%",height:"4176px"}}></iframe>
				</div>
				<footer className="ft l">
				<div className="footer l">
					<div className="ftnav">
						<NavLink to="/" className="l">
							<strong>首页</strong>
						</NavLink>
						<NavLink to="/category" className="l">
							<strong>分类</strong>
						</NavLink>
						<NavLink to="/cart" className="l">
							<strong>购物车</strong>
						</NavLink>
						<NavLink to="/mine" className="l">
							<strong>我的</strong>
						</NavLink>
					</div>
					<div className="login l">
						<div className="l left">
							<NavLink to="/mine" className="bor">登录</NavLink>
							<NavLink to="/register">注册</NavLink>		
						</div>
						<div className="r right">
							<NavLink to="">客户端下载</NavLink>
						</div>
					</div>
				</div>
				<div className="contact l">
					<p>
						客服电话：
						<NavLink to="">400-119-1111</NavLink>
					   （8:00-24:00）
					</p>
					<p>浙ICP备10200233号</p>
				</div>
				<div className="gotop" style={{display:"none"}} onClick={()=>{
					var timer = setInterval(function(){
						if (document.body.scrollTop<=0) {
							clearInterval(timer)
						};
						document.body.scrollTop-=1000
					}, 100)
				}}>
				<a href='javascript:;'></a>
				</div>
			</footer>
			</div>
		)
	}
}

export default Main