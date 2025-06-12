

const express = require('express');
const router = express.Router();
const competenceController = require('../controllers/competenceController');

router.get('/blocs/:blocId/competences', competenceController.getAllCompetencesByBloc);
router.get('/competences/:id', competenceController.getCompetenceById);
router.post('/competences', competenceController.createCompetence);
router.put('/competences/:id', competenceController.updateCompetence);
router.delete('/competences/:id', competenceController.deleteCompetence);

module.exports = router;