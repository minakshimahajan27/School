import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Hum jald hi aapse sampark karenge.`);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div style={{ backgroundColor: '#f4f7f6', overflowX: 'hidden' }}>
      {/* 1. Header Section */}
      <div className="py-5 text-center text-white" style={{ backgroundColor: '#002b5b' }}>
        <Container data-aos="fade-down">
          <h1 className="display-4 fw-bold">Contact <span style={{ color: '#ffc107' }}>Us</span></h1>
          <p className="lead">Hum aapki queries aur suggestions ka intezar kar rahe hain.</p>
        </Container>
      </div>

      <Container className="py-5">
        <Row className="g-4">
          {/* 2. Contact Information Cards */}
          <Col lg={4} data-aos="fade-right">
            <Card className="border-0 shadow-sm mb-4 p-3 text-center contact-info-card">
              <div className="fs-1 text-primary mb-2">📍</div>
              <h5 className="fw-bold">Our Location</h5>
              <p className="text-muted small">123 Education Hub, Sector 45, <br /> New Delhi, India - 110001</p>
            </Card>
            
            <Card className="border-0 shadow-sm mb-4 p-3 text-center contact-info-card">
              <div className="fs-1 text-success mb-2">📞</div>
              <h5 className="fw-bold">Phone Number</h5>
              <p className="text-muted small">+91 98765 43210 <br /> 011-2345678</p>
            </Card>

            <Card className="border-0 shadow-sm p-3 text-center contact-info-card">
              <div className="fs-1 text-warning mb-2">✉️</div>
              <h5 className="fw-bold">Email Address</h5>
              <p className="text-muted small">info@edutechacademy.com <br /> admissions@edutechacademy.com</p>
            </Card>
          </Col>

          {/* 3. Inquiry Form */}
          <Col lg={8} data-aos="fade-left">
            <Card className="border-0 shadow-lg p-4 p-md-5" style={{ borderRadius: '20px' }}>
              <h3 className="fw-bold mb-4" style={{ color: '#002b5b' }}>Send Us a Message</h3>
              <Form onSubmit={handleSubmit}>
                <Row>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="fw-bold">Full Name</Form.Label>
                      <Form.Control 
                        type="text" 
                        placeholder="Aapka Naam" 
                        required 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </Form.Group>
                  </Col>
                  <Col md={6} className="mb-3">
                    <Form.Group>
                      <Form.Label className="fw-bold">Email</Form.Label>
                      <Form.Control 
                        type="email" 
                        placeholder="name@example.com" 
                        required 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </Form.Group>
                  </Col>
                </Row>
                <Form.Group className="mb-3">
                  <Form.Label className="fw-bold">Subject</Form.Label>
                  <Form.Control 
                    type="text" 
                    placeholder="Kis bare mein jankari chahiye?" 
                    value={formData.subject}
                    onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  />
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold">Message</Form.Label>
                  <Form.Control 
                    as="textarea" 
                    rows={4} 
                    placeholder="Apna sawal yahan likhein..." 
                    required 
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  />
                </Form.Group>
                <Button variant="warning" type="submit" className="w-100 fw-bold py-3 shadow-sm rounded-pill">
                  Submit Message
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>

        {/* 4. Google Maps Integration */}
        <div className="mt-5 rounded-4 overflow-hidden shadow-lg" data-aos="zoom-in">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.8392319277!2d77.06889754725782!3d28.52728034399373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b71db418285!2sDelhi!5e0!3m2!1sen!2sin!4v1715682859000!5m2!1sen!2sin" 
            width="100%" 
            height="450" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="School Location"
          ></iframe>
        </div>
      </Container>

      <style>{`
        .contact-info-card {
          transition: transform 0.3s ease;
          border-left: 5px solid #ffc107 !important;
        }
        .contact-info-card:hover {
          transform: scale(1.05);
          background-color: #002b5b;
          color: white;
        }
        .contact-info-card:hover .text-muted {
          color: #f8f9fa !important;
        }
      `}</style>
    </div>
  );
};

export default Contact;