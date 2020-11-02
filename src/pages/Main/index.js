import React from 'react'
import { Jumbotron, Container } from 'react-bootstrap'
import MainImage from '../../assets/images/main_image.jpg'
import MainVideo from '../../assets/videos/main_video.mp4'
export default function index() {

    return (
        <div>


         
            <video style={{width: '100vw'}} className='videoTag' autoPlay loop muted>
                <source src={MainVideo} type='video/mp4' />
            </video>

        </div>
    )
}
