import{attemptRegister,fetchRegister,attemptLogIn,loginResponse,fetchLogin} from '../actions/actionCreator.jsx'; 


function users(state = {
  isFetching: false,
  favorites:[],
  isLoged:false
}, action) {
  switch (action.type) {
    case "ATTEMPT_REGISTER":
      return Object.assign({}, state, {
        isFetching: true,
      });
      case "ATTEMPT_LOGIN":
      return Object.assign({}, state, {
        isFetching: true,
      });
    case "LOGOUT_RESPONSE":
      return Object.assign({}, state, {
        isFetching: false,
        isLoged: false,
        username: null
      });

      case "ISLOGED_RESPONSE":
      return Object.assign({}, state, {
        isFetching: false,
        isLoged: action.isLoged.isLoged,
        username: null
      });

      case "LOGIN_RESPONSE":
      return Object.assign({}, state, {
        isFetching: false,
        isLoged: true,
        username: action.user.username
      });
      //________________________
    case "REQUEST_FAV":
      return Object.assign({}, state, {
        isFetching: true,
      });
    case "FAV_RESPONSE":
      return Object.assign({}, state, {
        isFetching: false,
        favorites:action.favorites,
        
    });
      //________________
    case "FAILED_TO_FETCH":
      return Object.assign({}, state, {
        isFetching: false,
        error: action.err,
        isLoged: false,
      });
    default:
      return state;
  }
}


export default users;