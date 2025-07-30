import React from 'react'
import './App.css'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Skills from './components/skills/Skills.jsx'
import Qualification from './components/qualification/Qualification.jsx'
import Services from './components/services/Services.jsx'
import Projects from './components/projects/Project.jsx'
import Contact from './components/contact/Contact.jsx'
import Footer from './components/footer/Footer.jsx'
import ThemeToggle from './components/theme/ThemeToggle.jsx'

function App() {
  return (
    <>
      <Header />
      <main className="main ">
        <Home />
        <About />
        <Projects />
        <Skills />
        <Qualification />
        <Services />
        <Contact />
        <Footer />
      </main>
      <ThemeToggle />
    </>
  )
}
export default App
