import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// Icons ke liye aap bootstrap-icons ya normal emoji use kar sakti hain
const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#002b5b', color: '#f8f9fa' }} className="pt-5 pb-3">
      <Container>
        <Row className="gy-4">
          
          {/* 1. School Info Section */}
          <Col lg={4} md={6}>
            <h4 className="fw-bold mb-4" style={{ color: '#ffc107' }}>EDUTECH ACADEMY</h4>
            <p className="small" style={{ lineHeight: '1.8', color: '#cbd5e0' }}>
              Humara lakshya har student ko ek mazboot buniyad aur behtareen bhavishya dena hai. 
              Modern technology aur sanskaro ka milan hi humari pehchan hai.
            </p>
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="social-icon">Facebook</a>
              <a href="#" className="social-icon">Instagram</a>
              <a href="#" className="social-icon">Twitter</a>
            </div>
          </Col>

          {/* 2. Quick Links Section */}
          <Col lg={2} md={6}>
            <h5 className="fw-bold mb-4">Quick Links</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2"><Link to="/" className="text-decoration-none text-light">Home</Link></li>
              <li className="mb-2"><Link to="/about" className="text-decoration-none text-light">About Us</Link></li>
              <li className="mb-2"><Link to="/academics" className="text-decoration-none text-light">Academics</Link></li>
              <li className="mb-2"><Link to="/contact" className="text-decoration-none text-light">Contact Us</Link></li>
            </ul>
          </Col>

          {/* 3. Academics Links Section */}
          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-4">Our Services</h5>
            <ul className="list-unstyled footer-links">
              <li className="mb-2">Online Classes</li>
              <li className="mb-2">Career Counseling</li>
              <li className="mb-2">Sports Academy</li>
              <li className="mb-2">Scholarship Programs</li>
            </ul>
          </Col>

          {/* 4. Contact Details Section */}
          <Col lg={3} md={6}>
            <h5 className="fw-bold mb-4">Get In Touch</h5>
            <p className="small mb-2">📍 123 Education Hub, New Delhi</p>
            <p className="small mb-2">📞 +91 98765 43210</p>
            <p className="small mb-2">✉️ info@edutech.com</p>
            <p className="small">⏰ Mon - Sat: 8:00 AM - 3:00 PM</p>
          </Col>
        </Row>

        <hr className="my-4" style={{ borderColor: 'rgba(255,255,255,0.1)' }} />

        {/* Copyright Section */}
        <Row className="align-items-center">
          <Col md={6} className="text-center text-md-start">
            <p className="small mb-0">© 2026 EduTech Academy. All Rights Reserved.</p>
          </Col>
          <Col md={6} className="text-center text-md-end mt-2 mt-md-0">
            <p className="small mb-0">Designed with ❤️ by Meenakshi Mahajan</p>
          </Col>
        </Row>
      </Container>

      {/* Footer specific CSS */}
      <style>{`
        .footer-links li {
          transition: transform 0.3s ease;
        }
        .footer-links li:hover {
          transform: translateX(10px);
          color: #ffc107;
        }
        .social-icon {
          color: #f8f9fa;
          text-decoration: none;
          font-size: 0.9rem;
          padding: 5px 10px;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 5px;
          transition: all 0.3s ease;
        }
        .social-icon:hover {
          background-color: #ffc107;
          color: #001b3a;
          border-color: #ffc107;
        }
      `}</style>
    </footer>
  );
};

export default Footer;