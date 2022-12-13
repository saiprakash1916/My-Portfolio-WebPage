import React from 'react'
import Header from './Compoments/Header/Header'
import Nav from './Compoments/Nav/Nav'
import About from './Compoments/About/About'
import Experience from './Compoments/Experience/Experience'
import Services from './Compoments/Services/Services'
import Portfolio from './Compoments/Portfolio/Portfolio'
import Testimonials from './Compoments/Testimonials/Testimonials'
import Contact from './Compoments/Contact/Contact'
import Footer from './Compoments/Footer/Footer'

const App = () => {
  return (
    <div>
      <Header/>
      <Nav/>
      <About/>
      <Experience/>
      <Services/>
      <Portfolio/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App