const Domaine = require('../models/Domaine');

exports.getAllDomainesBySecteur = async (req, res) => {
  try {
    const domaines = await Domaine.getAllBySecteur(req.params.secteurId);
    res.json(domaines);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getDomaineById = async (req, res) => {
  try {
    const domaine = await Domaine.getById(req.params.id);
    if (!domaine) return res.status(404).json({ error: 'Domaine non trouvé' });
    res.json(domaine);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createDomaine = async (req, res) => {
  try {
    const { secteurId, nom_dom, nom_dom_ar } = req.body;
    const id = await Domaine.create(secteurId, nom_dom, nom_dom_ar);
    res.status(201).json({ id_dom: id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateDomaine = async (req, res) => {
  try {
    const { nom_dom, nom_dom_ar } = req.body;
    const result = await Domaine.update(req.params.id, nom_dom, nom_dom_ar);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Domaine non trouvé' });
    res.json({ message: 'Domaine mis à jour' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteDomaine = async (req, res) => {
  try {
    const result = await Domaine.delete(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Domaine non trouvé' });
    res.json({ message: 'Domaine supprimé' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};