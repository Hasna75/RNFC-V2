const Competence = require('../models/Competence');

exports.getAllCompetencesByBloc = async (req, res) => {
  try {
    const competences = await Competence.getAllByBloc(req.params.blocId);
    res.json(competences);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getCompetenceById = async (req, res) => {
  try {
    const competence = await Competence.getById(req.params.id);
    if (!competence) return res.status(404).json({ error: 'Compétence non trouvée' });
    res.json(competence);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.createCompetence = async (req, res) => {
  try {
    const { blocId, nom_comp, nom_comp_ar } = req.body;
    const id = await Competence.create(blocId, nom_comp, nom_comp_ar);
    res.status(201).json({ id_comp: id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.updateCompetence = async (req, res) => {
  try {
    const { nom_comp, nom_comp_ar } = req.body;
    const result = await Competence.update(req.params.id, nom_comp, nom_comp_ar);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Compétence non trouvée' });
    res.json({ message: 'Compétence mise à jour' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteCompetence = async (req, res) => {
  try {
    const result = await Competence.delete(req.params.id);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Compétence non trouvée' });
    res.json({ message: 'Compétence supprimée' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};