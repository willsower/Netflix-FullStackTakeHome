import express from 'express';

import { listBusinesses } from '../controllers/businessController';

const router = express.Router();

router.get('/', listBusinesses);

export default router;
