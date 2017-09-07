import React from "react";
import{
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	NavLink
} from 'react-router-dom';
class Liebiao extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			recommendlist1:[],
			recommendlist2:[],
			num:5
		}
	}

	componentDidMount() {
	    console.log(this.props.isId);
	    axios.get(`/api/recommend?type=${this.props.isId}`).then(res=>{
			console.log(res.data)
			this.setState({
				recommendlist1:res.data.data.activityinfo[0].activitylist
			})
				
		})

	}

	componentWillReceiveProps(nextProps) {
	    
	    this.setState({
	    	num:nextProps.isId
	    })
	    
	    	if(nextProps.isId===3){
				console.log(nextProps.isId)
	    		axios.get("/api/sales").then(res=>{
				// console.log(res.data.data.productlist)
				this.setState({
					recommendlist2:res.data.data.productlist
				})
				
			})
	    	}else{
	    		
	    		axios.get(`/api/recommend?type=${nextProps.isId}`).then(res=>{
					
				this.setState({
					recommendlist1:res.data.data.activityinfo[0].activitylist
				})
				
				})
	    	}
	    	
			

	    }

	render(){
		return <div>
		{
			this.state.num!==3?
			<div id="nowShow">
				<ul>
					{this.state.recommendlist1.map(item=>
							<li key={item.id} onClick={()=>{
								let that=this.props.event;
								that.props.history.push(`/product/${item.id}/${item.name}`)
							}}>
								<img src={item.imgurl}/>
								<p>{item.name}</p>
								<p className="discount">{item.discount}</p>

								</li>
						)}
				</ul>
			</div>
			:
			<div id="sale">
				<ul>
					{
						this.state.recommendlist2.map((item,index)=>
							<li key={index} onClick={()=>{
								let that=this.props.event;
								that.props.history.push(`/product/${item.itemcode}/${item.name}`)
							}}>
								<img src={item.image} className="l"/>
								<div className="intro">
									<p className="name">{item.name}</p>
									<p className="original_cost">¥{item.price}.00</p>
									<p className="current_price">¥{item.yt_price}.00</p>
								</div>
							</li>
							)
					}
				</ul>
			</div>	
		}
			
				
		</div>
	}
}


export default Liebiao;