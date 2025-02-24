export const login = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Usuario e senha são obrigatórios' });
  }

  if (username === 'usuario' && password === 'senha123') {
    return res.json({
      message: 'Login realizado com sucesso',
      token: 'token'
    });
  } else {
    return res.status(401).json({ message: 'Credenciais inválidas' });
  }
}