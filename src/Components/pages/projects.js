import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card'; 
import CardDeck from 'react-bootstrap/Card';
import "../../CSS/projects.css";

export default class Projects extends Component {
    render() {
        return ( 
       <header className="ProApp-header">
           <Container>
            <h1 className="titlepro"> 
             Projects
            </h1> 
                </Container>  

                <Container className="band"> 
                        <Card bg ='dark'>
                        <Card.Img variant="top" src={require("../../images/Meme-Gen-pic.png")} />
                            <Card.Body>
                                <Card.Title> Meme Generator</Card.Title>
                                <Card.Text>
                                   Generates memes and gifs from apis. This is a react app.
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <a href="https://github.com/Tajman/React-space" target="_blank">Github link</a>
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