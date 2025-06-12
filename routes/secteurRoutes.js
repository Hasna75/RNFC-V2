
const express = require('express');
const router = express.Router();
const secteurController = require('../controllers/secteurController');

router.get('/secteurs', secteurController.getAllSecteurs);
router.get('/secteurs/:id', secteurController.getSecteurById);
router.post('/secteurs', secteurController.createSecteur);
router.put('/secteurs/:id', secteurController.updateSecteur);
router.delete('/secteurs/:id', secteurController.deleteSecteur);

module.exports = router;