import React from 'react'
import {Link} from 'react-router';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import * as actionCreator from '../actions/actionCreator.jsx'

import Movie from '../components/movie.jsx'


function mapStateToProps (state){
	return {
		movies: state,

	}
}

function mapDispatchToProps (dispatch){
	return bindActionCreators(actionCreator,dispatch)
}

//import SearchBar from '../components/searchBar.jsx'

class SearchContainer extends React.Component {
	constructor(props){
		super(props)
		
		
	}



	render (){
		var arr=this.props.movies.movies.movies.Search;
		if(this.props.movies.movies.isFetching){
			return (
				<div>
					  
				</div>
			)}
		if (arr){
			return (<div>
				{arr.map((movie, i) => <Movie key={i} i={i} movie={movie} />)}
			</div>)}

		return (<div></div>)


	}
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)

