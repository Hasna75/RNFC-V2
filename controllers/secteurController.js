
const Secteur = require('../models/Secteur');

exports.getAllSecteurs = async (req, res) => {
  try {
    const secteurs = await Secteur.getAll();
    res.json(secteurs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSecteurById = async (req, res) => {
  try {
    const secteur = await Secteur.getById(req.params.id);
    if (!secteur) return res.status(404).json({ error: 'Secteur non trouvé' });
    res.json(secteur);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createSecteur = async (req, res) => {
  try {
    const id = await Secteur.create(req.body.nom_secteur);
    res.status(201).json({ id_sect: id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSecteur = async (req, res) => {
  try {
    const [result] = await Secteur.update(req.params.id, req.body.nom_sect);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Secteur non trouvé' });
    res.json({ message: 'Secteur mis à jour' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteSecteur = async (req, res) => {
  try {
    const [result] = await Secteur.delete(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Secteur non trouvé' });
    res.json({ message: 'Secteur supprimé' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};