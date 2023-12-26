import React from 'react'
import './Footer.css';
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Facebook from '@iconscout/react-unicons/icons/uil-facebook'
import Github from '@iconscout/react-unicons/icons/uil-github'
import Wave from '../../img/wave.png';

function Footer() {
  return (
    <div className='footer'>
        <img src={Wave} alt='' style={{width: '100%', height: '20rem'}}/>
        <div className='f-content'>
            <span>citizenfrancis.com@gmail.com</span>
            <div className='f-icons'> 
            <Linkedin color='white' size='3rem'/>
            <Insta color='white' size='3rem'/>
            <Facebook color='white' size='3rem'/>
            <Github color='white' size='3rem'/>
            </div>
        </div>
    </div>
  )
}

export default Footer