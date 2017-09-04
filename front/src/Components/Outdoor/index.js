//运动户外
import "./index.scss";

class Outdoor extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			brand:[],
			more:[],
			recommend:[]

		}
	}

	componentDidMount() {
	    axios.get("http://localhost:3000/api/outdoor").then(res=>{
	    	this.setState({
	    		brand:res.data.data.brand.brandrecommend,
	    		more:res.data.data.more.morerecommend,
	    		recommend:res.data.data.recommend.categoryrecommend
	    	})
	    	
	    })
	}

	render(){
		return(
			<div className="mous">
				<div className="recommends">
				<div className="area-title">
					<img src="https://r.ytrss.com/mobile/img/category-area-title@3x.png"/>
					<span className="lei">推荐类目</span>
				</div>
				{this.state.recommend.map(item=>
					<div className="category-item" key={item.categoryid}>
					<img src={item.imageurl}/>
					<a>{item.name}</a>
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
		)
	}
}

export default Outdoor;
