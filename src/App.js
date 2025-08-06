import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ImageCarousel from './components/ImageCarousel';
import Products from './components/Products';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton'; // ⬅️ NEW IMPORT
import './styles/App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <ImageCarousel />
      <Products />
      <Testimonials />
      <Footer />
      <WhatsAppButton /> {/* ⬅️ ADD THIS LINE */}
    </div>
  );
}

export default App;
