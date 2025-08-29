import React from 'react'
import Hero from './sections/Hero'
import Navbar from './sections/Navbar'
import About from './sections/About'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import ExtraProjects from './sections/ExtraProjects'
import WorkExperience from './sections/WorkExperience' // Add this import

const App = () => {
  return (
    <main className= "max-w-7xl mx-auto" >
      <Navbar/>
      <Hero/>
      <About/>
      <WorkExperience/> {/* Add this component */}
      <Projects/>
      <ExtraProjects/>
      <Contact/>
      <Footer/>
    </main>
  )
}

export default App