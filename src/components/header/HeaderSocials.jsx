import React from 'react'
import { BsLinkedin, BsGithub, BsInstagram } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/marek-kundla-a7a675122/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/MarekKundla" target='_blank'><BsGithub /></a>
        <a href="https://www.instagram.com/marekkundla/" target='_blank'><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials