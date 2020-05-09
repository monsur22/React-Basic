
import React, { Component } from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';
class Sidebar extends Component {
  render() {
    return(
  

      <div class="bg-light border-right" id="sidebar-wrapper">
      <div class="sidebar-heading">React Basic</div>
      <div class="list-group list-group-flush">
        <a href="#" class="list-group-item list-group-item-action bg-light">
          {/* <Link to={'/One'}>Home</Link>  */}
          <Link to="/Home">Home</Link> 
        </a>
        <a href="#" class="list-group-item list-group-item-action bg-light">
         
          <Link to="/One">One</Link> 
        </a>
        <a href="#" class="list-group-item list-group-item-action bg-light">
         
         <Link to="/Props">Props</Link> 
       </a>
       <a href="#" class="list-group-item list-group-item-action bg-light">
         
         <Link to="/State">State</Link> 
       </a>
       <a href="#" class="list-group-item list-group-item-action bg-light">
         
         <Link to="/Random">Random</Link> 
       </a>
       <a href="#" class="list-group-item list-group-item-action bg-light">
         
         <Link to="/Timer">Timer</Link> 
       </a>
       <a href="#" class="list-group-item list-group-item-action bg-light">
         
         <Link to="/Coursesell">Coursesell</Link> 
       </a>
       <a href="#" class="list-group-item list-group-item-action bg-light">
         
         <Link to="/Crud">Crud</Link> 
       </a>
       <a href="#" class="list-group-item list-group-item-action bg-light">
         
         <Link to="/List">List</Link> 
       </a>
       <a href="#" class="list-group-item list-group-item-action bg-light">
         
         <Link to="/Creat">Creat</Link> 
       </a>
       {/* <a href="#" class="list-group-item list-group-item-action bg-light">
         
         <Link to="/Edit">Edit</Link> 
       </a> */}
      </div>
    </div>

    );
  }
}
export default Sidebar; // Don’t forget to use export default!