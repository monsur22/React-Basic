import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';

export default class Creat extends Component {

  constructor(props) {
    super(props)

    // Setting up functions
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeBody = this.onChangeBody.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    // Setting up state
    this.state = {
      title: '',
      body: ''
    }
  }

  onChangeTitle(e) {
    this.setState({ title: e.target.value })
  }

  onChangeBody(e) {
    this.setState({ body: e.target.value })
  }


  onSubmit(e) {
    e.preventDefault()

    const productObject = {
      title: this.state.title,
      body: this.state.body,
     
    };
    // axios.post('http://localhost/Vuejs-Larvel-Crud/test', productObject)
    axios.post('http://localhost/Vuejs-Larvel-Crud/products', productObject)
      .then(res => console.log(res.data));

    this.setState({ title: '', body: '' })
  }

  render() {
    return (
    <div className="form-wrapper">
      <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Title">
          <Form.Label>Title</Form.Label>
         
          <Form.Control type="text" value={this.state.title} onChange={this.onChangeTitle} />
        </Form.Group>

        <Form.Group controlId="Body">
          <Form.Label>Body</Form.Label>
          <Form.Control type="text" value={this.state.body} onChange={this.onChangeBody} />
        </Form.Group>

     

        <Button variant="danger" size="lg" block="block" type="submit">
          Create 
        </Button>
      </Form>
      
    </div>
    );
  }
}