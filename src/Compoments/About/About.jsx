import React from 'react'
import './About.css'
import ME from '../../assets/SaiAbout.png'
import {FiAward, FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='About'>
        <h5>Go to Know</h5>
        <h2>About Me</h2>
        <div className='container about__container'>
            <div className='about__me'>
                <div className='about__me-image'>
                    <img src={ME} alt="About me picture"/>
                </div>
            </div>
            <div className='about__content'>
                <div className='about__cards'>
                  <article className='about__card'>
                      <FiAward className='about__icon'/>
                      <h5>Experience</h5>
                      <small>1.7+ years Working</small>
                  </article>
                  <article className='about__card'>
                      <FiUsers className='about__icon'/>
                      <h5>Clients</h5>
                      <small>10 + Worldwide</small>
                  </article>
                  <article className='about__card'>
                      <VscFolderLibrary className='about__icon'/>
                      <h5>Projects</h5>
                      <small>2 Completed</small>
                  </article>
                </div>
                <p>Proven as Associate Engineer with 1.4+ years of experience in Development. Experienced in Designing the Web Applications based on the requirement. Proven skills in completing Black and White box Testing.</p>
                <a href="#Conatct" className='btn btn-primary'>Let's Talk</a>
            </div>
        </div>
    </section>
  )
}

export default About