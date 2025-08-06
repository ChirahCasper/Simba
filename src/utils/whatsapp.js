// WhatsApp utility functions
export const generateWhatsAppLink = (phoneNumber, message = '') => {
  const cleanPhoneNumber = phoneNumber.replace(/\D/g, ''); // Remove non-digits
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${cleanPhoneNumber}?text=${encodedMessage}`;
};

export const openWhatsApp = (phoneNumber, message = '') => {
  const link = generateWhatsAppLink(phoneNumber, message);
  window.open(link, '_blank');
};

// Pre-configured WhatsApp functions for Simba Cement
const SIMBA_WHATSAPP_NUMBER = '254105631176'; //

export const contactSimbaWhatsApp = (message = 'Hello, I am interested in your cement products.') => {
  openWhatsApp(SIMBA_WHATSAPP_NUMBER, message);
};

export const orderViaWhatsApp = (productName, quantity = 1) => {
  const message = `Hello, I would like to order ${quantity} ${productName}. Please provide more details about pricing and delivery.`;
  openWhatsApp(SIMBA_WHATSAPP_NUMBER, message);
};

export const getQuoteViaWhatsApp = (productName) => {
  const message = `Hello, I would like to get a quote for ${productName}. Please provide pricing information.`;
  openWhatsApp(SIMBA_WHATSAPP_NUMBER, message);
};
