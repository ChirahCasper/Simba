import React, { useState } from 'react';
import '../styles/Footer.css';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    alert(`Subscribed with email: ${email}`);
    setEmail('');
  };

  return (
    <footer className="footer">
      {/* Newsletter Section with Envelope Icon */}
      <div className="newsletter-section">
        <div className="container">
          <div className="newsletter-icon">
            <i className="fas fa-envelope"></i>
          </div>
          <h3>Stay Updated with Simba Cement</h3>
          <p>Get the latest updates on new products, special offers, and construction tips</p>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input 
              type="email" 
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe</button>
          </form>
          <p className="newsletter-disclaimer">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>

      {/* Footer Content */}
      <div className="footer-content">
        <div className="container">
          <div className="footer-grid">
            {/* Column 1: SIMBA CEMENT + Location Details */}
            <div className="footer-column">
              <h3 className="simba-brand">SIMBA CEMENT</h3>
              <p>Kenya's trusted cement manufacturer, building the nation's future with premium quality cement products.</p>
              <div className="location-info">
                <p><strong>Location</strong></p>
                <p>National Cement Company Limited</p>
                <p>Off Mombasa Road, Opposite Lukenya RD</p>
                <p>P.O Box. 617-20100 Nairobi, Kenya</p>
              </div>
            </div>

            {/* Column 2: Contact Us with Phone/WhatsApp/Email */}
            <div className="footer-column">
              <h4>Contact Us</h4>
              <div className="contact-details">
                <p><strong>Phone</strong></p>
                <p><a href="tel:0798358526">0798358526</a></p>
                
                <p><strong>WhatsApp</strong></p>
                <p><a href="https://wa.me/254105631176">0105631176</a></p>
                
                <p><strong>Email</strong></p>
                <p><a href="mailto:info@simbacement.com">info@simbacement.com</a></p>
              </div>
            </div>

            {/* Column 3: Business Hours */}
            <div className="footer-column">
              <h4>Business Hours</h4>
              <div className="business-hours">
                <p><strong>Monday - Friday:</strong> 8:00 AM - 6:00 PM</p>
                <p><strong>Saturday:</strong> 8:00 AM - 4:00 PM</p>
                <p><strong>Sunday:</strong> Closed</p>
              </div>
            </div>

            {/* Column 4: Quick Links (NO WhatsApp button) */}
            <div className="footer-column">
              <h4>Quick Links</h4>
              <ul className="footer-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#products">Our Products</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="#order">Quick Order</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>




      {/* Footer Bottom */}
      <div className="footer-bottom">
        <div className="container">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Simba Cement. All rights reserved. Building Kenya's Future.</p>
            <div className="footer-bottom-links">
              <a href="#privacy">Privacy Policy</a>
              <span className="text-gray-600">|</span>
              <a href="#terms">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
