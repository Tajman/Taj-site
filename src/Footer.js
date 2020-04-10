import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from 'react-bootstrap/Navbar'; 
import './CSS/Footer.css';

export default class Footer extends Component {
    render() {
        return ( 
            <Navbar bg="dark" variant="dark" fixed="bottom" className="Footer">
                <a href=""> Test </a>  
            </Navbar>
        
        );
    }
}