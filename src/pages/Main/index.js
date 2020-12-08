import React from 'react'
import BGVideo from '../../components/BackgroundVideo'
// import { ReactComponent as Ksvg } from '../../assets/images/Kim.svg'
import logoImage from '../../assets/images/Logo.png'
import P1Image from '../../assets/images/Projects/bamazon.PNG'
import P2Image from '../../assets/images/Projects/Paju.PNG'
import P3Image from '../../assets/images/Projects/eQuipt.PNG'
import P4Image from '../../assets/images/Projects/WordGuessingGamePic.PNG'
import P5Image from '../../assets/images/Projects/MEANR.PNG'
import P6Image from '../../assets/images/Optimized/Projects/Care_Hawaii.jpg'
import mseImage from '../../assets/images/uw_mse.png'
import ProjectCard from '../../components/ProjectCard'
import Icon from '../../components/TechIcon'
import { Grid } from '@material-ui/core'
import Test from '../../assets/images/profile.png'
import '../Main/index.scss'
import { FadeOnUp } from 'nehoa'
// import ContactIcons from '../../components/Contact'
import {AiOutlineMail, AiFillGithub, AiFillLinkedin} from 'react-icons/ai'


export default function Main() {

  return (
    <div>
      <div>
        <BGVideo className='fade-in videoBG'>
        <img alt="profile" src={Test} className="profile-image" />
        <img alt="logo" src={logoImage} className="logo" />
        <p className="contact-item-title">Feel free to connect:</p>
            <a href="mailto:kima111@gmail.com" className="contact-item1"><AiOutlineMail/></a>
            <a href="https://github.com/kima111" className="contact-item2"><AiFillGithub /></a>
            <a href="https://www.linkedin.com/in/abraham-kim-481a0961/" className="contact-item3"><AiFillLinkedin /></a>
        {/* <Ksvg className="logo" /> */}
        {/* <img alt="background" src={Test} style={{ position: 'absolute', zIndex: '-5', top: '0', left: '0', width: '100vw' }} /> */}
        {/* <div className="contact-items"><ContactIcons/></div> */}
        </BGVideo>
      </div>
      <br />
      <div className="mainContainer">
        <Grid container spacing={1} >
          <Grid item sm={8} xs={11} style={{ borderStyle: 'solid', borderWidth: '2px', borderColor: '#dddddd', borderRadius: '5px', margin: '20px', padding: '15px' }}>
            <FadeOnUp duration='1s'>
              <p className="paragraph-header">Hello, and welcome to my site</p>
            </FadeOnUp>
            <FadeOnUp duration='1.5s'>
              <p className="profile-description">
                I am a Full Stack Web Developer in the Seattle area who enjoys working both on front end design, and back end architecture. I have come to a great appreciation for all the aspects
                that go into designing and developing a website. Whether it's making sure the user has a wonderful experience, or implementing effective algorithms, to optimizing database architecures,
                I believe the greatest products merge both the arts and sciences. This is why I have invested myself into pursuing and acclimating to greater heights within both fields,
                or in other words, the entire stack.
            </p>
            </FadeOnUp>
          </Grid>
          <Grid item sm={3} xs={12}>
      
          </Grid>
        </Grid>
        <p className="section-header">Of course, here are some of my best projects:</p>
        <Grid container spacing={2} justify="center">
          <Grid item lg={3} sm={6} xs={12} style={{ textAlign: 'center', margin: '15px', paddingLeft: '25px' }}>
            <ProjectCard altSource="Care Hawaii Project Image" imageSource={P6Image} herokuLink="https://care-hawaii.herokuapp.com/" title="Care Hawaii" description="Created a website for Care Hawaii. Care Hawaii is an organization that helps provide outpatient mental health services to Hawaii's children, adolescents and adults. Created as a full stack application that works with other providers." />
          </Grid>
          <Grid item lg={3} sm={6} xs={12} style={{ textAlign: 'center', margin: '15px', paddingLeft: '25px' }}>
            <ProjectCard altSource="Paju Restaurant Project Image" imageSource={P2Image} webLink="https://www.pajurestaurant.com" title="Paju" description="Volunteered some time to help out a local business during the COVID-19 Pandemic. This is a full stack production website, that uses database triggers to enable real time UI changes. In addition, it enables chronological features using Cron Jobs." />
          </Grid>
          <Grid item lg={3} sm={6} xs={12} style={{ textAlign: 'center', margin: '15px', paddingLeft: '25px' }}>
            <ProjectCard altSource="eQuipt Project Image" imageSource={P3Image} githubLink="https://github.com/Munchinator6354/eQuipt" herokuLink="https://larp-equipt.herokuapp.com/" title="eQuipt" description="A great way for LARPs (Live Action Role Players) to keep stock of their inventory and even give some to other players. A project which uses the full MERN stack (Mongo, Express, React, Node)." />
          </Grid>
          <Grid item lg={3} sm={6} xs={12} style={{ textAlign: 'center', margin: '15px', paddingLeft: '25px' }}>
            <ProjectCard altSource="Bamazon Project Image" imageSource={P1Image} githubLink="https://github.com/kima111/bamazon" title="Bamazon" description="This is a Command Line Interface app which will work a lot like a purchasing terminal demonstrating the use of Node.js which is connected to a MySQL database." />
          </Grid>
          <Grid item lg={3} sm={6} xs={12} style={{ textAlign: 'center', margin: '15px', paddingLeft: '25px' }}>
            <ProjectCard altSource="Word Guessing Game Project Image" imageSource={P4Image} webLink="https://kima111.github.io/Word-Guess-Game/" githubLink="https://github.com/kima111/Word-Guess-Game" title="Word Guessing Game" description="See if you can guess the words. App demonstrating the use of pure javascript." />
          </Grid>
          <Grid item lg={3} sm={6} xs={12} style={{ textAlign: 'center', margin: '15px', paddingLeft: '25px' }}>
            <ProjectCard altSource="MEANR Project Image" imageSource={P5Image} githubLink="https://github.com/kima111/MEANR" herokuLink="https://meanr.herokuapp.com/" title="MEANR" description="A full stack app to help developers build fully stacked applications quickly. This is built with (Mongo, Express, Axios, Node, and React)" />
          </Grid>
        </Grid>
        <hr />
        <br />
        <br />
        <p className="section-header">Tech I truly enjoy and <img alt="heart logo" style={{ width: '28px', marginTop: '-6px' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png" /> working with:</p>
        <Grid container spacing={2}>
          <Grid item sm={3} xs={6} style={{ textAlign: 'center' }}>
            <Icon link="https://reactjs.org/">
              <img alt="React JS Logo" style={{ width: '18vw' }} src="https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png?itok=VbfDeSgJ" />
            </Icon>
          </Grid>
          <Grid item sm={3} xs={6} style={{ textAlign: 'center' }}>
            <Icon link="https://www.mongodb.com/">
              <img alt="Mongo DB Logo" style={{ width: '10vw' }} src="https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png" />
            </Icon>
          </Grid>
          <Grid item sm={3} xs={6} style={{ textAlign: 'center' }}>
            <Icon link="https://github.com/">
              <img alt="Github Logo" style={{ width: '20vw', marginTop: '2vw' }} src="https://s19386.pcdn.co/wp-content/uploads/2017/10/github-logo-1.png" />
            </Icon>
          </Grid>
          <Grid item sm={3} xs={6} style={{ textAlign: 'center' }}>
            <Icon link="https://www.javascript.com/">
              <img alt="Javascript Logo" style={{ width: '8vw', marginTop: '2vw' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" />
            </Icon>
          </Grid>
          <Grid item sm={3} xs={6} style={{ textAlign: 'center' }}>
            <Icon link="https://sass-lang.com/">
              <img alt="SASS Logo" style={{ width: '14vw', marginTop: '2vw' }} src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQp0qS4amN6Pas2IyhGrnl8LLrMX19yNzW9Lg&usqp=CAU" />
            </Icon>
          </Grid>
          <Grid item sm={3} xs={6} style={{ textAlign: 'center' }}>
            <Icon link="https://nodejs.org/en/">
              <img alt="Node JS Logo" style={{ width: '14vw', marginTop: '2vw' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png" />
            </Icon>
          </Grid>
          <Grid item sm={3} xs={6} style={{ textAlign: 'center' }}>
            <Icon link="https://www.npmjs.com/">
              <img alt="NPM Logo" style={{ width: '14vw', marginTop: '2vw' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/1200px-Npm-logo.svg.png" />
            </Icon>
          </Grid>
          <Grid item sm={3} xs={6} style={{ textAlign: 'center' }}>
            <Icon link="https://code.visualstudio.com/">
              <img alt="Visual Code Logo" style={{ width: '8vw', marginTop: '2vw' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png" />
            </Icon>
          </Grid>
        </Grid>

        <hr />
        <br />
        <br />
        <p className="section-header">Education & Certifications:</p>
        <Grid container spacing={2}>
          <Grid item sm={12}>
            <div className="education-icon">
              <img link="https://bootcamp.uw.edu/coding/" alt="University of Washington Continuing Education Logo" src="https://coursereport-s3-production.global.ssl.fastly.net/uploads/school/logo/521/original/uwash.png" />
            </div>
            <p className="education">
              <b>University of Washington, Full Stack Development</b><br />A 24-week intensive program focused on gaining technical programming skills in HTML5, CSS3, Javascript,
          JQuery, Bootstrap, Firebase, Node.js, MySQL, MongoDB, Express, Handelbars.js and React.js.</p>
          </Grid>
          <hr />
          <Grid item sm={12}>
            <div className="education-icon">
              <img link="https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/ccnp-routing-switching.html" alt="Cisco Certified Network Professional Logo" src="https://computingforgeeks.com/wp-content/uploads/2019/07/best-ccnp-rs-books.jpg" />
            </div>
            <p className="education">
              <b>Cisco Certified Network Professional, Routing and Switching</b><br />
          Cisco Certified Network Professional (CCNP) Routing and Switching certification validates the ability to plan,
          implement, verify and troubleshoot local and wide-area enterprise networks and work collaboratively with
          specialists on advanced security, voice, wireless and video solutions.
          </p>
          </Grid>
          <hr />
          <Grid item sm={12}>
            <div className="education-icon">
              <img link="https://docs.microsoft.com/en-us/learn/certifications/" alt="Microsoft IT Professional Logo" src="https://www.pngitem.com/pimgs/m/210-2108492_mcitp-logo-microsoft-certified-it-professional-hd-png.png" />
            </div>
            <p className="education">
              <b>Microsoft Certified I.T. Professional, Server Administrator</b><br />
          The MCITP certification builds on a combination of MCTS (Microsoft Certified Technology Specialist)
          prerequisites. A Microsoft Certified IT Professional (MCITP) certification proves the comprehensive set of skills
          to perform the IT job role of Server Administrator. This includes the ability to plan and implement servers and
          server technologies, such as active directory, domain name systems, domain host control protocols, failover
          clusters, file securities, and hosting solutions.
          </p>
          </Grid>
          <hr />
          <Grid item sm={12}>
            <div className="education-icon">
            <img link="https://mse.washington.edu/" alt="University of Washington Materials Science and Engineering Logo" src={mseImage}/>
            </div>
            <p className="education">
              <b>University of Washington, Material Science & Engineering</b><br />
            Materials Science and Engineering is an interdisciplinary field that addresses the structure, processing, and
            property relationships in materials for engineering applications.</p>
          </Grid>
        </Grid>
      </div>
    </div>
  )
}
