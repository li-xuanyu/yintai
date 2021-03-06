import {NavLink} from 'react-router-dom';
class Manul extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			brand:[],
			more:[],
			recommend:[]

		}
	}

	componentWillReceiveProps(newprop){
		console.log(newprop.famousId);
		let url=`/api/famous2?id=${newprop.famousId}`;
	    axios.get(url).then(res=>{
	    	this.setState({
	    		brand:res.data.data.brand.brandrecommend,
	    		more:res.data.data.more.morerecommend,
	    		recommend:res.data.data.recommend.categoryrecommend,
	    		
	    	});
	    	
	    })
	}

	componentDidMount() {
		
	    axios.get(`/api/famous2?id=${this.props.famousId}`).then(res=>{
	    	this.setState({
	    		brand:res.data.data.brand.brandrecommend,
	    		more:res.data.data.more.morerecommend,
	    		recommend:res.data.data.recommend.categoryrecommend
	    	})
	    })
	}

	render(){
		return(
			<div>
			<div className="mous">
				<div className="recommends">
				<div className="area-title">
					<img src="https://r.ytrss.com/mobile/img/category-area-title@3x.png"/>
					<span className="lei">推荐类目</span>
				</div>
				{this.state.recommend.map(item=>
					<div className="category-item" key={item.categoryid} onClick={()=>{
						let that=this.props.ent;
						that.props.history.push(`/product/26705/男装T恤`)
					}}>
					<img src={item.imageurl}/>
					<NavLink to="/details">{item.name}</NavLink>
					</div>
				)}
				</div>

				<div className="brands">
				<div className="area-title">
					<img src="https://r.ytrss.com/mobile/img/category-area-title@3x.png"/>
					<span className="pin">推荐品牌</span>
				</div>
				{this.state.brand.map(item=>
					<div className="category-item" key={item.categoryid}>
					<img src={item.imageurl}/>
					</div>
				)}
				</div>

				<div className="mores">
				<div className="area-title">
					<img src="https://r.ytrss.com/mobile/img/category-area-title@3x.png"/>
					<span className="pin">推荐品牌</span>
				</div>
				{this.state.more.map(item=>
					<div className="category-item" key={item.categoryid}>
					<a>{item.name}</a>
					</div>
				)}
				</div>

			</div>
		</div>
		)
	}


}

export default Manul;