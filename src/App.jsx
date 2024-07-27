import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import Experience from './Components/Experience'
import Skills from './Components/Skills'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Aos from 'aos'
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    Aos.init();
  
  
  }, [])
  
  

  return (
    <>
      <Navbar />
      <Home />  
      <Experience />
      <Skills />
      <Project />
      <Contact/>
    </>
  )
}

export default App
