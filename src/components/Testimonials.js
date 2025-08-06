import React from 'react';
import '../styles/Testimonials.css';

const testimonials = [
  {
    id: 1,
    name: "John Kamau",
    occupation: "Construction Manager",
    company: "Kamau Construction Ltd",
    text: "Simba Cement has been our go-to choice for over 5 years. The quality is consistently excellent and their delivery service is reliable. Our clients trust the strength and durability of structures built with Simba Cement.",
    rating: 5,
    initials: "JK"
  },
  {
    id: 2,
    name: "Mary Wanjiku",
    occupation: "Architect", 
    company: "MW Designs",
    text: "I've specified Simba Cement for numerous residential and commercial projects. The PowerMax series delivers exceptional performance for high-rise buildings. Fast delivery and competitive pricing make them our preferred supplier.",
    rating: 5,
    initials: "MW"
  },
  {
    id: 3,
    name: "Peter Ochieng",
    occupation: "Site Supervisor",
    company: "Elite Builders", 
    text: "Working with Simba Cement has streamlined our construction process. Their technical support team is knowledgeable and the cement quality helps us deliver projects on time and within budget.",
    rating: 5,
    initials: "PO"
  }
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Customers Say</h2>
        <p className="section-subtitle">
          Trusted by construction professionals across Kenya
        </p>
        
        <div className="testimonials-grid">
          {testimonials.map(testimonial => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <i 
                    key={i} 
                    className={`fas fa-star ${i < testimonial.rating ? 'active' : ''}`}
                  ></i>
                ))}
              </div>
              
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.text}"</p>
              </div>
              
              <div className="testimonial-author">
                <div className="author-avatar">
                  <span className="avatar-initials">{testimonial.initials}</span>
                </div>
                <div className="author-info">
                  <h4 className="author-name">{testimonial.name}</h4>
                  <p className="author-occupation">{testimonial.occupation}</p>
                  <p className="author-company">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
