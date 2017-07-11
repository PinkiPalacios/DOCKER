var React = require('react')



class Input extends React.Component{
	constructor(props){
		super(props)
		this.valores = this.valores.bind(this)


	}
	valores(e){
		e.preventDefault()
		var numero= this.refs.numero.value
		
		this.props.set(numero)
	}

	render(){
		return (
      <form >
      	
        <input type="text" ref='numero'></input>
        <button  onClick={this.valores.bind(this)} type="submit">Set</button>

      </form>
    )
	}
}

module.exports= Input