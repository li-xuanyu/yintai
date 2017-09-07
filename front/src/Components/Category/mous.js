//时尚名品
import {NavLink} from 'react-router-dom';
class Mous extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			famouslist:[],
			famousName:88
		}
		
	}

	componentDidMount() {
	    axios.get("/api/famous1").then(res=>{
	    	this.setState({
	    		famouslist:res.data.data.data
	    	})

	    })
	}

	render(){
		return(
			<div className="famous">
				<ul className="famousul">
					{this.state.famouslist.map(item=>

					<li key={item.id} onClick={()=>{
						//切换页面  
						this.props.event(item.id);
						this.setState({
							famousName:item.id
						})
						// console.log(item.id)
					}} className={this.state.famousName==item.id?"famouslist":""}>{item.name}</li>

					)}
				</ul>
				</div>
		)
	}


}

export default Mous;
