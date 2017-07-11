var React = require('react')



class Boton extends React.Component{
	constructor(props){
		super(props)
		//this.render=this.render.bind(this)
		//console.log(this.props.clima)
		


	}
	// valores(e){
	// 	e.preventDefault()
	// 	var pais=this.refs.pais.value
	// 	console.log("ddff")
	// 	this.props.search(pais)
	// }

	render(){
		var stilo= {
    "backgroundColor": "white",
    "color": "black",
    "border": "2px solid black",
    "height": "36px",
    "width": "60px",
    "margin": "25px",
     "border-radius": '10px',

  }
		return (
			<div>

			<button style={stilo} onClick={this.props.func}>{this.props.text}</button>
			<button style={stilo} onClick={this.props.restart}>Restart</button>
		

			</div>
      
    )
	}
}

module.exports= Boton