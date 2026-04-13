import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Important for Mobile Toggle
import Navbar from './Navbar';
import Home from './Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import Academic from './Academic ';
import Contact from './Contact';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';
import Admission from './Admission';
function App() {
  return (
    <Router>
    <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/about" element={<About/>} />
        <Route path="/academics" element={<Academic />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/admission" element={<Admission/>} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;