import ReactSwipe from 'react-swipe';
import {NavLink} from 'react-router-dom';
class Swipe2 extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			swipelist2:[]
		}
	}

	componentDidMount() {
	    axios.get("/api/home1").then(res=>{
	    	this.setState({
	    		swipelist2:res.data.data.templatelist[8].items
	    	})
	    })
	}

	render(){
		return (
			<div className="swipe2">
				<ReactSwipe className="carousel" swipeOptions={{continuous:true,auto:2000,speed:1000}}
				key={this.state.swipelist2.length}
				>
				{
				this.state.swipelist2.map(item=>
				<NavLink to={item.jumpurl} key={item.itemid}>	
				<img src={item.imgurl}/>
				</NavLink>
				)
				}
				</ReactSwipe>
				</div>
		)
	}
}

export default Swipe2;