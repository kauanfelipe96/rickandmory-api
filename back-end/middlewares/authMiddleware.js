export const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split('')[1];
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Acesso negado.' })
  }

  if (!token) {
    return res.status(401).json({ message: 'Acesso negado.' })
  }

  next();
}