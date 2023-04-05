import React from 'react'
import About from './components/about/about'
import Contact from './components/contact/contact'
import Header from './components/header/header'
import Projects from './components/projects/projects'


const App = () => {
  return (
    <>
      <Header />
      <About />
      <Projects />
      <Contact />
    </>
  )
}

export default App