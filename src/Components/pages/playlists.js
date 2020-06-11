import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import "../../CSS/playlists.css";

export default class Playlists extends Component {
    render() {
        return (
            <header className="Playlist-header">
                <Container> 
                    <h1>
                        Playlists
                    </h1> 
                </Container> 

                <Container> 
                    <iframe src="https://open.spotify.com/embed/playlist/3ZjR4coCQI6d8zmh3NDz7V" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> 
                    
                    <iframe src="https://open.spotify.com/embed/playlist/5XAPHq7LaeAvzllWeFO6YV" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> 
                    
                    <iframe src="https://open.spotify.com/embed/playlist/3mGOF0masIRu9rZdcf7X3z" width="300" height="380" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
                </Container>

            </header>
        );
    }
}
