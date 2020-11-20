import React from 'react'
import './index.scss'

export default function index(props) {
    return (
        <div className='icon-shadow'>
            <a href={props.link} target='_blank' rel="noopener noreferrer">
            {props.children}
            </a>
        </div>
    )
}
