import React from 'react'
import BGVideo from '../../components/BackgroundVideo'
import {ReactComponent as Ksvg} from '../../assets/images/Kim.svg'
import styled, {keyframes} from 'styled-components'

export default function index() {
    const FadeIn = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  `
    const FadeOn = styled.div`
    opacity: 0;
    display: inline-block;
    animation: ${FadeIn} linear infinite;
    animation-duration: 1s;
    animation-delay: 1s;
    `
    return (
        <div>   <FadeOn>
                         
        </FadeOn>
        <Ksvg style={{zIndex: '2', position: 'relative', top: '-3.5vh', left: '0'}}></Ksvg>
        {/* <FadeOn>
            <img src={Ksvg} />
        </FadeOn>
            <img src={Ksvg} style={{zIndex: '2', position: 'relative', top: '-3.5vh', left: '0', fill: '#93ab2e'}} /> */}
       
        <BGVideo>
        </BGVideo>
        <FadeOn>
        <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"  x="0px" y="0px" viewBox="0 0 1920 1080" style={{backgroundColor: '#000000'}} >
<rect x="0" y="891.63" class="st0" width="75" height="188.37"/>
<polygon class="st0" points="181.05,891 126.68,985.5 126.68,891 "/>
<polygon class="st0" points="256,1079.69 164,1001.83 254.75,891.31 "/>
<polygon class="st0" points="174.29,1079.69 126.68,1079.69 126.68,1026.31 "/>
<rect x="316" y="892" class="st0" width="30" height="188"/>
<polygon class="st0" points="446.54,1079.43 401.5,1079.43 402.72,959 "/>
<polygon class="st0" points="494,1079.74 452.02,1079.74 492.87,959.31 "/>
<rect x="552" y="892" class="st0" width="30" height="188"/>
</svg>
        </FadeOn>

        <FadeOn>
            Hello!
        </FadeOn>
    
<br />
<br />


        </div>
    )
}
