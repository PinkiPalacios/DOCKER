var React = require('react')
var ReactDOM = require('react-dom')
var Pagina= require('./containers/input.jsx')
var Main = React.createClass({
  render: function(){
    return (
      <div>
        <Pagina></Pagina>
      </div>
    )
  }
});
ReactDOM.render(<Main />, document.getElementById('app'));

