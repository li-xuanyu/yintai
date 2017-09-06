import ReactSwipe from 'react-swipe';
import {NavLink} from 'react-router-dom';
class Swipe1 extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			homelist1:[]
		}
	}

	componentDidMount() {
		//ajax请求
		axios.get("/api/home1").then(res=>{
			this.setState({
				homelist1:res.data.data.bannerlist
			})
		})
	}

	render(){
		return (
				<div className="swipe1">
				<ReactSwipe className="carousel" swipeOptions={{continuous:true,auto:2000,speed:1000}}
				key={this.state.homelist1.length}
				>
				{
				this.state.homelist1.map(item=>
				<NavLink to={item.jumpurl} key={item.id}>	
				<img src={item.imgurl}/>
				</NavLink>
				)
				}
				</ReactSwipe>
				</div>
			)
	}
}

export default Swipe1;