import React from 'react';
import './projects.css';

// project logos
import Taxi from '../../assets/images/taxi.png';
import Hike from '../../assets/images/hike.png';
import Loan from '../../assets/images/loanapp.jpeg';
import DeepLearn from '../../assets/images/deeplearning.jpg';
import Discord from '../../assets/images/discord.jpg';
import Music from '../../assets/images/music.png';
import Realestate from '../../assets/images/realestate.jpg';
import Teams from '../../assets/images/teams.png';

// Bootstrap imports
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Row from 'react-bootstrap/Row';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';

const data = [
  {
    id : 1,
    images : Teams,
    name : "p-infoTech Teams app",
    tools: "ReactJs",
    github: "www.github.com",
    status: 'completed',
  },
  {
    id : 2,
    images : Discord,
    name : "p-infoTech blog app",
    tools: "Django, Python,, SQLite3, Bootstrap-V5.2",
    github: "www.github.com",
    status: 'completed',
  },
  {
    id : 3,
    images : Taxi,
    name : "p-infoTech Taxi app",
    tools: "ReactNative, Expo client",
    github: "www.github.com",
    status: 'completed',
  },
  {
    id : 4,
    images : DeepLearn,
    name : "p-infoTech plant disease prediction app",
    tools: "ReactJs, Deep Learning, Docker, Django, TFService, Python",
    github: "www.github.com",
    status: 'completed',
  },
  {
    id : 5,
    images : Realestate,
    name : "p-infoTech Bangalore real estate prediction app",
    tools: "Python, Machine Learning alogorithm, ReactJS/ReactNative",
    github: "www.github.com",
    status: 'completed',
  },
  {
    id : 6,
    images : Loan,
    name : "p-infoTech Bank loan eligibility prediction app",
    tools: "Python, Machine Learning alogorithm, ReactJS/ReactNative",
    github: "www.github.com",
    status: 'completed',
  },
  {
    id : 7,
    images : Hike,
    name : "p-infoTech Messenger app",
    tools: "ReactJS/ReactNative",
    github: "www.github.com",
    status: 'completed',
  },
  {
    id : 8,
    images : Music,
    name : "p-infoTech Entertainment app",
    tools: "ReactJS/ReactNative, MongoDB, Expressjs",
    github: "www.github.com",
    status: 'completed',
  }
]

const Projects = () => {
  return (
    <>
    <section id="projects">
    <h5 className='text-center text-white'>Projects</h5>    
      <h1 className='text-center text-white'>Freelance Projects</h1>
      <hr />
      <br />
      <Row xs={1} md={2} lg={4} className="g-2 text-center">
          {data.map(({id, images, name, tools,status,github }) => (
            <CardGroup>
              <Card key={id} className='bg-warning'>
                <Card.Img variant="top" src={images} className='rounded mx-auto d-block'/>
                <Card.Body>
                  <Card.Title className='text-success'>{name}</Card.Title>
                  <Card.Text className='text-dark'>
                  I have used:<br />
                    <span className='fs-5 text-white'>{tools}</span>                    
                  </Card.Text>
                </Card.Body>
                <Stack direction="horizontal" gap={3} className="mx-auto mb-5">
                    <Button variant="outline-success" href={github} >Git Hub</Button>{' '}
                    <Button variant="outline-secondary" href="#contact" disabled>demo</Button>{' '}
                </Stack>
                <Card.Footer>
                  <small className="text-muted">Status {status}</small>
                </Card.Footer>
              </Card>
            </CardGroup>
          ))}
        </Row>
      
    </section>
    </>
  )
}

export default Projects