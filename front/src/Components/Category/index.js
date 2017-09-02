//分类
import "./index.scss";

class Category extends React.Component{
	constructor(prop){
		super(prop);
	}

	render(){
		return(
			<div id="category">
				category
				{this.props.children}
			</div>	
		)
	}
}

export default Category;
