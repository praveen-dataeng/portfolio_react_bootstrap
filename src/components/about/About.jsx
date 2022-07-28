import React from 'react';
import './about.css';
// React icons
import {FaAward, FaPeopleCarry, FaFolderPlus} from 'react-icons/fa';


import Card from 'react-bootstrap/Card';
// import CardGroup from 'react-bootstrap/CardGroup';
import Figure from 'react-bootstrap/Figure';
import Button from 'react-bootstrap/Button';
import MyImage from '../../assets/images/myself.JPG'

const About = () => {
  return (
    <>
    <section id = 'about'>
    <h5 className='text-center text-white'>Get to know</h5>    
    <h1 className='text-center text-white'>About Me</h1>
    <hr />
    <div class="row g-0 bg-transparent position-relative">
        <div class="col-md-6 mb-md-0 p-md-5">
            <Figure id='photo'>
                <Figure.Image                  
                  width="320"                        
                  // className="rounded-4 figure-img img-fluid rounded"
                  alt="Praveen"
                  src={MyImage}
                  className="my__profile shadow-lg rounded figure-img img-fluid p-3 mb-5 bg-warning rounded-4"                  
                />
            </Figure>
        </div>
        <div class="col-md-6 pt-5">
        <div class="container text-center">
        <div class="row align-items-center">
          <div class="col">
            <Card border="transparent" style={{ width: '10rem', height: '11rem' }} className='text-center'>
              <Card.Header><FaAward /></Card.Header>
              <Card.Body>
                <Card.Title className='mark'>Experience</Card.Title>
                <Card.Text className='small text-muted'>
                  5+ Years of experince in IT domain
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
            <Card border="light" style={{ width: '10rem', height: '11rem' }} className='text-center'>
              <Card.Header><FaPeopleCarry /></Card.Header>
              <Card.Body>
                <Card.Title className='mark'>Clients</Card.Title>
                <Card.Text className='small text-muted'>
                  Worked with 5+ clients.
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div class="col">
            <Card border="light" style={{ width: '10rem', height: '11rem' }} className='text-center'>
              <Card.Header><FaFolderPlus /></Card.Header>
              <Card.Body>
                <Card.Title className='mark'>Projects</Card.Title>
                <Card.Text className='small text-muted'>
                  Completed 10+ projects in Machine Learning
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>            <br />
          <p class="lead text-start text-white">
            After completion of my <u>"Electrical Engineering"</u> degree i started my
            career as Electrical supervisor role with my own construction company....
            In the mean while i got oppertuniy in IT company as <u>"Mainframe Engineer"</u>
            with decent year of experince., being very passionate about <i>"Data Science" </i>
             i have started to learn python programming language & got the oppertuniy to work as
            <em>Python Engineer</em> which currently i'm working...
          </p>
          <Button variant="secondary" href="#contact">Contact Me</Button>{' '}
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default About