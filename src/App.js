import React from 'react';
import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Image from 'react-bootstrap/Image'; 
import Container from 'react-bootstrap/Container';
import NavBar from "./Navbar.js";

function App() {
  return ( 
    <div className="App"> 
      <header className="App-header">
        <NavBar/>  
      {/*<Container>
            <Image src={require("./images/Tajman-no-glass.PNG")} rounded />
        </Container>*/}
    </header> 
    </div>
  );
}

export default App;
