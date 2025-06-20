const db = require('../config/db');

const Competence = {
  getAllByBloc: async (blocId) => {
    const [rows] = await db.query('SELECT * FROM competences WHERE id_bloc = ?', [blocId]);
    return rows;
  },
  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM competences WHERE id_comp = ?', [id]);
    return rows[0];
  },
  create: async (blocId, nom_comp, nom_comp_ar) => {
    const [result] = await db.query(
      'INSERT INTO competences (id_bloc, nom_comp, nom_comp_ar) VALUES (?, ?, ?)', 
      [blocId, nom_comp, nom_comp_ar]
    );
    return result.insertId;
  },
  update: async (id, nom_comp, nom_comp_ar) => {
    const [result] = await db.query(
      'UPDATE competences SET nom_comp = ?, nom_comp_ar = ? WHERE id_comp = ?', 
      [nom_comp, nom_comp_ar, id]
    );
    return result;
  },
  delete: async (id) => {
    const [result] = await db.query('DELETE FROM competences WHERE id_comp = ?', [id]);
    return result;
  }
};

module.exports = Competence;