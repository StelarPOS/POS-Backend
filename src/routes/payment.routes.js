import { Router } from 'express';
import { getPaymentTest } from '../controllers/payment.controller.js';

const router = Router();

router.get('/test', getPaymentTest);

export default router;
