import express from 'express';

import { getAllproducts } from '../controllers/Products.js';

const router = express.Router();

router.get('/', getAllproducts);

export default router;
