import React, { Component } from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Image from 'react-bootstrap/Image'; 
import Container from 'react-bootstrap/Container'; 
import Carousel from 'react-bootstrap/Carousel'
import '../../CSS/home.css';

export default class Home extends Component {
    render() {
        return ( 
    <header className="App-header">
        <Container> 
            <img className="Image-head" src={require("../../images/Tajman-dreds.jpg")} />
        </Container> 
  
        <Container> 
            <h1 className="Welcome">Welcome</h1>
        </Container> 

                <Container> 
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="gallery-image"
                                src={require("../../images/Pic 1-1.jpg")}
                                alt="First slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="gallery-image"
                                src={require("../../images/Pic 2-2.jpg")}
                                alt="Second slide"
                            />
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                                className="gallery-image"
                                src={require("../../images/Pic 3-3.jpg")}
                                alt="Third slide"
                            />
                        </Carousel.Item>
                    </Carousel>

                </Container>

    </header>  
        );
    }
}