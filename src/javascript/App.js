import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Particles from './components/Particles'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import '../stylesheets/Index.scss'

const App = () => {
  return (
    <div>
      <Navbar />
      <div className='container px-0'>
        <Particles />
        <Home />
        <About />
        <Experience />
        <Projects />
      </div>
    </div>
  )
}

export default App