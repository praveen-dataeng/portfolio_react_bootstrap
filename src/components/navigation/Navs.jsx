import {React, useState} from 'react';
import './navbar.css';

// React-Icons
import {AiFillHome, AiFillContacts} from 'react-icons/ai';
import {BsPersonCircle} from 'react-icons/bs';
import {FaNetworkWired, FaGraduationCap} from 'react-icons/fa';
import {GiSkills} from 'react-icons/gi';
import {ImOffice} from 'react-icons/im';

const Navs = () => {


  const [activeNav, setactiveNav] = useState('#')
  return (
    <>
          <nav>              
                <a href='#' onClick={() => setactiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>             
              
                <a href='#about' onClick={() => setactiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsPersonCircle/></a>
                           
                <a href='#experience' onClick={() => setactiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaNetworkWired/></a>
                            
                <a href='#skills' onClick={() => setactiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><GiSkills/></a>
                            
                <a href='#projects' onClick = {() => setactiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><ImOffice/></a>
                            
                <a href='#resume' className={activeNav === '#resume' ? 'active' : ''} onClick={() => setactiveNav('#resume')}><FaGraduationCap /></a>
                
                <a href='#contact' className={activeNav === '#contact' ? 'active' : ''} onClick={() => setactiveNav('#contact')}><AiFillContacts/></a>
          </nav>
    </>
  );
}

export default Navs