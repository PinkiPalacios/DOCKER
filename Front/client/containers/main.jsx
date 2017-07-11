import React from 'react'
import {Link} from 'react-router'
import Choose from './choose.jsx'
import {history} from '../store.jsx'

class Main extends React.Component {
	constructor(props){
		super(props)
		this.logout=this.logout.bind(this)
		this.componentWillMount=this.componentWillMount.bind(this)
	}
	logout(e){
		e.preventDefault();
		this.props.fetchLogout();
		history.push('/')
	}
	componentWillMount(){
		this.props.fetchIsloged();
	}

	render(){
		console.log("eee",this)
		if (!this.props.users.isLoged){
			return (<Choose/>)
		}
		return (
		<div>
			<h1>
				<Link to='/'>OMDB</Link>
				<button onClick={this.logout}>Log Out</button>
				

			</h1>


			{this.props.children}
		</div>)
	}
}

export default Main