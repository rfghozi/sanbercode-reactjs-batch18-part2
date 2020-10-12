import React from 'react';

class Timer extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      time: 120,
      showTime: true,
      date: new Date()
    };
  }

  componentDidMount(){
    if (this.props.start !== undefined){
      this.setState({time: this.props.start})
    }
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentDidUpdate() {
    if (this.state.time === 0){
      this.state.showTime = false;    
    }
  }

  tick() {
    this.setState({
      time: this.state.time - 1,
      date: new Date()         
    });
  }


  render(){
    return(
      <div style={{ textAlign: "center"}}>
        {
          this.state.showTime && (
            <h1>
                Sekarang Jam : {this.state.date.toLocaleTimeString('en-US')}, Hitung Mundur : {this.state.time}
            </h1>
          )
        }
      </div>

    )
  }
}

export default Timer;