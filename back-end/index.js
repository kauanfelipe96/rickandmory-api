import express from 'express';
import compression from 'compression';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes.js';
import searchRoutes from './routes/searchRoutes.js';
import insertionRoutes from './routes/insertionRoutes.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(compression());
app.use('/api/auth', authRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/insert', insertionRoutes);
app.use('/api/users', userRoutes); 

app.get('/', (req, res) => {
  res.send('Server ON');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});