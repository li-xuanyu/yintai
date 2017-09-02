import{
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	Link
} from 'react-router-dom'


//导入根组件
import App from "./Components/App";//根组件
import Home from "./Components/Home";//首页
import Limitbuy from "./Components/Limitbuy";//抢先
import Category from "./Components/Category";//分类
import Cart from "./Components/Cart";//购物车
import Mine from "./Components/Mine";//我的银泰
import Recommend from "./Components/Recommend";
import Newest from "./Components/Newest";
import Specialsale from "./Components/Specialsale";
import Countdown from "./Components/Countdown";
import Advance from "./Components/Advance";
import Famous from "./Components/Famous";
import Woman from "./Components/Woman";
import Man from "./Components/Man";
import Underwear from "./Components/Underwear";
import Cosmetics from "./Components/Cosmetics";
import Boot from "./Components/Boot";
import Bag from "./Components/Bag";
import Outdoor from "./Components/Outdoor";
import Jewelry from "./Components/Jewelry";
import Baby from "./Components/Baby";
import House from "./Components/House";

//用router包裹我们的根组件
const router=(
		<Router>
			<App>
				<Switch>
					<Route path="/home" component={Home}/>

					<Route path="/limitbuy" render={()=>
						<Limitbuy>
							<Switch>
								<Route path="/limitbuy/recommend" component={Recommend}/>//推荐
								<Route path="/limitbuy/newest" component={Newest}/>//最新
								<Route path="/limitbuy/specialsale" component={Specialsale}/>//特卖爆推
								<Route path="/limitbuy/countdown" component={Countdown}/>//倒计时
								<Route path="/limitbuy/advance" component={Advance}/>//预告
								<Redirect from="/limitbuy" to="/limitbuy/recommend"/>
							</Switch>
						</Limitbuy>
					}/>

					<Route path="/category" render={()=>
						<Category>
							<Switch>
								<Route path="/category/famous" component={Famous}/>//时尚名品
								<Route path="/category/woman" component={Woman}/>//潮流女装
								<Route path="/category/man" component={Man}/>//精品男装
								<Route path="/category/underwear" component={Underwear}/>//品质内衣
								<Route path="/category/cosmetics" component={Cosmetics}/>//护肤彩妆
								<Route path="/category/boot" component={Boot}/>//品质鞋靴
								<Route path="/category/bag" component={Bag}/>//时尚箱包
								<Route path="/category/outdoor" component={Outdoor}/>//运动户外
								<Route path="/category/jewelry" component={Jewelry}/>//珠宝饰品
								<Route path="/category/baby" component={Baby}/>//母婴精选
								<Route path="/category/house" component={House}/>//家居家纺
								<Redirect from="/category" to="/category/famous"/>
							</Switch>
						</Category>
					}/>

					<Route path="/cart" component={Cart}/>

					<Route path="/mine" component={Mine}/>
					<Redirect from="/" to="/home"/>
				</Switch>
			</App>
		</Router>
	)

export default router;