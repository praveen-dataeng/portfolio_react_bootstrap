import React from 'react';
import './resume.css';

// Bootstrap imports
import Accordion from 'react-bootstrap/Accordion';
import Badge from 'react-bootstrap/Badge';
import ListGroup from 'react-bootstrap/ListGroup';

const Resume = () => {
  return (
    <>   
        <section id='resume'>
        <h5 className='text-center text-white'>More information about myself</h5>    
        <h1 className='text-center text-white'>Resume</h1>
        <hr />
        <br />

        <Accordion>
            {/* EDUCATION Details */}
            <Accordion.Item eventKey="0">
                <Accordion.Header>Education</Accordion.Header>
                <Accordion.Body>
                <ListGroup as="ol" numbered>
                    <ListGroup.Item
                        variant="success"
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">Bachelore of Engineering</div>
                        <h6>Electricals And Electronics Engineering</h6>
                        <small className='text-muted'>7.45 CGPA (Max. 10 CGPA)</small>
                        </div>
                        <Badge bg="secondary" pill>
                        Highest Qualification
                        </Badge>
                    </ListGroup.Item>
                    <ListGroup.Item
                        variant="success"
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">10+2/ PUC</div>
                        <h6>Science (PCM) with Biology as Elective</h6>
                        <small className='text-muted'>First Class</small>
                        </div>
                        <Badge bg="secondary" pill>
                        State board
                        </Badge>
                    </ListGroup.Item>
                </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
            {/* Comapniess Worked */}
            <Accordion.Item eventKey="1">
                <Accordion.Header>Work History</Accordion.Header>
                <Accordion.Body>
                <ListGroup as="ol" numbered>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">Value c Consulting services pvt., LTD.,</div>
                        <h6>Data Engineer</h6>
                        <small className='text-muted'>Aug 2018 - Present</small>
                        </div>
                        <Badge bg="secondary" pill>
                        Latest
                        </Badge>                        
                    </ListGroup.Item>
                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">Cryptograph Technologies</div>
                        <h6>ETL Engineer</h6>
                        <small className='text-muted'>Worked till Nov-2017</small>
                        </div>
                        <Badge bg="secondary" pill>
                        Tech Mahindra Client
                        </Badge>                        
                    </ListGroup.Item>

                    <ListGroup.Item
                        as="li"
                        className="d-flex justify-content-between align-items-start"
                    >
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">IBM India</div>
                        <h6>Software Engineer</h6>
                        <small className='text-muted'>Worked till Mar-2017</small>
                        </div>
                        <Badge bg="secondary" pill>
                        Maintec India PayRoll
                        </Badge>                        
                    </ListGroup.Item>
                </ListGroup>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        </section>
    </>
  )
}

export default Resume