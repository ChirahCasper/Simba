// Hero images
import heroBg from '../assets/images/hero/hero-bg.jpg';

// Carousel images
import carousel1 from '../assets/images/carousel/carousel-1.jpg';
import carousel2 from '../assets/images/carousel/carousel-2.jpg';
import carousel3 from '../assets/images/carousel/carousel-3.jpg';
import carousel4 from '../assets/images/carousel/carousel-4.jpg';
import carousel5 from '../assets/images/carousel/carousel-5.jpg';

// Product images
import cement32 from '../assets/images/products/cement-32-5r.jpg';
import cement42 from '../assets/images/products/cement-42-5n.jpg';
import paintingBlocks from '../assets/images/products/painting-blocks.jpg';
import steelBar from '../assets/images/products/steel-bar.jpg';
import bindingWire from '../assets/images/products/binding-wire.jpg';
import hoopIron from '../assets/images/products/hoop-iron.jpg';

export const heroImages = {
  background: heroBg
};

export const carouselImages = [
  {
    id: 1,
    src: carousel1,
    alt: 'Construction Site 1'
  },
  {
    id: 2,
    src: carousel2,
    alt: 'Construction Workers'
  },
  {
    id: 3,
    src: carousel3,
    alt: 'Building Construction'
  },
  {
    id: 4,
    src: carousel4,
    alt: 'Cement Mixing'
  },
  {
    id: 5,
    src: carousel5,
    alt: 'Construction Equipment'
  }
];

export const productImages = {
  cement32,
  cement42,
  paintingBlocks,
  steelBar,
  bindingWire,
  hoopIron
};
