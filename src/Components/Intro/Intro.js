import React from 'react' 
import './intro.css';
import Github from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Mypics from '../../img/newpics.png';
import Vector2 from '../../img/Vector2.png';
import Vector1 from '../../img/Vector1.png';
import thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import Glassesimoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';
import { motion } from 'framer-motion';


const transition = {duration : 2, type: 'spring'}

function Intro() {
  return (
    <div className='intro'>
        <div className='i-left'>
        <div className='i-name'>
          <span>Hi! I Am</span>
          <span>Francis Sarpaning</span>
        <span>Full stack Website developer with good experience in React, wordpress theme & Plugin development, 
          JavaScript, HTML, CSS and NodeJS as well as Mongo DB, 
          MySQL Database and AWS/Azure. Software Engineer with 8+ years of extensive experience.
          </span>
    </div>
    <button className='button i-button'>Hire me</button>
    <div className='i-icons'>
      <a href="www.github.com/ajumapro" target="_blank">
      <img src={Github} alt=''/>
      </a>
      <img src={LinkedIn} alt=''/>
      <img src={Instagram} alt=''/>
    </div>
    </div>
    <div className='i-right'>
      <img src={Vector1} alt=''/>
      <img src={Vector2} alt=''/>
      <img src={Mypics} alt=''/>
      <motion.img
      initial={{left: "-36%"}}
      whileInView={{left: "-24%"}}
      transition={transition}
      src= {Glassesimoji} alt='' />

      <motion.div 
      initial={{top: "-4%",left: '74%'}}
      whileInView={{left: "68%"}}
      transition={transition}
      style={{top: '-4%', left: '68%'}}>
      <FloatingDiv image={Crown} txt1='Web' txt2='Developer'/>
      </motion.div>

      <motion.div
      initial={{left: "9rem", top: "18rem"}}
      whileInView={{left: "0rem"}}
      transition={transition}
      style={{top: '18rem', left: '0rem'}}>
        <FloatingDiv image={thumbup} txt1='Best Design' txt2='Award'/>
      </motion.div>
      {/* Blur divs */ }
      <div className="blur" style={{ background: "rgb(238 210 255)"}}></div>
      <div className="blur" style={{
        background: '#C1F5FF',
        top: '17rem',
        width: '21rem',
        height: '11rem',
        left: '-9rem'
      }}></div>
    </div>
    </div>
  )
}

export default Intro