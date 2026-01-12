// EmailJS Configuration
// Get these values from https://dashboard.emailjs.com/admin

// Direct access to environment variables
// Vite automatically loads .env file variables prefixed with VITE_
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

// Helper to check if value is a placeholder
const isPlaceholder = (value) => {
  if (!value) return true;
  return value.includes('your_') || value.includes('here') || value.trim() === '';
};

export const EMAILJS_CONFIG = {
  // Your EmailJS Public Key
  PUBLIC_KEY: isPlaceholder(PUBLIC_KEY) ? '' : PUBLIC_KEY,
  
  // Your EmailJS Service ID
  SERVICE_ID: isPlaceholder(SERVICE_ID) ? '' : SERVICE_ID,
  
  // Your EmailJS Template ID
  TEMPLATE_ID: isPlaceholder(TEMPLATE_ID) ? '' : TEMPLATE_ID,
};


