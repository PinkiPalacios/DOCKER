import React from "react"
import {Link} from 'react-router';

class Movie extends React.Component {
	constructor(props){
		super(props)
	}

	render(){
		
		return (
			<div>
				<Link to={`/movie/${this.props.movie.imdbID}`}>{this.props.movie.Title} {this.props.movie.Type} {this.props.movie.Year} </Link>
			</div>
			)
	}
}

export default Movie