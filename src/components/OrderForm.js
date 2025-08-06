import React, { useState } from 'react';
import { orderViaWhatsApp } from '../utils/whatsapp';
import '../styles/OrderForm.css';

const OrderForm = ({ product, quantity, onBack }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    idNumber: '',
    phoneNumber: '',
    deliveryLocation: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const orderMessage = `
*Simba Cement Order Form*

*Product Information:*
Product Name: ${product.name}
Unit Price: KSh ${product.price?.toLocaleString()}
Quantity: ${quantity}
Total Price: KSh ${(product.price * quantity).toLocaleString()}

*Customer Information:*
Full Name: ${formData.fullName}
ID Number: ${formData.idNumber}
Phone Number: ${formData.phoneNumber}
Delivery Location: ${formData.deliveryLocation}

Please confirm this order and provide delivery timeline.
    `;
    
    orderViaWhatsApp('Order Confirmation', orderMessage);
  };

  const totalPrice = product.price * quantity;

  return (
    <div className="order-form-overlay">
      <div className="order-form-container">
        <button className="back-button" onClick={onBack}>
          <i className="fas fa-arrow-left"></i> Back
        </button>
        
        <div className="order-form-header">
          <i className="fas fa-shopping-cart"></i>
          <h2>Simba Cement Order Form</h2>
          <p>Complete your order details below and proceed to WhatsApp checkout</p>
        </div>

        <form onSubmit={handleSubmit} className="order-form">
          <div className="form-section">
            <h3>Product Information</h3>
            <div className="product-summary">
              <div className="form-row">
                <label>Product Name</label>
                <input type="text" value={product.name} disabled />
              </div>
              <div className="form-row-group">
                <div className="form-col">
                  <label>Unit Price (KSh)</label>
                  <input type="text" value={product.price} disabled />
                </div>
                <div className="form-col">
                  <label>Quantity</label>
                  <input type="text" value={quantity} disabled />
                </div>
                <div className="form-col">
                  <label>Total Price (KSh)</label>
                  <input type="text" value={totalPrice.toLocaleString()} disabled />
                </div>
              </div>
            </div>
          </div>

          <div className="form-section">
            <h3>Customer Information</h3>
            <div className="form-row">
              <label>Full Name *</label>
              <input 
                type="text" 
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-row">
              <label>ID Number *</label>
              <input 
                type="text" 
                name="idNumber"
                placeholder="e.g. 12345678"
                value={formData.idNumber}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-row">
              <label>Phone Number *</label>
              <input 
                type="tel" 
                name="phoneNumber"
                placeholder="e.g. 0700000000"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required 
              />
            </div>
            <div className="form-row">
              <label>Delivery Location *</label>
              <input 
                type="text" 
                name="deliveryLocation"
                placeholder="Enter your delivery address"
                value={formData.deliveryLocation}
                onChange={handleInputChange}
                required 
              />
            </div>
          </div>

          <button type="submit" className="complete-order-btn">
            <i className="fab fa-whatsapp"></i> Complete Order via WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderForm;
