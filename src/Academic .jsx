import React, { useEffect } from 'react';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import acedmic from './assets/acedmic.jpeg'
import Faciliti1 from './assets/Faciliti1.jpeg';
import Faciliti2 from './assets/Faciliti2.jpeg';
import Faciliti3 from './assets/Faciliti3.jpeg';
import Faciliti4 from './assets/Faciliti4.jpeg';
const Academics = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div style={{ backgroundColor: '#f9f9f9', overflowX: 'hidden' }}>
      {/* 1. Header Banner */}
      <div className="py-5 text-center text-white" style={{ background: '#002b5b' }}>
        <Container data-aos="zoom-in">
          <h1 className="display-4 fw-bold">Academic <span style={{ color: '#ffc107' }}>Excellence</span></h1>
          <p className="lead">Preparing students for a lifetime of learning and leadership.</p>
        </Container>
      </div>

      {/* 2. Educational Wings Section */}
      <Container className="py-5">
        <div className="text-center mb-5" data-aos="fade-up">
          <h2 className="fw-bold" style={{ color: '#002b5b' }}>Our Educational Wings</h2>
          <p className="text-muted">Hum har stage par bacho ki growth aur learning par focus karte hain.</p>
        </div>

        <Row>
          {[
            { 
              level: 'Primary Wing', 
              classes: 'Grade I - V', 
              desc: 'Focus on foundational literacy, numeracy, and creative arts.',
              icon: '🎨',
              color: '#e3f2fd' 
            },
            { 
              level: 'Middle Wing', 
              classes: 'Grade VI - VIII', 
              desc: 'Introduction to advanced sciences, languages, and social studies.',
              icon: '🔬',
              color: '#fff3e0' 
            },
            { 
              level: 'Senior Wing', 
              classes: 'Grade IX - XII', 
              desc: 'Specialized streams (Science, Commerce, Arts) for career prep.',
              icon: '📚',
              color: '#f1f8e9' 
            }
          ].map((wing, index) => (
            <Col lg={4} key={index} className="mb-4" data-aos="fade-up" data-aos-delay={index * 200}>
              <Card className="h-100 border-0 shadow-sm text-center p-3 wing-card">
                <Card.Body>
                  <div className="display-4 mb-3">{wing.icon}</div>
                  <h3 className="fw-bold" style={{ color: '#002b5b' }}>{wing.level}</h3>
                  <h6 className="text-primary mb-3">{wing.classes}</h6>
                  <p className="text-muted">{wing.desc}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* 3. Subjects & Curriculum Section */}
      <div className="py-5 bg-white shadow-sm">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} data-aos="fade-right">
              <h2 className="fw-bold mb-4" style={{ color: '#002b5b' }}>Holistic Curriculum</h2>
              <p className="text-muted">
                Humara curriculum CBSE guidelines par based hai, jo students ko mental aur physical dono tarike se grow karne mein help karta hai.
              </p>
              <ListGroup variant="flush" className="fw-bold">
                <ListGroup.Item>✅ STEM (Science, Tech, Engineering, Math)</ListGroup.Item>
                <ListGroup.Item>✅ Digital Literacy & Coding</ListGroup.Item>
                <ListGroup.Item>✅ Physical Education & Yoga</ListGroup.Item>
                <ListGroup.Item>✅ Performing Arts & Music</ListGroup.Item>
              </ListGroup>
            </Col>
            <Col lg={6} className="mt-4 mt-lg-0" data-aos="zoom-in">
              <img 
                src={acedmic} 
                alt="Curriculum" 
                className="img-fluid rounded-4 shadow"
              />
            </Col>
          </Row>
        </Container>
      </div>

      {/* 4. Infrastructure Highlights */}
      <Container className="py-5">
        <h2 className="text-center fw-bold mb-5" style={{ color: '#002b5b' }} data-aos="fade-up">World Class Facilities</h2>
        <Row>
          {[
            { name: 'Modern Science Labs', img: Faciliti1 },
            { name: 'Computer Center', img: Faciliti2 },
            { name: 'Library & Reading Room', img:Faciliti3 },
            { name: 'Indoor Sports Complex', img: Faciliti4 }
          ].map((item, idx) => (
            <Col md={3} sm={6} key={idx} className="mb-4" data-aos="flip-right" data-aos-delay={idx * 100}>
              <div className="facility-container position-relative overflow-hidden rounded-3 shadow-sm">
                <img src={item.img} alt={item.name} className="img-fluid" style={{ height: '200px', width: '100%', objectFit: 'cover' }} />
                <div className="facility-overlay d-flex align-items-center justify-content-center">
                  <span className="text-white fw-bold text-center p-2">{item.name}</span>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Custom Styling */}
      <style>{`
        .wing-card {
          transition: transform 0.3s ease;
          border-bottom: 5px solid #ffc107 !important;
        }
        .wing-card:hover {
          transform: translateY(-10px);
        }
        .facility-container img {
          transition: transform 0.5s ease;
        }
        .facility-overlay {
          position: absolute;
          top: 0; left: 0; width: 100%; height: 100%;
          background: rgba(0, 43, 91, 0.7);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .facility-container:hover .facility-overlay {
          opacity: 1;
        }
        .facility-container:hover img {
          transform: scale(1.1);
        }
      `}</style>
    </div>
  );
};

export default Academics;