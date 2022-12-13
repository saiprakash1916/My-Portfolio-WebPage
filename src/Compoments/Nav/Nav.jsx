import React, { useState } from 'react'
import './Nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine, RiMessage3Line} from 'react-icons/ri'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome/></a>
      <a href="#About" onClick={() => setActiveNav('#About')} className={activeNav === '#About' ? 'active' : ''}><AiOutlineUser/></a>
      <a href="#Experience" onClick={() => setActiveNav('#Experience')} className={activeNav === '#Experience' ? 'active' : ''}><BiBook/></a>
      <a href="#Services" onClick={() => setActiveNav('#Services')} className={activeNav === '#Services' ? 'active' : ''}><RiServiceLine/></a>
      <a href="#Contact" onClick={() => setActiveNav('#Contact')} className={activeNav === '#Contact' ? 'active' : ''}><RiMessage3Line/></a>
    </nav>
  )
}

export default Nav