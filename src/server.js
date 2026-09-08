import app from './app.js';

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`[StellarPOS Backend] Server running on http://localhost:${PORT}`);
  console.log(`[StellarPOS Backend] Environment: ${process.env.NODE_ENV || 'development'}`);
  console.log(`[StellarPOS Backend] Stellar Network: ${process.env.STELLAR_NETWORK || 'testnet'}`);
});

process.on('SIGTERM', () => {
  console.log('[StellarPOS Backend] SIGTERM received. Closing HTTP server...');
  server.close(() => {
    console.log('[StellarPOS Backend] HTTP server closed');
  });
});

export default server;
