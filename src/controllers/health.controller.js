export const getHealth = (req, res) => {
  res.status(200).json({
    success: true,
    message: 'StellarPOS API is running',
    version: '0.1.0',
    milestone: '20%',
    environment: process.env.NODE_ENV || 'development',
    timestamp: new Date().toISOString(),
  });
};
