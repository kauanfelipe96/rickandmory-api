import express from 'express';
import authRoutes from './routes/authRoutes';
import compression from 'compression';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use(compression());

app.get('/', (req, res) => {
  res.send('Server ON');
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});