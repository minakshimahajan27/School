

// import React, { useEffect } from 'react';
// import { Container, Row, Col, Button, Card } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import schoolHero from './assets/photo.avif';

// const Home = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       easing: 'ease-in-out-back',
//     });
//   }, []);

//   return (
//     <>

//       <div
//         className="hero-section text-light d-flex align-items-center position-relative"
//         style={{
//           minHeight: '85vh',
//           backgroundImage: `url(${schoolHero})`, // Template literal use karein
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           marginBottom: '50px',
//           overflow: 'hidden'
//         }}
//       >
//         {/* Blur Overlay: Ye div background ko blur karega aur text ko clear rakhega */}
//         <div style={{
//           position: 'absolute',
//           top: 0,
//           left: 0,
//           width: '100%',
//           height: '100%',
//           backgroundColor: 'rgba(0, 43, 91, 0.5)', // Dark Blue Tint
//           backdropFilter: 'blur(8px)', // Yahan se blur control karein (e.g. 5px, 8px, 10px)
//           WebkitBackdropFilter: 'blur(8px)', // Safari support ke liye
//           zIndex: 1
//         }}></div>

//         <Container className="text-center position-relative" style={{ zIndex: 2 }}>
//           <Row className="justify-content-center">
//             <Col md={8} data-aos="zoom-in">
//               <h1 className="display-2 fw-bold mb-3" style={{ textShadow: '2px 4px 10px rgba(0,0,0,0.5)' }}>
//                 Your Child's <span style={{ color: '#ffc107' }}>Bright Future</span> Starts Here
//               </h1>
//               <p className="lead fs-4 mb-4 fw-bold">
//                 Providing world-class education with a focus on holistic development and character building.
//               </p>
//               <div className="d-flex justify-content-center gap-3">
//                 <Button as={Link} to="/about" variant="warning" size="lg" className="rounded-pill fw-bold px-4 shadow">
//                   Explore Campus
//                 </Button>
//                 <Button as={Link} to="/admission" variant="outline-light" size="lg" className="rounded-pill px-4">
//                   Apply Now
//                 </Button>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* 2. Key Features Section */}
//       <div className="py-5">
//         <Container>
//           <div className="text-center mb-5" data-aos="fade-up">
//             <h2 className="fw-bold display-5" style={{ color: '#002b5b' }}>Academic Excellence</h2>
//             <div style={{ height: '4px', width: '80px', background: '#ffc107', margin: '15px auto' }}></div>
//           </div>
//           <Row>
//             {[
//               { title: 'Smart Classes', text: 'Integrating technology with traditional learning methods.', img: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=500&auto=format', animation: 'fade-right' },
//               { title: 'Sports & Arts', text: 'Encouraging students to excel in extra-curricular activities.', img: 'https://images.unsplash.com/photo-1511632765486-a01980e01a18?w=500&auto=format', animation: 'fade-up' },
//               { title: 'Secure Campus', text: '24/7 surveillance and a safe environment for every student.', img: 'https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&auto=format', animation: 'fade-left' },
//             ].map((feature, index) => (
//               <Col md={4} key={index} className="mb-4" data-aos={feature.animation}>
//                 <Card className="h-100 border-0 shadow-lg feature-card overflow-hidden" style={{ borderRadius: '20px' }}>
//                   <Card.Img variant="top" src={feature.img} style={{ height: '220px', objectFit: 'cover' }} />
//                   <Card.Body className="p-4 text-center">
//                     <Card.Title className="fw-bold mb-3" style={{ color: '#002b5b' }}>{feature.title}</Card.Title>
//                     <Card.Text className="text-muted">{feature.text}</Card.Text>
//                   </Card.Body>
//                 </Card>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </div>

//       {/* 3. New Campus Gallery Section */}
//       <div className="py-5" style={{ backgroundColor: '#002b5b' }}>
//         <Container>
//           <Row className="align-items-center">
//             <Col lg={6} data-aos="slide-right">
//               <img
//                 src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1000"
//                 alt="Library"
//                 className="img-fluid rounded-4 shadow-lg"
//               />
//             </Col>
//             <Col lg={6} className="text-light p-5" data-aos="slide-left">
//               <h2 className="fw-bold mb-4" style={{ color: '#ffc107' }}>Our World-Class Library</h2>
//               <p className="lead">
//                 Humare paas ek vast collection hai books aur digital resources ka, jo students ki curiosity aur research skills ko badhava deta hai.
//               </p>
//               <ul className="list-unstyled">
//                 <li>✅ 10,000+ Books & Journals</li>
//                 <li>✅ Digital Learning Hub</li>
//                 <li>✅ Quiet Study Zones</li>
//               </ul>
//               <Button variant="outline-warning" className="mt-3 px-4">See More Photos</Button>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* 4. Call to Action */}
//       <div className="py-5 text-center" data-aos="zoom-in">
//         <Container>
//           <h2 className="fw-bold mb-3" style={{ color: '#002b5b' }}>Ready to join the family?</h2>
//           <p className="text-muted mb-4">Registration forms are available for the current academic session.</p>
//           <Button as={Link} to="/admission" variant="warning" size="lg" className="rounded-pill fw-bold px-5 py-3 shadow">
//             Download Prospectus
//           </Button>
//         </Container>
//       </div>

//       {/* Styles for Hover Effects */}
//       <style>{`
//         .feature-card {
//           transition: all 0.4s ease;
//         }
//         .feature-card:hover {
//           transform: translateY(-15px);
//           box-shadow: 0 15px 35px rgba(0,0,0,0.2) !important;
//         }
//         .feature-card img {
//           transition: transform 0.5s ease;
//         }
//         .feature-card:hover img {
//           transform: scale(1.1);
//         }
//         {
//         }
//       `}
//       </style>
//     </>
//   );
// };

// export default Home;
import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Button, Card, Form, ListGroup } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import schoolHero from './assets/photo.avif';
import aboutImg1 from './assets/about1.jpeg'
import img1 from './assets/choose1.jpeg';
import img2 from './assets/choose2.jpeg';
import img3 from './assets/choose3.jpeg';
import Library from './assets/Library.jpeg'

const Home = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out-back',
      once: true
    });
  }, []);

  const handleContactSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! Hum jald hi aapse contact karenge.");
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div style={{ overflowX: 'hidden' }}>

      {/* 1. HERO SECTION (Wahi blur effect ke saath) */}
      <div
        className="hero-section text-light d-flex align-items-center position-relative"
        style={{
          minHeight: '90vh',
          backgroundImage: `url(${schoolHero})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundColor: 'rgba(0, 43, 91, 0.6)',
          backdropFilter: 'blur(6px)', WebkitBackdropFilter: 'blur(6px)', zIndex: 1
        }}></div>

        <Container className="text-center position-relative" style={{ zIndex: 2 }}>
          <Row className="justify-content-center">
            <Col md={10} data-aos="zoom-in">
              <h1 className="display-1 fw-bold mb-3" style={{ textShadow: '2px 4px 10px rgba(0,0,0,0.5)' }}>
                Your Child's <span style={{ color: '#ffc107' }}>Bright Future</span> Starts Here
              </h1>
              <p className="lead fs-3 mb-4 fw-bold">Empowering minds with world-class education and values.</p>
              <div className="d-flex justify-content-center gap-3">
                <Button variant="warning" size="lg" className="rounded-pill fw-bold px-5 shadow border-0">Explore Now</Button>
                <Button as={Link} to="/admission" variant="outline-light" size="lg" className="rounded-pill px-5">Admissions</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>


      {/* 2. ABOUT US SECTION (Replaced Who We Are) */}
      <div className="py-5 bg-white">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} data-aos="fade-right">
              <h2 className="display-5 fw-bold mb-4" style={{ color: '#002b5b' }}>
                About <span style={{ color: '#ffc107' }}>Us</span>
              </h2>
              <p className="text-muted fs-5 mb-4">
                Established in 1995, <strong>EduTech Academy</strong> has been a pioneer in quality education.
                Humara marna hai ki har bacha unique hota hai, isliye hum sirf syllabus nahi padhate,
                balki unki personality aur character ko bhi refine karte hain.
              </p>
              <div className="mb-4">
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3 fs-3 text-warning">⭐</div>
                  <div>
                    <h5 className="fw-bold mb-0">Our Vision</h5>
                    <p className="text-muted mb-0 small">Bacho ko global challenges ke liye tayar karna.</p>
                  </div>
                </div>
                <div className="d-flex align-items-center mb-3">
                  <div className="me-3 fs-3 text-warning">🎓</div>
                  <div>
                    <h5 className="fw-bold mb-0">Academic Integrity</h5>
                    <p className="text-muted mb-0 small">Best faculty aur modern tech ka sahi blend.</p>
                  </div>
                </div>
              </div>
              <Button as={Link} to="/about" variant="warning" className="fw-bold rounded-pill px-4 py-2 shadow-sm border-0">
                Know More About Our History
              </Button>
            </Col>
            <Col lg={6} className="mt-5 mt-lg-0" data-aos="fade-left">
              <div className="position-relative">
                <img
                  src={aboutImg1}
                  alt="About Us"
                  className="img-fluid rounded-4 shadow-lg"
                />
                {/* Ek chota sa experience badge image ke upar */}
                <div style={{
                  position: 'absolute',
                  bottom: '-20px',
                  right: '20px',
                  backgroundColor: '#ffc107',
                  padding: '15px 25px',
                  borderRadius: '10px',
                  fontWeight: 'bold',
                  boxShadow: '0 5px 15px rgba(0,0,0,0.2)'
                }}>
                  25+ Years of Excellence
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 3. KEY FEATURES (Pahle wala content) */}
      <div className="py-5" style={{ backgroundColor: '#f8f9fa' }}>
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold display-5" style={{ color: '#002b5b' }}>Why <span style={{ color: '#ffc107' }}>Choose Us?</span></h2>
          </div>
          <Row>
            {[
              { title: 'Smart Classes', text: 'Technology integrated learning methods.', img: img1 },
              { title: 'Sports & Arts', text: 'Focus on extra-curricular activities.', img: img2 },
              { title: 'Secure Campus', text: '24/7 surveillance and safe environment.', img: img3 },
            ].map((feature, index) => (
              <Col md={4} key={index} className="mb-4" data-aos={feature.animation}>
                <Card className="h-100 border-0 shadow-lg feature-card overflow-hidden" style={{ borderRadius: '20px' }}>
                  <Card.Img variant="top" src={feature.img} style={{ height: '220px', objectFit: 'cover' }} />
                  <Card.Body className="p-4 text-center">
                    <Card.Title className="fw-bold mb-3" style={{ color: '#002b5b' }}>{feature.title}</Card.Title>
                    <Card.Text className="text-muted">{feature.text}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* 4. ACADEMICS HIGHLIGHTS (Naya Section) */}
      <div className="py-5 bg-white">
        <Container>
          <div className="text-center mb-5" data-aos="fade-up">
            <h2 className="fw-bold display-5" style={{ color: '#002b5b' }}>Academic Wings</h2>
          </div>
          <Row>
            {[
              { title: 'Primary Wing', icon: '🎨', desc: 'Grade I - V' },
              { title: 'Middle Wing', icon: '🔬', desc: 'Grade VI - VIII' },
              { title: 'Senior Wing', icon: '📚', desc: 'Grade IX - XII' }
            ].map((wing, idx) => (
              <Col md={4} key={idx} className="mb-4" data-aos="flip-left" data-aos-delay={idx * 150}>
                <Card className="h-100 border-0 shadow-sm text-center p-4 wing-card">
                  <div className="display-3 mb-3">{wing.icon}</div>
                  <h4 className="fw-bold" style={{ color: '#002b5b' }}>{wing.title}</h4>
                  <p className="text-primary fw-bold">{wing.desc}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      {/* 5. CAMPUS GALLERY / LIBRARY (Pahle wala Section) */}
      <div className="py-5" style={{ backgroundColor: '#002b5b' }}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6} data-aos="slide-right">
              <img src={Library} alt="Library" className="img-fluid rounded-4 shadow-lg" />
            </Col>
            <Col lg={6} className="text-light p-5" data-aos="slide-left">
              <h2 className="fw-bold mb-4" style={{ color: '#ffc107' }}>World-Class Library</h2>
              <p className="lead">Humare paas books aur digital resources ka vast collection hai.</p>
              <ul className="list-unstyled">
                <li>✅ 10,000+ Books & Journals</li>
                <li>✅ Digital Learning Hub</li>
                <li>✅ Quiet Study Zones</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 6. CONTACT FORM SECTION (Naya Section) */}
      <div className="py-5 bg-light">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8} data-aos="fade-up">
              <Card className="border-0 shadow-lg p-4 p-md-5" style={{ borderRadius: '20px' }}>
                <h2 className="text-center fw-bold mb-4" style={{ color: '#002b5b' }}>Send Us An <span style={{ color: '#ffc107' }}>Inquiry</span></h2>
                <Form onSubmit={handleContactSubmit}>
                  <Row>
                    <Col md={6} className="mb-3"><Form.Control type="text" placeholder="Full Name" required /></Col>
                    <Col md={6} className="mb-3"><Form.Control type="email" placeholder="Email" required /></Col>
                  </Row>
                  <Form.Control as="textarea" rows={4} placeholder="Your Message..." className="mb-4" required />
                  <Button variant="warning" type="submit" className="w-100 fw-bold py-3 rounded-pill shadow-sm">Submit Now</Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>

      {/* 7. CALL TO ACTION (Pahle wala Section) */}


      <style>{`
        .feature-card, .wing-card { transition: all 0.4s ease; }
        .feature-card:hover, .wing-card:hover { transform: translateY(-15px); box-shadow: 0 15px 35px rgba(0,0,0,0.2) !important; }
        .feature-card img { transition: transform 0.5s ease; }
        .feature-card:hover img { transform: scale(1.1); }
        /* Purana wing-card hover hata kar ye wala likhein */
.wing-card {
  transition: all 0.4s ease;
  border-bottom: 5px solid #ffc107 !important;
}

.wing-card:hover {
  background-color: #002b5b !important;
  transform: translateY(-12px);
}

/* Jab card hover ho, toh uske andar ke h4 aur p ka color white ho jaye */
.wing-card:hover h4, 
.wing-card:hover p {
  color: white !important;
}
        .form-control { padding: 12px; border-radius: 10px; }
      `}</style>
    </div>
  );
};

export default Home;