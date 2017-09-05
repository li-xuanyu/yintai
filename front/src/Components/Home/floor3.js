import ReactSwipe from 'react-swipe';
import {NavLink} from "react-router-dom";
class Floor3 extends React.Component{
	constructor(prop){
		super(prop);
		this.state={
			headlist1:[],
			headlist2:[],
			headlist3:[],
			headlist4:[],
			headlist5:[],
			headlist6:[],
			headlist7:[],
			headlist8:[],
			headlist9:[],
			headlist10:[],
			headlist11:[],

			bannerlist6:[],
			bannerlist7:[],
			bannerlist11:[],
			bannerlist12:[],

			productlist1_top:[],
			productlist1_bottom:[],
			productlist2_top:[],
			productlist2_bottom:[],
			productlist3_top:[],
			productlist3_bottom:[],
			productlist4_top:[],
			productlist4_bottom:[],
			productlist5_top:[],
			productlist5_bottom:[],
			productlist6_top:[],
			productlist6_bottom:[],
			productlist7_top:[],
			productlist7_bottom:[],
			productlist8_top:[],
			productlist8_bottom:[],
			productlist9_top:[],
			productlist9_bottom:[],
			productlist10_top:[],
			productlist10_bottom:[],
			productlist11_top:[],
			productlist11_bottom:[]

		}
	}

	componentDidMount() {
	    axios.get("http://localhost:3000/api/home1").then(res=>{
	    	this.setState({
	    		headlist1:res.data.data.templatelist[10].items,
	    		productlist1_top:res.data.data.templatelist[11].items,
	    		productlist1_bottom:res.data.data.templatelist[12].items,
	    		headlist2:res.data.data.templatelist[14].items,
	    		productlist2_top:res.data.data.templatelist[15].items,
	    		productlist2_bottom:res.data.data.templatelist[16].items,
	    		headlist3:res.data.data.templatelist[18].items,
	    		productlist3_top:res.data.data.templatelist[19].items,
	    		productlist3_bottom:res.data.data.templatelist[20].items,
	    		headlist4:res.data.data.templatelist[22].items,
	    		productlist4_top:res.data.data.templatelist[23].items,
	    		productlist4_bottom:res.data.data.templatelist[24].items,
	    		headlist5:res.data.data.templatelist[26].items,
	    		productlist5_top:res.data.data.templatelist[27].items,
	    		productlist5_bottom:res.data.data.templatelist[28].items,
	    		headlist6:res.data.data.templatelist[30].items,
	    		productlist6_top:res.data.data.templatelist[31].items,
	    		productlist6_bottom:res.data.data.templatelist[32].items,
	    		bannerlist6:res.data.data.templatelist[33].items,
	    		headlist7:res.data.data.templatelist[35].items,
	    		productlist7_top:res.data.data.templatelist[36].items,
	    		productlist7_bottom:res.data.data.templatelist[37].items,
	    		bannerlist7:res.data.data.templatelist[38].items,
	    		headlist8:res.data.data.templatelist[39].items,
	    		productlist8_top:res.data.data.templatelist[40].items,
	    		productlist8_bottom:res.data.data.templatelist[41].items,
	    		headlist9:res.data.data.templatelist[43].items,
	    		productlist9_top:res.data.data.templatelist[44].items,
	    		productlist9_bottom:res.data.data.templatelist[45].items,
	    		headlist10:res.data.data.templatelist[47].items,
	    		productlist10_top:res.data.data.templatelist[48].items
	    	})
	    })
		
		axios.get("http://localhost:3000/api/home2").then(res=>{
			this.setState({
				productlist10_bottom:res.data.data.templatelist[0].items,
	    		headlist11:res.data.data.templatelist[1].items,
	    		productlist11_top:res.data.data.templatelist[2].items,
	    		productlist11_bottom:res.data.data.templatelist[3].items,
	    		bannerlist11:res.data.data.templatelist[4].items,
	    		bannerlist12:res.data.data.templatelist[7].items
	    	})
		})
	}

	render(){
		return (
			<section className="floor3 l">
				<div className="product one">
					<div className="head">
					{
						this.state.headlist1.map(item=>
							<NavLink to={item.jumpurl} key={item.itemid}>
							<img src={item.imgurl}/>
							</NavLink>
						)
					}
					</div>
					<div className="content l">
							<div className="top l">
							{
								this.state.productlist1_top.map(item=>
									<NavLink to={item.jumpurl} key={item.itemid}  className="l">
										<img src={item.imgurl}/>
									</NavLink>
								)
							}
							</div>
							<div className="bottom l">
							{
								this.state.productlist1_bottom.map(item=>
									<NavLink to={item.jumpurl} key={item.itemid}  className="l">
										<img src={item.imgurl}/>
									</NavLink>
								)
							}
							</div>
					</div>
				</div>

				<div className="product two">
					<div className="head">
					{
						this.state.headlist2.map(item=>
							<NavLink to={item.jumpurl} key={item.itemid}>
							<img src={item.imgurl}/>
							</NavLink>
						)
					}
					</div>
					<div className="content l">
							<div className="top l">
							{
								this.state.productlist2_top.map(item=>
									<NavLink to={item.jumpurl} key={item.itemid}>
										<img src={item.imgurl}/>
									</NavLink>
								)
							}
							</div>
							<div className="bottom l">
							{
								this.state.productlist2_bottom.map(item=>
									<NavLink to={item.jumpurl} key={item.itemid}  className="l">
										<img src={item.imgurl}/>
									</NavLink>
								)
							}
							</div>
					</div>
				</div>

				<div className="product three">
					<div className="head">
					{
						this.state.headlist3.map(item=>
							<NavLink to={item.jumpurl} key={item.itemid}>
							<img src={item.imgurl}/>
							</NavLink>
						)
					}
					</div>
					
					<div className="content l">
							<div className="top l">
							{
								this.state.productlist3_top.map(item=>
									<NavLink to={item.jumpurl} key={item.itemid} className="l">
										<img src={item.imgurl}/>
									</NavLink>
								)
							}
							</div>
							<div className="bottom l">
							{
								this.state.productlist3_bottom.map(item=>
									<NavLink to={item.jumpurl} key={item.itemid}  className="l">
										<img src={item.imgurl}/>
									</NavLink>
								)
							}
							</div>
					</div>
				</div>

				<div className="product four">
					<div className="head">
					{
						this.state.headlist4.map(item=>
							<NavLink to={item.jumpurl} key={item.itemid}>
							<img src={item.imgurl}/>
							</NavLink>
						)
					}
					</div>
						<div className="content l">
							<div className="top l">
							{
								this.state.productlist4_top.map(item=>
									<NavLink to={item.jumpurl} key={item.itemid} className="l">
										<img src={item.imgurl}/>
									</NavLink>
								)
							}
							</div>
							<div className="top l">
							{
								this.state.productlist4_bottom.map(item=>
									<NavLink to={item.jumpurl} key={item.itemid}  className="l">
										<img src={item.imgurl}/>
									</NavLink>
								)
							}
							</div>
					</div>
				</div>

				<div className="product five">
					<div className="head">
					{
						this.state.headlist5.map(item=>
							<NavLink to={item.jumpurl} key={item.itemid}>
							<img src={item.imgurl}/>
							</NavLink>
						)
					}
					</div>
					<div className="content l">
							<div className="top l">
							{
								this.state.productlist5_top.map(item=>
									<NavLink to={item.jumpurl} key={item.itemid}  className="l">
										<img src={item.imgurl}/>
									</NavLink>
								)
							}
							</div>
							<div className="bottom l">
							{
								this.state.productlist5_bottom.map(item=>
									<NavLink to={item.jumpurl} key={item.itemid}  className="l">
										<img src={item.imgurl}/>
									</NavLink>
								)
							}
							</div>
					</div>
				</div>

				<div className="product six">
					<div className="head">
					{
						this.state.headlist6.map(item=>
							<NavLink to={item.jumpurl} key={item.itemid}>
							<img src={item.imgurl}/>
							</NavLink>
						)
					}
					</div>
					<div className="content l">
							<div className="top l">
							{
								this.state.productlist6_top.map(item=>
									<NavLink to={item.jumpurl} key={item.itemid}>
										<img src={item.imgurl}/>
									</NavLink>
								)
							}
							</div>
							<div className="bottom l">
							{
								this.state.productlist6_bottom.map(item=>
									<NavLink to={item.jumpurl} key={item.itemid}  className="l">
										<img src={item.imgurl}/>
									</NavLink>
								)
							}
							</div>
							<div className="head l">
							<ReactSwipe className="carousel" swipeOptions={{continuous:true,auto:2000,speed:1000}}
							key={this.state.bannerlist6.length}
							>
							{
							this.state.bannerlist6.map(item=>
							<NavLink to={item.jumpurl} key={item.itemid} className="l">
							<img src={item.imgurl}/>
							</NavLink>
							)
							}
							</ReactSwipe>
							</div>
					</div>
				</div>

				<div className="product seven">
					<div className="head">
					{
						this.state.headlist7.map(item=>
							<NavLink to={item.jumpurl} key={item.itemid}>
							<img src={item.imgurl}/>
							</NavLink>
						)
					}
					</div>
					<div className="content l">
							<div className="top l">
							{
								this.state.productlist7_top.map(item=>
									<NavLink to={item.jumpurl} key={item.itemid}  className="l">
										<img src={item.imgurl}/>
									</NavLink>
								)
							}
							</div>
							<div className="bottom l">
							{
								this.state.productlist7_bottom.map(item=>
									<NavLink to={item.jumpurl} key={item.itemid}  className="l">
										<img src={item.imgurl}/>
									</NavLink>
								)
							}
							</div>
							<div className="head">
							{
							this.state.bannerlist7.map(item=>
							<NavLink to={item.jumpurl} key={item.itemid} className="l">
							<img src={item.imgurl}/>
							</NavLink>
							)
							}
							</div>
					</div>
				</div>

				<div className="product eight">
					<div className="head">
					{
						this.state.headlist8.map(item=>
							<NavLink to={item.jumpurl} key={item.itemid}>
							<img src={item.imgurl}/>
							</NavLink>
						)
					}
					</div>
					<div className="content l">
							<div className="top l">
							{
								this.state.productlist8_top.map(item=>
									<NavLink to={item.jumpurl} key={item.itemid}>
										<img src={item.imgurl}/>
									</NavLink>
								)
							}
							</div>
							<div className="bottom l">
							{
								this.state.productlist8_bottom.map(item=>
									<NavLink to={item.jumpurl} key={item.itemid}  className="l">
										<img src={item.imgurl}/>
									</NavLink>
								)
							}
							</div>
					</div>
				</div>

				<div className="product nine">
					<div className="head">
					{
						this.state.headlist9.map(item=>
							<NavLink to={item.jumpurl} key={item.itemid}>
							<img src={item.imgurl}/>
							</NavLink>
						)
					}
					</div>
					<div className="content l">
							<div className="top l">
							{
								this.state.productlist9_top.map(item=>
									<NavLink to={item.jumpurl} key={item.itemid}  className="l">
										<img src={item.imgurl}/>
									</NavLink>
								)
							}
							</div>
							<div className="bottom l">
							{
								this.state.productlist9_bottom.map(item=>
									<NavLink to={item.jumpurl} key={item.itemid}  className="l">
										<img src={item.imgurl}/>
									</NavLink>
								)
							}
							</div>
					</div>
				</div>

				<div className="product ten">
					<div className="head">
					{
						this.state.headlist10.map(item=>
							<NavLink to={item.jumpurl} key={item.itemid}>
							<img src={item.imgurl}/>
							</NavLink>
						)
					}
					</div>
					<div className="content l">
							<div className="top l">
							{
								this.state.productlist10_top.map(item=>
									<NavLink to={item.jumpurl} key={item.itemid}>
										<img src={item.imgurl}/>
									</NavLink>
								)
							}
							</div>
							<div className="bottom l">
							{
								this.state.productlist10_bottom.map(item=>
									<NavLink to={item.jumpurl} key={item.itemid}  className="l">
										<img src={item.imgurl}/>
									</NavLink>
								)
							}
							</div>
					</div>
				</div>

				<div className="product eleven">
					<div className="head">
					{
						this.state.headlist11.map(item=>
							<NavLink to={item.jumpurl} key={item.itemid}>
							<img src={item.imgurl}/>
							</NavLink>
						)
					}
					</div>
					<div className="content l">
							<div className="top l">
							{
								this.state.productlist11_top.map(item=>
									<NavLink to={item.jumpurl} key={item.itemid}  className="l">
										<img src={item.imgurl}/>
									</NavLink>
								)
							}
							</div>
							<div className="bottom l">
							{
								this.state.productlist11_bottom.map(item=>
									<NavLink to={item.jumpurl} key={item.itemid}  className="l">
										<img src={item.imgurl}/>
									</NavLink>
								)
							}
							</div>
							<div className="bottom">
							{
							this.state.bannerlist11.map(item=>
							<NavLink to={item.jumpurl} key={item.itemid} className="l">
							<img src={item.imgurl}/>
							</NavLink>
							)
							}
							</div>
							<div className="head">
							{
							this.state.bannerlist12.map(item=>
							<NavLink to={item.jumpurl} key={item.itemid} className="l">
							<img src={item.imgurl}/>
							</NavLink>
							)
							}
							</div>
					</div>
				</div>
			</section>
		)
	}
}

export default Floor3;