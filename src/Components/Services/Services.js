import React from 'react'
import Humble from "../../img/humble.png";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import './Services.css';
import Card from '../Card/Card';
import Resume from './FRANSARP_DIGITAL CV WEB.pdf'
import {themeContext} from "../../Context";
import {useContext} from "react"
import { motion } from 'framer-motion';

function Services() {

  const transition = {duration : 1, type: 'spring'}

  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='services' id='Sercices'>
        {/* left side */}
        <div className='awesome'>
          <span>My Awesome</span>
          <span>Services</span>
          <span>I offer top-notch Website Design services tailored to your specific needs. <br/>
            With years of experience, I can transform your website into a powerful online asset. 
            <br/> Let's collaborate to make your online dreams a reality.</span>
            <a href={Resume} download>
            <button className='button s-button'>Download CV</button>
            </a>
            <div className='blur s-blur1' style={{background: "#ABF1FF94"}}></div>
            </div>

        {/* right side */}
        <div className='cards'>
          {/* First Card */}
          <motion.div 
          whileInView={{left: "14rem"}}
           initial={{left: "25%"}}
           transition={transition}
          style={{left: '14rem'}}>
            <Card
            emoji = {HeartEmoji}
            heading = {'Website & Mobile Dev'}
            detail = {"HTML | CSS | BootStrap | React | Figma | JavaScript | Python | Dart | Flutter"}
            />
          </motion.div>
          {/* Second Card */}
          <motion.div 
          initial={{top: "12rem"}}
          whileInView={{left: "-4%"}}
          transition={transition}
          style={{top: "12rem", left: "-4rem"}}>
            <Card
            emoji={Glasses}
            heading={"WordPress Developer"}
            detail={"Themes | Plugin | API | PHP | Composer | Laravel | Joomla"}
            />
          </motion.div>
          {/* Third Card */}
          <motion.div 
          initial={{top: "20rem"}}
          whileInView={{left: "14rem"}}
          transition={transition}
          style={{top: "20rem", left: "14rem"}}>
            <Card
            emoji={Humble}
            heading={"Back-End Developer"}
            detail={"Node.js | MySQL | Express | AWS/AZURE | Firebase | API | Git/GitHub | NPM | MongoDB | PostMan"}
            />
          </motion.div>
          <div className="blur s-blur2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services;