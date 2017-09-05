 //购物车
import "./index.scss";
import Carthear from "./cart-hear";
import Clear from "./clear-cart";
import Rec from "./clear-rec";

class Cart extends React.Component{
	constructor(prop){
		super(prop);
	}

	render(){
		return(
			<div id="cart">
			<Carthear></Carthear>
			<Clear></Clear>
			</div>	
		)
	}
}

export default Cart;
