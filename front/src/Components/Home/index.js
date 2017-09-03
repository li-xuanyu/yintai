//主页
import "./index.scss";
import Search from "./search";
import Swipe1 from "./swipe1";
import Nav from "./nav";
class Home extends React.Component{
	constructor(prop){
		super(prop);
	}
	render(){
		return(
			<div id="home">
				<Search></Search>
				<Swipe1></Swipe1>
				<Nav></Nav>
			</div>	
		)
	}
}

export default Home;
