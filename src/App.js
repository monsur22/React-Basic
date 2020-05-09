import React from 'react';
import {Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import logo from './logo.svg';
// import './App.css';
import Navbar from './component/Navbar'; // Import a component from another file
import Sidebar from './component/Sidebar'; // Import a component from another file
import  One from './component/One'; // Import a component from another file
import  Home from './component/Home'; // Import a component from another 
import  Props from './component/Props'; // Import a component from another file 
import  State from './component/State'; // Import a component from another file 
import  Random from './component/Random'; // Import a component from another file 
import  Timer from './component/Timer'; // Import a component from another file 
import  Coursesell from './component/Coursesell'; // Import a component from another file 
import  Crud from './component/Crud'; // Import a component from another file 
import  List from './component/crud/List'; // Import a component from another file 
import  Creat from './component/crud/Creat'; // Import a component from another file 
import  Edit from './component/crud/Edit'; // Import a component from another file 
function App() {
  return (
    <div className="App">
        <div class="d-flex" id="wrapper">
         <Sidebar />
          <div id="page-content-wrapper">
            <Navbar />
            <div class="container-fluid">
                {/* <Router> */}
                <Switch>
                      <Route  exact path="/Home" component={Home} />
                      <Route  exact path="/One" component={One} />
                      <Route  exact path="/Props" component={Props} />
                      <Route  exact path="/State" component={State} />
                      <Route  exact path="/Random" component={Random} />
                      <Route  exact path="/Timer" component={Timer} />
                      <Route  exact path="/Coursesell" component={Coursesell} />
                      <Route  exact path="/Crud" component={Crud} />
                      <Route  exact path="/List" component={List} />
                      <Route  exact path="/Creat" component={Creat} />
                      <Route  exact path="/Edit/:id" component={Edit} />
                  
                </Switch>
                  {/* </Router> */}
            </div>
           
         
          </div>
      </div>
      
    </div>
  );
}

export default App;
