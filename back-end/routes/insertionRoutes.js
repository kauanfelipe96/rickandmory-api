import express from 'express';
import { insertItem } from '..//controllers/insertionController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.post('/', authenticate, insertItem);

export default router;