
const express = require('express');
const router = express.Router();
const specialiteController = require('../controllers/specialiteController');

router.get('/sdomaines/:sdomaineId/specialites', specialiteController.getAllSpecialitesBySdomaine);
router.get('/specialites/:id', specialiteController.getSpecialiteById);
router.post('/specialites', specialiteController.createSpecialite);
router.put('/specialites/:id', specialiteController.updateSpecialite);
router.delete('/specialites/:id', specialiteController.deleteSpecialite);

module.exports = router;