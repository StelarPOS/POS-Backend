import dotenv from 'dotenv';
import StellarSdk from '@stellar/stellar-sdk';

dotenv.config();

export const STELLAR_NETWORK = process.env.STELLAR_NETWORK || 'testnet';
export const STELLAR_HORIZON_URL = process.env.STELLAR_HORIZON_URL || 'https://horizon-testnet.stellar.org';
export const STELLAR_USDC_ISSUER = process.env.STELLAR_USDC_ISSUER || 'GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5';

// Instantiate Horizon Server connection
export const horizonServer = new StellarSdk.Horizon.Server(STELLAR_HORIZON_URL);

// Network Passphrase mapping
export const NETWORK_PASSPHRASE = STELLAR_NETWORK === 'public' 
  ? StellarSdk.Networks.PUBLIC 
  : StellarSdk.Networks.TESTNET;

export default {
  network: STELLAR_NETWORK,
  horizonUrl: STELLAR_HORIZON_URL,
  usdcIssuer: STELLAR_USDC_ISSUER,
  passphrase: NETWORK_PASSPHRASE,
};
