import React from 'react';
import './Nav.css';
import '../Intro/Intro';
import Toggle from '../Toggle/Toggle';
import { Link } from 'react-scroll';


function Navbar() {
  return (
    <div className="n-wrapper">
      <div className='n-left'>
        <div className='n-name'>Francis</div>
            <Toggle/>
      </div>
      <div className='n-right'>
        <div className='n-list'>
            <ul style={{listStyleType: 'none'}}>

             <li>Home</li>
              <li>Services</li>
             <li>Experience</li>
              <li>Portfolio</li>
            <li>Testimonials</li>
            </ul>
        </div>
        <button className='button n-button '>Contact </button>
      </div>
    </div>
  )
}

export default Navbar;
