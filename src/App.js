import React from 'react';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Image from 'react-bootstrap/Image'; 
import Container from 'react-bootstrap/Container';
import NavBar from "./Navbar.js"; 
import Footer from "./Footer.js";

function App() {
  return ( 
    <div className="App"> 
      <header className="App-header">
        <NavBar/>   
      <Container> 
            <img className="Image-head" src={require("./images/Tajman-no-glass.PNG")} /> 
        </Container> 
  
        <Container> 
            <h1 className="Welcome">Welcome</h1>
        </Container>
    </header>  
            
    <footer className="App-footer"> 
            <Footer/>    
    </footer>
    </div>
  );
}

export default App;
