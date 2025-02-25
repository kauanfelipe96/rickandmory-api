import express from 'express';
import { authenticate } from '../middlewares/authMiddleware.js';
import { searchItems } from '../controllers/searchController.js';

const router = express.Router();

router.get('/', authenticate, searchItems);

export default router;