const FicheBloc = require('../models/FicheBloc');

exports.getAllFichesBloc = async (req, res) => {
  try {
    const fiches = await FicheBloc.getAll();
    res.json(fiches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFicheBlocById = async (req, res) => {
  try {
    const fiche = await FicheBloc.getById(req.params.id);
    if (!fiche) return res.status(404).json({ error: 'Fiche bloc non trouvée' });
    res.json(fiche);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFicheBlocByBloc = async (req, res) => {
  try {
    const fiche = await FicheBloc.getByBloc(req.params.blocId);
    if (!fiche) return res.status(404).json({ error: 'Aucune fiche trouvée' });
    res.json(fiche);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createFicheBloc = async (req, res) => {
  try {
    const id = await FicheBloc.create(req.body);
    res.status(201).json({ id_ficheB: id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateFicheBloc = async (req, res) => {
  try {
    const result = await FicheBloc.update(req.params.id, req.body);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Fiche bloc non trouvée' });
    res.json({ message: 'Fiche bloc mise à jour' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteFicheBloc = async (req, res) => {
  try {
    const result = await FicheBloc.delete(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Fiche bloc non trouvée' });
    res.json({ message: 'Fiche bloc supprimée' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};