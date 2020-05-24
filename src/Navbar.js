import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';  
import { Link } from "react-router-dom";  
import './CSS/Navbar.css';

export default class NavBar extends Component {
    render() {
        return (
  <Navbar bg="dark" variant="dark">  
    <Nav>
      <Link to='/' className="Navbar">Home</Link>
      <Link to='/projects' className="Navbar">Projects</Link>
      <Link to='/about' className="Navbar">About</Link>
    </Nav> 
  </Navbar>
        );
    }
}