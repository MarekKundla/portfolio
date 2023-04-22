import React from 'react'
import CTA from './CTA'
import HeaderSocial from './HeaderSocials'
import './header.css'
import ME from '../../assets/me.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Marek Kundla</h1>
        <h5 className="text-light">Frontend Developer</h5>
        <CTA />

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>

        <HeaderSocial />
      </div>
    </header>
  )
}

export default Header