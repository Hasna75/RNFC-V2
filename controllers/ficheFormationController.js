const FicheFormation = require('../models/FicheFormation');

exports.getAllFichesFormation = async (req, res) => {
  try {
    const fiches = await FicheFormation.getAll();
    res.json(fiches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFicheFormationById = async (req, res) => {
  try {
    const fiche = await FicheFormation.getById(req.params.id);
    if (!fiche) return res.status(404).json({ error: 'Fiche non trouvée' });
    res.json(fiche);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFicheBySpecialite = async (req, res) => {
  try {
    const fiche = await FicheFormation.getBySpecialite(req.params.speId);
    if (!fiche) return res.status(404).json({ error: 'Aucune fiche trouvée' });
    res.json(fiche);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createFicheFormation = async (req, res) => {
  try {
    const id = await FicheFormation.create(req.body);
    res.status(201).json({ id_fiche: id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateFicheFormation = async (req, res) => {
  try {
    const result = await FicheFormation.update(req.params.id, req.body);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Fiche non trouvée' });
    res.json({ message: 'Fiche mise à jour' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteFicheFormation = async (req, res) => {
  try {
    const result = await FicheFormation.delete(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Fiche non trouvée' });
    res.json({ message: 'Fiche supprimée' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};