import React from 'react'

export default function index(props) {
    return (
        <div>
            <span style={{height: '50px'}}></span>
            {props.children}
        </div>
    )
}
