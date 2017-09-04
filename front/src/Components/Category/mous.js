//时尚名品
import {NavLink} from 'react-router-dom';
class Mous extends React.Component{
	constructor(prop){
		super(prop);
		
	}

	render(){
		return(
			<div className="famous">
				<ul className="famousul" >
					<li><NavLink to="/category/famous" activeClassName="famouslist">
						时尚名品
					</NavLink></li>
					<li><NavLink to="/category/woman" activeClassName="famouslist">
						潮流女装
					</NavLink></li>
					<li><NavLink to="/category/man" activeClassName="famouslist">
						精品男装
					</NavLink></li>
					<li><NavLink to="/category/underwear" activeClassName="famouslist">
						品质内衣
					</NavLink></li>
					<li><NavLink to="/category/cosmetics" activeClassName="famouslist">
						护肤彩妆
					</NavLink></li>
					<li><NavLink to="/category/boot" activeClassName="famouslist">
						品质鞋靴
					</NavLink></li>
					<li><NavLink to="/category/bag" activeClassName="famouslist">
						时尚箱包
					</NavLink></li>
					<li><NavLink to="/category/outdoor" activeClassName="famouslist">
						运动户外
					</NavLink></li>
					<li><NavLink to="/category/jewelry" activeClassName="famouslist">
						珠宝饰品
					</NavLink></li>
					<li><NavLink to="/category/baby" activeClassName="famouslist">
						母婴精选
					</NavLink></li>
					<li><NavLink to="/category/house" activeClassName="famouslist">
						家居家纺
					</NavLink></li>
				</ul>
			</div>	
		)
	}

	handleDiv(){

	}
}

export default Mous;
