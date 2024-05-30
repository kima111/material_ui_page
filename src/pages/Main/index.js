import React from 'react'
import BGVideo from '../../components/BackgroundVideo'
import logoImage from '../../assets/images/Logo.png'
import P1Image from '../../assets/images/Optimized/Projects/bamazon.png'
import P2Image from '../../assets/images/Optimized/Projects/Paju.jpg'
import P3Image from '../../assets/images/Optimized/Projects/eQuipt.jpg'
import P4Image from '../../assets/images/Optimized/Projects/WordGuessingGamePic.png'
import P5Image from '../../assets/images/Optimized/Projects/MEANR.jpg'
import P6Image from '../../assets/images/Optimized/Projects/Care_Hawaii.jpg'
import P7Image from '../../assets/images/Optimized/Projects/iSushi2.png'
import P8Image from '../../assets/images/Optimized/Projects/Nehoa.png'
import CCNPImage from '../../assets/images/ccnp.jpg'
import L2Image from '../../assets/images/Optimized/Logos/JS.png'
import mseImage from '../../assets/images/uw_mse.png'
import ProjectCard from '../../components/ProjectCard'
import Icon from '../../components/TechIcon'
import { Grid } from '@material-ui/core'
import Test from '../../assets/images/profile.png'
import '../Main/index.scss'
import { FadeOnUp } from 'nehoa'
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
        </BGVideo>
      </div>
      <br />
      <div className="mainContainer">
        <Grid container spacing={1} >
          <Grid item sm={8} xs={11} style={{ borderStyle: 'solid', borderWidth: '2px', borderColor: '#dddddd', borderRadius: '5px', margin: '70px', padding: '15px' }}>
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
        <p className="section-header">Here are some of my best projects:</p>
        <Grid container spacing={2} justify="center">
        <Grid item lg={3} sm={6} xs={12} style={{ textAlign: 'center', margin: '15px', paddingLeft: '25px' }}>
            <ProjectCard altSource="Nehoa NPM Package" imageSource={P8Image} webLink="https://www.npmjs.com/package/nehoa" title="Nehoa" description="Nehoa is an NPM package filled with useful UI and Transitional Effects. Currently it is in the nascent stages, and will continue to add to the library."/>
          </Grid>
          <Grid item lg={3} sm={6} xs={12} style={{ textAlign: 'center', margin: '15px', paddingLeft: '25px' }}>
            <ProjectCard altSource="iSushi Project Image" imageSource={P7Image} webLink="https://www.issaquahisushi.com/" title="iSushi" description="Using Next.JS, Sanity.io, and Styled Components, I created a website to help customers navigate a multitude of sushi and teriyaki options. As soon as owner is ready, online ordering will be available."/>
          </Grid>
          <Grid item lg={3} sm={6} xs={12} style={{ textAlign: 'center', margin: '15px', paddingLeft: '25px' }}>
            <ProjectCard altSource="Care Hawaii Project Image" imageSource={P6Image} webLink="http://carehawaii.info/" herokuLink="https://care-hawaii.herokuapp.com/" title="Care Hawaii" description="Created a website for Care Hawaii. Care Hawaii is an organization that helps provide outpatient mental health services to Hawaii's children, adolescents and adults. Created as a full stack application that works with other providers." />
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
            <Icon link="https://www.sanity.io/">
              <img alt="Sanity.io Logo" style={{ width: '12vw' }} src="data:image/png;base64,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" />
            </Icon>
          </Grid>
          <Grid item sm={3} xs={6} style={{ textAlign: 'center' }}>
            <Icon link="https://styled-components.com/">
              <img alt="Styled Components Logo" style={{ width: '10vw' }} src="https://www.styled-components.com/atom.png" />
            </Icon>
          </Grid>
          <Grid item sm={3} xs={6} style={{ textAlign: 'center' }}>
            <Icon link="https://react-bootstrap.github.io/">
              <img alt="React Bootstrap Logo" style={{ width: '8vw' }} src="data:image/png;base64,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" />
            </Icon>
          </Grid>
          <Grid item sm={3} xs={6} style={{ textAlign: 'center' }}>
            <Icon link="https://nextjs.org/">
              <img alt="Next JS Logo" style={{ width: '15vw' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/1200px-Nextjs-logo.svg.png" />
            </Icon>
          </Grid>
          <Grid item sm={3} xs={6} style={{ textAlign: 'center' }}>
            <Icon link="https://reactjs.org/">
              <img alt="React JS Logo" style={{ width: '18vw' }} src="/React-icon.svg.png" />
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
              <img alt={L2Image} style={{ width: '8vw', marginTop: '2vw' }} src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/480px-Unofficial_JavaScript_logo_2.svg.png" />
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
              <img link="https://www.cisco.com/c/en/us/training-events/training-certifications/certifications/professional/ccnp-routing-switching.html" alt="Cisco Certified Network Professional Logo" src={CCNPImage} />
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
              <img link="https://mpng.subpng.com/20180712/suh/kisspng-microsoft-certified-professional-microsoft-certifi-5b46fff2647c55.0138753915313796984116.jpg" alt="Microsoft IT Professional Logo" src="https://www.pngitem.com/pimgs/m/210-2108492_mcitp-logo-microsoft-certified-it-professional-hd-png.png" />
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
