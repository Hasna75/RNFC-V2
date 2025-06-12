

const express = require('express');
const router = express.Router();
const domaineController = require('../controllers/domaineController');

router.get('/secteurs/:secteurId/domaines', domaineController.getAllDomainesBySecteur);
router.get('/domaines/:id', domaineController.getDomaineById);
router.post('/domaines', domaineController.createDomaine);
router.put('/domaines/:id', domaineController.updateDomaine);
router.delete('/domaines/:id', domaineController.deleteDomaine);

module.exports = router;