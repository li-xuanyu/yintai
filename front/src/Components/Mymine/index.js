import "./index.scss"

class Mymine extends React.Component{
	constructor(prop){
		super(prop);
	}

	render(){
		return (
		<div className="viewport">
			<div className="user-information">
				<div className="user-img">
					<img src="https://h5.yintai.com/m/images/user-head-72656860b5.png"/>
				</div>
				<p className="user-name">1350000000</p>
				<p className="user-level">普卡会员</p>
			</div>
			<div className="user-order">
				<a href="" className="allorder">
					<span>
					<img src="https://h5.yintai.com/m/images/index/user-order-6554dcaada.png"/>
					全部订单
					</span>

				</a>
				<a href="" className="wait-pay">
					<span>
					<img src="https://h5.yintai.com/m/images/index/user-pay-f87d302e5e.png"/>
					代付款
					</span>
				</a>
				<a href="" className="wait-shouhuo">
					<span>
					<img src="https://h5.yintai.com/m/images/index/user-shouhuo-cd53963af4.png"/>
					待收货
					</span>
				</a>
				<a href="" className="wait-return">
					<span>
					<img src="https://h5.yintai.com/m/images/index/user-return-7b44cdea8c.png"/>
					退换货
					</span>
				</a>
			</div>	
			<div className="user-money">
				<a>
				<strong>0</strong>
				<span>积分</span>
				</a>
				<a>
				<strong>0.00</strong>
				<span>银元</span>
				</a>
				<a>
				<strong>0.00</strong>
				<span>余额</span>
				</a>
			</div>
			<div className="user-other">
				<a className="yt-uc-card">
					<img src="https://h5.yintai.com/m/images/index/user-center-img-3-47c1a8ce6f.png"/>
					<div className="user-center-catlog">
						<span className="yt-center-title">银泰卡</span>
						<span className="yt-center-val">以登记0张</span>
					</div>
				</a>
			</div>
		</div>
		)
	}
}

export default Mymine;