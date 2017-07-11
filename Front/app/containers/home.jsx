var React = require('react')
var Nav= require("../components/nav.jsx")
class Home extends React.Component{

	render(){
		
		return (
		<div>
		<Nav></Nav>
		{this.props.children}	
		</div>)
	}
}

module.exports=Home