import React from 'react'
import './footer.css'
import {FaFacebookF, FaLinkedinIn} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Marek</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/marek.kundla"><FaFacebookF /></a>
        <a href="https://www.instagram.com/marekkundla/"><FiInstagram /></a>
        <a href="https://www.linkedin.com/in/marek-kundla-a7a675122/"><FaLinkedinIn /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; EGATOR Tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer