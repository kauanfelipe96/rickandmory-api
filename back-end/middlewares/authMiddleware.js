export const authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(' ')[1];

  if (!authHeader) {
    return res.status(401).json({ message: 'Acesso negado.' })
  }

  if (!token) {
    return res.status(401).json({ message: 'Acesso negado.' })
  }

  next();
}