import React from 'react'
import BGVideo from '../../components/BackgroundVideo'
import { ReactComponent as Ksvg } from '../../assets/images/Kim.svg'
import { ReactComponent as Bsvg } from '../../assets/images/ProfileBoundary.svg'
import P1Image from '../../assets/images/Projects/Clicky_Game.PNG'
import P2Image from '../../assets/images/Projects/Paju.PNG'
import P3Image from '../../assets/images/Projects/eQuipt.PNG'
import P4Image from '../../assets/images/Projects/WordGuessingGamePic.PNG'
import ProjectCard from '../../components/ProjectCard'
import { Container, Grid } from '@material-ui/core'
import Test from '../../assets/images/test.png'
import '../Main/index.scss'


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
          <p style={{ fontSize: '2em', color: '#000000' }}>Hello, and welcome to my site!</p>
          <p style={{ fontSize: '1.5em' }}>
            I am a Full Stack Web Developer in the Seattle area who enjoys working both on front end design, and back end architecture. I have come to a great appreciation for all the aspects
            that go into designing and developing a website; whether it's making sure the user has a wonderful experience, to effective algorithms.
            I believe the greatest products merge both the arts and sciences; which is why I have invested myself into pursuing and acclimating to greater heights within both fields,
            or in other words, the entire stack.
            </p>
        </Grid>
        <Grid sm={12} style={{ margin: '20px', padding: '15px', backgroundColor: '#ffffff' }}>

          <p style={{ fontSize: '2em' }}>These are some of the tech I <img style={{width: '28px', marginTop: '-6px'}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"/> working with:</p>
          <Grid container spacing={2}>

            <Grid item sm={3} style={{ textAlign: 'center' }}>
              <img style={{ width: '18vw' }} src="https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png?itok=VbfDeSgJ" />
            </Grid>
            <Grid item sm={3} style={{ textAlign: 'center' }}>
              <img style={{ width: '10vw' }} src="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png" />
            </Grid>
            <Grid item sm={3} style={{ textAlign: 'center' }}>
              <img style={{ width: '20vw', marginTop: '2vw' }} src="https://s19386.pcdn.co/wp-content/uploads/2017/10/github-logo-1.png" />
            </Grid>
            <Grid item sm={3} style={{ textAlign: 'center' }}>
              <img style={{ width: '8vw', marginTop: '2vw' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" />
            </Grid>
            <Grid item sm={3} style={{ textAlign: 'center' }}>
              <img style={{ width: '14vw', marginTop: '2vw' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQp0qS4amN6Pas2IyhGrnl8LLrMX19yNzW9Lg&usqp=CAU" />
            </Grid>
            <Grid item sm={3} style={{ textAlign: 'center' }}>
              <img style={{ width: '14vw', marginTop: '2vw' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" />
            </Grid>
            <Grid item sm={3} style={{ textAlign: 'center' }}>
              <img style={{ width: '14vw', marginTop: '2vw' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png" />
            </Grid>
            <Grid item sm={3} style={{ textAlign: 'center' }}>
              <img style={{ width: '8vw', marginTop: '2vw' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png" />
            </Grid>
          </Grid>
        <hr />
        <br />
        <br />
        <p style={{fontSize: '2em'}}>Of course, some of my best projects:</p>

        </Grid>
        <Grid container spacing={2} justify="center">
          <Grid item lg={3} sm={6} xs={12} style={{textAlign: 'center', margin: '15px', paddingLeft: '25px'}}>
            <ProjectCard />
          </Grid>
          <Grid item lg={3} sm={6} xs={12} style={{textAlign: 'center', margin: '15px', paddingLeft: '25px'}}>
            <ProjectCard imageSource={P2Image} title="Paju" description="Volunteered some time to help out a local business during the COVID-19 Pandemic. This is a full stack production website, that uses database triggers to enable real time UI changes. In addition, it enables chronological features using Cron Jobs."/>
          </Grid>
          <Grid item lg={3} sm={6} xs={12} style={{textAlign: 'center', margin: '15px', paddingLeft: '25px'}}>
            <ProjectCard imageSource={P3Image} title="eQuipt" description="A great way for LARPs (Live Action Role Players) to keep stock of their inventory and even give some to other players. A project which uses the full MERN stack (Mongo, Express, React, Node)."/>
          </Grid>
          <Grid item lg={3} sm={6} xs={12} style={{textAlign: 'center', margin: '15px', paddingLeft: '25px'}}>
            <ProjectCard imageSource={P1Image} title="Clicky Game" description="A game to test your memory. A project which uses React."/>
          </Grid>
          <Grid item lg={3} sm={6} xs={12} style={{textAlign: 'center', margin: '15px', paddingLeft: '25px'}}>
            <ProjectCard imageSource={P4Image} title="Word Guessing Game" description="See if you can guess the words. App demonstrating the use of pure javascript."/>
          </Grid>
          <Grid item lg={3} sm={6} xs={12} style={{textAlign: 'center', margin: '15px', paddingLeft: '25px'}}>
            <ProjectCard/>
          </Grid>

        </Grid>
  

 
      </div>
    </>
  )
}
