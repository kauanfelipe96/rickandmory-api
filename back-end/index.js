import express from 'express';
import compression from 'compression';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes.js';
import searchRoutes from './routes/searchRoutes.js';
import insertionRoutes from './routes/insertionRoutes.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(compression());
app.use('/api/auth', authRoutes);
app.use('/api/search', searchRoutes);
app.use('/api/insert', insertionRoutes);

app.get('/', (req, res) => {
  res.send('Server ON');
});

app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;

  if (username === 'usuario' && password === 'senha') {
    rest.status(200).json({ message: 'Login com sucesso', token: 'A1b2C3#' });
  } else {
    rest.status(401).json({ message: 'Credenciais Invalidas' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});