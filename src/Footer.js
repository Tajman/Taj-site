import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Navbar from 'react-bootstrap/Navbar';  
import Container from 'react-bootstrap/Container';
import './CSS/Footer.css';

export default class Footer extends Component {
    render() {
        return (
            <Container>
            <Navbar bg="dark" variant="dark" fixed="bottom" className="Footer">
                <a href="https://github.com/Tajman?tab=overview&from=2020-06-01&to=2020-06-11"><i class="fab fa-github-square"></i> Github Page </a> 
                <a href="https://www.linkedin.com/in/tajour-cohen-henry-739509124/"><i class="fab fa-linkedin"></i> LinkedIn Page </a>
                </Navbar>
            </Container>
        );
    }
}