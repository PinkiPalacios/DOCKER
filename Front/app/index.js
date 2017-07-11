var React = require('react')
var ReactDOM = require('react-dom')
var Router = require('react-router'). Router
var Route = require('react-router').Router
var hashHistory = require('react-router').hashHistory 

//var Nav=require('./containers/nav.jsx')
var Home= require('./containers/home.jsx')
var Cronometer= require("./containers/pagina.jsx")
var Countdown= require("./containers/countdown.jsx")
class Main extends React.Component{
 render (){
 	  return (
 	  	<Router history={hashHistory}>
    		<Route path="/" component={Home }>
    			<Route path="/cronometer" component={Cronometer}/>
    			<Route path="/countdown" component={Countdown}/>
    		</Route>
 		</Router>

    )

 }

}
ReactDOM.render(<Main />, document.getElementById('app'));

