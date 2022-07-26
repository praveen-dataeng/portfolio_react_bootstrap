import React from 'react'
import CV from '../../assets/reference.pdf'

// Bootstrap imports
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

const CTA = () => {
  return (
    <>
        <Stack direction="horizontal" gap={3}>
            <Button variant="success" href={CV} download className=''>Download CV</Button>{' '}
            <Button variant="secondary" href="#contact">Contact Me</Button>{' '}
        </Stack>
        
    </>
  )
}

export default CTA