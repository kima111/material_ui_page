import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import MainImage from '../../assets/images/main_image.jpg'
export default function index() {
    return (
        <div>

            <Jumbotron style={{background: `url(${MainImage}) fixed center center`, backgroundSize: 'cover',minHeight:'80vh', height: "100%", marginTop: '16px'}} fluid>
                <Container>
                    <h1>Fluid jumbotron</h1>
                    <p>
                        This is a modified jumbotron that occupies the entire horizontal space of
                        its parent.
                    </p>
                </Container>
            </Jumbotron>
   
        </div>
    )
}
