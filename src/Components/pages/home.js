import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Image from 'react-bootstrap/Image'; 
import Container from 'react-bootstrap/Container'; 
import '../../CSS/home.css';

export default class Home extends Component {
    render() {
        return ( 
    <header className="App-header">
        <Container> 
            <img className="Image-head" src={require("../../images/Tajman-no-glass.PNG")} />
        </Container> 
  
        <Container> 
            <h1 className="Welcome">Welcome</h1>
        </Container>
    </header>  
        );
    }
}