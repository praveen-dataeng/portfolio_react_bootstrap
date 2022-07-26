import React from 'react';
import Typewriter from 'typewriter-effect';

import './header.css';

const Header = () => {
  return (
      <header>
        <div className="container header__container">
          <h5>Hello, Thank you for visiting my Portfolio website:</h5>  
          <h1>Myself, Praveen Kumar and I'm</h1>
          <h5 className='text-light'>
          <Typewriter
            options={{
              strings: ['FullStack Web Development', 'Data Analysis', 'Python Engineer'],
              autoStart: true,
              loop: true,
            }}
          />
          </h5>
        </div>    
      </header>    
  )
}

export default Header