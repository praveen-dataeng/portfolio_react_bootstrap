import React from 'react';
import './experience.css';
// Bootstrap imports
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Experience = () => {
  return (
    <>
    <section id="experience">
      <h1>Experience</h1>
      <CardGroup className='text-center'>
            <Card>              
              <Card.Body>
                <Card.Title>Web Development</Card.Title>
                <Card.Text>
                  <ul>
                    <li>Option 1</li>
                    <li>Option 1</li>
                    <li>Option 1</li>
                    <li>Option 1</li>
                    <li>Option 1</li>
                  </ul>                  
                </Card.Text>
              </Card.Body>            
            </Card>
    </CardGroup>
    </section>
    </>
  );
}

export default Experience