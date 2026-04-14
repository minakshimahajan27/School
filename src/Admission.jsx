import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Admission = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const [formData, setFormData] = useState({
    studentName: '',
    dob: '',
    gender: '',
    grade: '',
    parentName: '',
    phone: '',
    email: '',
    address: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert(`Registration Successful! Hum jald hi ${formData.studentName} ke admission ke liye aapse sampark karenge.`);
  };

  return (
    <div style={{ backgroundColor: '#f4f7f9', minHeight: '100vh', paddingBottom: '50px' }}>
      {/* 1. Header Banner */}
      <div className="py-5 text-center text-white" style={{ backgroundColor: '#002b5b', marginBottom: '40px' }}>
        <Container data-aos="fade-down">
          <h1 className="display-4 fw-bold">Admission <span style={{ color: '#ffc107' }}>Open 2026-27</span></h1>
          <p className="lead">Join our community of learners and leaders.</p>
        </Container>
      </div>

      <Container>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="border-0 shadow-lg" style={{ borderRadius: '20px', overflow: 'hidden' }}>
              <Row className="g-0">
                {/* Left Side: Information */}
                <Col md={4} className="text-white p-4 d-none d-md-flex flex-column justify-content-center" style={{ backgroundColor: '#002b5b' }}>
                  <h3 className="fw-bold mb-4">Registration Guide</h3>
                  <ul className="list-unstyled">
                    <li className="mb-3">✅ Fill out the online form carefully.</li>
                    <li className="mb-3">✅ Ensure phone and email are correct.</li>
                    <li className="mb-3">✅ Our team will call you within 24 hours.</li>
                    <li className="mb-3">✅ Visit campus for entrance assessment.</li>
                  </ul>
                  <div className="mt-4 p-3 rounded" style={{ backgroundColor: 'rgba(255,255,255,0.1)' }}>
                    <small>Help Desk: <br /> 📞 +91 98765 43210</small>
                  </div>
                </Col>

                {/* Right Side: The Form */}
                <Col md={8} className="bg-white p-4 p-md-5">
                  <h2 className="fw-bold mb-4" style={{ color: '#002b5b' }}>Application Form</h2>
                  <Form onSubmit={handleSubmit}>
                    
                    <h5 className="text-warning fw-bold mb-3 border-bottom pb-2">Student Information</h5>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="small fw-bold text-muted">Student Full Name</Form.Label>
                          <Form.Control type="text" placeholder="Student Name" required 
                            onChange={(e) => setFormData({...formData, studentName: e.target.value})} />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="small fw-bold text-muted">Date of Birth</Form.Label>
                          <Form.Control type="date" required 
                            onChange={(e) => setFormData({...formData, dob: e.target.value})} />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="small fw-bold text-muted">Gender</Form.Label>
                          <Form.Select required onChange={(e) => setFormData({...formData, gender: e.target.value})}>
                            <option value="">Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Other</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="small fw-bold text-muted">Applying for Grade</Form.Label>
                          <Form.Select required onChange={(e) => setFormData({...formData, grade: e.target.value})}>
                            <option value="">Select Class</option>
                            <option>Primary (I-V)</option>
                            <option>Middle (VI-VIII)</option>
                            <option>Senior (IX-XII)</option>
                          </Form.Select>
                        </Form.Group>
                      </Col>
                    </Row>

                    <h5 className="text-warning fw-bold mt-4 mb-3 border-bottom pb-2">Parent/Guardian Details</h5>
                    <Row>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="small fw-bold text-muted">Parent/Guardian Name</Form.Label>
                          <Form.Control type="text" placeholder="Parent Name" required 
                            onChange={(e) => setFormData({...formData, parentName: e.target.value})} />
                        </Form.Group>
                      </Col>
                      <Col md={6} className="mb-3">
                        <Form.Group>
                          <Form.Label className="small fw-bold text-muted">Contact Number</Form.Label>
                          <Form.Control type="tel" placeholder="Mobile number" required 
                            onChange={(e) => setFormData({...formData, phone: e.target.value})} />
                        </Form.Group>
                      </Col>
                    </Row>

                    <Form.Group className="mb-3">
                      <Form.Label className="small fw-bold text-muted">Address</Form.Label>
                      <Form.Control as="textarea" rows={2} placeholder="Permanent address" required 
                        onChange={(e) => setFormData({...formData, address: e.target.value})} />
                    </Form.Group>

                    <Button type="submit" variant="warning" className="w-100 fw-bold py-3 mt-4 rounded-pill shadow-sm">
                      Submit Application
                    </Button>
                  </Form>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>

      <style>{`
        .form-control, .form-select {
          border-radius: 8px;
          padding: 10px;
          border: 1px solid #ddd;
        }
        .form-control:focus, .form-select:focus {
          box-shadow: 0 0 8px rgba(0, 43, 91, 0.2);
          border-color: #002b5b;
        }
      `}</style>
    </div>
  );
};

export default Admission;