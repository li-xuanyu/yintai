import {NavLink} from "react-router-dom";
class Floor2 extends React.Component{
	constructor (prop){
		super(prop);
		this.state={
			floorlist2_head:[],
			floorlist2_content:[],
			floorlist2_content1:[]
		}
	}

	componentDidMount() {
	    axios.get("http://localhost:3000/api/home1").then(res=>{
	    	this.setState({
	    		floorlist2_head:res.data.data.templatelist[5].items,
	    		floorlist2_content:res.data.data.templatelist[6].items,
	    		floorlist2_content1:res.data.data.templatelist[7].items
	    	})
	    })
	}

	render(){
		return (
			<section className="floor2">
				<div className="head">
				{
					this.state.floorlist2_head.map(item=>
						<NavLink to={item.jumpurl} key={item.itemid}>
						<img src={item.imgurl}/>
						</NavLink>
					)
				}
				</div>
				<div className="content">
				{
					this.state.floorlist2_content.map(item=>
						<div className="img l" key={item.itemid}>
							<NavLink to={item.jumpurl}>
							<img src={item.imgurl}/>
							</NavLink>
						</div>
					)
				}
				{

					this.state.floorlist2_content1.map(item=>
						<div className="img l" key={item.itemid}>
							<NavLink to={item.jumpurl}>
							<img src={item.imgurl}/>
							</NavLink>
						</div>
					)
				}
				</div>
			</section>
		)
	}
}

export default Floor2;