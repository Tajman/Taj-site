import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'; 
import CardDeck from 'react-bootstrap/Card';
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

                <Container className="band"> 
                        <Card bg ='dark'>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title> Card title</Card.Title>
                                <Card.Text>
                                   "Something."
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                
                            </Card.Footer>
                        </Card>
                        <Card bg='dark'>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body> 
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    Something.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                
                            </Card.Footer>
                        </Card>
                        <Card bg ='dark'>
                            <Card.Img variant="top" src="holder.js/100px160" />
                            <Card.Body>
                                <Card.Title>Card title</Card.Title>
                                <Card.Text>
                                    Something.    
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                                
                            </Card.Footer>
                        </Card> 

                </Container>
            </header> 
        );
    }
}