import {NavLink} from "react-router-dom";
import ReactSwipe from 'react-swipe';
class Main extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			swiper:[],
			imgs:[]
		}
	}

	componentDidMount() {
	    axios.get("/api/address").then(res=>{
	    	this.setState({
				swiper:res.data.data.products[2].largeimgurls,
				imgs:res.data.data.products[2].superlargeimgurls
	    	})
	    })

	    window.onscroll=()=>{
	    	var gotop=document.querySelector(".gotop");
	    	document.body.scrollTop>1000?
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
							<span className="phone-desc">手机专享</span>
							<span className="phone-enjoy">比PC端省201.00元</span>
						</div>
					</div>
				</div>
				<div className="product-policy l">
					<a href="javascript:;" className="sale">
					<span>直降</span>9月促销
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
						<strong> VERSACE</strong>
						</span>
						<img src="https://p10.ytrss.com/brand/brandlist/brand-416.jpg" className="r"/>
					</a>
				</div>
				<div className="product-recommend l">
					<div className="title">
						<i></i>
						<span>为你推荐</span>
					</div>
					<div className="main">
						<div className="pm-slider">
							<ul className="pm-list">
								{
								// <ReactSwipe className="carousel" swipeOptions={{continuous:true,auto:3000,speed:1000}}
								// key={this.state.swiper2.length}
								// >
								// {
								// this.state.swiper.map(item=>
								// <NavLink to="" key={item} className="l">
								// 	<img src={item}/>
								// </NavLink>
								// )
								// }
								// </ReactSwipe>
							}
							</ul>
						</div>
					</div>
				</div>
				<div className="product-more l">
					<div className="more-title">
						<span className="more cursor">图文介绍</span>
					</div>
				</div>
				<div id="main" className="l">
					<div className="detail">
						<h2>商品图片
						<span>Pictures of goods</span>
						</h2>
						<div className="imgs">
							{
							this.state.imgs.map(item=>
								<img src={item} key={item}/>
							)
						}
						</div>
						<div className="yp-price">
							<h2>价格说明
								<span>Price Description</span>
							</h2>
							<p>银泰价：银泰价为商品的销售价，该价格是交易成交价，是您最终决定是否购买商品的依据。</p>
							<p>划线价：商品展示的划横线价格为参考价，该价格可能是品牌专柜标价、商品吊牌价或由品牌供应商提供的正品零售价（如厂商指导价、建议零售价等）或该商品在银泰网平台上曾经展示过的销售价；由于地区、时间的差异性和市场行情波动，品牌专柜标价、商品吊牌价等可能会与您购物时展示的不一致，该价格仅供您参考。</p>
							<p>折扣：银泰网上展示的折扣为银泰价与参考价的对比（该值四舍五入后采小数点后1位，如¥799/¥2899=0.2756=2.8折），该对比值仅供您参考，不作为结算基数。</p>
							<p>促销：商品促销信息以商品详情页“促销”栏中的信息为准；商品的具体售价以订单结算页价格为准；如您发现活动商品售价或促销信息有异常，建议购买前先联系银泰网客服进行咨询。</p>
						</div>
						<div className="yp-brand">
							<h2>品牌故事
								<span>Brand Story</span>
							</h2>
							<div className="info">
								<div className="info-img">
									<a href="javascript:;">
										<img src="https://p10.ytrss.com/Brand/416/logo.jpg"/>
									</a>
								</div>
								<div className="info-txt">
									<p className="name">VERSACE</p>
									<p className="fenge"></p>
									<p className="txt">来自意大利的知名品牌Versace（范思哲）创造了一个时尚的帝国，除时装外还经营香水、眼镜、丝巾、领带、内衣、包袋、皮件、床单、台布、瓷器、玻璃器皿、羽绒制品、家具产品等，Versace的时尚产品渗透了生活的每个领域。品牌鲜明的设计风格，独特的美感，极强的先锋艺术表征让它风靡全球。</p>
									<div>
										<img src="https://p10.ytrss.com/Brand/416/pp.jpg"/>
									</div>
								</div>
							</div>
						</div>
					</div>
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
				{

				}
				<div className="gotop" style={{display:"none"}} onClick={this.handleClick.bind(this)}>
				<a href='javascript:;'></a>
				</div>
			</footer>
			</div>
		)
	}

	handleClick(){
		document.body.scrollTop=0;
	}
}

export default Main