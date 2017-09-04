//主页
import "./index.scss";
import Search from "./search";
import Swipe1 from "./swipe1";
import Swipe2 from "./swipe2";
import Funcarea from "./func";
import Floor1 from "./floor1";
import Floor2 from "./floor2";
import Floor3 from "./floor3";
import Main from "./main";
import Footer from "./footer";
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
				<Funcarea></Funcarea>
				<Floor1></Floor1>
				<Floor2></Floor2>
				<Swipe2></Swipe2>
				<Floor3></Floor3>
				<Main></Main>
				<Footer></Footer>
				<Nav></Nav>
			</div>	
		)
	}
}

export default Home;
