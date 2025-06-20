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
    const { specialiteId, nom, nom_bloc_ar } = req.body;
    const id = await BlocCompetence.create(specialiteId, nom, nom_bloc_ar);
    res.status(201).json({ id_bloc: id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateBloc = async (req, res) => {
  try {
    const { nom, nom_bloc_ar } = req.body;
    const result = await BlocCompetence.update(req.params.id, nom, nom_bloc_ar);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Bloc non trouvé' });
    res.json({ message: 'Bloc mis à jour' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteBloc = async (req, res) => {
  try {
    const result = await BlocCompetence.delete(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Bloc non trouvé' });
    res.json({ message: 'Bloc supprimé' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};