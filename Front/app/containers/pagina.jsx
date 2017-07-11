var React = require('react')
var Clock= require('../components/input.jsx')
var Boton= require('../components/data.jsx')



class Cronometer extends React.Component{
	constructor(props){

		super(props);
		
		
		this.state={
			min:0,
			sec:0,
			isCounting:false,

		}
		this.start=this.start.bind(this)
		this.stop=this.stop.bind(this)
		this.restart=this.restart.bind(this)

	}

	start (){
		this.setState({
			isCounting:true
		})
		
		this.timer=setInterval(()=>{ 
			console.log(this.state)
			
			if (this.state.sec<59){
				this.setState({

					sec:(this.state.sec+1)

				})
			}else{

				this.setState({
					min:(this.state.min+1),
					sec:0
				})
				

			}

		 }, 1000);
		
	}

	stop(){

		clearInterval(this.timer);
		this.setState({
			isCounting:false
		})
	}

	restart(){
		this.setState({

			min:0,
			sec:0,
		})

	}





	

	render(){
		console.log(this.state.isCounting)
		let minutos=0;
		let segundos=0;
		if (this.state.min<10){
			minutos="0"+this.state.min
		}else{
			minutos=this.state.min
		}

		if (this.state.sec<10){
			segundos="0"+this.state.sec
		}else{
			segundos=this.state.sec
		}


		if(!this.state.isCounting){
			var text="Start"
			var func=this.start

		}else {
			var text="Pause"
			var func=this.stop

		}
		console.log(func, text)

		var stilo= {
    
    "height": "100px",
    "background": "rgb(0, 191, 255)",
    "MozBorderRadius": "50px",
    "WebkitBorderRadius": "50px",
    "borderRadius": "50px",
    "textAlign":"center",
    "fontSize":"42px",
  }

		var muestra=(<div style={stilo}>
					
					<Clock min={minutos} sec={segundos}> </Clock>
					<Boton func={func} text={text} restart={this.restart}></Boton>

					</div>)

		

		return muestra;
	}

	




}

module.exports=Cronometer