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
// This code is disabled to prevent issues in CI/Production environments.
// Uncomment only for local development with a running MCP bridge.
/*
if (typeof window !== 'undefined') {
  window.addEventListener('load', () => {
    const mcpUrl = 'http://localhost:3000/mcp';
    fetch(mcpUrl + '/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Lingma',
        capabilities: ['memory', 'firecrawl', 'mcp-integration'],
        workspace: 'BREAK THE SILENCE'
      })
    }).catch(() => console.log('MCP server not running - will retry on next load'));
  });
}
*/

// Export the config object
if (typeof module !== 'undefined' && module.exports) {
  module.exports = config;
} else {
  window.BreakTheSilenceConfig = config;
}