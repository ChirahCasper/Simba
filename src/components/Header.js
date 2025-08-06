import React from 'react';
import { contactSimbaWhatsApp } from '../utils/whatsapp';
import logo from '../assets/images/hero/logo/logo.png'; // Add your logo import
import '../styles/Header.css';

const Header = () => {
  const handleWhatsAppSupport = () => {
    contactSimbaWhatsApp('Hello! I need support with your products.');
  };

  const handleExpressOrder = () => {
    contactSimbaWhatsApp('Hello! I would like to place an express order.');
  };

  return (
    <>
      {/* Blue Top Header */}
      <div className="blue-header">
        <div className="blue-header-content">
          <div className="company-info">
            <div className="company-logo">
              <img src={logo} alt="National Cement Company Logo" className="logo-image" />
            </div>
            <span className="company-name">National cement company</span>
          </div>
        </div>
      </div>

      {/* Contact Top Bar */}
      <div className="top-bar">
        <div className="top-bar-content">
          <div className="top-bar-left">
            <span className="top-bar-item">
              <i className="fas fa-phone"></i> Call Now: 0798358526
            </span>
            <span className="top-bar-item" onClick={handleWhatsAppSupport} style={{ cursor: 'pointer' }}>
              <i className="fab fa-whatsapp"></i> WhatsApp Support
            </span>
          </div>
          <div className="top-bar-right">
            <span className="top-bar-item">
              <i className="fas fa-envelope"></i> info@simbacement.com
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="header">
        <div className="header-content">
          <div className="logo">
            <h1>SIMBA CEMENT</h1>
          </div>
          <nav className="nav">
            <a href="#home" className="nav-link active">Home</a>
            <a href="#products" className="nav-link">Our Products</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
            <a href="#quick-order" className="nav-link">Quick Order</a>
            <button className="express-order-btn" onClick={handleExpressOrder}>
              Express Order
            </button>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
