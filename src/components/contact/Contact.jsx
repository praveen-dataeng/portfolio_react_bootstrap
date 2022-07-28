import {React, useState } from 'react';
// import emailjs from 'emailjs-com';
import './contact.css';

// Reacticons
import {FaWhatsapp} from 'react-icons/fa';
import {MdAlternateEmail} from 'react-icons/md';
import {SiMinutemailer} from 'react-icons/si';
import {GiBroom} from 'react-icons/gi';
import {BsFillArrowUpCircleFill} from 'react-icons/bs'

// Bootstrap imports
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

const Contact = () => {
  // Moodal option
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // tooltip Hover
  const renderTooltip = (props) => (
    <Tooltip id="button-tooltip" {...props}>
      Scroll Up
    </Tooltip>
  );


  // Form Validation checking
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
    <section id="contact">
        <h5 className='text-center text-white'>Get in touch</h5>    
        <h1 className='text-center text-white'>Contact me!</h1>
        <hr />
        <br />

        <Container>
          <Row>
            {/* Contact information */}
            <Col>
                <Card className='text-center bg-transparent' style={{ width: '25rem', height:'25rem', border: 'none' }}>
                  <Card.Body className='bg-dark'>
                      {/* WhatsApp */}
                      <Card.Title className='text-primary'>WhatsApp</Card.Title>
                      <Card.Text className='text-light'>
                        Quicker & you may get faster response compare to mail
                      </Card.Text>
                      <Button variant="outline-success" onClick={handleShow}><FaWhatsapp/></Button>
                      {/* Whatsapp MOODAL Section STARTS */}
                      <Modal
                        show={show}
                        onHide={handleClose}
                        backdrop="static"
                        keyboard={false}
                      >
                        <Modal.Header closeButton>
                          <Modal.Title>WhatsApp</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                          Your about to leave the current page are you sure..?
                        </Modal.Body>
                        <Modal.Footer>
                          <Button variant="secondary" onClick={handleClose}>
                            Close
                          </Button>
                          <Button variant="primary" href='https://wa.me/919141120530' target='_blank'>Whatsapp Now</Button>
                        </Modal.Footer>
                      </Modal>
                      {/* MOODAL section ENDS */}

                  </Card.Body>
                    {/* EMAIL */}
                    <Card.Body className='bg-dark'>
                      <Card.Title className='text-primary'>Email</Card.Title>
                      <Card.Text className='text-light'>
                        Please use this only to share your thoughts & feedback..!
                        for Sales & other queries use Contact me form..
                      </Card.Text>
                      <Button variant="outline-success" href='mailto:praveen.dataengbng@gmail.com'><MdAlternateEmail /></Button>              
                    </Card.Body>
                </Card>
            </Col>
            
            {/* Contact form */}
            <Col>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group as={Col} lg="12" controlId="validationCustom01">
                  <Form.Label className='text-white'>Enter your Preffered Name</Form.Label>
                  <Form.Control
                    required
                    type="text"
                    placeholder="Full Name"
                    name='messagefrom'
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group><br/>
                <Form.Group as={Col} lg="12" controlId="validationCustom01">
                  <Form.Label className='text-white'>Enter valid Email ID</Form.Label>
                  <Form.Control
                    required
                    type='email'                    
                    placeholder="name@domain.com"
                    name='email'                    
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group><br/>
                <Form.Group as={Col} lg="12" controlId="validationCustom01">
                  <Form.Label className='text-white'>Message</Form.Label>
                  <Form.Control
                    required
                    as="textarea"                    
                    placeholder="Message me...!"
                    name='message'
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                </Form.Group><br/>

                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    className='text-warning'
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group>
                <Stack direction="horizontal" gap={3} className="mx-auto mb-5">
                    <Button variant="outline-success" type='submit'><SiMinutemailer/></Button>{' '}
                    <Button variant="outline-secondary" type="reset" ><GiBroom/></Button>{' '}
                </Stack>                
              </Form>
              <div class="position-relative">
                  <div class="position-absolute bottom-0 end-0">
                  <OverlayTrigger
                    placement="right"
                    delay={{ show: 250, hide: 400 }}
                    overlay={renderTooltip}
                  >
                    <Button href="#header" variant="primary"><BsFillArrowUpCircleFill/></Button>
                  </OverlayTrigger>                         
                  </div>  
              </div>
              
            </Col>
          </Row>
          
        </Container>
    </section>
    </>
  );
}

export default Contact