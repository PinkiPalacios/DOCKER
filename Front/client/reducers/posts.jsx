import { REQUEST_FETCH0, RECEIVE_FETCH0, FAILED_TO_FETCH0 } from '../actions/actionCreator.jsx';

function movie(state = {
  isFetching: false,
  movies: [],
  movie:null,
}, action) {
  switch (action.type) {
    case REQUEST_FETCH0:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case RECEIVE_FETCH0:
      return Object.assign({}, state, {
        isFetching: false,
        movie: action.movie,
      });
    case FAILED_TO_FETCH0:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.err,
      });
    default:
      return state;
  }
}


export default movie;