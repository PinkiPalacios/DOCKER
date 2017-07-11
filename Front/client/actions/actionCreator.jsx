import fetch from 'isomorphic-fetch';

export const REQUEST_FETCH0 = 'REQUEST_FETCH0';

export function requestFetch0(isFetching) {
  return {
    type: REQUEST_FETCH0,
    isFetching
  };
}

export const RECEIVE_FETCH0 = 'RECEIVE_FETCH0';

export function receiveFetch0(movie, isFetching) {
  return {
    type: RECEIVE_FETCH0,
    movie,
    isFetching,
  };
}

export const FAILED_TO_FETCH0 = 'FAILED_TO_FETCH0';

export function failedToFetch0(err) {
  return {
    type: FAILED_TO_FETCH0,
    err,
  };
}

export function fetchPost0(id) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return (dispatch) => {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestFetch0(true));

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`http://www.omdbapi.com/?apikey=20dac387&i=${id}`)
      .then(response => response.json())
      .then(data => dispatch(receiveFetch0(data, false)))
      .catch(err => dispatch(failedToFetch0(err)));
      // In a real world app, you also want to
      // catch any error in the network call.
  };
}
//______________


export const REQUEST_FETCH = 'REQUEST_FETCH';

export function requestFetch(isFetching) {
  return {
    type: REQUEST_FETCH,
    isFetching
  };
}

export const RECEIVE_FETCH = 'RECEIVE_FETCH';

export function receiveFetch(movie, isFetching) {
  return {
    type: RECEIVE_FETCH,
    movie,
    isFetching,
  };
}

export const FAILED_TO_FETCH = 'FAILED_TO_FETCH';

export function failedToFetch(err) {
  return {
    type: FAILED_TO_FETCH,
    err,
  };
}

export function fetchPost(movie) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return (dispatch) => {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(requestFetch(true));

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.

    return fetch(`http://www.omdbapi.com/?apikey=20dac387&s="${movie}`)
      .then(response => response.json())
      .then(data => dispatch(receiveFetch(data, false)))
      .catch(err => dispatch(failedToFetch(err)));
      // In a real world app, you also want to
      // catch any error in the network call.
  };
}
//-------------------------------

//register

export function attemptRegister (isFetching){
  return {
    type: REQUEST_FETCH,
    isFetching
  };
}

export function registerResponse (){


}


export function fetchRegister(username,password) {
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.

  return (dispatch) => {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.

    dispatch(attemptRegister(true));

    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
    console.log (username, password)
    return fetch('./api/users/register', {
  method: 'POST',
  credentials:'include',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    username: username,
    password: password,
  })
})
.then(response =>response.json())
.then(data=>dispatch(fetchLogin(username,password)))
.catch(err => dispatch(failedToFetch(err)))
      // In a real world app, you also want to
      // catch any error in the network call.
  };
}


// LOGIN 

export function attemptLogIn(isFetching){
  return {
    type: "REQUEST_FETCH",
    isFetching
  };
}

export function loginResponse (user){
  return {
    type: "LOGIN_RESPONSE",
    user,
  };

}


export function fetchLogin(username,password) {
 

  return (dispatch) => {
    

    dispatch(attemptLogIn(true));


    return fetch('./api/users/login', {
      credentials: 'include',
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: username,
        password: password,
      })
    })
    .then(response =>response.json())
    .then(data=>dispatch(loginResponse(data)))
    .catch(err => dispatch(failedToFetch(err)))
    
  };
}

// Favoritos

export function attemptFav(isFetching){
  return {
    type: "REQUEST_FAV",
    isFetching
  };
}

export function getFav (favorites){
  return {
    type: "FAV_RESPONSE",
    favorites,
  };

}


export function fetchFav(movie) {
 

  return (dispatch) => {
    

    dispatch(attemptFav(true));


    return fetch('./api/favorites/', {
      method: 'POST',
      credentials:'include',
      headers: {
              'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        movie:movie
      })
    })
    .then(response => response.json())
    .then(data=> dispatch(getFav(data)))
    .catch(err => dispatch(failedToFetch(err)))
        
      };
    }

    //////logout////////


export function logoutResponse (user){
  return {
    type: "LOGOUT_RESPONSE",
    user,
  };

}


export function fetchLogout() {
 

  return (dispatch) => {
    

    dispatch(attemptLogIn(true));


    return fetch('./api/users/logout', {
       credentials: 'include',
      method: 'GET'
    })
    .then(response =>response.json())
    .then(data=>dispatch(logoutResponse(data)))
    .catch(err => dispatch(failedToFetch(err)))
    
  };
}

//is Loged in

export function fetchIsloged() {
 

  return (dispatch) => {
    

    dispatch(attemptLogIn(true));


    return fetch('./api/users/isloged', {
      credentials: 'include',
      method: 'GET'
    })
    .then(response =>response.json())
    .then(data=>{
      console.log('estoy', data)
      dispatch(islogedResponse(data))})
    .catch(err => dispatch(failedToFetch(err)))
    
  };
}

export function islogedResponse (isLoged){
  return {
    type: "ISLOGED_RESPONSE",
    isLoged
  };

}















