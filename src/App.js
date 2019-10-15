import React from 'react';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">Menu</Navbar.Brand>  
    <Nav className="mr-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#Projects">Projects</Nav.Link>
      <Nav.Link href="#About">About</Nav.Link>
    </Nav> 
  </Navbar>
    </header>
    </div>
  );
}

export default App;
