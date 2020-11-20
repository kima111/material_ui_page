import React from 'react'

export default function index(props) {
    return (
        <div>
            <div style={{height: '50px'}}></div>
            {props.children}
        </div>
    )
}
