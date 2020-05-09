
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Coursesell extends Component {


  render() {
    var courses= [
      {name: 'Course A', price:1},
      {name: 'Course B', price:2},
      {name: 'Course C', price:3},
      {name: 'Course D', price:4}
    ]
    return(
      <div class="text-center">
        <h1 class="text-center">Course Sell Component </h1>
        

        <Child items={courses}/>
      </div>
   
    );
  }
}

 


class Child extends Component {
  sumPrice(price){
 
    this.setState({total: this.state.total + price });

  }
    constructor(props) {
    super(props);
    this.state = {
      total:0
    }
    this.sumPrice=this.sumPrice.bind(this);
  }
  
  render() {
    console.log(this.props.items);
    var courses =this.props.items.map((item, i)=>{
      return <Course name={item.name} price={item.price} key={i} sumPrice={this.sumPrice} active={item.active}/>
    });
    return(
      <div class="text-center">
    <br/>
    <h1 class="btn-danger">{courses}</h1> 
    <p>Total <b>{this.state.total}</b></p>

      </div>
    );
  }
}

class Course extends Component {
  clicker(){
    var active= !this.state.active;
    this.setState({active: active});
    this.props.sumPrice(active ? this.props.price : -this.props.price);
  }

  constructor(props) {
    super(props);
    this.state = {
      active:false
    }
    this.clicker=this.clicker.bind(this);
    
  }

  render() { 
    return (
      <div>
        <p onClick={this.clicker}>{this.props.name} <b>{this.props.price}</b></p>
      </div>
    );
  }
}
 

 



export default Coursesell; // Don’t forget to use export default!