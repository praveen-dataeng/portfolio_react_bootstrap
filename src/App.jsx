import React from 'react';
import Header from './components/header/Header';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <>
    <Header/>
    <About/>
    <Experience/>
    <Skills/>
    <Projects/>
    <Footer/>    
    </>
  )
}

export default App