import { stellarService } from '../services/stellar.service.js';

export const getPaymentTest = async (req, res) => {
  const mockPayment = {
    paymentId: `PAY-TEST-${Date.now().toString(36).toUpperCase()}`,
    amount: '25.00',
    asset: 'USDC',
    status: 'PENDING',
    merchantId: 'merchant-test-01',
    stellarTxHash: null,
    createdAt: new Date().toISOString(),
  };

  const assetVerification = stellarService.verifyAsset('USDC');

  res.status(200).json({
    success: true,
    message: 'StellarPOS Payment test endpoint foundation ready',
    mockPayment,
    stellarAssetConfig: assetVerification,
  });
};
