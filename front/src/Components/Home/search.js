import {NavLink} from "react-router-dom";
class Search extends React.Component{
	constructor(prop){
		super(prop);
	}

	render(){
		return (
			<header>
				<div className="head">
					<div className="logo">
						<img src="https://r.ytrss.com/mobile/img/newlogo.png"/>
					</div>
					<div className="search">
						<div className="sea-min">
							<div className="sea-txt">
								<input type="text" placeholder="搜索商品or品牌" id="keyword" onChange={()=>{
									
								}}/>
								<span id="btn">
									<img src="https://r.ytrss.com/mobile/img/home-search.png"/>	
								</span>
							</div>
						</div>
					</div>
					<div className="user">
						<NavLink to="/mine">
						<img src="https://r.ytrss.com/mobile/img/home-user.png"/>
						</NavLink>
					</div>
				</div>
			</header>
		)
	}
}

export default Search