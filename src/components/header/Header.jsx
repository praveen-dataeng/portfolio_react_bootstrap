import React from 'react';
import CTA from './CTA';
import Socials from './Socials';
import LogoImage from '../../assets/images/logo.png';
// React-icons
import {BsArrowDownCircleFill} from 'react-icons/bs'
import './header.css';

// TypeWriting effect
import { useTypewriter, Cursor } from "react-simple-typewriter";

// Bootstrap imports
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';


const Header = () => {
  // tooltip Hover
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Scroll Down
    </Tooltip>
  );
  // TypeWrite effect
  const { text } = useTypewriter({
    words: ["Full Stack Web-Developer", "Data Analyst", "Data Scientist"],
    loop: 0
  });  

  return (
  <>
  <section id="#">
    <div id ='header' className="text-center">
        <div className="container text-center">
            <div className="row align-items-start">
          <Figure>
            <Figure.Image
              className='rounded'
              width={171}
              height={180}
              alt="171x180"
              src={LogoImage}
            />
            <Figure.Caption className="fs-5 text-dark">
              Software Solution to all your Tech needs
            </Figure.Caption>
          </Figure>
        
          <figure className="text-center">
            <blockquote className="blockquote">
              {/* <p className='fs-4 text-light'>Hello, Thank you for visiting my portfolio website</p> */}
              <p className="fs-4 text-white">I'm <span className='fs-1 text-white' >PRAVEEN KUMAR</span></p>
            </blockquote>      
              <h1 className='fs-2 text-warning'>
                {/* Style will be inherited from the parent element */}
                {text}
                <Cursor cursorStyle='_'/>
              </h1>      
          </figure>
        <br />              
              <div className="position-relative">
                <div class="position-absolute top-50 start-50 translate-middle">
                  <div class="col">
                    <CTA/>     
                  </div>
                </div><br />
              </div>
                <div class="col">
                  <Socials/>
                </div>
              <div class="col">
                <div className="d-flex justify-content-end pt-5"> 
                <OverlayTrigger
                  placement="right"
                  delay={{ show: 250, hide: 400 }}
                  overlay={renderTooltip}
                >
                  <Button href="#contact" variant="dark"><BsArrowDownCircleFill/></Button>
                </OverlayTrigger>                   
                </div>
              </div>
            </div>
          </div>
    </div>
    </section> 
  </>    
  );
}

export default Header