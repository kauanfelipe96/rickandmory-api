import pool from '../config/db.js';

export const searchItems = async (req, res) => {
  try {
    const { query } = req.query;

    if (!query) {
      return res.status(400).json({ message: 'Parametro obrigatorio' });
    }

    const sql = `SELECT * FROM items WHERE name LIKE ?`;
    const [rows] = await pool.execute(sql, [`%${query}%`]);

    res.json({ resutls: rows });
  } catch (error) {
    console.error('Erro na busca:', error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
}