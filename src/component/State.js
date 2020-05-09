
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class State extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      array: ['s-array1','s-array2','s-array3','s-array4']
     }
     this.handleClick=this.handleClick.bind(this);
  }
  handleClick(){
    this.setState({array: this.state.array.reverse()});

  }
  render() {
    return(
      <div>
        <h1 class="text-center">State   Component</h1>
        <h1 class="text-center btn-danger" onClick={this.handleClick}>Click Here State change Reverse</h1>

        <Child msg="Stae of  Child Component" array={this.state.array}/>
 
      </div>
   
    );
  }
}

 


State.defaultProps={
  array: ['array1','array2','array3','array4']
}

class Child extends Component {
  render() {
    console.log(this.props);
    return(
      <div>
      <h1 class="text-center btn-success">{this.props.msg}</h1>
      <h1 class="text-center btn-success">
        {this.props.array.map((item,i)=>{
          // return i+ " "+item ;
        return  <p key={i}>{item}</p>;
        })}
      </h1>

      </div>
    );
  }
}


 



export default State; // Don’t forget to use export default!