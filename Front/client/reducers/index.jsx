import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux'

import posts from './posts.jsx';
import users from './users.jsx'
import movies from './movies.jsx'

const rootReducer = combineReducers({movies,posts,users, routing: routerReducer})
export default rootReducer;