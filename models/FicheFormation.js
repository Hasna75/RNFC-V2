const db = require('../config/db');

const FicheFormation = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM fiche_formation');
    return rows;
  },
  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM fiche_formation WHERE id_fiche = ?', [id]);
    return rows[0];
  },
  getBySpecialite: async (speId) => {
    const [rows] = await db.query('SELECT * FROM fiche_formation WHERE id = ?', [speId]);
    return rows[0];
  },

  create: async (data) => {
    const [result] = await db.query(
      'INSERT INTO fiche_formation (id, codnom, nivq, diplom, object, duree, nivSc, modFor, debou, modQ, modc, def, appel, exig, listcqp,evol, modeval) VALUES (?, ?, ?, ?, ?, ?,?, ?, ?,?, ?, ?,?, ?, ?,?, ?)',
      [data.id,  data.codnom, data.nivq, data.diplom, data.object, data.duree, data.nivSc, data.modFor, data.debou, data.modQ, data.modc, data.def, data.appel, data.exig, data.listcqp,data.evol, data.modeval]
    );
    return result.insertId;
  },


  update: async (id, data) => {
    const [result] = await db.query(
      'UPDATE fiche_formation SET codnom = ?, nivq = ?   diplom= ?, object= ?, duree= ?, nivSc= ?, modFor= ?, debou= ?, modQ= ?, modc= ?, def= ?, appel= ?, exig= ?, listcqp= ?,evol= ?, modeval= ?  WHERE id_fiche = ?',
      [data.codnom, data.nivq,data.diplom, data.object, data.duree, data.nivSc, data.modFor, data.debou, data.modQ, data.modc, data.def, data.appel, data.exig, data.listcqp,data.evol, data.modeval, id]
    );
    return result;
  },
  delete: async (id) => {
    const [result] = await db.query('DELETE FROM fiche_formation WHERE id_fiche = ?', [id]);
    return result;
  }
};

module.exports = FicheFormation;