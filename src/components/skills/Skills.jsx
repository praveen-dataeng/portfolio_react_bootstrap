import React from 'react';
import './skills.css';

import FullStack from '../../assets/images/fullstack.jpg';
import FrontDev from '../../assets/images/frontEnd.jpg';
import DataBase from '../../assets/images/database.jpg';

// Bootstrap imports
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProgressBar from 'react-bootstrap/ProgressBar';

const Skills = () => {
  return (
    <>
    <section id="skills">
    <h5 className='text-center text-white'>My skills</h5>    
      <h1 className='text-center text-white'>Technical skills</h1>
      <hr />
      <br />
        <Row xs={1} md={2} lg={3} className="d-flex flex-row g-1">
          <Col>
            <Card className="text-start">
              <Card.Img variant="top" src={FrontDev} />
              <Card.Body>
                <Card.Title>Frontend Framework Skills</Card.Title>
                <Card.Text className="text-start text-muted">
                  <Container>
                  <Row>
                      <Col sm={4} lg={5}>ReactJS</Col>
                      <Col sm={8} lg={7}><ProgressBar animated now={75} /></Col>
                    </Row>
                    <Row>
                      <Col sm={4} lg={5}>ReactNative</Col>
                      <Col sm={8} lg={7}><ProgressBar animated now={85} /></Col>
                    </Row>
                    <Row>
                      <Col sm={4} lg={5}>Expo</Col>
                      <Col sm={8} lg={7}><ProgressBar animated now={75} /></Col>
                    </Row>
                    <Row>
                      <Col sm={4} lg={5}>HTML5</Col>
                      <Col sm={8} lg={7}><ProgressBar animated now={95} /></Col>
                    </Row>
                    <Row>
                      <Col sm={4} lg={5}>CSS3</Col>
                      <Col sm={8} lg={7}><ProgressBar animated now={75} /></Col>
                    </Row>
                  </Container>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-start">
              <Card.Img variant="top" src={FullStack} />
              <Card.Body>
                <Card.Title>Backend Framework Skills</Card.Title>
                <Card.Text className="text-start text-muted">
                <Container>
                    <Row>
                      <Col sm={4} lg={5}>Python</Col>
                      <Col sm={8} lg={7}><ProgressBar animated now={75} /></Col>
                    </Row>
                    <Row>
                      <Col sm={4} lg={5}>Django</Col>
                      <Col sm={8} lg={7}><ProgressBar animated now={75} /></Col>
                    </Row>
                    <Row>
                      <Col sm={4} lg={5}>NodeJS</Col>
                      <Col sm={8} lg={7}><ProgressBar animated now={85} /></Col>
                    </Row>
                    <Row>
                      <Col sm={4} lg={5}>expressJS</Col>
                      <Col sm={8} lg={7}><ProgressBar animated now={60} /></Col>
                    </Row>
                    <Row>
                      <Col sm={4} lg={5}>TensorFlow</Col>
                      <Col sm={8} lg= {7}><ProgressBar animated now={75} /></Col>
                    </Row>
                    <Row>
                      <Col sm={4} lg={5}>RestAPI</Col>
                      <Col sm={8} lg={7}><ProgressBar animated now={60} /></Col>
                    </Row>
                  </Container>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card className="text-start">
              <Card.Img variant="top" src={DataBase} />
              <Card.Body>
                <Card.Title>DataBase Skills</Card.Title>
                <Card.Text className="text-start text-muted">
                <Container>
                <Row>
                      <Col sm={4} lg={5}>SQLite3</Col>
                      <Col sm={8} lg={7}><ProgressBar animated now={75} /></Col>
                    </Row>
                    <Row>
                      <Col sm={4} lg={5}>MySQL</Col>
                      <Col sm={8} lg={7}><ProgressBar animated now={70} /></Col>
                    </Row>
                    <Row>
                      <Col sm={4} lg={5}>MongoDB</Col>
                      <Col sm={8} lg={7}><ProgressBar animated now={60} /></Col>
                    </Row>
                    <Row>
                      <Col sm={4} lg={5}>DB2</Col>
                      <Col sm={8} lg={7}><ProgressBar animated now={75} /></Col>
                    </Row>
                  </Container>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
      </Row>    
    </section>
    
    </>
  );
}
export default Skills