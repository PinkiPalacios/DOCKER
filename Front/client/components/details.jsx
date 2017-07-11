import React from 'react'
import {Link} from 'react-router';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreator from '../actions/actionCreator.jsx'


function mapStateToProps (state){
	return {
		state: state,

	}
}

function mapDispatchToProps (dispatch){
	return bindActionCreators(actionCreator,dispatch)

}



class Detail extends React.Component {
	constructor(props){
		super(props)
		this.componentWillMount=this.componentWillMount.bind(this)
		this.favoritear=this.favoritear.bind(this)
	}

	componentWillMount (){
		console.log("ojoo", this.props.params.movieId)

		this.props.fetchPost0(this.props.params.movieId)	

	}

	favoritear (e){
		e.preventDefault()
		this.props.fetchFav(this.props.state.posts.movie)

	}

	render(){
		var peli= this.props.state.posts.movie
		console.log(this.props.state.posts.isFetching)
		if (this.props.state.posts.isFetching || !this.props.state.posts.movie){
			return (
				<div>loading</div>
				)
		}
		console.log(this)
		
		return (
			<div>
				<img src={peli.Poster}/>
				<h3>{peli.Title}</h3>
				<h3>{peli.Director}</h3>

				<button onClick={this.favoritear}>añadir a favoritos</button>
			</div>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Detail)


