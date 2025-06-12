
const BlocCompetence = require('../models/BlocCompetence');

exports.getAllBlocsBySpecialite = async (req, res) => {
  try {
    const blocs = await BlocCompetence.getAllBySpecialite(req.params.specialiteId);
    res.json(blocs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getBlocById = async (req, res) => {
  try {
    const bloc = await BlocCompetence.getById(req.params.id);
    if (!bloc) return res.status(404).json({ error: 'Bloc non trouvé' });
    res.json(bloc);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createBloc = async (req, res) => {
  try {
    const id = await BlocCompetence.create(req.body.specialiteId, req.body.nom);
    res.status(201).json({ id_bloc: id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBloc = async (req, res) => {
  try {
    const [result] = await BlocCompetence.update(req.params.id, req.body.nom);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Bloc non trouvé' });
    res.json({ message: 'Bloc mis à jour' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteBloc = async (req, res) => {
  try {
    const [result] = await BlocCompetence.delete(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Bloc non trouvé' });
    res.json({ message: 'Bloc supprimé' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};