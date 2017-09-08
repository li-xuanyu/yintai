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
					<i></i>
					全部订单
					</span>
				</a>
				<a href="" className="allorder">
					<span>
					<i></i>
					代付款
					</span>
				</a>
				<a href="" className="allorder">
					<span>
					<i></i>
					待收货
					</span>
				</a>
				<a href="" className="allorder">
					<span>
					<i></i>
					退换货
					</span>
				</a>
			</div>
		</div>
		)
	}
}

export default Mymine;