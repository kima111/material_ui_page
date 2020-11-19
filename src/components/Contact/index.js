import React from 'react'
import {AiOutlineMail, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'
import '../../components/Contact/index.scss'
import {FadeOnUp} from 'nehoa'

export default function index() {
    return (
        <div style={{textAlign: 'center', marginTop: '5vw'}}>
            <FadeOnUp duration='2s'>
            <p style={{marginTop: '70px', fontSize: '2em'}}>Contact Me</p>
            <a href="mailto:kima111@gmail.com"><AiOutlineMail className='icon-shadow' style={{fontSize: '4em', color: '#555555'}}/></a>
            <a href="https://github.com/kima111"><AiFillGithub className='icon-shadow' style={{fontSize: '4em', color: '#555555'}}/></a>
            <a href="https://www.linkedin.com/in/abraham-kim-481a0961/"><AiFillLinkedin className='icon-shadow' style={{fontSize: '4em', color: '#555555'}}/></a>
            </FadeOnUp>
        </div>
    )
}
