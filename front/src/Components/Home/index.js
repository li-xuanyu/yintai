//主页
import "./index.scss";
import ReactSwipe from 'react-swipe';
class Home extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			looplist:[]
		}
	}

	componentDidMount() {
		//ajax请求
		axios.get("http://localhost:3000/api/swipe").then(res=>{
			this.setState({
				looplist:res.data.data.bannerlist
			})
		})
	}

	render(){
		return(
			<div id="home">
				<ReactSwipe className="carousel" swipeOptions={{continuous:true,auto:2000,speed:1000}}
				key={this.state.looplist.length}
				>
				{
				this.state.looplist.map(item=>
				<img src={item.imgurl} key={item.id}/>
				)
				}
				</ReactSwipe>
			</div>	
		)
	}
}

export default Home;
