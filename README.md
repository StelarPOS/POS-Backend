# StellarPOS Backend ⚡

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Node.js](https://img.shields.io/badge/Node.js-18+-339933.svg?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express.js](https://img.shields.io/badge/Express-4.21-000000.svg?logo=express&logoColor=white)](https://expressjs.com/)
[![Prisma](https://img.shields.io/badge/Prisma-6.3-2D3748.svg?logo=prisma&logoColor=white)](https://www.prisma.io/)
[![Stellar SDK](https://img.shields.io/badge/@stellar/stellar--sdk-13.1-08B5E5.svg?logo=stellar&logoColor=white)](https://github.com/stellar/js-stellar-sdk)

> **Robust, extensible backend API and transaction verification foundation for the StellarPOS merchant network.**

---

## 📌 Milestone Status (~20% Scope)

This repository represents the **Backend Foundation (~2% of total project)**:
* **Express Architecture**: Clean ES Modules setup with `helmet`, `cors`, `morgan`, and centralized error handling middleware.
* **Health Endpoint (`GET /api/health`)**: Instant service uptime and version check.
* **Test Payment Endpoint (`GET /api/payments/test`)**: Validates mock payment object construction and Stellar asset verification.
* **Stellar Service Foundation**: Extensible `@stellar/stellar-sdk` client stubs for `getTransaction`, `verifyPayment`, `getAccountDetails`, and `verifyAsset`.
* **Prisma Schema**: PostgreSQL `Payment` model with indexing on `paymentId`, `status`, and `merchantId`.

---

## 🛠 Tech Stack

* **Runtime**: Node.js (ES Modules)
* **Framework**: Express.js
* **Database ORM**: Prisma ORM (PostgreSQL)
* **Blockchain SDK**: `@stellar/stellar-sdk`
* **Security & Utility**: Helmet, CORS, Morgan, dotenv

---

## 📁 Project Structure

```
backend/
├── src/
│   ├── config/
│   │   └── stellar.config.js # Stellar Horizon connection & credentials
│   ├── controllers/
│   │   ├── health.controller.js  # GET /api/health
│   │   └── payment.controller.js # GET /api/payments/test
│   ├── routes/
│   │   ├── health.routes.js
│   │   ├── payment.routes.js
│   │   └── index.js
│   ├── services/
│   │   └── stellar.service.js # Extensible Stellar transaction verification
│   ├── middleware/
│   │   └── errorHandler.js   # Centralized error handler
│   ├── app.js                # Express app setup
│   └── server.js             # HTTP listener
├── prisma/
│   └── schema.prisma         # Initial Payment model schema
└── package.json
```

---

## 🚀 Quickstart Guide

### Prerequisites
* **Node.js**: `v18.0.0` or higher
* **PostgreSQL** (for database persistence in subsequent milestones)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/StelarPOS/POS-Backend.git
   cd POS-Backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Generate Prisma Client:
   ```bash
   npx prisma generate
   ```

4. Configure environment:
   ```bash
   cp .env.example .env
   ```

5. Start development server:
   ```bash
   npm run dev
   ```
   Or production:
   ```bash
   npm start
   ```

---

## 🔌 API Endpoints

### 1. Health Check
* **Endpoint**: `GET /api/health`
* **Response**:
  ```json
  {
    "success": true,
    "message": "StellarPOS API is running",
    "version": "0.1.0",
    "milestone": "20%",
    "environment": "development"
  }
  ```

### 2. Test Payment Foundation
* **Endpoint**: `GET /api/payments/test`
* **Response**:
  ```json
  {
    "success": true,
    "message": "StellarPOS Payment test endpoint foundation ready",
    "mockPayment": {
      "paymentId": "PAY-TEST-...",
      "amount": "25.00",
      "asset": "USDC",
      "status": "PENDING"
    },
    "stellarAssetConfig": {
      "valid": true,
      "type": "credit_alphanum4",
      "assetCode": "USDC",
      "issuer": "GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5"
    }
  }
  ```

---

## ⚙️ Environment Variables

| Variable | Description | Default |
| :--- | :--- | :--- |
| `PORT` | HTTP server port | `5000` |
| `NODE_ENV` | Environment name | `development` |
| `DATABASE_URL` | PostgreSQL connection URI | `postgresql://...` |
| `STELLAR_NETWORK` | Stellar network (`testnet` / `public`) | `testnet` |
| `STELLAR_HORIZON_URL` | Horizon server URL | `https://horizon-testnet.stellar.org` |
| `STELLAR_USDC_ISSUER` | Circle USDC Issuer address | `GBBD47IF6LWK7P7MDEVSCWR7DPUWV3NY3DTQEVFL4NAT4AQH3ZLLFLA5` |

---

## 🤝 Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

---

## 📄 License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.
