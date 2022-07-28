import React from 'react';
import './footer.css';

// react-icons
import {FaGithubSquare, FaLinkedin, FaPython} from 'react-icons/fa';

// Bootstrap imports
import Button from 'react-bootstrap/Button';

const Footer = () => {
  return (
    <>
      <section id="footer">
        <div className='footer__logo'>
          PORTFO<span>Lio</span>
        </div>
        {/* <div className='footer__navlinks'>
          <a href="#">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>
        </div> */}
        <div className='footer__social'>          
            <Button href="https://www.github.com" target='_blank' variant="outline-warning"><FaGithubSquare/></Button>{' '}
            <Button href="https://www.linkedin.com/" target='_blank' variant="outline-warning"><FaLinkedin/></Button>{' '}
            <Button href="https://www.anaconda.org" target='_blank' variant="outline-warning"><FaPython/></Button>{' '}
        </div>
        <div className="footer__copyright">
          <p>&#169; PORTFO<span>LIO</span> resume. All rights reserved</p> 
        </div>
      </section>
    </>
      )
}

export default Footer