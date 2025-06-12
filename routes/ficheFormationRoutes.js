const express = require('express');
const router = express.Router();
const ficheFormationController = require('../controllers/ficheFormationController');

router.get('/fiches', ficheFormationController.getAllFichesFormation);
router.get('/fiches/formation/:id', ficheFormationController.getFicheFormationById);
router.get('/fiches/specialite/:speId', ficheFormationController.getFicheBySpecialite);
router.post('/fiches', ficheFormationController.createFicheFormation);
router.put('/fiches/:id', ficheFormationController.updateFicheFormation);
router.delete('/fiches/:id', ficheFormationController.deleteFicheFormation);

module.exports = router;