
const db = require('../config/db');

const Secteur = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM secteur');
    return rows;
  },
  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM secteur WHERE id_sect = ?', [id]);
    return rows[0];
  },
  create: async (nom,nom_sect_ar) => {
    const [result] = await db.query('INSERT INTO secteur (nom_sect,nom_sect_ar) VALUES (?)', [nom,nom_sect_ar]);
    return result.insertId;
  },
  update: async (id, nom,nom_sect_ar) => {
    const [result] = await db.query('UPDATE secteur SET nom_sect = ? nom_sect_ar = ? WHERE id_sect = ?', [nom,nom_sect_ar, id]);
    return result;
  },
  delete: async (id) => {
    const [result] = await db.query('DELETE FROM secteur WHERE id_sect = ?', [id]);
    return result;
  }
};

module.exports = Secteur;