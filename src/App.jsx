import React from 'react'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
const App = () => {
  return (
    <main className= "max-w-7xl mx-auto" >
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App