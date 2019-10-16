import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'; 

export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Menu</Navbar.Brand>  
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#Projects">Projects</Nav.Link>
      <Nav.Link href="#About">About</Nav.Link>
    </Nav> 
  </Navbar>
        );
    }
}