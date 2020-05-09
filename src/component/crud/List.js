import React, { Component } from "react";
import axios from 'axios';
import Table from 'react-bootstrap/Table';
// import StudentTableRow from './StudentTableRow';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

export default class List extends Component {

  constructor(props) {
    super(props)
    this.state = {
      students: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost/Vuejs-Larvel-Crud/products')
      .then(res => {
        this.setState({
          students: res.data
        });
      })
      .catch((error) => {
        console.log(error);
      })
  }

  DataTable() {
    return this.state.students.map((res, i) => {
      return <Child obj={res} key={i} />;
    });
  }


  render() {
    return (
    <div className="table-wrapper">
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Title</th>
            <th>Body</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        
        {this.DataTable()} 
        
        </tbody>
      </Table>
    </div>
    );
  }
}
class Child extends Component {

    render() {
  
  
      return(
          <tr>
     
        <td>{this.props.obj.title}</td>
        <td>{this.props.obj.body}</td>
      
        <td>
            <Link className="edit-link" to={  "/Edit/" + this.props.obj.id }>
                Edit
            </Link>
            <Button size="sm" variant="danger">Delete</Button>
        </td>
        </tr>
     
      );
    }
  }

