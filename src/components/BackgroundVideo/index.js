import React from 'react'
import MainVideo from '../../assets/videos/seattle.mp4'

export default function index() {
    return (
            <video autoPlay muted loop style={{zIndex: '1', position: 'absolute', top: '0', left: '0', width: '100vw'}}>
            <source src={MainVideo} type="video/mp4" />
            </video>
    )
}
