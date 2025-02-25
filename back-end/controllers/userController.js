import pool from '../config/db.js';
import bcrypt from 'bcrypt';

export const registerUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    

    if (!email || !password) {
      return res.status(400).json({ message: "Todos os campos são obrigatórios." });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const sql = `INSERT INTO users (email, password) VALUES (?, ?)`;
    const [result] = await pool.execute(sql, [email, hashedPassword]);

    res.status(201).json({ message: "Usuário criado com sucesso!", userId: result.insertId });
  } catch (error) {
    console.error("Erro ao criar usuário:", error);
    res.status(500).json({ message: "Erro interno no servidor." });
  }
};
