
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Timer extends Component {

  render() {
    
    return(
      <div class="text-center">
        <h1 class="text-center">Timer Component </h1>
      
        <Child  start={Date.now()}/>
      </div>
   
    );
  }

}

 



class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clock:0
    }
    this.ticker=this.ticker.bind(this);
  }

  ticker(){
   
            this.setState({clock:new Date() - this.props.start })
  }

  componentDidMount(){
        this.timer = setInterval(this.ticker,1000)
  }

  render() {
    // console.log(this.props.start);
    var clock = Math.round(this.state.clock /1000);
    return(
      <div class="text-center">
    <br/>
    <h1 class="text-center btn-success">{clock} </h1>
     {/* <h1 class="btn-success">{this.props.start}</h1>  */}

      </div>
    );
  }
}


 



export default Timer; // Don’t forget to use export default!