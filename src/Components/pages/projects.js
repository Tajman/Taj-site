import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Container from 'react-bootstrap/Container'; 
import "../../CSS/projects.css";

export default class Projects extends Component {
    render() {
        return ( 
       <header className="App-header">
           <Container>
            <h1> 
             Projects
            </h1> 
          </Container> 
       </header>
        );
    }
}