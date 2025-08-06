import React from 'react';
import { heroImages } from '../data/images';
import '../styles/Hero.css';

const Hero = () => {
  const handleWhatsAppClick = () => {
    const phoneNumber = '254105631176';
    const message = 'Hello! I found your website and I am interested in learning more about your cement products.';
    const encodedMessage = encodeURIComponent(message);
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    console.log('Opening WhatsApp link:', whatsappLink); // Debug log
    window.open(whatsappLink, '_blank');
  };

  return (
    <section className="hero" style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${heroImages.background})` }}>
      <div className="hero-content">
        <h1 className="hero-title">
          Welcome to <span className="highlight">Simba Cement</span>
        </h1>
        <h2 className="hero-subtitle">
          Building Kenya's Future with Premium Quality Cement
        </h2>
        <p className="hero-description">
          Trusted by construction professionals nationwide. Get premium cement delivered to your doorstep with our fast, reliable service.
        </p>
        <div className="hero-buttons">
          <button className="btn btn-primary">
            Shop Now <i className="fas fa-arrow-right"></i>
          </button>
          <button className="btn btn-whatsapp-white" onClick={handleWhatsAppClick}>
            <i className="fab fa-whatsapp"></i> WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
