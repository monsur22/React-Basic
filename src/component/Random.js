
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Random extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:0
    }
    this.getRandomNumber=this.getRandomNumber.bind(this);
  }
  getRandomNumber(){
    // console.log("Random number called");
    this.setState({data: Math.floor(Math.random() *10) })

  }
  render() {
    return(
      <div class="text-center">
        <h1 class="text-center">Event Component </h1>
        

        <button class="btn-success" onClick={this.getRandomNumber}> Random Number</button>
        <Child  myNumber={this.state.data}/>
      </div>
   
    );
  }
}

 


class Child extends Component {
  render() {
    console.log(this.props);
    return(
      <div class="text-center">
    <br/>
     <h1 class="btn-danger">{this.props.myNumber}</h1> 

      </div>
    );
  }
}


 



export default Random; // Don’t forget to use export default!