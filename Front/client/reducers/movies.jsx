import { REQUEST_FETCH, RECEIVE_FETCH, FAILED_TO_FETCH } from '../actions/actionCreator.jsx';

function movies(state = {
  isFetching: false,
  movies: [],
}, action) {
  switch (action.type) {
    case REQUEST_FETCH:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_FETCH:
      return Object.assign({}, state, {
        isFetching: false,
        movies: action.movie,
      });
    case FAILED_TO_FETCH:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.err,
      });
    default:
      return state;
  }
}


export default movies;


