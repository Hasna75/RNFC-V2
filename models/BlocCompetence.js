const db = require('../config/db');

const BlocCompetence = {
  getAllBySpecialite: async (specialiteId) => {
    const [rows] = await db.query('SELECT * FROM bloccompetences WHERE id = ?', [specialiteId]);
    return rows;
  },
  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM bloccompetences WHERE id_bloc = ?', [id]);
    return rows[0];
  },
  create: async (specialiteId, nom, nom_bloc_ar) => {
    const [result] = await db.query(
      'INSERT INTO bloccompetences (id, nom, nom_bloc_ar) VALUES (?, ?, ?)', 
      [specialiteId, nom, nom_bloc_ar]
    );
    return result.insertId;
  },
  update: async (id, nom, nom_bloc_ar) => {
    const [result] = await db.query(
      'UPDATE bloccompetences SET nom = ?, nom_bloc_ar = ? WHERE id_bloc = ?', 
      [nom, nom_bloc_ar, id]
    );
    return result;
  },
  delete: async (id) => {
    const [result] = await db.query('DELETE FROM bloccompetences WHERE id_bloc = ?', [id]);
    return result;
  }
};

module.exports = BlocCompetence;