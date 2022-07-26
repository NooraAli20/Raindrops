import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter, FaLinkedin } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-container'>
            <div className='left'>
                <div className='location'>
                    <FaSearchLocation size={20} style={{color:'#fff', marginRight:'2rem' }}/>
                    <div>
                        <p>Andra Långgatan 11</p>
                        <h4>Göteborg, Sverige</h4>
                    </div>
                </div>
                <div className='phone'>
                    <h4><FaPhone size={20} style={{color:'#fff', marginRight:'2rem' }}/> 076- 415 23 65</h4>
                </div>
                <div className='email'>
                    <h4><FaMailBulk size={20} style={{color:'#fff', marginRight:'2rem' }}/>raindrops@gmail.com</h4>
                </div>
            </div>
            <div className='right'>
                <h4>About the organisation</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Ut eleifend dui quis velit consequat, vitae varius lorem sagittis. 
                Curabitur ac sapien ut ligula mollis molestie. 
                Nunc finibus urna pulvinar vestibulum tincidunt. Curabitur ut odio id lectus viverra bibendum. 
                Proin scelerisque tortor diam, eu cursus dolor convallis eu. 
                Mauris in odio id quam mollis consequat.</p>
            <div className='social'>
                <FaFacebook size={20} style={{color:'#fff', marginRight:'1rem' }}/>
                <FaTwitter size={20} style={{color:'#fff', marginRight:'1rem' }}/>
                <FaLinkedin size={20} style={{color:'#fff', marginRight:'1rem' }}/>
            </div>
            </div>
        </div>

    </div>)

}

export default Footer