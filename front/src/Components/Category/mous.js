//时尚名品
import {NavLink} from 'react-router-dom';
class Mous extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			famouslist:[]
		}
		
	}

	componentDidMount() {
	    axios.get("http://localhost:3000/api/famous1").then(res=>{
	    	this.setState({
	    		famouslist:res.data.data.data
	    	})

	    })
	}

	render(){
		return(
			<div className="famous">
				<ul className="famousul" onClick={()=>{
					console.log(this.state.famousId)
				}}>
					{this.state.famouslist.map(item=>

					<li key={item.id} onClick={()=>{
						//切换页面  
						this.setState({
							famousId:item.id
						})

					}}><NavLink to="/category" activeClassName="famouslist">{item.name}</NavLink></li>

					)}
				</ul>
				</div>
		)
	}


}

export default Mous;
