import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';  
import { Link } from "react-router-dom"; 

export default class NavBar extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Menu</Navbar.Brand>  
    <Nav>
      <Link to='/'>Home</Link>
      <Link to='/projects'>Projects</Link>
      <Link to='/about'>About</Link>
    </Nav> 
  </Navbar>
        );
    }
}