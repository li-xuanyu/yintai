import Scroll from "react-scroll";
// import ScrollArea from 'react-scrollbar';
// 
// 
class GoTop extends Component{
	constructor(props) {
		super(props);
		
	}

	render() {

		var goStyle = {
			height: 'px2rem(35px)',
			width: 'px2rem(35px)',
			right: 'px2rem(10px)',
			bottom: 'px2rem(50px)',
			position: 'fixed',
			
		}
		var imgStyle = {
			display: 'block',
            background: 'url(https://r.ytrss.com/mobile/img/top.png) no-repeat',
            backgroundSize: '100% 100%',
            width: 'px2rem(35px)',
            height: 'px2rem(35px)'
		}
		return(
				<div className="gotop" style={goStyle} onClick={()=>{
					this.props.gotop()
				}}>
				<a href='javascript:;' style={imgStyle}></a>
				</div>
			)
	}


}


export default GoTop;