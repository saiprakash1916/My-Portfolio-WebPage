import React from 'react'
import './Experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='Experience'>
        <h5>What Skills I Have</h5>
        <h2>Experience</h2>
        <div className='container experience__container'>
            <div className='experience__frontend'>
              <h3>Frontend Developemt</h3>
              <div className='experience__content'> 
                  <article className='experience__details'>
                    <BsPatchCheckFill className='.experience__details-icons'/>
                    <div>
                      <h4>HTML</h4>
                      <small className='text-light'>Experienced</small>
                    </div>
                  </article>
                  <article className='experience__details'>
                    <BsPatchCheckFill className='.experience__details-icons'/>
                    <div>
                      <h4>CSS</h4>
                      <small className='text-light'>Intermediate</small>
                    </div>
                  </article>
                  <article className='experience__details'>
                    <BsPatchCheckFill className='.experience__details-icons'/>
                    <div>
                      <h4>BootStrap</h4>
                      <small className='text-light'>Intermediate</small>
                    </div>
                  </article>
                  <article className='experience__details'>
                    <BsPatchCheckFill className='.experience__details-icons'/>
                    <div>
                      <h4>JavaScript</h4>
                      <small className='text-light'>Intermediate</small>
                    </div>
                  </article>
                  <article className='experience__details'>
                    <BsPatchCheckFill className='.experience__details-icons'/>
                    <div>
                      <h4>React Js</h4>
                      <small className='text-light'>Intermediate</small>
                    </div>
                  </article>
              </div>
            </div>
            <div className='experience__backend'>
              <h3>Backend Developemt</h3>
              <div className='experience__content'> 
                  <article className='experience__details'>
                    <BsPatchCheckFill className='.experience__details-icons'/>
                    <div>
                      <h4>Core Java</h4>
                      <small className='text-light'>Intermediate</small>
                    </div>
                  </article>
                  <article className='experience__details'>
                    <BsPatchCheckFill className='.experience__details-icons'/>
                    <div>
                      <h4>JDBC</h4>
                      <small className='text-light'>Intermediate</small>
                    </div>
                  </article>
                  <article className='experience__details'>
                    <BsPatchCheckFill className='.experience__details-icons'/>
                    <div>
                      <h4>JSP & Servlets</h4>
                      <small className='text-light'>Intermediate</small>
                    </div>
                  </article>
                  <article className='experience__details'>
                    <BsPatchCheckFill className='.experience__details-icons'/>
                    <div>
                      <h4>Spring</h4>
                      <small className='text-light'>Intermediate</small>
                    </div>
                  </article>
                  <article className='experience__details'>
                    <BsPatchCheckFill className='.experience__details-icons'/>
                    <div>
                      <h4>Database MySql</h4>
                      <small className='text-light'>Intermediate</small>
                    </div>
                  </article>
              </div>
            </div>
        </div>
    </section>
  )
}

export default Experience