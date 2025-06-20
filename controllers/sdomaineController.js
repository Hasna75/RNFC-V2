const Sdomaine = require('../models/Sdomaine');

exports.getAllSDomainesByDomaine = async (req, res) => {
  try {
    const sdomaines = await Sdomaine.getAllByDomaine(req.params.domaineId);
    res.json(sdomaines);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSDomaineById = async (req, res) => {
  try {
    const sdomaine = await Sdomaine.getById(req.params.id);
    if (!sdomaine) return res.status(404).json({ error: 'Sous-domaine non trouvé' });
    res.json(sdomaine);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createSDomaine = async (req, res) => {
  try {
    const { domaineId, nom_sdom, nom_sdom_ar } = req.body;
    const id = await Sdomaine.create(domaineId, nom_sdom, nom_sdom_ar);
    res.status(201).json({ id_sdom: id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateSDomaine = async (req, res) => {
  try {
    const { nom_sdom, nom_sdom_ar } = req.body;
    const result = await Sdomaine.update(req.params.id, nom_sdom, nom_sdom_ar);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Sous-domaine non trouvé' });
    res.json({ message: 'Sous-domaine mis à jour' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteSDomaine = async (req, res) => {
  try {
    const result = await Sdomaine.delete(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Sous-domaine non trouvé' });
    res.json({ message: 'Sous-domaine supprimé' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};