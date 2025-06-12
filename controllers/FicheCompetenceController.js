const FicheCompetence = require('../models/FicheCompetence');

exports.getAllFichesCompetence = async (req, res) => {
  try {
    const fiches = await FicheCompetence.getAll();
    res.json(fiches);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFicheCompetenceById = async (req, res) => {
  try {
    const fiche = await FicheCompetence.getById(req.params.id);
    if (!fiche) return res.status(404).json({ error: 'Fiche compétence non trouvée' });
    res.json(fiche);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getFicheCompetenceByComp = async (req, res) => {
  try {
    const fiche = await FicheCompetence.getByCompetence(req.params.compId);
    if (!fiche) return res.status(404).json({ error: 'Aucune fiche trouvée' });
    res.json(fiche);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createFicheCompetence = async (req, res) => {
  try {
    const id = await FicheCompetence.create(req.body);
    res.status(201).json({ id_ficheC: id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateFicheCompetence = async (req, res) => {
  try {
    const result = await FicheCompetence.update(req.params.id, req.body);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Fiche compétence non trouvée' });
    res.json({ message: 'Fiche compétence mise à jour' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteFicheCompetence = async (req, res) => {
  try {
    const result = await FicheCompetence.delete(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Fiche compétence non trouvée' });
    res.json({ message: 'Fiche compétence supprimée' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};