const db = require('../config/db');

const FicheBloc = {
  getAll: async () => {
    const [rows] = await db.query('SELECT * FROM fiche_bloc');
    return rows;
  },
  getById: async (id) => {
    const [rows] = await db.query('SELECT * FROM fiche_bloc WHERE id_ficheB = ?', [id]);
    return rows[0];
  },
  getByBloc: async (blocId) => {
    const [rows] = await db.query('SELECT * FROM fiche_bloc WHERE id_bloc = ?', [blocId]);
    return rows[0];
  },
  create: async (data) => {
    const [result] = await db.query(
      'INSERT INTO fiche_bloc (id_bloc,objec,modq,modc,debou,duree, nivSc,modFor, sanc) VALUES (?, ?, ?, ?)',
      [data.id_bloc, data.objec,data.modq,data.modc,data.debou,data.duree, data.nivSc,data.modFor, data.sanc]
    );
    return result.insertId;
  },
  update: async (id, data) => {
    const [result] = await db.query(
      'UPDATE fiche_bloc SET objec = ?, modq= ?,modc= ?,debou= ?,duree= ?, nivSc= ?,modFor= ?, sanc= ?  WHERE id_ficheB = ?',
      [data.objec, data.modq,data.modc,data.debou,data.duree, data.nivSc,data.modFor, data.sanc, id]
    );
    return result;
  },
  delete: async (id) => {
    const [result] = await db.query('DELETE FROM fiche_bloc WHERE id_ficheB = ?', [id]);
    return result;
  }
};

module.exports = FicheBloc;