import "./index.scss";

class App extends React.Component{
	constructor(prop){
		super(prop);
	}

	render(){
		return(
			<div id="app">
				{this.props.children}
			</div>	
		)
	}
}

export default App;
