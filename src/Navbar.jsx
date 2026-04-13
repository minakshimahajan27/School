import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg sticky-top shadow-sm" style={{ backgroundColor: '#002b5b' }}>
      <div className="container">
        {/* Logo using Link to go back to Home */}
        <Link className="navbar-brand fw-bold text-warning" style={{ fontSize: '1.5rem' }} to="/">
          EDU<span className="text-white">TECH</span> ACADEMY
        </Link>

        {/* Mobile Menu Toggle Button */}
        <button 
          className="navbar-toggler border-0 shadow-none" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          style={{ backgroundColor: '#ffc107' }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'text-warning' : 'text-white'}`} to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'text-warning' : 'text-white'}`} to="/about">About Us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'text-warning' : 'text-white'}`} to="/academics">Academics</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className={({ isActive }) => `nav-link ${isActive ? 'text-warning' : 'text-white'}`} to="/contact">Contact</NavLink>
            </li>
            
            {/* Call to Action Button */}
            <li className="nav-item ms-lg-3">
              <Link to="/admission" className="btn btn-warning fw-bold px-4 rounded-pill">
                Admission Open
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;