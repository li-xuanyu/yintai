import "./index.scss";
import{
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
	NavLink
} from 'react-router-dom';
class Default extends React.Component{
	constructor(prop){
		super(prop);
	}

	render(){
		return(
			<div id="default">
				111
			</div>	
		)
	}
}

export default Default;
