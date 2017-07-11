import React from 'react'
import {Link} from 'react-router'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import * as actionCreator from '../actions/actionCreator.jsx'
import {history} from '../store.jsx'


function mapStateToProps (state){
  return {
   
    users:state.users
  }
}

function mapDispatchToProps (dispatch){
  return bindActionCreators(actionCreator,dispatch)
}


class Login extends React.Component {
  constructor(props){
    super(props)
    this.submit=this.submit.bind(this)
  } 


  submit(e){
    e.preventDefault()
    console.log("aqui",this)
    this.props.fetchLogin(this.refs.username.value, this.refs.password.value)
    history.push('/')


  }



  render (){
    console.log(this)
    return (

        
        <div id="form">
          <h1>LogIn</h1>
          <form>
            <div>
            <input type="text" ref="username" placeholder="Username"/>
            </div>
            <div>
            <input type="password" ref="password" placeholder="Password"/>
            </div>
            <div>
            <button  onClick={this.submit}>Login</button>
            </div>
          </form>
        </div>
        
      )
   
    
  }

}


const App= connect(mapStateToProps, mapDispatchToProps)(Login)

 export default App;


