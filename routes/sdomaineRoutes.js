
const express = require('express');
const router = express.Router();
const sdomaineController = require('../controllers/sdomaineController');

router.get('/domaines/:domaineId/sdomaines', sdomaineController.getAllSDomainesByDomaine);
router.get('/sdomaines/:id', sdomaineController.getSDomaineById);
router.post('/sdomaines', sdomaineController.createSDomaine);
router.put('/sdomaines/:id', sdomaineController.updateSDomaine);
router.delete('/sdomaines/:id', sdomaineController.deleteSDomaine);

module.exports = router;