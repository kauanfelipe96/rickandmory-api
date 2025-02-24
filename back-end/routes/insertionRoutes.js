import express from 'express';
import { insertItem } from '..//controllers/insertionController';
import { authenticate } from '../middlewares/authMiddleware';

const router = express.Router();

router.post('/', authenticate, insertItem);

export default router;