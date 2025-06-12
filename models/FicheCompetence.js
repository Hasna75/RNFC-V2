const db = require('../config/db');

const FicheCompetence = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM fiche_comp');
    return rows;
  },
  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM fiche_comp WHERE id_ficheC = ?', [id]);
    return rows[0];
  },
  getByCompetence: async (compId) => {
    const [rows] = await db.query('SELECT * FROM fiche_comp WHERE id_comp = ?', [compId]);
    return rows[0];
  },
  create: async (data) => {
    const [result] = await db.query(
      'INSERT INTO fiche_comp (id_comp,objectif,travail,aide ,directive,criteres) VALUES (?, ?, ?, ?, ?, ?)',
      [data.id_comp, data.objectif,data.travail,data.aide ,data.directive,data.criteres]
    );
    return result.insertId;
  },
  update: async (id, data) => {
    const [result] = await db.query(
      'UPDATE fiche_comp SET detail = ?, niveau_maitrise = ? WHERE id_ficheC = ?',
      [data.objectif,data.travail,data.aide ,data.directive,data.criteres, id]
    );
    return result;
  },
  delete: async (id) => {
    const [result] = await db.query('DELETE FROM fiche_comp WHERE id_ficheC = ?', [id]);
    return result;
  }
};

module.exports = FicheCompetence;