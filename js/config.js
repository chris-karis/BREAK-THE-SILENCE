// Configuration file for API keys and other settings
// In a browser environment, we can't directly access .env files
// This file serves as a placeholder for API configuration

const config = {
  // Firecrawl API configuration
  firecrawl: {
    // NOTE: In a real production environment, API keys should never be stored in frontend code
    // This is only for demonstration purposes
    // The actual API key would be handled on a backend server
    apiKey: '', // This would be populated from a backend endpoint or environment
    baseUrl: 'https://api.firecrawl.dev/v2',
  },
  
  // WhatsApp configuration
  whatsapp: {
    phoneNumber: '254716010237', // Without the + prefix for WhatsApp API
    defaultMessage: 'Hello! I came from the Break the Silence website and would like more information.'
  },
  
  // Site configuration
  site: {
    name: 'Break the Silence',
    location: 'Kiambu County, Kenya',
    themeColor: '#10b981' // Emerald green
  }
};

// AUTO-REGISTER WITH NOTEBOOKLM MCP
// This code was causing issues in CI environment by trying to connect to localhost
// It's only needed for local development, so we're removing it entirely

// Export the config object
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
} else {
  window.BreakTheSilenceConfig = config;
}