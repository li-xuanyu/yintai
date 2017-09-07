//详情
import {NavLink} from "react-router-dom";
import Alert from "../Category/alert-content.js";
import Main from "./main.js";
import "../Category/index.scss";
import "./index.scss";

class Dateils extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			details:[],
			isShow:false
		}
	}


	render(){
		return(
			<div id="category">
			<div className="yintai-header">
			<NavLink to="/home" className="back-button" onClick={()=>{
				this.props.history.goBack();
			}}>＜</NavLink>
			<div className="hear-name">商品详情</div>
			<div className="xiala r" onClick={this.handleClick.bind(this)}>
				<span>···</span>
				</div>		
			</div>
			<Alert isShow={this.state.isShow} event={this.handleClick.bind(this)}></Alert>
			<Main itemcode={this}></Main>

			<div id="product-module" className="l">
					<div className="cart l">
						<a href="javascript:;">
							<i></i>购物车
						</a>
					</div>
					<div className="other l">
						<span className="other-buy l" onClick={()=>{
							this.props.history.push(`/cart/${this.props.match.params.itemcode}`)
						}}>加入购物车</span>
						<span className="other-now l">立即购买</span>
					</div>
				</div>

			</div>	
		)
	}

	handleClick(){
		this.setState({
			isShow:!this.state.isShow
		})
	}
}

export default Dateils;
