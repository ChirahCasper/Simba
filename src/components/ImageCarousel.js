import React from 'react';
import Slider from 'react-slick';
import { carouselImages } from '../data/images';
import '../styles/ImageCarousel.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageCarousel = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2500,
    infinite: true,
    speed: 600,
    slidesToShow: 1,        // Changed from 3 to 1
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
    centerMode: true,       // Optional: centers the active slide
    centerPadding: '0px',   // Optional: removes padding around centered slide
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },  // Changed from 3 to 1
      { breakpoint: 768,  settings: { slidesToShow: 1 } },  // Changed from 2 to 1
      { breakpoint: 480,  settings: { slidesToShow: 1 } }   // Already 1
    ]
  };

  return (
    <section className="image-carousel">
      <Slider {...settings}>
        {carouselImages.map((image) => (
          <div key={image.id} className="carousel-slide">
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ImageCarousel;
