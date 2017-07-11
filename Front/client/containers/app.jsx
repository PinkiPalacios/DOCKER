import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreator from '../actions/actionCreator.jsx'
import Main from './main.jsx'

function mapStateToProps (state){
	return {
		movies: state.movies,
		users:state.users
	}
}

function mapDispatchToProps (dispatch){
	return bindActionCreators(actionCreator,dispatch)
}

const App= connect(mapStateToProps, mapDispatchToProps)(Main)

 export default App;