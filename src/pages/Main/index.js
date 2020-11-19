import React from 'react'
import BGVideo from '../../components/BackgroundVideo'
import { ReactComponent as Ksvg } from '../../assets/images/Kim.svg'
import { ReactComponent as Bsvg } from '../../assets/images/ProfileBoundary.svg'
import P1Image from '../../assets/images/Projects/bamazon.PNG'
import P2Image from '../../assets/images/Projects/Paju.PNG'
import P3Image from '../../assets/images/Projects/eQuipt.PNG'
import P4Image from '../../assets/images/Projects/WordGuessingGamePic.PNG'
import P5Image from '../../assets/images/Projects/MEANR.PNG'
import P6Image from '../../assets/images/Projects/Care_Hawaii.PNG'
import ProjectCard from '../../components/ProjectCard'
import Icon from '../../components/TechIcon'
import { Container, Grid } from '@material-ui/core'
import Test from '../../assets/images/test.png'
import '../Main/index.scss'
import {FadeOnUpChar, FadeOnUp} from 'nehoa'


export default function Main() {

  return (
    <>
      <div>
        <BGVideo className='fade-in' />
        <Ksvg style={{ position: 'absolute', zIndex: '-5', top: '0', left: '0', width: '100vw' }} />
        <img src={Test} style={{ position: 'absolute', zIndex: '-5', top: '0', left: '0', width: '100vw' }} />


      </div>
      <div style={{ marginTop: '34vw' }}>


        <Grid sm={8} xs={11} style={{ borderStyle: 'solid', borderWidth: '2px', borderColor: '#dddddd', borderRadius: '5px', margin: '20px', padding: '15px' }}>
        <FadeOnUp duration='1s'>
          <p style={{fontSize: '2em'}}>Hello, and welcome to my site</p>
        </FadeOnUp>
        <FadeOnUp duration='1.5s'>
          <p style={{ fontSize: '1.5em' }}>
            I am a Full Stack Web Developer in the Seattle area who enjoys working both on front end design, and back end architecture. I have come to a great appreciation for all the aspects
            that go into designing and developing a website. Whether it's making sure the user has a wonderful experience, or implementing effective algorithms, to optimizing database architecures,
            I believe the greatest products merge both the arts and sciences. This is why I have invested myself into pursuing and acclimating to greater heights within both fields,
            or in other words, the entire stack.
            </p>
        </FadeOnUp>
        </Grid>
        <p style={{fontSize: '2em', marginLeft: '30px'}}>Of course, here are some of my best projects:</p>

      
      <Grid container spacing={2} justify="center">
        <Grid item lg={3} sm={6} xs={12} style={{textAlign: 'center', margin: '15px', paddingLeft: '25px'}}>
          <ProjectCard imageSource={P6Image} herokuLink="https://care-hawaii.herokuapp.com/"title="Care Hawaii" description="Created a website for Care Hawaii organization, that helps provide outpatient mental health services to Hawaii's children, adolescents and adults. Created as a full stack application that works with other providers."/>
        </Grid>
        <Grid item lg={3} sm={6} xs={12} style={{textAlign: 'center', margin: '15px', paddingLeft: '25px'}}>
          <ProjectCard imageSource={P2Image} webLink="https://www.pajurestaurant.com" title="Paju" description="Volunteered some time to help out a local business during the COVID-19 Pandemic. This is a full stack production website, that uses database triggers to enable real time UI changes. In addition, it enables chronological features using Cron Jobs."/>
        </Grid>
        <Grid item lg={3} sm={6} xs={12} style={{textAlign: 'center', margin: '15px', paddingLeft: '25px'}}>
          <ProjectCard imageSource={P3Image} githubLink="https://github.com/Munchinator6354/eQuipt" herokuLink="https://larp-equipt.herokuapp.com/" title="eQuipt" description="A great way for LARPs (Live Action Role Players) to keep stock of their inventory and even give some to other players. A project which uses the full MERN stack (Mongo, Express, React, Node)."/>
        </Grid>
        <Grid item lg={3} sm={6} xs={12} style={{textAlign: 'center', margin: '15px', paddingLeft: '25px'}}>
          <ProjectCard imageSource={P1Image} githubLink="https://github.com/kima111/bamazon" title="Bamazon" description="This is a Command Line Interface app which will work a lot like a purchasing terminal deomonstrating the use of Node.js which is connected to a MySQL database."/>
        </Grid>
        <Grid item lg={3} sm={6} xs={12} style={{textAlign: 'center', margin: '15px', paddingLeft: '25px'}}>
          <ProjectCard imageSource={P4Image} webLink="https://kima111.github.io/Word-Guess-Game/" githubLink="https://github.com/kima111/Word-Guess-Game" title="Word Guessing Game" description="See if you can guess the words. App demonstrating the use of pure javascript."/>
        </Grid>
        <Grid item lg={3} sm={6} xs={12} style={{textAlign: 'center', margin: '15px', paddingLeft: '25px'}}>
          <ProjectCard imageSource={P5Image} githubLink="https://github.com/kima111/MEANR" herokuLink="https://meanr.herokuapp.com/" title="MEANR" description="A full stack app to help developers build fully stacked applications quickly. This is built with (Mongo, Express, Axios, Node, and React)"/>
        </Grid>

      </Grid>
      <hr />
        <br />
        <br />

        <Grid sm={12} style={{ margin: '20px', padding: '15px', backgroundColor: '#ffffff' }}>

          <p style={{ fontSize: '2em' }}>Tech I truly enjoy and <img style={{width: '28px', marginTop: '-6px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"/> working with:</p>
          <Grid container spacing={2}>
            
            <Grid item sm={3} style={{ textAlign: 'center' }}>
              <Icon link="https://reactjs.org/">
              <img style={{ width: '18vw' }} src="https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png?itok=VbfDeSgJ" />
              </Icon>
            </Grid>
           
            <Grid item sm={3} style={{ textAlign: 'center' }}>
              <Icon link="https://www.mongodb.com/">
              <img style={{ width: '10vw' }} src="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png" />
              </Icon>
            </Grid>
            <Grid item sm={3} style={{ textAlign: 'center' }}>
              <Icon link="https://github.com/">
              <img style={{ width: '20vw', marginTop: '2vw' }} src="https://s19386.pcdn.co/wp-content/uploads/2017/10/github-logo-1.png" />
              </Icon>
            </Grid>
            <Grid item sm={3} style={{ textAlign: 'center' }}>
              <Icon link="https://www.javascript.com/">
              <img style={{ width: '8vw', marginTop: '2vw' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" />
              </Icon>
            </Grid>
            <Grid item sm={3} style={{ textAlign: 'center' }}>
              <Icon link="https://sass-lang.com/">
              <img style={{ width: '14vw', marginTop: '2vw' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQp0qS4amN6Pas2IyhGrnl8LLrMX19yNzW9Lg&usqp=CAU" />
              </Icon>
            </Grid>
            <Grid item sm={3} style={{ textAlign: 'center' }}>
              <Icon link="https://nodejs.org/en/">
              <img style={{ width: '14vw', marginTop: '2vw' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" />
              </Icon>
            </Grid>
            <Grid item sm={3} style={{ textAlign: 'center' }}>
              <Icon link="https://www.npmjs.com/">
              <img style={{ width: '14vw', marginTop: '2vw' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png" />
              </Icon>
            </Grid>
            <Grid item sm={3} style={{ textAlign: 'center' }}>
              <Icon link="https://code.visualstudio.com/">
              <img style={{ width: '8vw', marginTop: '2vw' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png" />
              </Icon>
            </Grid>
          </Grid>
          </Grid>
      <hr />
        <br />
        <br />
        <p style={{fontSize: '2em', marginLeft: '30px'}}>Education & Certifications:</p>
        <Grid container spacing={2}>
        
        <Grid item sm={12} style={{marginLeft: '50px'}}>
          <Icon link="https://bootcamp.uw.edu/coding/"><img style={{ width: '10vw', float: 'left', marginRight: '25px' }} src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/521/original/uwash.png" /></Icon>
          <p style={{fontSize: '1.25em'}}>
          <b>University of Washington, Full Stack Development</b><br />A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript,
          JQuery, Bootstrap, Firebase, Node.js, MySQL, MongoDB, Express, Handelbars.js and React.js.</p>
        </Grid>
        <hr />
        <Grid item sm={12} style={{marginLeft: '50px'}}>
          <Icon link="https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/ccnp-routing-switching.html"><img style={{ width: '10vw', float: 'left', marginRight: '25px' }} src="https://computingforgeeks.com/wp-content/uploads/2019/07/best-ccnp-rs-books.jpg" /></Icon>
          <p style={{fontSize: '1.25em'}}>
          <b>Cisco Certified Network Professional, Routing and Switching</b><br />
          Cisco Certified Network Professional (CCNP) Routing and Switching certification validates the ability to plan,
          implement, verify and troubleshoot local and wide-area enterprise networks and work collaboratively with
          specialists on advanced security, voice, wireless and video solutions.
          </p>
        </Grid>
        <hr />
        <Grid item sm={12} style={{marginLeft: '50px'}}>
          <Icon link="https://docs.microsoft.com/en-us/learn/certifications/"><img style={{ width: '10vw', float: 'left', marginRight: '25px' }} src="https://www.pngitem.com/pimgs/m/210-2108492_mcitp-logo-microsoft-certified-it-professional-hd-png.png" /></Icon>
          <p style={{fontSize: '1.25em'}}>
          <b>Microsoft Certified I.T. Professional, Server Administrator</b><br />
          The MCITP certification builds on a combination of MCTS (Microsoft Certified Technology Specialist)
          prerequisites. A Microsoft Certified IT Professional (MCITP) certification proves the comprehensive set of skills
          to perform the IT job role of Server Administrator. This includes the ability to plan and implement servers and
          server technologies, such as active directory, domain name systems, domain host control protocols, failover
          clusters, file securities, and hosting solutions.
          </p>
        </Grid>
        <hr />
        <Grid item sm={12} style={{marginLeft: '50px'}}>
          <Icon link="https://mse.washington.edu/"><img style={{ width: '10vw', float: 'left', marginRight: '25px' }} src="data:image/jpeg;base64,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" /></Icon>
          <p style={{fontSize: '1.25em'}}>
            <b>University of Washington, Material Science & Engineering</b><br />
            Materials Science and Engineering is an interdisciplinary field that addresses the structure, processing, and
            property relationships in materials for engineering applications.</p>
        </Grid>
        </Grid>

 
      </div>
    </>
  )
}
