
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Props extends Component {
  render() {
    return(
      <div>
        <h1 class="text-center">Props Parent  Component</h1>
        <Child msg="Props of  Child Component" array={this.props.array}/>
        <Type />
      </div>
   
    );
  }
}

Props.defaultProps={
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
          return  " "+item ;
        })}
      </h1>

      </div>
    );
  }
}

class Type extends Component {
  render() {
    console.log(this.props);
    return(
      <div>

      <h1 class="text-center btn-primary">Propes Type</h1>
      <h1 class="text-center btn-primary">{this.props.propNumber}</h1>
      <h1 class="text-center btn-primary">{this.props.propString}</h1>
      <h1 class="text-center btn-primary">{this.props.propObject.obj1}</h1>


      </div>
    );
  }
}

 


Type.propTypes ={
  propObject: PropTypes.object,
  propString: PropTypes.string,
  propNumber: PropTypes.number
}
Type.defaultProps={
  propNumber: 3,
  propString: "This is String",
  propObject:{
    obj1:"Object 1",
    obj2:"Object 2",
    obj3:"Object 3"
  }
}

export default Props; // Don’t forget to use export default!