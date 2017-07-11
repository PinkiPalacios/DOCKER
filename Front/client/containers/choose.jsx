import React from 'react'
import {Link} from 'react-router'
import Login from '../components/login.jsx'
import Register from '../components/register.jsx'

class Choose extends React.Component {
	constructor(props){
		super(props)
	} 

	render (){
		console.log(this.props)
		return(
			<div>
			<h1>You are not loged in </h1>
			<button><Link to="/login">Log In</Link></button>
			<button><Link to="/register">Register</Link></button>
			</div>
		)
	}

}


export default Choose