# Contributing to StellarPOS Backend

Thank you for your interest in contributing to the **StellarPOS Backend API**!

---

## Development Workflow

1. **Fork & Clone**
   ```bash
   git clone https://github.com/<your-username>/POS-Backend.git
   cd POS-Backend
   ```

2. **Install Dependencies & Generate Prisma Client**
   ```bash
   npm install
   npx prisma generate
   ```

3. **Start Server**
   ```bash
   npm run dev
   ```

4. **Verify Endpoints**
   ```bash
   curl http://localhost:5000/api/health
   curl http://localhost:5000/api/payments/test
   ```

5. **Commit Style**
   * Use Conventional Commits (`feat: ...`, `fix: ...`, `refactor: ...`).

6. **Submit PR**
   * Target the `main` branch with descriptive details.
