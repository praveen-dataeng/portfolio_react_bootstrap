import {React, useState, useRef } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

// Reacticons
import {FaWhatsapp} from 'react-icons/fa';
import {MdAlternateEmail} from 'react-icons/md';
import {SiMinutemailer} from 'react-icons/si';
import {GiBroom} from 'react-icons/gi';

// Bootstrap imports
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Stack from 'react-bootstrap/Stack';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

const Contact = () => {
  
  // emailJS
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_edas6eb', 'template_s3d7odd', form.current, 'HNR_hNuTHAgBydb6b')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

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
                      <Button variant="outline-success" href='https://wa.me/919141120530' target='_blank'><FaWhatsapp/></Button>
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
            </Col>
          </Row>
        </Container>
    </section>
    </>
  );
}

export default Contact