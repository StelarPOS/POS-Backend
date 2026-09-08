import { Router } from 'express';
import healthRoutes from './health.routes.js';
import paymentRoutes from './payment.routes.js';

const router = Router();

router.use('/health', healthRoutes);
router.use('/payments', paymentRoutes);

export default router;
