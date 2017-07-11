import {createStore, applyMiddleware,compose} from "redux";
import {syncHistoryWithStore} from "react-router-redux"
import {hashHistory} from "react-router"
import thunkMiddleware from 'redux-thunk'
import {createLogger} from 'redux-logger';

const loggerMiddleware = createLogger();

//import the root reducer
import rootReducer from "./reducers/index.jsx";
// import comments from './data/comments.js'
 //import posts from './data/index.jsx'

//create an objet for the deafult data

const deafaultState ={
	movies: {
	movies:	[],
	isFetching: false,
	movie:null,
	favorites:null,
	isLoged: false
	}
	


	
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, deafaultState, composeEnhancers(
	applyMiddleware(thunkMiddleware, loggerMiddleware,
		)));

export const history= syncHistoryWithStore(hashHistory, store)

export default store

