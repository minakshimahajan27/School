import React, { useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import aboutImg1 from './assets/about.jpeg'
import principal from './assets/principal.jpeg'
const About = () => {
    useEffect(() => {
        AOS.init({ duration: 1200 });
    }, []);

    return (
        <div style={{ overflowX: 'hidden' }}>
            {/* 1. Header Section */}
            <div className="py-5 text-center text-white" style={{ backgroundColor: '#002b5b' }}>
                <Container data-aos="fade-down">
                    <h1 className="display-4 fw-bold">About <span style={{ color: '#ffc107' }}>EduTech Academy</span></h1>
                    <p className="lead">Dedicated to excellence in education since 1995.</p>
                </Container>
            </div>

            {/* 2. Mission & Vision Section */}
            <Container className="py-5">
                <Row className="align-items-center mb-5">
                    <Col lg={6} data-aos="fade-right">
                        <img
                            src={aboutImg1}
                            alt="Our Mission"
                            className="img-fluid rounded-4 shadow"
                        />
                    </Col>
                    <Col lg={6} className="mt-4 mt-lg-0" data-aos="fade-left">
                        <h2 className="fw-bold mb-3" style={{ color: '#002b5b' }}>Our Mission</h2>
                        <p className="text-muted fs-5">
                            Humara maqsad har bache ko ek aisa environment dena hai jahan wo academic excellence ke saath-saath apni creative abilities ko bhi pehchan sake. Hum modern technology aur traditional values ka ek perfect balance provide karte hain.
                        </p>
                        <p className="text-muted">
                            We believe in nurturing global citizens who are compassionate, curious, and courageous enough to change the world.
                        </p>
                    </Col>
                </Row>

                {/* 3. Principal's Message Section */}
                <Row className="align-items-center flex-lg-row-reverse py-5">
                    <Col lg={6} data-aos="fade-left">
                        <img
                            src={principal}
                            alt="Our Mission"
                            className="img-fluid rounded-4 shadow"
                        />
                    </Col>
                    <Col lg={6} className="mt-4 mt-lg-0" data-aos="fade-right">
                        <h2 className="fw-bold mb-3" style={{ color: '#002b5b' }}>Principal's Message</h2>
                        <blockquote className="blockquote">
                            <p className="fst-italic text-muted">
                                "Education is not just about learning facts, but training the mind to think. At EduTech, we prepare students for the challenges of the 21st century."
                            </p>
                            <footer className="blockquote-footer mt-2">
                                Dr.Riya Chohan, <cite title="Source Title">Principal</cite>
                            </footer>
                        </blockquote>
                    </Col>
                </Row>

                {/* 4. Core Values Section */}
                <div className="py-5 text-center">
                    <h2 className="fw-bold mb-5" style={{ color: '#002b5b' }} data-aos="zoom-in">Our Core Values</h2>
                    <Row>
                        {[
                            { title: 'Integrity', icon: '💎', desc: 'Hum honesty aur strong moral principles mein believe karte hain.' },
                            { title: 'Innovation', icon: '💡', desc: 'Naye ideas aur modern learning methods ko hamesha encourage karte hain.' },
                            { title: 'Inclusion', icon: '🤝', desc: 'Har background ke student ka humare campus mein swagat hai.' },
                            { title: 'Excellence', icon: '🏆', desc: 'Hum academics aur sports dono mein top quality aim karte hain.' }
                        ].map((value, idx) => (
                            <Col md={3} sm={6} key={idx} className="mb-4" data-aos="flip-left" data-aos-delay={idx * 100}>
                                <Card className="h-100 border-0 shadow-sm hover-value-card py-4" style={{ borderRadius: '15px' }}>
                                    <Card.Body>
                                        <div className="display-4 mb-3">{value.icon}</div>
                                        <Card.Title className="fw-bold" style={{ color: '#002b5b' }}>{value.title}</Card.Title>
                                        <Card.Text className="small text-muted">{value.desc}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </div>
            </Container>

            {/* Style for hover effects */}
            <style>{`
        .hover-value-card {
          transition: all 0.3s ease;
        }
        .hover-value-card:hover {
          background-color: #ffc107;
          transform: translateY(-10px);
        }
        .hover-value-card:hover .text-muted, .hover-value-card:hover .fw-bold {
          color: #002b5b !important;
        }
      `}</style>
        </div>
    );
};

export default About;