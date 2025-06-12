
const db = require('../config/db');

const Domaine = {
  getAllBySecteur: async (secteurId) => {
    const [rows] = await db.query('SELECT * FROM domaines WHERE id_sect = ?', [secteurId]);
    return rows;
  },
  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM domaines WHERE id_dom = ?', [id]);
    return rows[0];
  },
  create: async (secteurId, nom,nom_dom_ar) => {
    const [result] = await db.query(
      'INSERT INTO domaine (id_sect, nom_dom,nom_dom_ar) VALUES (?, ?, ?)', 
      [secteurId, nom,nom_dom_ar]
    );
    return result.insertId;
  },
  update: async (id, nom,nom_dom_ar) => {
    const [result] = await db.query('UPDATE domaines SET nom_dom = ?,nom_dom_ar = ? WHERE id_dom = ?', [nom,nom_dom-ar, id]);
    return result;
  },
  delete: async (id) => {
    const [result] = await db.query('DELETE FROM domaines WHERE id_dom = ?', [id]);
    return result;
  }
};

module.exports = Domaine;