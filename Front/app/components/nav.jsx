var React = require('react')
var Link = require('react-router').Link

class Nav extends React.Component{

	render(){

		var estiloUL= {
    "listStyleType": "none",
    "margin": "0",
    "padding": "0",
    "overflow": "hidden",
    "backgroundColor": "#333"
  }

  var estiloLI= {
    "float": "left"
  }

  var estiloLink={
    "display": "block",
    "color": "white",
    "textAlign": "center",
    "padding": "14px 16px",
    "textDecoration": "none"
  }
		return (
		<ul style={estiloUL}>
		<li style={estiloLI}><Link style={estiloLink} to="/cronometer">Cronometer</Link></li>
		<li style={estiloLI}><Link style={estiloLink} to="/countdown">Countdown</Link></li>
		</ul>)
	}
}
module.exports=Nav