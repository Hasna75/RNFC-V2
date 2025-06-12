const express = require('express');
const router = express.Router();
const ficheCompetenceController = require('../controllers/ficheCompetenceController');

router.get('/fiches/competences', ficheCompetenceController.getAllFichesCompetence);
router.get('/fiches/competences/:id', ficheCompetenceController.getFicheCompetenceById);
router.get('/fiches/competence/:compId', ficheCompetenceController.getFicheCompetenceByComp);
router.post('/fiches/competences', ficheCompetenceController.createFicheCompetence);
router.put('/fiches/competences/:id', ficheCompetenceController.updateFicheCompetence);
router.delete('/fiches/competences/:id', ficheCompetenceController.deleteFicheCompetence);

module.exports = router;