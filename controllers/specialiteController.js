const Specialite = require('../models/Specialite');

exports.getAllSpecialitesBySdomaine = async (req, res) => {
  try {
    const specialites = await Specialite.getAllBySdomaine(req.params.sdomaineId);
    res.json(specialites);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSpecialiteById = async (req, res) => {
  try {
    const specialite = await Specialite.getById(req.params.id);
    if (!specialite) return res.status(404).json({ error: 'Spécialité non trouvée' });
    res.json(specialite);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createSpecialite = async (req, res) => {
  try {
    const id = await Specialite.create(req.body.sdomaineId, req.body.nom);
    res.status(201).json({ id_specialite: id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSpecialite = async (req, res) => {
  try {
    const [result] = await Specialite.update(req.params.id, req.body.nom);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Spécialité non trouvée' });
    res.json({ message: 'Spécialité mise à jour' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteSpecialite = async (req, res) => {
  try {
    const [result] = await Specialite.delete(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Spécialité non trouvée' });
    res.json({ message: 'Spécialité supprimée' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};