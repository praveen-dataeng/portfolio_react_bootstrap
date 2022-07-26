import React from 'react';

// react-icons
import {FaGithubSquare, FaLinkedin, FaPython} from 'react-icons/fa';

// Bootstrap imports
// import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

const Socials = () => {
  return (
    <>
        {/* <Stack direction="horizontal" gap={3}>      
            <Button href="https://www.github.com" target='_blank' variant="outline-dark"><FaGithubSquare/></Button>
            <Button href="https://www.linkedin.com/" target='_blank' variant="outline-dark"><FaLinkedin/></Button>
            <Button href="https://www.anaconda.org" target='_blank' variant="outline-dark"><FaPython/></Button>
        </Stack> */}

        <div className="d-flex flex-column align-items-start">
          <div className="p-2"><Button href="https://www.github.com" target='_blank' variant="outline-dark"><FaGithubSquare/></Button></div>
          <div className="p-2"><Button href="https://www.linkedin.com/" target='_blank' variant="outline-dark"><FaLinkedin/></Button></div>
          <div className="p-2"><Button href="https://www.anaconda.org" target='_blank' variant="outline-dark"><FaPython/></Button></div>
        </div>
    </>
  )
}

export default Socials