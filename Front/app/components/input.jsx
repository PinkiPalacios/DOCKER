var React = require('react')



class Clock extends React.Component{
	constructor(props){
		super(props)
		


	}
	

	render(){
		return (
     <div><h1 >{this.props.min} :  {this.props.sec} </h1> 	</div>
    )
	}
}

module.exports= Clock
//ReactDOM.render(<input />, document.getElementById('pagina'));

