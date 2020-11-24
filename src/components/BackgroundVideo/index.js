import React from 'react'
import MainVideo from '../../assets/videos/seattle2.mp4'

export default function index(props) {
    return (
            <div>
            <video autoPlay muted loop style={{ position: 'absolute', top: '0', left: '0', width: '100vw'}}>
            <source src={MainVideo} type="video/mp4" />
            </video>
            {props.children}
            </div>
    )
}
