import React, {useState} from 'react'
import '../../components/ProjectCard/index.scss'

export default function ProjectCard(props) {
    const [active, setActive] = useState(false)
    return (
        
            <div className={active ? 'card active' : 'card'}>
                <div className='image-box'>
                    <img className='image-profile' src={props.imageSource} />
                </div>
                <div className='bottom'>
                    <div className='btn'>
                        <div class='btn-text'><span onClick={setActive}>More</span><span onClick={setActive}>Close</span></div>
                    </div>
                    <div className='title'>{props.title}</div>
                    <div className='description'>{props.description}</div>
                </div>
                <div className="social">
                    <p>Follow Me
                        <div className="social-links">
                            <a href="https://facebook.com">
                                <img src="https://cdn2.iconfinder.com/data/icons/font-awesome/1792/facebook-official-512.png"/>
                            </a>
                        </div>
                    </p>
                </div>
            </div>

    )
}
    