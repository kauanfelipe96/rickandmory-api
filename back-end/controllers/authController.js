export const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Usuario e senha são obrigatórios' });
  }

  if (username === 'usuario' && password === 'senha') {
    res.status(200).json({ message: 'Login bem-sucedido', token: 'A1B2C3' });
  } else {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }
}