import React, { useRef } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Link } from 'react-router-dom'
import Home from './Home'
import Projects from './Projects'
import Error from './Error'
import Contact from './Contact'
import About from './About'

export default function Navbar() {

  const goToContactMe = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth'
    })
  }

  const projectSection = useRef(null)
  const aboutSection = useRef(null)


  const scrollToProjects = () => {
    window.scrollTo({
      top: projectSection.current.offsetTop,
      behavior: 'smooth'
    })
  }

  const scrollToAbout = () => {
    window.scrollTo({
      top: aboutSection.current.offsetTop,
      behavior: 'smooth'
    })
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <>
      <Router>
        <div className='navbar'>
          <Link className='navbar-decoration' id='name'>
            <div id='nav-name'>Von</div>
          </Link>
          <Link className='navbar-decoration' id='home' to='/' >
            <div
              onClick={scrollToTop}
            >HOME</div>
          </Link>
          <div className='navbar-decoration edit' id='go-to-projects'>
            <div
              onClick={scrollToProjects}
            >PROJECTS</div>
          </div>
          <Link className='navbar-decoration' id='home' to='/'>
            <div
              onClick={scrollToAbout}
            >ABOUT ME</div>
          </Link>
          <div className='navbar-decoration edit' onClick={goToContactMe} id='go-to-projects'>
            <div>CONTACT ME</div>
          </div>
        </div>
        <Routes>
          <Route
            exact path='/'
            element={<Home
              toProjects={projectSection}
              toAbout={aboutSection}
            />} />
          <Route
            exact path='/projects'
            element={<Projects />} />
          <Route
            exact path='/error'
            element={<Error />} />
          <Route
            exact path='/contact'
            element={<Contact />} />
          <Route
            exact path='/about'
            element={<About />} />
        </Routes>
      </Router>

    </>
  )
}