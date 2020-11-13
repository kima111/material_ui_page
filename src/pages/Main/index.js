import React from 'react'
import BGVideo from '../../components/BackgroundVideo'
import { ReactComponent as Ksvg } from '../../assets/images/Kim.svg'
import { ReactComponent as Bsvg } from '../../assets/images/ProfileBoundary.svg'
import '../Main/index.scss'

export default function index() {

  return (
    <div>
      <BGVideo />
      <Ksvg id='title' className='fade-in'/>
    </div>
  )
}
