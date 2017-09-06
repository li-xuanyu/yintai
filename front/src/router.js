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
import Passport from "./Components/Passport";
import Accont from "./Components/Accont";
import Register from "./Components/Register";
import Details from "./Components/Details";
import Sales from "./Components/Sales";
import Product from "./Components/Product";


//用router包裹我们的根组件
const router=(
		<Router>
			<App>
				<Switch>
					<Route path="/home" component={Home}/>
					<Route path="/limitbuy" component={Limitbuy}/>

					<Route path="/category" component={Category}/>
					<Route path="/register" component={Register}/>
					<Route path="/cart" component={Cart}/>
					<Route path="/details" component={Details}/>					
					<Route path="/product/:productID" component={Product}/>
					<Route path="/mine" render={()=>
						<Mine>
							<Switch>
								<Route path="/mine/passport" component={Passport}/>//银泰护照
								<Route path="/mine/accont" component={Accont}/>//银泰账号
								<Redirect from="/mine" to="/mine/passport"/>
							</Switch>
						</Mine>					
					}/>
					<Redirect from="/" to="/home"/>
				</Switch>
			</App>
		</Router>
	)

export default router;