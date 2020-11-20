import React, {useState} from 'react'
import '../../components/ProjectCard/index.scss'
import {BiWorld} from 'react-icons/bi'
import {AiFillGithub} from 'react-icons/ai'
import {GrHeroku} from 'react-icons/gr'

export default function ProjectCard(props) {
    const [active, setActive] = useState(false)
 
    return (
            <>
            <div onClick={()=>setActive(!active)}  className={active ? 'card active' : 'card'}>
                <div className='image-box'>
                    <img className='image-profile' alt={props.altSource} src={props.imageSource} />
                </div>
                <div className='bottom'>
                    <div className={active ? 'btn-close':'btn'}>
                        <span>{active ? 'Close': 'More'}</span>
                    </div>
                    <div className='title'>{props.title}</div>
                    <div className='description'>{props.description}</div>
                </div>
                <div className="social">
                    <p>Feel free to take a closer look:
                        <div className="social-links">
                            {props.webLink ? <a href={props.webLink} target='_blank' rel="noopener noreferrer"><BiWorld style={{fontSize: '2.7em', color: '#fff', marginLeft: '15px', marginRight: '15px'}}/></a>:''}
                            {props.githubLink ? <a href={props.githubLink} target="_blank"  rel="noopener noreferrer"><AiFillGithub style={{fontSize: '2.5em', color: '#fff', marginLeft: '15px', marginRight: '15px'}} /></a>:''}
                            {props.herokuLink ? <a href={props.herokuLink} target="_blank" rel="noopener noreferrer" style={{ marginTop: '3px', marginLeft: '15px', marginRight: '15px'}}><GrHeroku style={{fontSize: '2.3em', color: '#fff'}} /></a>:''}
                           
                            
                        </div>
                    </p>
                </div>
            </div>
            </>
    )
}
    