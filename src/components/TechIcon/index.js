import React from 'react'
import './index.scss'

export default function index(props) {
    return (
        <div className='icon-shadow'>
            <a href={props.link} target='_blank'>
            {props.children}
            </a>
        </div>
    )
}
