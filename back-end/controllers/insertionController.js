import pool from '../config/db.js';

export const insertItem = async (req, res) => {
  try {
    const { name, description } = req.body;

    if (!name || !description) {
      return res.status(400).json({ message: 'os campos "nome"e "descricao" sao obrigatorios.' });
    }

    const sql = `INSERT INTO items (name, description) VALUES (?, ?)`;
    const [result] = await pool.execute(sql, [name, description]);

    res.status(201).json({
      message: 'Item inserido com sucesso',
      itemId: result.insertId
    })
  } catch (error) {
    console.error('Error na inserção:', error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
}