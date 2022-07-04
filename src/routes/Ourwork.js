import React from 'react'
import Footer from '../components/Footer'
import HeroImage from '../components/HeroImage'
import Navbar from '../components/Navbar'
import OurworkSection from '../components/Ourwork'

const Ourwork = () => {
  return (
    <div>
        <Navbar/>
        <HeroImage heading='Our Work.' text='Learn more about the our ongoing work'/>
        <OurworkSection/>
        <Footer/>
    </div>
  )
}

export default Ourwork