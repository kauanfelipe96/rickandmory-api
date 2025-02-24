import express from 'express';
import { authenticate } from '../middlewares/authMiddleware';
import { search } from '../controllers/searchController';

const router = express.Router();

router.get('/search', authenticate, searchItems);

export default router;