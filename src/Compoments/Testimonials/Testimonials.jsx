import React from 'react'
import './Testimonials.css'
import AVT1 from '../../assets/avatar1.jpg'
import AVT2 from '../../assets/avatar2.jpg'
import AVT3 from '../../assets/avatar3.jpg'
import AVT4 from '../../assets/avatar4.jpg'

const Testimonials = () => {
  return (
    <section id='Testimonials'>
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <div className='container testimonials__container'>
        <article className='testimonials__'>
          <div className='client__avatar'>
            <img src="" alt=""/>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Testimonials