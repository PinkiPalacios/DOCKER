import React from 'react'
import {Link} from 'react-router';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'

import SearchBar from '../components/searchBar.jsx'
import SearchContainer from './searchContainer.jsx' 

import * as actionCreator from '../actions/actionCreator.jsx'

function mapStateToProps (state){
	return {
		movies: state.movies	
	}
}

function mapDispatchToProps (dispatch){
	return bindActionCreators(actionCreator,dispatch)
}



class Home extends React.Component {
constructor(props){
		super(props)
		this.showList=this.showList.bind(this)

	}

	showList(data){
		this.props.fetchPost(data)	
		
	}

	render (){
		console.log("aaa",this)

		return (
			<div>
				<h1><Link to='/favorites'>Ver Favoritos</Link></h1>
				<SearchBar show={this.showList}></SearchBar>
				<SearchContainer  />
				
			</div>
			)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)