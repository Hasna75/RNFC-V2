
const db = require('../config/db');

const Specialite = {
  getAllBySdomaine: async (sdomaineId) => {
    const [rows] = await db.query('SELECT * FROM specialites WHERE id_sdom = ?', [sdomaineId]);
    return rows;
  },
  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM specialites WHERE id = ?', [id]);
    return rows[0];
  },
  create: async (sdomaineId, nom,nom_spe_ar,type_form) => {
    const [result] = await db.query(
      'INSERT INTO specialites (id, nom,nom_spe_ar,type_form) VALUES (?, ?,?, ?)', 
      [sdomaineId, nom,nom_spe_ar,type_form]
    );
    return result.insertId;
  },
  update: async (id, nom) => {
    const [result] = await db.query('UPDATE specialites SET nom = ? nom_spe_ar = ?,type_form = ? WHERE id = ?', [nom,nom_spe_ar,type_form, id]);
    return result;
  },
  delete: async (id) => {
    const [result] = await db.query('DELETE FROM specialites WHERE id = ?', [id]);
    return result;
  }
};

module.exports = Specialite;
