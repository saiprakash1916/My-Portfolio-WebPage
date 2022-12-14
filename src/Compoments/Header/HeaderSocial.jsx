import React from 'react'
import {BsLinkedin, BsFacebook } from 'react-icons/bs'
import {AiOutlineGithub} from 'react-icons/ai'

const HeaderSocial = () => {
  return (
    <div className='header__social'>
        <a href="https://www.linkedin.com/in/saiprakashsikhakolli/" target="_blank"><BsLinkedin/></a>
        <a href="https://www.facebook.com/" target="_blank"><BsFacebook/></a>
        <a href="https://github.com/saiprakash1916" target="_blank"><AiOutlineGithub/></a>
    </div>
  )
}

export default HeaderSocial