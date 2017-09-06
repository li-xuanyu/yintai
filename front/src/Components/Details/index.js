//详情
import "./index.scss";
import Hear from "./date-hear";
import Alert from "./deta-alert";

class Dateils extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			details:[],
			isShow:false
		}
	}
	componentDidMount() {
	    axios.get("http://localhost:3000/api/details").then(res=>{
	    	console.log(res.data)
	    })
	}
	render(){
		return(
			<div id="details">
			<Hear event={this.handleClick.bind(this)}></Hear>
			<Alert isShow={this.state.isShow} event={this.handleClick.bind(this)}></Alert>
			
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
