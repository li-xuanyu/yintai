import {NavLink} from 'react-router-dom';
class Funcarea extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			homelist2:[]
		}
	}

	componentDidMount() {
	    axios.get("/api/home1").then(res=>{
	    	this.setState({
	    		homelist2:res.data.data.templatelist[0].items
	    	})
	    })
	}

	render(){
		return (
				<section className="area">
				<div className="fiveimg" key={this.state.homelist2.length}>
					{
						this.state.homelist2.map(item=>
							<NavLink to={item.jumpurl} key={item.itemid} className="l">
								<img src={item.imgurl}/>
								<p>{item.imgname}</p>
							</NavLink>
						)
					}
				</div>
				</section>
		)
	}
}

export default Funcarea;