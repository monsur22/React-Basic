
import React, { Component } from 'react';
import { Router, Switch, Route, Link } from 'react-router-dom';


class Navbar extends Component {
  render() {
    return(
        <nav class="navbar navbar-expand-lg navbar-light bg-light border-bottom">
       

        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <h4> One Proof React Learning Session</h4>
          <ul class="navbar-nav ml-auto mt-2 mt-lg-0">
            <li class="nav-item active">
              <a class="nav-link" href="#"> <Link to="/Home">Home</Link> <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#"> <Link to="/One">One</Link></a>
            </li>
    
          </ul>
        </div>
      </nav>


    );
  }
}

export default Navbar; // Don’t forget to use export default!