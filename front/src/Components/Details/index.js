//详情
import "./index.scss";

class Dateils extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			address:[]
		}
	}
	componentDidMount() {
	    // axios.get("http://localhost:3000/api/address").then(res=>{
	    // 	console.log(res.data)
	    // })
	}
	render(){
		return(
			<div id="details">
				Dateils
				{this.props.children}
			</div>	
		)
	}
}

export default Dateils;
