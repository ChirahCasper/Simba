import React, { useState } from 'react';
import { products } from '../data/products';
import { orderViaWhatsApp, getQuoteViaWhatsApp } from '../utils/whatsapp';
import OrderForm from './OrderForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment, faRulerCombined, faTruck } from '@fortawesome/free-solid-svg-icons';
import '../styles/Products.css';

const Products = () => {
  const [quantities, setQuantities] = useState({});
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleQuantityChange = (productId, quantity) => {
    setQuantities(prev => ({
      ...prev,
      [productId]: quantity
    }));
  };

  const handleOrder = (product) => {
    const quantity = quantities[product.id] || 1;
    if (product.contactForPricing) {
      getQuoteViaWhatsApp(product.name);
    } else {
      setSelectedProduct({ ...product, quantity });
      setShowOrderForm(true);
    }
  };

  const handleCloseOrderForm = () => {
    setShowOrderForm(false);
    setSelectedProduct(null);
  };

  return (
    <>
      <section className="products" id="products">
        <div className="container">
          <h2 className="section-title">Our Premium Cement Products</h2>
          <p className="section-subtitle">
            Choose from our range of high-quality cement products designed for every construction need.
          </p>
          
          <div className="products-grid">
            {products.map((product, index) => (
              <div 
                key={product.id} 
                className={`product-card ${index >= 4 ? 'bottom-row' : 'top-row'}`}
              >
                {product.badge && (
                  <span className="product-badge">{product.badge}</span>
                )}
                
                <div className="product-image">
                  <img src={product.image} alt={product.name} />
                </div>
                
                <div className="product-info">
                  <div className="product-header">
                    {product.rating && (
                      <div className="product-rating">
                        {[...Array(5)].map((_, i) => (
                          <i 
                            key={i} 
                            className={`fas fa-star ${i < product.rating ? 'active' : ''}`}
                          ></i>
                        ))}
                        <span className="rating-count">({product.rating})</span>
                      </div>
                    )}
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-subtitle">{product.subtitle}</p>
                  </div>
                  
                  <div className="product-description">
                    {product.emoji && <span className="product-emoji">{product.emoji}</span>}
                    <span>{product.description}</span>
                  </div>
                  
                  {product.sizes ? (
                    <div className="product-pricing-section">
                      <div className="available-sizes-header">
                        <FontAwesomeIcon icon={faRulerCombined} className="sizes-icon" />
                        <span className="sizes-title">Available Sizes & Prices:</span>
                      </div>
                      
                      <div className="product-sizes">
                        {product.sizes.map((size, index) => (
                          <div key={index} className="size-option">
                            <span className="size-name">{size.size}</span>
                            <span className="size-price">{size.price}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="delivery-info">
                        <FontAwesomeIcon icon={faTruck} className="delivery-icon" />
                        <span className="delivery-text">FREE DELIVERY</span>
                        <p className="delivery-details">
                          Enjoy free delivery for bulk orders (100+ pieces) within Nairobi and surrounding areas.
                        </p>
                      </div>
                      
                      <div className="contact-pricing-section">
                        <h4 className="contact-title">Contact for Pricing</h4>
                        <div className="product-order-section">
                          <div className="quantity-section">
                            <label>Quantity:</label>
                            <div className="quantity-inputs">
                              <input 
                                type="number" 
                                min="1" 
                                defaultValue="1"
                                onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                              />
                              <span>pieces</span>
                            </div>
                          </div>
                          <button 
                            className="order-button"
                            onClick={() => handleOrder(product)}
                          >
                            <FontAwesomeIcon icon={faComment} /> Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="product-pricing-section">
                      <div className="product-pricing">
                        <div className="price-section">
                          {product.originalPrice && product.originalPrice > product.price && (
                            <span className="original-price">KSh {product.originalPrice.toLocaleString()}</span>
                          )}
                          <span className="current-price">KSh {product.price?.toLocaleString()}</span>
                        </div>
                      </div>
                      
                      <div className="product-order-section">
                        <div className="quantity-section">
                          <label>Quantity:</label>
                          <div className="quantity-inputs">
                            <input 
                              type="number" 
                              min="1" 
                              defaultValue="1"
                              onChange={(e) => handleQuantityChange(product.id, e.target.value)}
                            />
                            <span>bags</span>
                          </div>
                        </div>
                        <button 
                          className="order-button"
                          onClick={() => handleOrder(product)}
                        >
                          <FontAwesomeIcon icon={faComment} /> Order Now
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="delivery-banner">
            <h3>FREE DELIVERY</h3>
            <p>Get free delivery on bulk orders of 100+ bags within Nairobi and surrounding areas.</p>
          </div>
        </div>
      </section>

      {showOrderForm && selectedProduct && (
        <OrderForm 
          product={selectedProduct}
          quantity={selectedProduct.quantity}
          onBack={handleCloseOrderForm}
        />
      )}
    </>
  );
};

export default Products;
