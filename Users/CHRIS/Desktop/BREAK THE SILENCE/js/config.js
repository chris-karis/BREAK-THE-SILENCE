// AUTO-REGISTER WITH NOTEBOOKLM MCP
// This code was causing issues in CI environment by trying to connect to localhost
// It's only needed for local development, so we're removing it entirely
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
