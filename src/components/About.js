import React from 'react'
import './AboutStyles.css'

import Drop from '../assets/drop.jpg'
import Rain from '../assets/rain.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div className='about'>
        <div className='left'>
            <h1>Knowledge</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <Link to='/contact'>
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className='right'>
          <div className='img-container'>
            <div className='image-stack top'>
              <img src={Rain} className='img' alt=''/>
            </div>
            <div className='image-stack bottom'>
              <img src={Drop} className='img' alt=''/>
            </div>
          </div>

        </div>

    </div>
  )
}

export default About