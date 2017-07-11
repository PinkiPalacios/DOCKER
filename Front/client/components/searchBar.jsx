import React from 'react'

class SearchBar extends React.Component {
	constructor (props){
		super(props)
		this.hanldeSubmit=this.hanldeSubmit.bind(this)


	}

	hanldeSubmit(e){
		e.preventDefault()
		var name= this.refs.input.value
		this.props.show(name)
		 

	}

	render (){
		console.log(this)

		return (
			<form>
				<input type='text' ref='input'></input>
				<input type='submit' onClick={this.hanldeSubmit.bind(this)}></input>
			</form>
			)
	}
}

export default SearchBar