import {NavLink} from "react-router-dom";
class Seek extends React.Component{
	constructor(prop){
		super(prop);
	}

	render(){
		return (
			<div id="headers">				
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
		)
	}
}

export default Seek