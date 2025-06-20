const db = require('../config/db');

const Sdomaine = {
  getAllByDomaine: async (domaineId) => {
    const [rows] = await db.query('SELECT * FROM sdomaine WHERE id_dom = ?', [domaineId]);
    return rows;
  },
  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM sdomaine WHERE id_sdom = ?', [id]);
    return rows[0];
  },
  create: async (domaineId, nom_sdom, nom_sdom_ar) => {
    const [result] = await db.query(
      'INSERT INTO sdomaine (id_dom, nom_sdom, nom_sdom_ar) VALUES (?, ?, ?)', 
      [domaineId, nom_sdom, nom_sdom_ar]
    );
    return result.insertId;
  },
  update: async (id, nom_sdom, nom_sdom_ar) => {
    const [result] = await db.query(
      'UPDATE sdomaine SET nom_sdom = ?, nom_sdom_ar = ? WHERE id_sdom = ?', 
      [nom_sdom, nom_sdom_ar, id]
    );
    return result;
  },
  delete: async (id) => {
    const [result] = await db.query('DELETE FROM sdomaine WHERE id_sdom = ?', [id]);
    return result;
  }
};

module.exports = Sdomaine;