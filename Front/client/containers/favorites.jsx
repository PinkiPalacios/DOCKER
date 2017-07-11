import React from 'react'
import  {Link} from 'react-router';

import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreator from '../actions/actionCreator.jsx'
import Movie from '../components/movie.jsx'
function mapStateToProps (state){
	return {
		users: state	
	}
}

function mapDispatchToProps (dispatch){
	return bindActionCreators(actionCreator,dispatch)
}


// 

class Favorites extends React.Component {
	constructor (props){
		super(props)
		this.componentWillMount=this.componentWillMount.bind(this)
	}

	componentWillMount(){

		this.props.fetchFav()
	}
	removeFav(movie, e){
		e.preventDefault();
		this.props.fetchUnfav();
	}


	render(){
		var arr = this.props.users.users.favorites;

		console.log(this.props)
		return (
			<div>
				{arr.map((movie, i) => {
					return(

						
						<div>
						<h2>{movie.Title}</h2>							
							<img src={movie.imgUrl}/>
						<h2>Añ0: {movie.Year}</h2>
						<h2>Director: {movie.Director}</h2>
						<br/>
						<br/>
						<button onClick={this.removeFav.bind(this, movie.ombdID)}>Quitar favorites</button>
						</div>
						)

				})}

			</div>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites)

