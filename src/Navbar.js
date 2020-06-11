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
      <Link to='/' className="Navbar"><i class="fas fa-home"></i> Home</Link>
      <Link to='/projects' className="Navbar"><i class="fas fa-project-diagram"></i> Projects</Link> 
      <Link to='/playlists' className="Navbar"><i class="fab fa-spotify"></i> Playlists</Link>
      <Link to='/about' className="Navbar"><i class="fas fa-info"></i> About</Link>
    </Nav> 
  </Navbar>
        );
    }
}