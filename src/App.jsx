import './index.css';
import React from 'react';
import Header from './components/header/Header';
import Navs from './components/navigation/Navs';
import About from './components/about/About';
import Experience from './components/experience/Experience';
import Skills from './components/skills/Skills';
import Projects from './components/projects/Projects';
import Resume from './components/resume/Resume';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

// Bootstrap Imports
import Stack from 'react-bootstrap/Stack';

const App = () => {
  return (
    <>
    <Stack className='container' gap={5}>        
        <div><Header/></div>
        <div><Navs/></div>       
        <div><About/></div>        
        <div><Experience/></div>
        <div><Skills/></div>
        <div><Projects/></div>
        <div><Resume/></div>
        <div><Contact/></div>
        <div><Footer/></div>
    </Stack>   
    </>
  )
}

export default App