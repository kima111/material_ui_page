import React from 'react'
import Navbar from '../Navbar'

export default function index(props) {
    return (
        <div>
            {/* <Navbar style={{display: 'hidden'}}/> */}
            <div style={{height: '50px'}}></div>
            {props.children}
        </div>
    )
}
