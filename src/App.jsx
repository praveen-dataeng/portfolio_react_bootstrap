import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import Header from './components/header/Header';
import Contact from './components/contact/Contact';
import Navs from './components/navigation/Navs';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Footer from './components/footer/Footer';

const App = () => {
  return (
    <>
      <Header/>
      <Contact/>
      <Navs/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Footer/>    
    </>
  )
}

export default App