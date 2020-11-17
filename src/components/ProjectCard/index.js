import React, {useState} from 'react'
import '../../components/ProjectCard/index.scss'
import {BsLink} from 'react-icons/bs'

export default function ProjectCard(props) {
    const [active, setActive] = useState(false)
 
    return (
        
            <div onClick={()=>setActive(!active)}  className={active ? 'card active' : 'card'}>
                <div className='image-box'>
                    <img className='image-profile' src={props.imageSource} />
                </div>
                <div className='bottom'>
                    <div className={active ? 'btn-close':'btn'}>
                        <span>{active ? 'Close': 'More'}</span>
                    </div>
                    <div className='title'>{props.title}</div>
                    <div className='description'>{props.description}</div>
                </div>
                <div className="social">
                    <p>Take a look:
                        <div className="social-links">
                            <a href={props.projectLink} target="_blank">
                                <BsLink style={{fontSize: '3em', color: '#fff'}} />
                            </a>
                        </div>
                    </p>
                </div>
            </div>

    )
}
    