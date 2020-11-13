import React from 'react'

import MainVideo from '../../assets/videos/seattle.mp4'

export default function index(props) {
    return (
        <div>
                <video style={{width: '100vw', zIndex: '1', position: 'absolute', top: '0', left: '0'}} className='videoTag' autoPlay loop muted>
                <source src={MainVideo} type='video/mp4' />
                {props.children}
         
            </video>
        </div>
    )
}
