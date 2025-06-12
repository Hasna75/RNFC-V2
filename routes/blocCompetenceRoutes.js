
const express = require('express');
const router = express.Router();
const blocCompetenceController = require('../controllers/blocCompetenceController');

router.get('/specialites/:specialiteId/blocs', blocCompetenceController.getAllBlocsBySpecialite);
router.get('/blocs/:id', blocCompetenceController.getBlocById);
router.post('/blocs', blocCompetenceController.createBloc);
router.put('/blocs/:id', blocCompetenceController.updateBloc);
router.delete('/blocs/:id', blocCompetenceController.deleteBloc);

module.exports = router;