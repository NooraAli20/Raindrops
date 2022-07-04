import React from 'react'
import {Link} from 'react-router-dom'
import './VideoStyles.css'

import rainVideo from '../assets/raindrops.mp4'

const Video = () => {
  return (
    <div className='hero'>
            <video autoPlay loop muted id='video'>
                <source src={rainVideo} type='video/mp4'/>
            </video>
        <div className='content'>
            <h1>Rain drops</h1>
            <p>Let start counting rain drops</p>
            <div>
              <Link to='/about' className='btn'>Read more</Link>
              <Link to='/contact' className='btn btn-light'>Donate</Link>
            </div>
        </div>
    </div>
  )
}

export default Video