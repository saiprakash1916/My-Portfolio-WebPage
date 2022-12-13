import React from 'react'
import './Header.css'
import CTA from './CTA'
import SAI from '../../assets/SAI.jpg';
import HeaderSocial from './HeaderSocial'

const Header = () => {
  return (
    <header>
        <div className='container header__container'>
            <h5>Hello I'm</h5>
            <h1>S. Sai Prakash</h1>
            <h5 className='text-light'>Full Stack Developer</h5>
            <CTA/>
            <HeaderSocial/>
            <div className='me'>
                <img src={SAI} alt="Profile Picture"/>
            </div>
            <a href='#Contact' className='scroll__down'>Scroll Down</a>
        </div>
    </header>
  )
}

export default Header