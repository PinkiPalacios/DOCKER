var React = require('react')
var Clock= require('../components/input.jsx')
var Boton= require('../components/data.jsx')
var Input= require('../components/input2.jsx')
class Countdown extends React.Component{
	constructor(props){
		super(props);

		this.state={
			min:0,
			sec:0,
			isCounting:false,
			ini:0

		}

		this.start=this.start.bind(this)
		this.stop=this.stop.bind(this)
		this.restart=this.restart.bind(this)
		this.set=this.set.bind(this)

	}

	set(num){

		var minutos=Math.floor(num/60)
		var segundos=num%60;
		this.setState({
			ini:num,
			min:minutos,
			sec:segundos,


		})

	}

	start(){
		this.setState({
			isCounting:true
		})


		this.timer=setInterval(()=>{
			if(this.state.sec==1 && this.state.min==0  ||  this.state.sec==0 && this.state.min==0){
				
				this.setState({
				isCounting:false
			})
				this.stop()

			}else if(this.state.sec>1){
				this.setState({

					sec:(this.state.sec-1)

				})
			}else{

				this.setState({
					min:(this.state.min-1),
					sec:60
				})
				

			}


		},1000)


	}

	restart(){
		this.set(this.state.ini)

	}

	stop(){

		clearInterval(this.timer);
		this.setState({
			isCounting:false,
			
		})
	}



	render(){

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

		var stilo= {
    
    "height": "100px",
    "background": "rgb(0, 191, 255)",
    "MozBorderRadius": "50px",
    "WebkitBorderRadius": "50px",
    "borderRadius": "50px",
    "textAlign":"center",
    "fontSize":"42px",
  }





		return (
		<div style={stilo}>
			<Clock min={minutos} sec={segundos}> </Clock>
			<Input set={this.set}></Input>
			<Boton func={func} text={text} restart={this.restart}></Boton>
		
		</div>)
	}
}
module.exports=Countdown