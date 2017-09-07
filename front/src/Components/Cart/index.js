 //购物车
import "./index.scss";
import Carthear from "./cart-hear";
import Clear from "./clear-cart";

class Cart extends React.Component{
	constructor(prop){
		super(prop);
	}

	render(){
		return(
			<div id="cart">
			<Carthear cart={this}></Carthear>
			<Clear cartID={this}></Clear>
			</div>	
		)
	}
}

export default Cart;
