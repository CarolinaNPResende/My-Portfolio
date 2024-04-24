import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Lottie from 'lottie-react';
import animationData from '../assets/AnimationContact.json';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText('Sending...');

    emailjs.sendForm('service_v2q4ydv', 'template_tqj9z3j', e.target, '6i2XXWH1q2MRyF7mv');

    setButtonText('Send');
    setFormDetails(formInitialDetails);
    setStatus({ success: true, message: 'Message sent successfully' });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <TrackVisibility>
              <div className="lottie-animation-contact">
                <Lottie animationData={animationData} />
              </div>
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} className="form-col d-flex flex-column justify-content-center align-items-center">
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={`animate__animated ${isVisible ? 'animate__fadeIn' : ''}`}>
                  <h2 className="text-center">Let's Build Something Awesome!</h2>
                  <form onSubmit={handleSubmit} className="w-100">
                    <div className="form-group">
                      <input
                        type="text"
                        name="first_name"
                        value={formDetails.firstName}
                        placeholder="First Name"
                        onChange={(e) => onFormUpdate('firstName', e.target.value)}
                      />
                      <input
                        type="text"
                        name="last_name"
                        value={formDetails.lasttName}
                        placeholder="Last Name"
                        onChange={(e) => onFormUpdate('lastName', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email_from"
                        value={formDetails.email}
                        placeholder="Email Address"
                        onChange={(e) => onFormUpdate('email', e.target.value)}
                      />
                      <input
                        type="tel"
                        name="phone"
                        value={formDetails.phone}
                        placeholder="Phone No."
                        onChange={(e) => onFormUpdate('phone', e.target.value)}
                      />
                    </div>
                    <div className="form-group">
                      <textarea
                        rows="6"
                        name="message"
                        value={formDetails.message}
                        placeholder="Message"
                        onChange={(e) => onFormUpdate('message', e.target.value)}
                      ></textarea>
                      {status.message && (
                        <p className={status.success ? 'success' : 'danger'}>{status.message}</p>
                      )}
                      <button type="submit" style={{ width: '100%' }}><span>{buttonText}</span></button>
                    </div>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
