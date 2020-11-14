import React from 'react'
import '../../components/ProjectCard/index.scss'

export default function index(props) {
    return (
        
            <div className='card'>
                <div className='image-box'>
                <img className='image-profile' src={props.imageSource} />
                
                </div>
                <div className='bottom'>
                <div className='btn'>
                        <div class='btn-text'><span>More</span><span>Close</span></div>
                    </div>
                    <div className='title'>{props.title}</div>
                    <div className='description'>{props.description}</div>
                
                </div>

                </div>

    )
}
