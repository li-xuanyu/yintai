//倒计时
import "./index.scss";
import{
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	NavLink
} from 'react-router-dom';
class Countdown extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			countdownlist:[]
		}
	}
componentDidMount() {
	axios.get("http://localhost:3000/api/countdown").then(res=>{
		this.setState({
			countdownlist:res.data.data.activityinfo[0].activitylist
		})
	})
}
	render(){
		return(
			<div id="countdown">
				<ul>
					{
						this.state.countdownlist.map(item=>
							<li key={item.id}>
								<img src={item.imgurl}/>
								<p className="intro">{item.name}</p>
								<p className="sale">{item.discount}</p>
							</li>
							)
					}
				</ul>
				<div className="bot">
					<ul>
						<li><NavLink to="/home">首页</NavLink></li>
						<li><NavLink to="/category">分类</NavLink></li>
						<li><NavLink to="/cart">购物车</NavLink></li>
						<li><NavLink to="/mine">我的</NavLink></li>
					</ul>
					<p className="register"> 
						<span className="l"><NavLink to="/mine">登陆 | 注册</NavLink></span>
						<span className="r customer">客户端下载</span>
					</p>
					<p className="tel">
						客服电话
						<a href="#">400-119-1111</a>
						(8:00——24:00)
					</p>
					<p className="address">浙ICP备10200233号</p>
				</div>
			</div>	
		)
	}
}

export default Countdown;
