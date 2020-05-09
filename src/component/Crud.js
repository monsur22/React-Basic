
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
class Crud extends Component {

  render() {


    return(
      <div class="text-center">
        <h1 class="text-center">Crud  Component </h1>
        

        <Child />
      </div>
   
    );
  }
}

 


class Child extends Component {

  constructor(props) {
    super(props);
    this.state = {
        persons: []
    };
}

  componentDidMount() {
    // axios.get('https://jsonplaceholder.typicode.com/users')
    axios.get('http://localhost/Vuejs-Larvel-Crud/products')
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }
  
  render() {

    return(
      <div class="text-center">
    <br/>
       <ul>
          { this.state.persons.map(person => <li>{person.title}</li>)}
        </ul>

      </div>
    );
  }
}


 

 



export default Crud; // Don’t forget to use export default!