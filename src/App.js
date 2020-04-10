import React from 'react';
import './CSS/App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Image from 'react-bootstrap/Image'; 
import Container from 'react-bootstrap/Container';
import NavBar from "./Navbar.js"; 
import Footer from "./Footer.js"; 
import { Switch, Route } from 'react-router-dom'; 
import Home from './Components/pages/home.js';
import Projects from './Components/pages/projects.js'; 
import About from './Components/pages/about.js';

function App() {
  return ( 
    <div className="App"> 
        <NavBar/>  
        <Main />
        <Footer/>    
    </div>
  );
}

export default App; 

 const Main = () => (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/projects' component={Projects}></Route> 
      <Route exact path='/about' component={About}></Route>
    </Switch>
    );
